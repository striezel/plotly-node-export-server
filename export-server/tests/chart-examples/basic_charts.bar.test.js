const assert = require('node:assert');
const http = require('node:http');
const { describe, it } = require('node:test');

describe('basic charts #3', () => {
  describe('bar charts', () => {
    it('Basic Bar Chart', () => {
      const options = {
        port: 3000,
        host: 'localhost',
        method: 'POST'
      };

      const req = http.request(options);
      // Data taken from https://plotly.com/javascript/bar-charts/#basic-bar-chart example.
      const payload = `[
                         {
                           "x": [ "giraffes", "orangutans", "monkeys" ],
                           "y": [ 20, 14, 23 ],
                           "type": "bar"
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
          // <svg class="main-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="700" height="400" style="" viewBox="0 0 700 400"><rect x="0" y="0" width="700" height="400" style="fill: rgb(255, 255, 255); fill-opacity: 1;"/><defs id="defs-d8139d"><g class="clips"><clipPath id="clipd8139dxyplot" class="plotclip"><rect width="540" height="220"/></clipPath><clipPath class="axesclip" id="clipd8139dx"><rect x="80" y="0" width="540" height="400"/></clipPath><clipPath class="axesclip" id="clipd8139dy"><rect x="0" y="100" width="700" height="220"/></clipPath><clipPath class="axesclip" id="clipd8139dxy"><rect x="80" y="100" width="540" height="220"/></clipPath></g><g class="gradients"/><g class="patterns"/></defs><g class="bglayer"/><g class="layer-below"><g class="imagelayer"/><g class="shapelayer"/></g><g class="cartesianlayer"><g class="subplot xy"><g class="layer-subplot"><g class="shapelayer"/><g class="imagelayer"/></g><g class="minor-gridlayer"><g class="x"/><g class="y"/></g><g class="gridlayer"><g class="x"/><g class="y"><path class="ygrid crisp" transform="translate(0,274.57)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="ygrid crisp" transform="translate(0,229.13)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="ygrid crisp" transform="translate(0,183.7)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="ygrid crisp" transform="translate(0,138.26)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/></g></g><g class="zerolinelayer"><path class="yzl zl crisp" transform="translate(0,320)" d="M80,0h540" style="stroke: rgb(68, 68, 68); stroke-opacity: 1; stroke-width: 1px;"/></g><g class="layer-between"><g class="shapelayer"/><g class="imagelayer"/></g><path class="xlines-below"/><path class="ylines-below"/><g class="overlines-below"/><g class="xaxislayer-below"/><g class="yaxislayer-below"/><g class="overaxes-below"/><g class="overplot"><g class="xy" transform="translate(80,100)" clip-path="url(#clipd8139dxyplot)"><g class="barlayer mlayer"><g class="trace bars" style="opacity: 1;"><g class="points"><g class="point"><path style="vector-effect: none; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M18,220V38.26H162V220Z"/></g><g class="point"><path style="vector-effect: none; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M198,220V92.78H342V220Z"/></g><g class="point"><path style="vector-effect: none; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M378,220V11H522V220Z"/></g></g></g></g></g></g><path class="xlines-above crisp" style="fill: none;" d="M0,0"/><path class="ylines-above crisp" style="fill: none;" d="M0,0"/><g class="overlines-above"/><g class="xaxislayer-above"><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(170,0)">giraffes</text></g><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(350,0)">orangutans</text></g><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(530,0)">monkeys</text></g></g><g class="yaxislayer-above"><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,320)">0</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,274.57)">5</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,229.13)">10</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,183.7)">15</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,138.26)">20</text></g></g><g class="overaxes-above"/></g></g><g class="polarlayer"/><g class="smithlayer"/><g class="ternarylayer"/><g class="geolayer"/><g class="funnelarealayer"/><g class="pielayer"/><g class="iciclelayer"/><g class="treemaplayer"/><g class="sunburstlayer"/><g class="glimages"/><defs id="topdefs-d8139d"><g class="clips"/></defs><g class="layer-above"><g class="imagelayer"/><g class="shapelayer"/></g><g class="infolayer"><g class="g-gtitle"/><g class="g-xtitle"/><g class="g-ytitle"/></g></svg>

          // Current server response is virtually the same and something like
          // <svg class="main-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="700" height="400" style="" viewBox="0 0 700 400"><rect x="0" y="0" width="700" height="400" style="fill: rgb(255, 255, 255); fill-opacity: 1;"/><defs id="defs-403e5b"><g class="clips"><clipPath id="clip403e5bxyplot" class="plotclip"><rect width="540" height="220"/></clipPath><clipPath class="axesclip" id="clip403e5bx"><rect x="80" y="0" width="540" height="400"/></clipPath><clipPath class="axesclip" id="clip403e5by"><rect x="0" y="100" width="700" height="220"/></clipPath><clipPath class="axesclip" id="clip403e5bxy"><rect x="80" y="100" width="540" height="220"/></clipPath></g><g class="gradients"/><g class="patterns"/></defs><g class="bglayer"/><g class="layer-below"><g class="imagelayer"/><g class="shapelayer"/></g><g class="cartesianlayer"><g class="subplot xy"><g class="layer-subplot"><g class="shapelayer"/><g class="imagelayer"/></g><g class="minor-gridlayer"><g class="x"/><g class="y"/></g><g class="gridlayer"><g class="x"/><g class="y"><path class="ygrid crisp" transform="translate(0,274.57)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="ygrid crisp" transform="translate(0,229.13)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="ygrid crisp" transform="translate(0,183.7)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="ygrid crisp" transform="translate(0,138.26)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/></g></g><g class="zerolinelayer"><path class="yzl zl crisp" transform="translate(0,320)" d="M80,0h540" style="stroke: rgb(68, 68, 68); stroke-opacity: 1; stroke-width: 1px;"/></g><g class="layer-between"><g class="shapelayer"/><g class="imagelayer"/></g><path class="xlines-below"/><path class="ylines-below"/><g class="overlines-below"/><g class="xaxislayer-below"/><g class="yaxislayer-below"/><g class="overaxes-below"/><g class="overplot"><g class="xy" transform="translate(80,100)" clip-path="url(#clip403e5bxyplot)"><g class="barlayer mlayer"><g class="trace bars" style="opacity: 1;"><g class="points"><g class="point"><path style="vector-effect: none; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M18,220V38.26H162V220Z"/></g><g class="point"><path style="vector-effect: none; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M198,220V92.78H342V220Z"/></g><g class="point"><path style="vector-effect: none; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M378,220V11H522V220Z"/></g></g></g></g></g></g><path class="xlines-above crisp" style="fill: none;" d="M0,0"/><path class="ylines-above crisp" style="fill: none;" d="M0,0"/><g class="overlines-above"/><g class="xaxislayer-above"><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(170,0)">giraffes</text></g><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(350,0)">orangutans</text></g><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(530,0)">monkeys</text></g></g><g class="yaxislayer-above"><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,320)">0</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,274.57)">5</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,229.13)">10</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,183.7)">15</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,138.26)">20</text></g></g><g class="overaxes-above"/></g></g><g class="polarlayer"/><g class="smithlayer"/><g class="ternarylayer"/><g class="geolayer"/><g class="funnelarealayer"/><g class="pielayer"/><g class="iciclelayer"/><g class="treemaplayer"/><g class="sunburstlayer"/><g class="glimages"/><defs id="topdefs-403e5b"><g class="clips"/></defs><g class="layer-above"><g class="imagelayer"/><g class="shapelayer"/></g><g class="infolayer"><g class="g-gtitle"/><g class="g-xtitle"/><g class="g-ytitle"/></g></svg>

          // Check partial matches, avoiding the random id bits.
          assert.ok(body.indexOf('<svg class="main-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="700" height="400" style="" viewBox="0 0 700 400"><rect x="0" y="0" width="700" height="400" style="fill: rgb(255, 255, 255); fill-opacity: 1;"/><defs id="defs') >= 0);
          assert.ok(body.indexOf('xyplot" class="plotclip"><rect width="540" height="220"/></clipPath><clipPath class="axesclip" id="clip') > 0);
          assert.ok(body.indexOf('<rect x="80" y="0" width="540" height="400"/></clipPath><clipPath class="axesclip" id="clip') > 0);
          assert.ok(body.indexOf('<rect x="0" y="100" width="700" height="220"/></clipPath><clipPath class="axesclip" id="clip') > 0);
          assert.ok(body.indexOf('<rect x="80" y="100" width="540" height="220"/></clipPath></g><g class="gradients"/><g class="patterns"/></defs><g class="bglayer"/><g class="layer-below"><g class="imagelayer"/><g class="shapelayer"/></g><g class="cartesianlayer"><g class="subplot xy"><g class="layer-subplot"><g class="shapelayer"/><g class="imagelayer"/></g><g class="minor-gridlayer"><g class="x"/><g class="y"/></g><g class="gridlayer"><g class="x"/><g class="y"><path class="ygrid crisp" transform="translate(0,274.57)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="ygrid crisp" transform="translate(0,229.13)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="ygrid crisp" transform="translate(0,183.7)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/><path class="ygrid crisp" transform="translate(0,138.26)" d="M80,0h540" style="stroke: rgb(238, 238, 238); stroke-opacity: 1; stroke-width: 1px;"/></g></g><g class="zerolinelayer"><path class="yzl zl crisp" transform="translate(0,320)" d="M80,0h540" style="stroke: rgb(68, 68, 68); stroke-opacity: 1; stroke-width: 1px;"/></g><g class="layer-between"><g class="shapelayer"/><g class="imagelayer"/></g><path class="xlines-below"/><path class="ylines-below"/><g class="overlines-below"/><g class="xaxislayer-below"/><g class="yaxislayer-below"/><g class="overaxes-below"/><g class="overplot"><g class="xy" transform="translate(80,100)" clip-path="url(#clip') > 0);
          assert.ok(body.indexOf('<g class="barlayer mlayer"><g class="trace bars" style="opacity: 1;"><g class="points"><g class="point"><path style="vector-effect: none; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M18,220V38.26H162V220Z"/></g><g class="point"><path style="vector-effect: none; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M198,220V92.78H342V220Z"/></g><g class="point"><path style="vector-effect: none; opacity: 1; stroke-width: 0px; fill: rgb(31, 119, 180); fill-opacity: 1;" d="M378,220V11H522V220Z"/></g></g></g></g></g></g><path class="xlines-above crisp" style="fill: none;" d="M0,0"/><path class="ylines-above crisp" style="fill: none;" d="M0,0"/><g class="overlines-above"/><g class="xaxislayer-above"><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(170,0)">giraffes</text></g><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(350,0)">orangutans</text></g><g class="xtick"><text text-anchor="middle" x="0" y="333" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(530,0)">monkeys</text></g></g><g class="yaxislayer-above"><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,320)">0</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,274.57)">5</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,229.13)">10</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,183.7)">15</text></g><g class="ytick"><text text-anchor="end" x="79" y="4.199999999999999" style="font-family: TOBESTRIPPEDOpen SansTOBESTRIPPED, verdana, arial, sans-serif; font-size: 12px; fill: rgb(68, 68, 68); fill-opacity: 1; white-space: pre; opacity: 1;" transform="translate(0,138.26)">20</text></g></g><g class="overaxes-above"/></g></g><g class="polarlayer"/><g class="smithlayer"/><g class="ternarylayer"/><g class="geolayer"/><g class="funnelarealayer"/><g class="pielayer"/><g class="iciclelayer"/><g class="treemaplayer"/><g class="sunburstlayer"/><g class="glimages"/><defs id="topdefs') > 0);
          assert.ok(body.indexOf('<g class="clips"/></defs><g class="layer-above"><g class="imagelayer"/><g class="shapelayer"/></g><g class="infolayer"><g class="g-gtitle"/><g class="g-xtitle"/><g class="g-ytitle"/></g></svg>') > 0);
        });
      });
    });

    // TODO: Grouped Bar Chart - https://plotly.com/javascript/bar-charts/#grouped-bar-chart
    // TODO: Stacked Bar Chart - https://plotly.com/javascript/bar-charts/#stacked-bar-chart
    // TODO: Bar Chart with Hover Text - https://plotly.com/javascript/bar-charts/#bar-chart-with-hover-text
    // TODO: Bar Chart with Direct Labels - https://plotly.com/javascript/bar-charts/#bar-chart-with-direct-labels
    // TODO: Grouped Bar Chart with Direct Labels - https://plotly.com/javascript/bar-charts/#grouped-bar-chart-with-direct-labels
    // TODO: Bar Chart with Rotated Labels - https://plotly.com/javascript/bar-charts/#bar-chart-with-rotated-labels
    // TODO: Customizing Individual Bar Colors - https://plotly.com/javascript/bar-charts/#customizing-individual-bar-colors
    // TODO: etc., ...

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
