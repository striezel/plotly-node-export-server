const assert = require('node:assert');
const http = require('node:http');
const { describe, it } = require('node:test');

describe('basic charts, part 8', () => {
  describe('horizontal bar charts', () => {
    it('Basic Horizontal Bar Chart', () => {
      const options = {
        port: 3000,
        host: 'localhost',
        method: 'POST'
      };

      const req = http.request(options);
      // Data taken from https://plotly.com/javascript/horizontal-bar-charts/#basic-horizontal-bar-chart example.
      const payload = `{
                         "data": [
                           {
                             "type": "bar",
                             "x": [ 20, 14, 23 ],
                             "y": [ "giraffes", "orangutans", "monkeys" ],
                             "orientation": "h"
                           }
                         ],
                         "layout": {
                           "width": 750,
                           "height": 500
                         }
                       }`;
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
          // <svg class="main-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="750" height="500" style="" viewBox="0 0 750 500"><rect x="0" y="0" width="750" height="500" style="fill: rgb(255, 255, 255); fill-opacity: 1;"/><defs id="defs-c50dc6"><g class="clips"><clipPath id="clipc50dc6xyplot" class="plotclip"><rect width="590" height="320"/></clipPath><clipPath class="axesclip" id="clipc50dc6x"><rect x="80" y="0" width="590" height="500"/></clipPath><clipPath class="axesclip" id="clipc50dc6y"><rect x="0" y="100" width="750" height="320"/></clipPath><clipPath class="axesclip" id="clipc50dc6xy"><rect x="80" y="100" width="590" height="320"/></clipPath></g><g class="gradients"/><g class="patterns"/></defs><g class="bglayer"/><g class="layer-below"><g class="imagelayer"/><g class="shapelayer"/></g><g class="cartesianlayer"><g class="subplot xy"><g class="layer-subplot"><g class="shapelayer"/><g class="imagelayer"/></g><g class="minor-gridlayer"><g class="x"/><g class="y"/></g><g class="gridlayer"><g class="x"><path class="xgrid crisp" transform="translate(201.85,0)" d="M0,100v320" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="xgrid crisp" transform="translate(323.7,0)" d="M0,100v320" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="xgrid crisp" transform="translate(445.54,0)" d="M0,100v320" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="xgrid crisp" transform="translate(567.39,0)" d="M0,100v320" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/></g><g class="y"/></g><g class="zerolinelayer"><path class="xzl zl crisp" transform="translate(80,0)" d="M0,100v320" style="stroke: rgb(68, 68, 68); stroke-opacity: 1; stroke-width: 1px;"/></g><g class="layer-between"><g class="shapelayer"/><g class="imagelayer"/></g><path class="xlines-below"/><path class="ylines-below"/><g class="overlines-below"/><g class="xaxislayer-below"/><g class="yaxislayer-below"/><g class="overaxes-below"/><g class="overplot"><g class="xy" transform="translate(80,100)" clip-path="url(#clipc50dc6xyplot)"><g class="barlayer mlayer"><g class="trace bars" style="opacity: 1;"><g class="points"><g class="point"><path style="vector-effect: none; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M0,309.33V224H487.39V309.33Z"/></g><g class="point"><path style="vector-effect: none; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M0,202.67V117.33H341.17V202.67Z"/></g><g class="point"><path style="vector-effect: none; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M0,96V10.67H560.5V96Z"/></g></g></g></g></g></g><path class="xlines-above crisp" style="fill: none;" d="M0,0"/><path class="ylines-above crisp" style="fill: none;" d="M0,0"/><g class="overlines-above"/><g class="xaxislayer-above"><g class="xtick"><text text-anchor="middle" x="0" y="433" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(80,0)">0</text></g><g class="xtick"><text text-anchor="middle" x="0" y="433" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(201.85,0)">5</text></g><g class="xtick"><text text-anchor="middle" x="0" y="433" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(323.7,0)">10</text></g><g class="xtick"><text text-anchor="middle" x="0" y="433" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(445.54,0)">15</text></g><g class="xtick"><text text-anchor="middle" x="0" y="433" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(567.39,0)">20</text></g></g><g class="yaxislayer-above"><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,366.67)">giraffes</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,260)">orangutans</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,153.32999999999998)">monkeys</text></g></g><g class="overaxes-above"/></g></g><g class="polarlayer"/><g class="smithlayer"/><g class="ternarylayer"/><g class="geolayer"/><g class="funnelarealayer"/><g class="pielayer"/><g class="iciclelayer"/><g class="treemaplayer"/><g class="sunburstlayer"/><g class="glimages"/><defs id="topdefs-c50dc6"><g class="clips"/></defs><g class="layer-above"><g class="imagelayer"/><g class="shapelayer"/></g><g class="infolayer"><g class="g-gtitle"/><g class="g-xtitle"/><g class="g-ytitle"/></g></svg>

          // Current server response is the same, except for random ids.

          // Check partial matches, avoiding the random id bits.
          assert.ok(body.indexOf('<svg class="main-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="750" height="500" style="" viewBox="0 0 750 500"><rect x="0" y="0" width="750" height="500" style="fill: rgb(255, 255, 255); fill-opacity: 1;"/><defs id="defs') >= 0);
          assert.ok(body.indexOf('<g class="clips"><clipPath id="clip') > 0);
          assert.ok(body.indexOf('xyplot" class="plotclip"><rect width="590" height="320"/></clipPath><clipPath class="axesclip" id="clip') > 0);
          assert.ok(body.indexOf('x"><rect x="80" y="0" width="590" height="500"/></clipPath><clipPath class="axesclip" id="clip') > 0);
          assert.ok(body.indexOf('y"><rect x="0" y="100" width="750" height="320"/></clipPath><clipPath class="axesclip" id="clip') > 0);
          assert.ok(body.indexOf('xy"><rect x="80" y="100" width="590" height="320"/></clipPath></g><g class="gradients"/><g class="patterns"/></defs><g class="bglayer"/><g class="layer-below"><g class="imagelayer"/><g class="shapelayer"/></g><g class="cartesianlayer"><g class="subplot xy"><g class="layer-subplot"><g class="shapelayer"/><g class="imagelayer"/></g><g class="minor-gridlayer"><g class="x"/><g class="y"/></g><g class="gridlayer"><g class="x"><path class="xgrid crisp" transform="translate(201.85,0)" d="M0,100v320" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="xgrid crisp" transform="translate(323.7,0)" d="M0,100v320" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="xgrid crisp" transform="translate(445.54,0)" d="M0,100v320" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="xgrid crisp" transform="translate(567.39,0)" d="M0,100v320" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/></g><g class="y"/></g><g class="zerolinelayer"><path class="xzl zl crisp" transform="translate(80,0)" d="M0,100v320" style="stroke: rgb(68, 68, 68); stroke-opacity: 1; stroke-width: 1px;"/></g><g class="layer-between"><g class="shapelayer"/><g class="imagelayer"/></g><path class="xlines-below"/><path class="ylines-below"/><g class="overlines-below"/><g class="xaxislayer-below"/><g class="yaxislayer-below"/><g class="overaxes-below"/><g class="overplot"><g class="xy" transform="translate(80,100)" clip-path="url(#clip') > 0);
          assert.ok(body.indexOf('xyplot)"><g class="barlayer mlayer"><g class="trace bars" style="opacity: 1;"><g class="points"><g class="point"><path style="vector-effect: none; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M0,309.33V224H487.39V309.33Z"/></g><g class="point"><path style="vector-effect: none; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M0,202.67V117.33H341.17V202.67Z"/></g><g class="point"><path style="vector-effect: none; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M0,96V10.67H560.5V96Z"/></g></g></g></g></g></g><path class="xlines-above crisp" style="fill: none;" d="M0,0"/><path class="ylines-above crisp" style="fill: none;" d="M0,0"/><g class="overlines-above"/><g class="xaxislayer-above"><g class="xtick"><text text-anchor="middle" x="0" y="433" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(80,0)">0</text></g><g class="xtick"><text text-anchor="middle" x="0" y="433" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(201.85,0)">5</text></g><g class="xtick"><text text-anchor="middle" x="0" y="433" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(323.7,0)">10</text></g><g class="xtick"><text text-anchor="middle" x="0" y="433" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(445.54,0)">15</text></g><g class="xtick"><text text-anchor="middle" x="0" y="433" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(567.39,0)">20</text></g></g><g class="yaxislayer-above"><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,366.67)">giraffes</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,260)">orangutans</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,153.32999999999998)">monkeys</text></g></g><g class="overaxes-above"/></g></g><g class="polarlayer"/><g class="smithlayer"/><g class="ternarylayer"/><g class="geolayer"/><g class="funnelarealayer"/><g class="pielayer"/><g class="iciclelayer"/><g class="treemaplayer"/><g class="sunburstlayer"/><g class="glimages"/><defs id="topdefs-') > 0);
          assert.ok(body.indexOf('"><g class="clips"/></defs><g class="layer-above"><g class="imagelayer"/><g class="shapelayer"/></g><g class="infolayer"><g class="g-gtitle"/><g class="g-xtitle"/><g class="g-ytitle"/></g></svg>') > 0);
        });
      });
    });

    // TODO: Colored Bar Chart - https://plotly.com/javascript/horizontal-bar-charts/#colored-bar-chart
    // TODO: Bar Chart with Line Plot - https://plotly.com/javascript/horizontal-bar-charts/#bar-chart-with-line-plot

/*
    it('request with different data', () => {
      const options = {
        port: 3000,
        host: 'localhost',
        method: 'POST'
      };

      const req = http.request(options);
      const payload = '{ "x": ["2013-10-04 22:23:00", "2013-11-04 22:23:00", "2013-12-04 22:23:00"], "y": [1, 3, 6], "type": "scatter" }';
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
          assert.ok(body.indexOf('width="700"') > 0);
          assert.ok(body.indexOf('height="400"') > 0);
        });
      });
    });
    */
  });
});
