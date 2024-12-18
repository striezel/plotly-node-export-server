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
                                    [ 30, 60, 1 ] ],
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
          assert.ok(body == '{"success":false,"failure":"promise-rejected"}');
        });
      });
    });

    it('Heatmap with Categorical Axis Labels', () => {
      const options = {
        port: 3000,
        host: 'localhost',
        method: 'POST'
      };

      const req = http.request(options);
      // Data taken from https://plotly.com/javascript/heatmaps/#heatmap-with-categorical-axis-labels example.
      const payload = `{
                         "data": [
                           {
                             "z": [ [ 1, null, 30, 50, 1 ],
                                    [ 20, 1, 60, 80, 30 ],
                                    [ 30, 60, 1, -10, 20 ] ],
                             "x": [
                               "Monday",
                               "Tuesday",
                               "Wednesday",
                               "Thursday",
                               "Friday"
                             ],
                             "y": [ "Morning", "Afternoon", "Evening" ],
                             "type": "heatmap",
                             "hoverongaps": false
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
          assert.ok(body == '{"success":false,"failure":"promise-rejected"}');
        });
      });
    });

    it('Annotated Heatmap', () => {
      const options = {
        port: 3000,
        host: 'localhost',
        method: 'POST'
      };

      const req = http.request(options);
      // Data taken from https://plotly.com/javascript/heatmaps/#annotated-heatmap example.
      const payload = `{
                         "data": [
                           {
                             "x": [ "A", "B", "C", "D", "E" ],
                             "y": [ "W", "X", "Y", "Z" ],
                             "z": [ [ 0, 0, 0.75, 0.75, 0 ],
                                    [ 0, 0, 0.75, 0.75, 0 ],
                                    [ 0.75, 0.75, 0.75, 0.75, 0.75 ],
                                    [ 0, 0, 0, 0.75, 0 ] ],
                             "type": "heatmap",
                             "colorscale": [
                               [ 0, "#3D9970" ],
                               [ 1, "#001f3f" ]
                             ],
                             "showscale": false
                           }
                         ],
                         "layout": {
                           "title": {
                             "text": "Annotated Heatmap"
                           },
                           "annotations": [
                             {
                               "xref": "x1",
                               "yref": "y1",
                               "x": "A",
                               "y": "W",
                               "text": 0,
                               "font": {
                                 "color": "black"
                               },
                               "showarrow": false
                             },
                             {
                               "xref": "x1",
                               "yref": "y1",
                               "x": "B",
                               "y": "W",
                               "text": 0,
                               "font": {
                                 "color": "black"
                               },
                               "showarrow": false
                             },
                             {
                               "xref": "x1",
                               "yref": "y1",
                               "x": "C",
                               "y": "W",
                               "text": 0.75,
                               "font": {
                                 "color": "white"
                               },
                               "showarrow": false
                             },
                             {
                               "xref": "x1",
                               "yref": "y1",
                               "x": "D",
                               "y": "W",
                               "text": 0.75,
                               "font": {
                                 "color": "white"
                               },
                               "showarrow": false
                             },
                             {
                               "xref": "x1",
                               "yref": "y1",
                               "x": "E",
                               "y": "W",
                               "text": 0,
                               "font": {
                                 "color": "black"
                               },
                               "showarrow": false
                             },
                             {
                               "xref": "x1",
                               "yref": "y1",
                               "x": "A",
                               "y": "X",
                               "text": 0,
                               "font": {
                                 "color": "black"
                               },
                               "showarrow": false
                             },
                             {
                               "xref": "x1",
                               "yref": "y1",
                               "x": "B",
                               "y": "X",
                               "text": 0,
                               "font": {
                                 "color": "black"
                               },
                               "showarrow": false
                             },
                             {
                               "xref": "x1",
                               "yref": "y1",
                               "x": "C",
                               "y": "X",
                               "text": 0.75,
                               "font": {
                                 "color": "white"
                               },
                               "showarrow": false
                             },
                             {
                               "xref": "x1",
                               "yref": "y1",
                               "x": "D",
                               "y": "X",
                               "text": 0.75,
                               "font": {
                                 "color": "white"
                               },
                               "showarrow": false
                             },
                             {
                               "xref": "x1",
                               "yref": "y1",
                               "x": "E",
                               "y": "X",
                               "text": 0,
                               "font": {
                                 "color": "black"
                               },
                               "showarrow": false
                             },
                             {
                               "xref": "x1",
                               "yref": "y1",
                               "x": "A",
                               "y": "Y",
                               "text": 0.75,
                               "font": {
                                 "color": "white"
                               },
                               "showarrow": false
                             },
                             {
                               "xref": "x1",
                               "yref": "y1",
                               "x": "B",
                               "y": "Y",
                               "text": 0.75,
                               "font": {
                                 "color": "white"
                               },
                               "showarrow": false
                             },
                             {
                               "xref": "x1",
                               "yref": "y1",
                               "x": "C",
                               "y": "Y",
                               "text": 0.75,
                               "font": {
                                 "color": "white"
                               },
                               "showarrow": false
                             },
                             {
                               "xref": "x1",
                               "yref": "y1",
                               "x": "D",
                               "y": "Y",
                               "text": 0.75,
                               "font": {
                                 "color": "white"
                               },
                               "showarrow": false
                             },
                             {
                               "xref": "x1",
                               "yref": "y1",
                               "x": "E",
                               "y": "Y",
                               "text": 0.75,
                               "font": {
                                 "color": "white"
                               },
                               "showarrow": false
                             },
                             {
                               "xref": "x1",
                               "yref": "y1",
                               "x": "A",
                               "y": "Z",
                               "text": 0,
                               "font": {
                                 "color": "black"
                               },
                               "showarrow": false
                             },
                             {
                               "xref": "x1",
                               "yref": "y1",
                               "x": "B",
                               "y": "Z",
                               "text": 0,
                               "font": {
                                 "color": "black"
                               },
                               "showarrow": false
                             },
                             {
                               "xref": "x1",
                               "yref": "y1",
                               "x": "C",
                               "y": "Z",
                               "text": 0,
                               "font": {
                                 "color": "black"
                               },
                               "showarrow": false
                             },
                             {
                               "xref": "x1",
                               "yref": "y1",
                               "x": "D",
                               "y": "Z",
                               "text": 0.75,
                               "font": {
                                 "color": "white"
                               },
                               "showarrow": false
                             },
                             {
                               "xref": "x1",
                               "yref": "y1",
                               "x": "E",
                               "y": "Z",
                               "text": 0,
                               "font": {
                                 "color": "black"
                               },
                               "showarrow": false
                             }
                           ],
                           "xaxis": {
                             "ticks": "",
                             "side": "top"
                           },
                           "yaxis": {
                             "ticks": "",
                             "ticksuffix": " ",
                             "width": 700,
                             "height": 700,
                             "autosize": false
                           }
                         }
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
          assert.ok(body == '{"success":false,"failure":"promise-rejected"}');
        });
      });
    });

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
