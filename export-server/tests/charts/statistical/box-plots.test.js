/*
    Plotly.js offline image export server with Node.js test suite
    Copyright (C) 2025  Dirk Stolle

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

const assert = require('node:assert');
const http = require('node:http');
const { describe, it } = require('node:test');

describe('statistical charts, part 2', () => {
  describe('box plots', () => {

    // TODO: Basic Box Plot - https://plotly.com/javascript/box-plots/#basic-box-plot

    it('Box Plot That Displays the Underlying Data', () => {
      const options = {
        port: 3000,
        host: 'localhost',
        method: 'POST'
      };

      const req = http.request(options);
      // Data taken from https://plotly.com/javascript/box-plots/#box-plot-that-displays-the-underlying-data example.
      const payload = `[
                         {
                           "y": [0, 1, 1, 2, 3, 5, 8, 13, 21],
                           "boxpoints": "all",
                           "jitter": 0.3,
                           "pointpos": -1.8,
                           "type": "box"
                         }
                       ]`;
      req.write(payload);
      req.end();

      req.on('response', (response) => {
        assert.strictEqual(200, response.statusCode);
        let body = '';
        response.on('data', (chunk) => {
          body += chunk;
        });
        response.on('end', () => {
          assert.ok(body.startsWith('<svg'));
          assert.ok(body.endsWith('</svg>'));

          // Browser-based answer would be something like
          // <svg class="main-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="700" height="400" style="" viewBox="0 0 700 400"><rect x="0" y="0" width="700" height="400" style="fill: rgb(255, 255, 255); fill-opacity: 1;"/><defs id="defs-cfa6d7"><g class="clips"><clipPath id="clipcfa6d7xyplot" class="plotclip"><rect width="540" height="220"/></clipPath><clipPath class="axesclip" id="clipcfa6d7x"><rect x="80" y="0" width="540" height="400"/></clipPath><clipPath class="axesclip" id="clipcfa6d7y"><rect x="0" y="100" width="700" height="220"/></clipPath><clipPath class="axesclip" id="clipcfa6d7xy"><rect x="80" y="100" width="540" height="220"/></clipPath></g><g class="gradients"/><g class="patterns"/></defs><g class="bglayer"/><g class="layer-below"><g class="imagelayer"/><g class="shapelayer"/></g><g class="cartesianlayer"><g class="subplot xy"><g class="layer-subplot"><g class="shapelayer"/><g class="imagelayer"/></g><g class="minor-gridlayer"><g class="x"/><g class="y"/></g><g class="gridlayer"><g class="x"/><g class="y"><path class="ygrid crisp" transform="translate(0,261.86)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="ygrid crisp" transform="translate(0,214.70999999999998)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="ygrid crisp" transform="translate(0,167.57)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="ygrid crisp" transform="translate(0,120.43)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/></g></g><g class="zerolinelayer"><path class="yzl zl crisp" transform="translate(0,309)" d="M80,0h540" style="stroke: rgb(68, 68, 68); stroke-opacity: 1; stroke-width: 1px;"/></g><g class="layer-between"><g class="shapelayer"/><g class="imagelayer"/></g><path class="xlines-below"/><path class="ylines-below"/><g class="overlines-below"/><g class="xaxislayer-below"/><g class="yaxislayer-below"/><g class="overaxes-below"/><g class="overplot"><g class="xy" transform="translate(80,100)" clip-path="url(#clipcfa6d7xyplot)"><g class="boxlayer mlayer"><g class="trace boxes" style="opacity: 1;"><path style="vector-effect: none; stroke-width: 2px; stroke: rgb(31, 119, 180); stroke-opacity: 1; fill: rgb(31, 119, 180); fill-opacity: 0.5;" class="box" d="M158.31,180.71H391.6M158.31,199.57H391.6V121.79H158.31ZM274.95,199.57V209M274.95,121.79V11M216.63,209H333.27M216.63,11H333.27"/><g class="points"><path class="point" transform="translate(83.15,209)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/><path class="point" transform="translate(45.68,199.57)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/><path class="point" transform="translate(84.9,199.57)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/><path class="point" transform="translate(46.73,190.14)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/><path class="point" transform="translate(59.67,180.71)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/><path class="point" transform="translate(76.33,161.86)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/><path class="point" transform="translate(64.22,133.57)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/><path class="point" transform="translate(70.55,86.43)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/><path class="point" transform="translate(59.27,11)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/></g></g></g></g></g><path class="xlines-above crisp" style="fill: none;" d="M0,0"/><path class="ylines-above crisp" style="fill: none;" d="M0,0"/><g class="overlines-above"/><g class="xaxislayer-above"><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(354.95,0)">trace 0</text></g></g><g class="yaxislayer-above"><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,309)">0</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,261.86)">5</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,214.70999999999998)">10</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,167.57)">15</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,120.43)">20</text></g></g><g class="overaxes-above"/></g></g><g class="polarlayer"/><g class="smithlayer"/><g class="ternarylayer"/><g class="geolayer"/><g class="funnelarealayer"/><g class="pielayer"/><g class="iciclelayer"/><g class="treemaplayer"/><g class="sunburstlayer"/><g class="glimages"/><defs id="topdefs-cfa6d7"><g class="clips"/></defs><g class="layer-above"><g class="imagelayer"/><g class="shapelayer"/></g><g class="infolayer"><g class="g-gtitle"/><g class="g-xtitle"/><g class="g-ytitle"/></g></svg>

          // Current server response is the same, except for random ids.

          // Check partial matches, avoiding the random id bits.
          assert.ok(body.indexOf('<svg class="main-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="700" height="400" style="" viewBox="0 0 700 400"><rect x="0" y="0" width="700" height="400" style="fill: rgb(255, 255, 255); fill-opacity: 1;"/><defs id="defs-') >= 0);
          assert.ok(body.indexOf('<g class="clips"><clipPath id="clip') > 0);
          assert.ok(body.indexOf('xyplot" class="plotclip"><rect width="540" height="220"/></clipPath><clipPath class="axesclip" id="clip') > 0);
          assert.ok(body.indexOf('x"><rect x="80" y="0" width="540" height="400"/></clipPath><clipPath class="axesclip" id="clip') > 0);
          assert.ok(body.indexOf('y"><rect x="0" y="100" width="700" height="220"/></clipPath><clipPath class="axesclip" id="clip') > 0);
          assert.ok(body.indexOf('xy"><rect x="80" y="100" width="540" height="220"/></clipPath></g><g class="gradients"/><g class="patterns"/></defs><g class="bglayer"/><g class="layer-below"><g class="imagelayer"/><g class="shapelayer"/></g><g class="cartesianlayer"><g class="subplot xy"><g class="layer-subplot"><g class="shapelayer"/><g class="imagelayer"/></g><g class="minor-gridlayer"><g class="x"/><g class="y"/></g><g class="gridlayer"><g class="x"/><g class="y"><path class="ygrid crisp" transform="translate(0,261.86)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="ygrid crisp" transform="translate(0,214.70999999999998)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="ygrid crisp" transform="translate(0,167.57)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="ygrid crisp" transform="translate(0,120.43)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/></g></g><g class="zerolinelayer"><path class="yzl zl crisp" transform="translate(0,309)" d="M80,0h540" style="stroke: rgb(68, 68, 68); stroke-opacity: 1; stroke-width: 1px;"/></g><g class="layer-between"><g class="shapelayer"/><g class="imagelayer"/></g><path class="xlines-below"/><path class="ylines-below"/><g class="overlines-below"/><g class="xaxislayer-below"/><g class="yaxislayer-below"/><g class="overaxes-below"/><g class="overplot"><g class="xy" transform="translate(80,100)" clip-path="url(#clip') > 0);
          assert.ok(body.indexOf('xyplot)"><g class="boxlayer mlayer"><g class="trace boxes" style="opacity: 1;"><path style="vector-effect: none; stroke-width: 2px; stroke: rgb(31, 119, 180); stroke-opacity: 1; fill: rgb(31, 119, 180); fill-opacity: 0.5;" class="box" d="M158.31,180.71H391.6M158.31,199.57H391.6V121.79H158.31ZM274.95,199.57V209M274.95,121.79V11M216.63,209H333.27M216.63,11H333.27"/><g class="points"><path class="point" transform="translate(83.15,209)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/><path class="point" transform="translate(45.68,199.57)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/><path class="point" transform="translate(84.9,199.57)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/><path class="point" transform="translate(46.73,190.14)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/><path class="point" transform="translate(59.67,180.71)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/><path class="point" transform="translate(76.33,161.86)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/><path class="point" transform="translate(64.22,133.57)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/><path class="point" transform="translate(70.55,86.43)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/><path class="point" transform="translate(59.27,11)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/></g></g></g></g></g><path class="xlines-above crisp" style="fill: none;" d="M0,0"/><path class="ylines-above crisp" style="fill: none;" d="M0,0"/><g class="overlines-above"/><g class="xaxislayer-above"><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(354.95,0)">trace 0</text></g></g><g class="yaxislayer-above"><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,309)">0</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,261.86)">5</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,214.70999999999998)">10</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,167.57)">15</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,120.43)">20</text></g></g><g class="overaxes-above"/></g></g><g class="polarlayer"/><g class="smithlayer"/><g class="ternarylayer"/><g class="geolayer"/><g class="funnelarealayer"/><g class="pielayer"/><g class="iciclelayer"/><g class="treemaplayer"/><g class="sunburstlayer"/><g class="glimages"/><defs id="topdefs-') > 0);
          assert.ok(body.indexOf('"><g class="clips"/></defs><g class="layer-above"><g class="imagelayer"/><g class="shapelayer"/></g><g class="infolayer"><g class="g-gtitle"/><g class="g-xtitle"/><g class="g-ytitle"/></g></svg>') > 0);
        });
      });
    });

    // TODO: Horizontal Box Plot - https://plotly.com/javascript/box-plots/#horizontal-box-plot
    // TODO: Grouped Box Plot - https://plotly.com/javascript/box-plots/#grouped-box-plot
    // TODO: Box Plot Styling Outliers - https://plotly.com/javascript/box-plots/#box-plot-styling-outliers
    // TODO: Box Plot Styling Mean and Standard Deviation - https://plotly.com/javascript/box-plots/#box-plot-styling-mean-and-standard-deviation
    // TODO: Grouped Horizontal Box Plot - https://plotly.com/javascript/box-plots/#grouped-horizontal-box-plot
    // TODO: Colored Box Plot - https://plotly.com/javascript/box-plots/#colored-box-plot
    // TODO: Fully Styled Box Plot - https://plotly.com/javascript/box-plots/#fully-styled-box-plot
    // TODO: Rainbow Box Plot - https://plotly.com/javascript/box-plots/#rainbow-box-plot

/*
    it('request with different data', () => {
      const options = {
        port: 3000,
        host: 'localhost',
        method: 'POST'
      };

      const req = http.request(options);
      // Data taken from https://plotly.com/javascript/box-plots/#... example.
      const payload = `{ "x": ["2013-10-04 22:23:00", "2013-11-04 22:23:00", "2013-12-04 22:23:00"], "y": [1, 3, 6], "type": "scatter" }`;
      req.write(payload);
      req.end();

      req.on('response', (response) => {
        assert.strictEqual(200, response.statusCode);
        let body = '';
        response.on('data', (chunk) => {
          body += chunk;
        });
        response.on('end', () => {
          assert.ok(body.startsWith('<svg'));
          assert.ok(body.endsWith('</svg>'));

          // Browser-based output would be something like
          // <svg ...

          // Current server response is something like
          // <svg ...

          // Check partial matches, avoiding the random id bits.
          assert.ok(body.indexOf('') >= 0);
          assert.ok(body.indexOf('') > 0);
          assert.ok(body.indexOf('') > 0);
          assert.ok(body.indexOf('') > 0);
          assert.ok(body.indexOf('') > 0);
          assert.ok(body.indexOf('') > 0);
        });
      });
    });
    */
  });
});
