const assert = require('node:assert');
const http = require('node:http');
const { describe, it } = require('node:test');

describe('scientific charts, part 2', () => {
  describe('heatmaps', () => {
    it('Basic Heatmap', () => {
      const options = {
        port: 3000,
        host: 'localhost',
        method: 'POST'
      };

      const req = http.request(options);
      // Data taken from https://plotly.com/javascript/heatmaps/#basic-heatmap example.
      const payload = `{
                         "data": [
                           {
                             "z": [ [ 1, 20, 30 ],
                                    [ 20, 1, 60 ],
                                    [ 30, 60, 1 ]
                                  ],
                             "type": "heatmap"
                           }
                         ],
                         "layout": {}
                       }`;
      req.write(payload);
      req.end();

      req.on('response', (response) => {
        assert.strictEqual(500, response.statusCode);
        let body = '';
        response.on('data', (chunk) => {
          body += chunk;
        });
        response.on('end', () => {
          // Browser-based answer is an SVG with embedded binary PNG image data
          // (due to heatmap colouring).

          // Currently, the server cannot handle that and returns HTTP status code 500.
          // Reasons seem to be the heatmap colouring and the labels.
          assert.ok(body == '{"success":false,"failure":"promise-rejected"}');
        });
      });
    });

    // TODO: Heatmap with Categorical Axis Labels - https://plotly.com/javascript/heatmaps/#heatmap-with-categorical-axis-labels
    // TODO: Annotated Heatmap - https://plotly.com/javascript/heatmaps/#annotated-heatmap
    // TODO: Heatmap with Unequal Block Sizes - https://plotly.com/javascript/heatmaps/#heatmap-with-unequal-block-sizes

/*
    it('request with different data', () => {
      const options = {
        port: 3000,
        host: 'localhost',
        method: 'POST'
      };

      const req = http.request(options);
      // Data taken from https://plotly.com/javascript/... example.
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

          // Browser-based answer is something like
          // <svg ..

          // Current server response is visually almost the same.
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
