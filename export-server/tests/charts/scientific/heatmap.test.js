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

    it('Heatmap with Unequal Block Sizes', () => {
      const options = {
        port: 3000,
        host: 'localhost',
        method: 'POST'
      };

      const req = http.request(options);
      // Data taken from https://plotly.com/javascript/heatmaps/#heatmap-with-unequal-block-sizes example.
      // The amount of steps has been reduced from 1000 to 100 to shrink the rather huge JSON to a more
      // manageable size.
      const payload = `{
                         "data": [
                           {
                             "x": [
                               0, 0.019128908461409244, 0.057053985548463304, 0.11167630648236293,
                               0.1807634484246753, 0.2619988983495748, 0.35302917356026364,
                               0.45150800102827526, 0.5551370032507141, 0.6617024418072166,
                               0.7691076732866533, 0.8754010739243909, 0.9787992874959733,
                               1.0777057442905533, 1.1707244860734565, 1.2566694117832458,
                               1.3345691304439335, 1.4036676707641937, 1.463421350701835,
                               1.5134921546477325, 1.5537380007676371, 1.5842003065430512,
                               1.6050892769403848, 1.616767347317515, 1.6197312126772536,
                               1.6145928668302587, 1.6020600601521502, 1.5829165636930556,
                               1.5580026012512502, 1.5281957805132902, 1.4943928203597332,
                               1.4574923348020647, 1.4183788955970724, 1.3779085561909294,
                               1.3368959800433016, 1.2961032772836907, 1.2562306157067487,
                               1.2179086358994669, 1.1816926663154543, 1.1480587027967175,
                               1.1174010887388532, 1.0900318070694117, 1.0661812736513727,
                               1.0460005037487647, 1.029564508842323, 1.0168767703355692,
                               1.0078746294602619, 1.0024354288339163, 1.0003832404516118,
                               1.0014960171785756, 1.005513009783773, 1.0121422989255258,
                               1.0210683009558572, 1.0319591176257341, 1.0444736124174285,
                               1.0582681099717781, 1.073002629592033, 1.0883465787783007,
                               1.103983847879284, 1.1196172619628488, 1.134972360649084,
                               1.1498004906899766, 1.1638812093177253, 1.1770240086475543,
                               1.1890693825693663, 1.1998892674847643, 1.2093868968609132,
                               1.217496116828681, 1.2241802159254633, 1.2294303265752906,
                               1.233263459036496, 1.2357202303784562, 1.2368623516410997,
                               1.236769935768015, 1.2355386872840055, 1.2332770321198443,
                               1.230103242588197, 1.2261426084082023, 1.2215246999881662,
                               1.216380765032925, 1.2108412940697177, 1.2050337848051997,
                               1.199080729452264, 1.19309784340715, 1.1871925480149113,
                               1.1814627147250412, 1.1759956727887142, 1.1708674778534665,
                               1.1661424344274085, 1.1618728612589475, 1.1580990852435622,
                               1.1548496465493678, 1.1521416952600834, 1.1499815579695218,
                               1.1483654514183217, 1.1472803194252574, 1.1467047690083163,
                               1.14661008168445, 1.146961276445466, 1.14771820179039
                             ],
                             "y": [
                               0.2932495072029474, 0.4520649106465986, 0.6010613308541781,
                               0.738368460180875, 0.8624639584341823, 0.9721736901564527,
                               1.0666658241955516, 1.1454393669989154, 1.2083077553451718,
                               1.2553781733731144, 1.2870272832454868, 1.303874069282395,
                               1.3067504927970526, 1.2966706402090562, 1.2747990214737537,
                               1.2424186407283688, 1.2008994176656302, 1.1516674878951316,
                               1.0961758548475138, 1.035876806011451, 0.9721964438281766,
                               0.9065116177063758, 0.840129479590633, 0.7742698224571861,
                               0.7100503000559907, 0.6484745680881383, 0.5904233326013655,
                               0.5366482413760394, 0.4877685090036233, 0.4442701266447717,
                               0.4065074733848051, 0.3747071178488449, 0.3489735763509304,
                               0.32929677727725376, 0.31556097049152865, 0.30755481506069376,
                               0.304982378214948, 0.30747478279516444, 0.31460224906683987,
                               0.325886289214605, 0.340811828566144, 0.35883904610114165,
                               0.379414747543091, 0.4019831067745736, 0.4259956349359092,
                               0.4509202608581578, 0.47624943096616845, 0.5015071610207071,
                               0.5262549956438493, 0.5500968541246922, 0.5726827622145094,
                               0.5937114892211545, 0.6129321274801305, 0.6301446670417022,
                               0.6451996320455782, 0.6579968566797538, 0.6684834878054817,
                               0.6766513082852681, 0.6825334798230427, 0.686200806797658,
                               0.6877576232557542, 0.6873374040671552, 0.6850981983966132,
                               0.6812179792884621, 0.675889997487091, 0.6693182208261246,
                               0.6617129328172129, 0.653286555660238, 0.6442497539822349,
                               0.6348078663875566, 0.6251577025525819, 0.6154847342983527,
                               0.6059606999836173, 0.5967416328227023, 0.5879663154741106,
                               0.5797551555753451, 0.5722094699071738, 0.5654111586275965,
                               0.5594227455747569, 0.5542877560334796, 0.5500313996091797,
                               0.546661522956461, 0.5441697950535818, 0.5425330864702043,
                               0.5417150036044319, 0.541667539115482, 0.5423328006910482,
                               0.5436447817969594, 0.5455311400892174, 0.5479149516492453,
                               0.5507164120544509, 0.5538544584396448, 0.557248290062953,
                               0.5608187683872439, 0.5644896812526723, 0.568188859279963,
                               0.5718491361449152, 0.5754091477455934, 0.5788139684944997,
                               0.5820155859652323
                             ],
                             "type": "scatter",
                             "line": {
                               "color": "white",
                               "width": 3
                             }
                           },
                           {
                             "x": [ 0, 1, 1.1458980337503155, 1.2360679774997898, 1.618033988749895 ],
                             "y": [ 0.2932495072029474, 0.5293174847027371, 0.6752155184530526, 0.6752155184530526, 1.2932495072029475 ],
                             "z": [ [ 13, 3, 3, 5 ],
                                    [ 13, 2, 1, 5 ],
                                    [ 13, 10, 11, 12 ],
                                    [ 13, 8, 8, 8 ] ],
                             "type": "heatmap",
                             "colorscale": "Viridis"
                           }
                         ],
                         "layout": {
                           "title": {
                             "text": "Heatmap with Unequal Block Sizes"
                           },
                           "margin": {
                             "t": 200,
                             "r": 200,
                             "b": 200,
                             "l": 200
                           },
                           "xaxis": {
                             "range": [ 0, 1.6 ],
                             "autorange": false,
                             "showgrid": false,
                             "zeroline": false,
                             "linecolor": "black",
                             "showticklabels": false,
                             "ticks": ""
                           },
                           "yaxis": {
                             "range": [ 0, 1.6 ],
                             "autorange": false,
                             "showgrid": false,
                             "zeroline": false,
                             "linecolor": "black",
                             "showticklabels": false,
                             "ticks": ""
                           },
                           "showlegend": false,
                           "width": 700,
                           "height": 700,
                           "autosize": false
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
  });
});
