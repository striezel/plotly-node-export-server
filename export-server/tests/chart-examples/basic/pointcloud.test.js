const assert = require('node:assert');
const http = require('node:http');
const { describe, it } = require('node:test');

describe('basic charts, part 11', () => {
  describe('point clouds', () => {
    it('Basic Point Cloud', () => {
      const options = {
        port: 3000,
        host: 'localhost',
        method: 'POST'
      };

      const req = http.request(options);
      // Data taken from https://plotly.com/javascript/pointcloud/#basic-point-cloud example.
      const payload = `{
                         "data": [
                           {
                             "xy": [ 1, 2, 3, 4, 5, 6, 0, 4 ],
                             "type": "pointcloud"
                           }
                         ],
                         "layout": {}
                       }`;
      req.write(payload);
      req.end();

      req.on('response', (response) => {
        // Point cloud traces seem to rely on WebGL, and that is not available
        // in JSDOM, so this fails.
        assert.strictEqual(500, response.statusCode);
        let body = '';
        response.on('data', (chunk) => {
          body += chunk;
        });
        response.on('end', () => {
          assert.ok(body === '{"success":false,"failure":"promise-rejected"}');
        });
      });
    });

    // TODO: Styled Point Cloud - https://plotly.com/javascript/pointcloud/#styled-point-cloud
    // TODO: Advanced Point Cloud - https://plotly.com/javascript/pointcloud/#advanced-point-cloud


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
