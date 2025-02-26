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

describe('statistical charts, part 1', () => {
  describe('error bars', () => {
    it('Basic Symmetric Error Bars', () => {
      const options = {
        port: 3000,
        host: 'localhost',
        method: 'POST'
      };

      const req = http.request(options);
      // Data taken from https://plotly.com/javascript/error-bars/#basic-symmetric-error-bars example.
      const payload = `[
                         {
                           "x": [ 0, 1, 2 ],
                           "y": [ 6, 10, 2 ],
                           "error_y": {
                             "type": "data",
                             "array": [ 1, 2, 3 ],
                             "visible": true
                           },
                           "type": "scatter"
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
          // <svg class="main-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="700" height="400" style="" viewBox="0 0 700 400"><rect x="0" y="0" width="700" height="400" style="fill: rgb(255, 255, 255); fill-opacity: 1;"/><defs id="defs-3ddebe"><g class="clips"><clipPath id="clip3ddebexyplot" class="plotclip"><rect width="540" height="220"/></clipPath><clipPath class="axesclip" id="clip3ddebex"><rect x="80" y="0" width="540" height="400"/></clipPath><clipPath class="axesclip" id="clip3ddebey"><rect x="0" y="100" width="700" height="220"/></clipPath><clipPath class="axesclip" id="clip3ddebexy"><rect x="80" y="100" width="540" height="220"/></clipPath></g><g class="gradients"/><g class="patterns"/></defs><g class="bglayer"/><g class="layer-below"><g class="imagelayer"/><g class="shapelayer"/></g><g class="cartesianlayer"><g class="subplot xy"><g class="layer-subplot"><g class="shapelayer"/><g class="imagelayer"/></g><g class="minor-gridlayer"><g class="x"/><g class="y"/></g><g class="gridlayer"><g class="x"><path class="xgrid crisp" transform="translate(230.37,0)" d="M0,100v220" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="xgrid crisp" transform="translate(350,0)" d="M0,100v220" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="xgrid crisp" transform="translate(469.62,0)" d="M0,100v220" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="xgrid crisp" transform="translate(589.25,0)" d="M0,100v220" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/></g><g class="y"><path class="ygrid crisp" transform="translate(0,217.62)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="ygrid crisp" transform="translate(0,141.46)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/></g></g><g class="zerolinelayer"><path class="xzl zl crisp" transform="translate(110.75,0)" d="M0,100v220" style="stroke: rgb(68, 68, 68); stroke-opacity: 1; stroke-width: 1px;"/><path class="yzl zl crisp" transform="translate(0,293.77)" d="M80,0h540" style="stroke: rgb(68, 68, 68); stroke-opacity: 1; stroke-width: 1px;"/></g><g class="layer-between"><g class="shapelayer"/><g class="imagelayer"/></g><path class="xlines-below"/><path class="ylines-below"/><g class="overlines-below"/><g class="xaxislayer-below"/><g class="yaxislayer-below"/><g class="overaxes-below"/><g class="overplot"><g class="xy" transform="translate(80,100)" clip-path="url(#clip3ddebexyplot)"><g class="scatterlayer mlayer"><g class="trace scatter trace290a75" style="stroke-miterlimit: 2; opacity: 1;"><g class="fills"/><g class="errorbars"><g class="errorbar"><path style="vector-effect: none; stroke-width: 2px; stroke: rgb(31, 119, 180); stroke-opacity: 1;" class="yerror" d="M26.75,87.15h8m-4,0V117.62m-4,0h8"/></g><g class="errorbar"><path style="vector-effect: none; stroke-width: 2px; stroke: rgb(31, 119, 180); stroke-opacity: 1;" class="yerror" d="M266,11h8m-4,0V71.92m-4,0h8"/></g><g class="errorbar"><path style="vector-effect: none; stroke-width: 2px; stroke: rgb(31, 119, 180); stroke-opacity: 1;" class="yerror" d="M505.25,117.62h8m-4,0V209m-4,0h8"/></g></g><g class="lines"><path class="js-line" style="vector-effect: none; fill: none; stroke: rgb(31, 119, 180); stroke-opacity: 1; stroke-width: 2px; opacity: 1;" d="M30.75,102.38L270,41.46L509.25,163.31"/></g><g class="points"><path class="point" transform="translate(30.75,102.38)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/><path class="point" transform="translate(270,41.46)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/><path class="point" transform="translate(509.25,163.31)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/></g><g class="text"/></g></g></g></g><path class="xlines-above crisp" style="fill: none;" d="M0,0"/><path class="ylines-above crisp" style="fill: none;" d="M0,0"/><g class="overlines-above"/><g class="xaxislayer-above"><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(110.75,0)">0</text></g><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(230.37,0)">0.5</text></g><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(350,0)">1</text></g><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(469.62,0)">1.5</text></g><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(589.25,0)">2</text></g></g><g class="yaxislayer-above"><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,293.77)">0</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,217.62)">5</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,141.46)">10</text></g></g><g class="overaxes-above"/></g></g><g class="polarlayer"/><g class="smithlayer"/><g class="ternarylayer"/><g class="geolayer"/><g class="funnelarealayer"/><g class="pielayer"/><g class="iciclelayer"/><g class="treemaplayer"/><g class="sunburstlayer"/><g class="glimages"/><defs id="topdefs-3ddebe"><g class="clips"/></defs><g class="layer-above"><g class="imagelayer"/><g class="shapelayer"/></g><g class="infolayer"><g class="g-gtitle"/><g class="g-xtitle"/><g class="g-ytitle"/></g></svg>

          // Current server response is the same, except for random ids.

          // Check partial matches, avoiding the random id bits.
          assert.ok(body.indexOf('<svg class="main-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="700" height="400" style="" viewBox="0 0 700 400"><rect x="0" y="0" width="700" height="400" style="fill: rgb(255, 255, 255); fill-opacity: 1;"/><defs id="defs-') >= 0);
          assert.ok(body.indexOf('<g class="clips"><clipPath id="clip') > 0);
          assert.ok(body.indexOf('xyplot" class="plotclip"><rect width="540" height="220"/></clipPath><clipPath class="axesclip" id="clip') > 0);
          assert.ok(body.indexOf('x"><rect x="80" y="0" width="540" height="400"/></clipPath><clipPath class="axesclip" id="clip') > 0);
          assert.ok(body.indexOf('y"><rect x="0" y="100" width="700" height="220"/></clipPath><clipPath class="axesclip" id="clip') > 0);
          assert.ok(body.indexOf('xy"><rect x="80" y="100" width="540" height="220"/></clipPath></g><g class="gradients"/><g class="patterns"/></defs><g class="bglayer"/><g class="layer-below"><g class="imagelayer"/><g class="shapelayer"/></g><g class="cartesianlayer"><g class="subplot xy"><g class="layer-subplot"><g class="shapelayer"/><g class="imagelayer"/></g><g class="minor-gridlayer"><g class="x"/><g class="y"/></g><g class="gridlayer"><g class="x"><path class="xgrid crisp" transform="translate(230.37,0)" d="M0,100v220" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="xgrid crisp" transform="translate(350,0)" d="M0,100v220" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="xgrid crisp" transform="translate(469.62,0)" d="M0,100v220" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="xgrid crisp" transform="translate(589.25,0)" d="M0,100v220" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/></g><g class="y"><path class="ygrid crisp" transform="translate(0,217.62)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="ygrid crisp" transform="translate(0,141.46)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/></g></g><g class="zerolinelayer"><path class="xzl zl crisp" transform="translate(110.75,0)" d="M0,100v220" style="stroke: rgb(68, 68, 68); stroke-opacity: 1; stroke-width: 1px;"/><path class="yzl zl crisp" transform="translate(0,293.77)" d="M80,0h540" style="stroke: rgb(68, 68, 68); stroke-opacity: 1; stroke-width: 1px;"/></g><g class="layer-between"><g class="shapelayer"/><g class="imagelayer"/></g><path class="xlines-below"/><path class="ylines-below"/><g class="overlines-below"/><g class="xaxislayer-below"/><g class="yaxislayer-below"/><g class="overaxes-below"/><g class="overplot"><g class="xy" transform="translate(80,100)" clip-path="url(#clip') > 0);
          assert.ok(body.indexOf('xyplot)"><g class="scatterlayer mlayer"><g class="trace scatter trace') > 0);
          assert.ok(body.indexOf('" style="stroke-miterlimit: 2; opacity: 1;"><g class="fills"/><g class="errorbars"><g class="errorbar"><path style="vector-effect: none; stroke-width: 2px; stroke: rgb(31, 119, 180); stroke-opacity: 1;" class="yerror" d="M26.75,87.15h8m-4,0V117.62m-4,0h8"/></g><g class="errorbar"><path style="vector-effect: none; stroke-width: 2px; stroke: rgb(31, 119, 180); stroke-opacity: 1;" class="yerror" d="M266,11h8m-4,0V71.92m-4,0h8"/></g><g class="errorbar"><path style="vector-effect: none; stroke-width: 2px; stroke: rgb(31, 119, 180); stroke-opacity: 1;" class="yerror" d="M505.25,117.62h8m-4,0V209m-4,0h8"/></g></g><g class="lines"><path class="js-line" style="vector-effect: none; fill: none; stroke: rgb(31, 119, 180); stroke-opacity: 1; stroke-width: 2px; opacity: 1;" d="M30.75,102.38L270,41.46L509.25,163.31"/></g><g class="points"><path class="point" transform="translate(30.75,102.38)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/><path class="point" transform="translate(270,41.46)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/><path class="point" transform="translate(509.25,163.31)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/></g><g class="text"/></g></g></g></g><path class="xlines-above crisp" style="fill: none;" d="M0,0"/><path class="ylines-above crisp" style="fill: none;" d="M0,0"/><g class="overlines-above"/><g class="xaxislayer-above"><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(110.75,0)">0</text></g><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(230.37,0)">0.5</text></g><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(350,0)">1</text></g><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(469.62,0)">1.5</text></g><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(589.25,0)">2</text></g></g><g class="yaxislayer-above"><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,293.77)">0</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,217.62)">5</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,141.46)">10</text></g></g><g class="overaxes-above"/></g></g><g class="polarlayer"/><g class="smithlayer"/><g class="ternarylayer"/><g class="geolayer"/><g class="funnelarealayer"/><g class="pielayer"/><g class="iciclelayer"/><g class="treemaplayer"/><g class="sunburstlayer"/><g class="glimages"/><defs id="topdefs-') > 0);
          assert.ok(body.indexOf('"><g class="clips"/></defs><g class="layer-above"><g class="imagelayer"/><g class="shapelayer"/></g><g class="infolayer"><g class="g-gtitle"/><g class="g-xtitle"/><g class="g-ytitle"/></g></svg>') > 0);
        });
      });
    });

    // TODO: Bar Chart with Error Bars - https://plotly.com/javascript/error-bars/#bar-chart-with-error-bars

    it('Horizontal Error Bars', () => {
      const options = {
        port: 3000,
        host: 'localhost',
        method: 'POST'
      };

      const req = http.request(options);
      // Data taken from https://plotly.com/javascript/error-bars/#horizontal-error-bars example.
      const payload = `[
                         {
                           "x": [ 1, 2, 3, 4 ],
                           "y": [ 2, 1, 3, 4 ],
                           "error_x": {
                             "type": "percent",
                             "value": 10
                           },
                           "type": "scatter"
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

          // Browser-based output would be something like
          // <svg class="main-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="700" height="400" style="" viewBox="0 0 700 400"><rect x="0" y="0" width="700" height="400" style="fill: rgb(255, 255, 255); fill-opacity: 1;"/><defs id="defs-ad7013"><g class="clips"><clipPath id="clipad7013xyplot" class="plotclip"><rect width="540" height="220"/></clipPath><clipPath class="axesclip" id="clipad7013x"><rect x="80" y="0" width="540" height="400"/></clipPath><clipPath class="axesclip" id="clipad7013y"><rect x="0" y="100" width="700" height="220"/></clipPath><clipPath class="axesclip" id="clipad7013xy"><rect x="80" y="100" width="540" height="220"/></clipPath></g><g class="gradients"/><g class="patterns"/></defs><g class="bglayer"/><g class="layer-below"><g class="imagelayer"/><g class="shapelayer"/></g><g class="cartesianlayer"><g class="subplot xy"><g class="layer-subplot"><g class="shapelayer"/><g class="imagelayer"/></g><g class="minor-gridlayer"><g class="x"/><g class="y"/></g><g class="gridlayer"><g class="x"><path class="xgrid crisp" transform="translate(120.89,0)" d="M0,100v220" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="xgrid crisp" transform="translate(259.74,0)" d="M0,100v220" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="xgrid crisp" transform="translate(398.6,0)" d="M0,100v220" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="xgrid crisp" transform="translate(537.46,0)" d="M0,100v220" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/></g><g class="y"><path class="ygrid crisp" transform="translate(0,305.25)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="ygrid crisp" transform="translate(0,241.75)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="ygrid crisp" transform="translate(0,178.25)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="ygrid crisp" transform="translate(0,114.75)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/></g></g><g class="zerolinelayer"/><g class="layer-between"><g class="shapelayer"/><g class="imagelayer"/></g><path class="xlines-below"/><path class="ylines-below"/><g class="overlines-below"/><g class="xaxislayer-below"/><g class="yaxislayer-below"/><g class="overaxes-below"/><g class="overplot"><g class="xy" transform="translate(80,100)" clip-path="url(#clipad7013xyplot)"><g class="scatterlayer mlayer"><g class="trace scatter tracec1c2c5" style="stroke-miterlimit: 2; opacity: 1;"><g class="fills"/><g class="errorbars"><g class="errorbar"><path style="vector-effect: none; stroke-width: 2px; stroke: rgb(31, 119, 180); stroke-opacity: 1;" class="xerror" d="M54.77,137.75v8m0,-4H27m0,-4v8"/></g><g class="errorbar"><path style="vector-effect: none; stroke-width: 2px; stroke: rgb(31, 119, 180); stroke-opacity: 1;" class="xerror" d="M207.51,201.25v8m0,-4H151.97m0,-4v8"/></g><g class="errorbar"><path style="vector-effect: none; stroke-width: 2px; stroke: rgb(31, 119, 180); stroke-opacity: 1;" class="xerror" d="M360.26,74.25v8m0,-4H276.94m0,-4v8"/></g><g class="errorbar"><path style="vector-effect: none; stroke-width: 2px; stroke: rgb(31, 119, 180); stroke-opacity: 1;" class="xerror" d="M513,10.75v8m0,-4H401.91m0,-4v8"/></g></g><g class="lines"><path class="js-line" style="vector-effect: none; fill: none; stroke: rgb(31, 119, 180); stroke-opacity: 1; stroke-width: 2px; opacity: 1;" d="M40.89,141.75L179.74,205.25L318.6,78.25L457.46,14.75"/></g><g class="points"><path class="point" transform="translate(40.89,141.75)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/><path class="point" transform="translate(179.74,205.25)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/><path class="point" transform="translate(318.6,78.25)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/><path class="point" transform="translate(457.46,14.75)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/></g><g class="text"/></g></g></g></g><path class="xlines-above crisp" style="fill: none;" d="M0,0"/><path class="ylines-above crisp" style="fill: none;" d="M0,0"/><g class="overlines-above"/><g class="xaxislayer-above"><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(120.89,0)">1</text></g><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(259.74,0)">2</text></g><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(398.6,0)">3</text></g><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(537.46,0)">4</text></g></g><g class="yaxislayer-above"><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,305.25)">1</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,241.75)">2</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,178.25)">3</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,114.75)">4</text></g></g><g class="overaxes-above"/></g></g><g class="polarlayer"/><g class="smithlayer"/><g class="ternarylayer"/><g class="geolayer"/><g class="funnelarealayer"/><g class="pielayer"/><g class="iciclelayer"/><g class="treemaplayer"/><g class="sunburstlayer"/><g class="glimages"/><defs id="topdefs-ad7013"><g class="clips"/></defs><g class="layer-above"><g class="imagelayer"/><g class="shapelayer"/></g><g class="infolayer"><g class="g-gtitle"/><g class="g-xtitle"/><g class="g-ytitle"/></g></svg>

          // Current server response is the same, except for random ids.

          // Check partial matches, avoiding the random id bits.
          assert.ok(body.indexOf('<svg class="main-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="700" height="400" style="" viewBox="0 0 700 400"><rect x="0" y="0" width="700" height="400" style="fill: rgb(255, 255, 255); fill-opacity: 1;"/><defs id="defs-') >= 0);
          assert.ok(body.indexOf('<g class="clips"><clipPath id="clip') > 0);
          assert.ok(body.indexOf('xyplot" class="plotclip"><rect width="540" height="220"/></clipPath><clipPath class="axesclip" id="clip') > 0);
          assert.ok(body.indexOf('x"><rect x="80" y="0" width="540" height="400"/></clipPath><clipPath class="axesclip" id="clip') > 0);
          assert.ok(body.indexOf('y"><rect x="0" y="100" width="700" height="220"/></clipPath><clipPath class="axesclip" id="clip') > 0);
          assert.ok(body.indexOf('xy"><rect x="80" y="100" width="540" height="220"/></clipPath></g><g class="gradients"/><g class="patterns"/></defs><g class="bglayer"/><g class="layer-below"><g class="imagelayer"/><g class="shapelayer"/></g><g class="cartesianlayer"><g class="subplot xy"><g class="layer-subplot"><g class="shapelayer"/><g class="imagelayer"/></g><g class="minor-gridlayer"><g class="x"/><g class="y"/></g><g class="gridlayer"><g class="x"><path class="xgrid crisp" transform="translate(120.89,0)" d="M0,100v220" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="xgrid crisp" transform="translate(259.74,0)" d="M0,100v220" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="xgrid crisp" transform="translate(398.6,0)" d="M0,100v220" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="xgrid crisp" transform="translate(537.46,0)" d="M0,100v220" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/></g><g class="y"><path class="ygrid crisp" transform="translate(0,305.25)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="ygrid crisp" transform="translate(0,241.75)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="ygrid crisp" transform="translate(0,178.25)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="ygrid crisp" transform="translate(0,114.75)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/></g></g><g class="zerolinelayer"/><g class="layer-between"><g class="shapelayer"/><g class="imagelayer"/></g><path class="xlines-below"/><path class="ylines-below"/><g class="overlines-below"/><g class="xaxislayer-below"/><g class="yaxislayer-below"/><g class="overaxes-below"/><g class="overplot"><g class="xy" transform="translate(80,100)" clip-path="url(#clip') > 0);
          assert.ok(body.indexOf('xyplot)"><g class="scatterlayer mlayer"><g class="trace scatter trace') > 0);
          assert.ok(body.indexOf('" style="stroke-miterlimit: 2; opacity: 1;"><g class="fills"/><g class="errorbars"><g class="errorbar"><path style="vector-effect: none; stroke-width: 2px; stroke: rgb(31, 119, 180); stroke-opacity: 1;" class="xerror" d="M54.77,137.75v8m0,-4H27m0,-4v8"/></g><g class="errorbar"><path style="vector-effect: none; stroke-width: 2px; stroke: rgb(31, 119, 180); stroke-opacity: 1;" class="xerror" d="M207.51,201.25v8m0,-4H151.97m0,-4v8"/></g><g class="errorbar"><path style="vector-effect: none; stroke-width: 2px; stroke: rgb(31, 119, 180); stroke-opacity: 1;" class="xerror" d="M360.26,74.25v8m0,-4H276.94m0,-4v8"/></g><g class="errorbar"><path style="vector-effect: none; stroke-width: 2px; stroke: rgb(31, 119, 180); stroke-opacity: 1;" class="xerror" d="M513,10.75v8m0,-4H401.91m0,-4v8"/></g></g><g class="lines"><path class="js-line" style="vector-effect: none; fill: none; stroke: rgb(31, 119, 180); stroke-opacity: 1; stroke-width: 2px; opacity: 1;" d="M40.89,141.75L179.74,205.25L318.6,78.25L457.46,14.75"/></g><g class="points"><path class="point" transform="translate(40.89,141.75)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/><path class="point" transform="translate(179.74,205.25)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/><path class="point" transform="translate(318.6,78.25)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/><path class="point" transform="translate(457.46,14.75)" style="opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M3,0A3,3 0 1,1 0,-3A3,3 0 0,1 3,0Z"/></g><g class="text"/></g></g></g></g><path class="xlines-above crisp" style="fill: none;" d="M0,0"/><path class="ylines-above crisp" style="fill: none;" d="M0,0"/><g class="overlines-above"/><g class="xaxislayer-above"><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(120.89,0)">1</text></g><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(259.74,0)">2</text></g><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(398.6,0)">3</text></g><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(537.46,0)">4</text></g></g><g class="yaxislayer-above"><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,305.25)">1</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,241.75)">2</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,178.25)">3</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,114.75)">4</text></g></g><g class="overaxes-above"/></g></g><g class="polarlayer"/><g class="smithlayer"/><g class="ternarylayer"/><g class="geolayer"/><g class="funnelarealayer"/><g class="pielayer"/><g class="iciclelayer"/><g class="treemaplayer"/><g class="sunburstlayer"/><g class="glimages"/><defs id="topdefs-') > 0);
          assert.ok(body.indexOf('"><g class="clips"/></defs><g class="layer-above"><g class="imagelayer"/><g class="shapelayer"/></g><g class="infolayer"><g class="g-gtitle"/><g class="g-xtitle"/><g class="g-ytitle"/></g></svg>') > 0);
        });
      });
    });

    // TODO: Asymmetric Error Bars - https://plotly.com/javascript/error-bars/#asymmetric-error-bars
    // TODO: Colored and Styled Error Bars - https://plotly.com/javascript/error-bars/#colored-and-styled-error-bars
    // TODO: Error Bars as a Percentage of the y-Value - https://plotly.com/javascript/error-bars/#error-bars-as-a-percentage-of-the-yvalue
    // TODO: Asymmetric Error Bars with a Constant Offset - https://plotly.com/javascript/error-bars/#asymmetric-error-bars-with-a-constant-offset

/*
    it('request with different data', () => {
      const options = {
        port: 3000,
        host: 'localhost',
        method: 'POST'
      };

      const req = http.request(options);
      // Data taken from https://plotly.com/javascript/error-bars/... example.
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
        });
      });
    });
    */
  });
});
