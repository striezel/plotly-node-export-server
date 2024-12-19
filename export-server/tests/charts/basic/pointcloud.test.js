/*
    Plotly.js offline image export server with Node.js test suite
    Copyright (C) 2024  Dirk Stolle

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
        // Point cloud traces rely on WebGL, and that is not available
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

    // Note: The remaining examples, namely:
    //
    //  * Styled Point Cloud - https://plotly.com/javascript/pointcloud/#styled-point-cloud
    //  * Advanced Point Cloud - https://plotly.com/javascript/pointcloud/#advanced-point-cloud
    //
    // are not tested explicitly, because they would also fail. Furthermore, the
    // pointcloud trace type is deprecated and will be removed on plotly.js v3.
    // See <https://github.com/plotly/plotly.js/pull/7213> for the PR that
    // removes it.
  });
});
