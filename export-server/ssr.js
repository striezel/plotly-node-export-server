/*
    Plotly.js offline image export server with Node.js
    Copyright (C) 2018, 2021, 2022, 2023  Dirk Stolle

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

var fs = require('fs');
const jsdom = require('jsdom');
const { v4: uuidv4 } = require('uuid');

/* Renders JSON data for a Plotly.js plot into a SVG file.

   Parameters:
     jsonData - (string) the JSON data required by Plotly.js
     filename - (string) desired output file name for the SVG file
     width    - (number) width of the SVG file in pixels
     height   - (number) height of the SVG file in pixels

   Returns:
     object that contains two members:
       success - (boolean) indicates success of the rendering process
       filename - (string) filename of the output, only present after successful
                  rendering
       failure - (string) reason for render failure; only present after failed
                 rendering, may be cryptic and is not necessarily human-friendly
*/
exports.render = async function(jsonData, filename, width, height) {
  const unique_id = uuidv4();

  if (!filename) {
    filename = 'graph-' + unique_id + '.svg';
  }
  if (typeof jsonData !== 'string') {
    return {
      success: false,
      failure: 'json-not-a-string'
    };
  }
  if (typeof filename !== 'string') {
    return {
      success: false,
      failure: 'filename-not-a-string'
    };
  }

  const parsed_width = parseInt(width, 10);
  if (isNaN(parsed_width) || parsed_width <= 0) {
    width = undefined;
  } else {
    width = parsed_width;
  }
  const parsed_height = parseInt(height, 10);
  if (isNaN(parsed_height) || parsed_height <= 0) {
    height = undefined;
  } else {
    height = parsed_height;
  }
  // Handle image size and fallback to 700 x 400, if necessary.
  width = width || 700;
  height = height || 400

  const parsed_data = JSON.parse(jsonData);
  const data = parsed_data.data || parsed_data;
  const layout = parsed_data.layout || { width: width, height: height };
  const config = parsed_data.config || {};

  const virtual_console = new jsdom.VirtualConsole();
  virtual_console.sendTo(console);
  const win = new jsdom.JSDOM('', { runScripts: 'dangerously', virtual_console }).window;
  win.HTMLCanvasElement.prototype.getContext = function() { return null; };
  win.URL.createObjectURL = function() { return null; };

  let result = {
    success: false,
    failure: 'promise-not-resolved'
  };

  await
  fs.promises.readFile('./plotly-2.22.0.min.js', 'utf-8')
    .then(win.eval)
    .then(() => win.Plotly.toImage({data: [data], layout: layout, config: config},
                                   { format: 'svg', imageDataOnly: true }))
    .then(function(data) {
      fs.promises.writeFile(filename, data);
    })
    .then(() => {
      result = { success: true, filename: filename };
      return result;
    })
    .catch(function(error) {
      console.log("Error occurred: " + error);
      result =  { success: false, failure: 'promise-rejected' };
      return result;
    });

  return result;
};
