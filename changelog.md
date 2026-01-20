# Version history of Node.js server for offline export of Plotly.js graphs

_(Note: This changelog focuses on the major changes between the different
versions. Therefore, it may not contain all changes. Especially smaller fixes or
improvements may be omitted.)_

As a general rule the version tries to follow the
[Semantic Versioning](https://semver.org/) scheme.
Since [Plotly.js](https://plotly.com/javascript/) is the main dependency of this
application, major version changes in Plotly.js will also trigger a major
version change in this application.

## Next Version (2025-11-??)

* __[maintenance]__
Update dependency `@acemir/cssom` to 0.9.31.

* __[maintenance]__
Update dependency `@asamuzakjp/css-color` to 4.1.1.

* __[maintenance]__
Update dependency `@asamuzakjp/dom-selector` to 6.7.6.

* __[maintenance]__
Update dependency `cssstyle` to 5.3.5.

* __[maintenance]__
Update dependency `@csstools/css-syntax-patches-for-csstree` to 1.0.25.

* __[maintenance]__
Update dependency `data-urls` to 6.0.1.

* __[maintenance]__
Update dependency `@exodus/bytes` to 1.9.0.

* __[maintenance]__
Update dependency `html-encoding-sniffer` to 6.0.0.

* __[maintenance]__
Update dependency `jsdom` to 27.4.0.

* __[maintenance]__
Update dependency `lru-cache` to 11.2.4.

* __[maintenance]__
Update dependencies `tldts` + `tldts-core` to 7.0.19.

* __[maintenance]__
Update dependency `webidl-conversions` to 8.0.1.

* __[maintenance]__
Update dependency `ws` to 8.19.0.

## Version 7.0.2 (2025-10-23)

* __[maintenance]__
Update dependency `@asamuzakjp/dom-selector` to 6.7.2.

* __[maintenance]__
Update dependency `jsdom` to 27.0.1.

* __[maintenance]__
Update dependency `parse5` to 8.0.0.

## Version 7.0.1 (2025-10-15)

* __[maintenance]__
Update dependency `@asamuzakjp/dom-selector` to 6.6.2.

* __[maintenance]__
Update dependencies `tldts` + `tldts-core` to 7.0.17.

## Version 7.0.0 (2025-10-01)

* __[breaking change]__
__Support for Node.js 19 and older versions is dropped.__ The minimum required
version is now Node.js 20. Node.js versions before 20 have reached their end of
life, so users of those versions should upgrade to newer versions anyway.

* __[maintenance]__
Update dependency `jsdom` to 27.0.0.

  As part of the `jsdom` update, `cssstyle` is updated to 5.3.1 and `data-urls`
  is updated to 6.0.0.

* __[maintenance]__
Update dependency `@asamuzakjp/css-color` to 4.0.5.

* __[maintenance]__
Update dependency `@asamuzakjp/dom-selector` to 6.5.7.

* __[maintenance]__
Update dependency `lru-cache` to 11.2.2.

* __[maintenance]__
Update dependencies `tldts` + `tldts-core` to 7.0.16.

* __[maintenance]__
Update dependency `tr46` to 6.0.0.

* __[maintenance]__
Update dependency `whatwg-url` to 15.1.0.

## Version 6.0.10 (2025-09-16)

* __[maintenance]__
Update dependency `@csstools/color-helpers` to 5.1.0.

* __[maintenance]__
Update dependency `@csstools/css-color-parser` to 3.1.0.

* __[maintenance]__
Update dependency `debug` to 4.4.3.

* __[maintenance]__
Update dependency `nwsapi` to 2.2.22.

## Version 6.0.9 (2025-07-26)

* __[maintenance]__
The version of Plotly.js is bumped from 3.0.2 to 3.0.3.
The new version contains some minor changes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#303----2025-07-23).

* __[maintenance]__
Update dependency `cssstyle` to 4.6.0.

* __[maintenance]__
Update dependency `nwsapi` to 2.2.21.

## Version 6.0.8  (2025-07-26)

* __[maintenance]__
The version of Plotly.js is bumped from 3.0.1 to 3.0.2.
The new version contains some fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#302----2025-07-22).

* __[maintenance]__
Update dependency `agent-base` to 7.1.4.

* __[maintenance]__
Update dependency `@asamuzakjp/css-color` to 3.2.0.

* __[maintenance]__
Update dependency `@csstools/css-calc` to 2.1.4.

* __[maintenance]__
Update dependency `@csstools/css-color-parser` to 3.0.10.

* __[maintenance]__
Update dependency `@csstools/css-tokenizer` to 3.0.4.

* __[maintenance]__
Update dependency `@csstools/css-parser-algorithms` to 3.0.5.

* __[maintenance]__
Update dependency `debug` to 4.4.1.

* __[maintenance]__
Update dependency `decimal.js` to 10.6.0.

* __[maintenance]__
Update dependency `entities` to 6.0.1.

* __[maintenance]__
Update dependency `ws` to 8.18.3.

## Version 6.0.7 (2025-04-26)

* __[maintenance]__
Update dependency `@asamuzakjp/css-color` to 3.1.4.

* __[maintenance]__
Update dependency `cssstyle` to 4.3.1.

* __[maintenance]__
Update dependency `@csstools/css-calc` to 2.1.3.

* __[maintenance]__
Update dependency `@csstools/css-color-parser` to 3.0.9.

* __[maintenance]__
Update dependency `entities` to 6.0.0.

* __[maintenance]__
Update dependency `jsdom` to 26.1.0.

* __[maintenance]__
Update dependency `parse5` to 7.3.0.

* __[maintenance]__
Update dependencies `tldts` + `tldts-core` to 6.1.86.

* __[maintenance]__
Update dependency `tr46` to 5.1.1.

## Version 6.0.6 (2025-04-06)

* __[maintenance]__
Update dependency `nwsapi` to 2.2.20.

* __[maintenance]__
Update dependencies `tldts` + `tldts-core` to 6.1.85.

## Version 6.0.5 (2025-03-17)

* __[maintenance]__
Update dependency `@asamuzakjp/css-color` to 3.1.1.

* __[maintenance]__
Update dependency `cssstyle` to 4.3.0.

* __[maintenance]__
Update dependency `nwsapi` to 2.2.18.

* __[maintenance]__
Update dependencies `tldts` + `tldts-core` to 6.1.84.

* __[maintenance]__
Update dependency `tr46` to 5.1.0.

* __[maintenance]__
Update dependency `whatwg-url` to 14.2.0.

## Version 6.0.4 (2025-03-01)

* __[maintenance]__
Update dependencies `tldts` + `tldts-core` to 6.1.79.

* __[maintenance]__
Update dependency `tough-cookie` to 5.1.2.

## Version 6.0.3 (2025-02-23)

* __[maintenance]__
The version of Plotly.js is bumped from 3.0.0 to 3.0.1.
The new version contains some fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#301----2025-02-18).

* __[maintenance]__
Update dependency `@csstools/color-helpers` to 5.0.2.

* __[maintenance]__
Update dependency `@csstools/css-calc` to 2.1.2.

* __[maintenance]__
Update dependency `@csstools/css-color-parser` to 3.0.8.

* __[maintenance]__
Update dependencies `tldts` + `tldts-core` to 6.1.78.

* __[maintenance]__
Update dependency `ws` to 8.18.1.

## Version 6.0.2 (2025-02-17)

* __[maintenance]__
Update dependency `whatwg-url` to 14.1.1.

## Version 6.0.1 (2025-02-10)

* __[maintenance]__
Update dependencies `tldts` + `tldts-core` to 6.1.77.

* __[maintenance]__
Update dependency `tough-cookie` to 5.1.1.

## Version 6.0.0 (2025-02-05)

* __[breaking change]__ + __[maintenance]__
The version of Plotly.js is bumped from 2.35.3 to 3.0.0.
The new version contains some new features and fixes. It also contains some
breaking changes, for example some deprecated features have been removed. For
details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#300----2025-01-27).

* __[maintenance]__
Update dependencies `tldts` + `tldts-core` to 6.1.76.

## Version 5.9.7 (2025-01-30)

* __[maintenance]__
Update dependency `decimal.js` to 10.5.0.

* __[maintenance]__
Update dependencies `tldts` + `tldts-core` to 6.1.75.

## Version 5.9.6 (2025-01-23)

* __[maintenance]__
Update dependency `jsdom` to 26.0.0.

  As part of the `jsdom` update, `cssstyle` is updated to 4.2.1 and
  `rrweb-cssom` is updated to 0.8.0.

## Version 5.9.5 (2025-01-23)

* __[maintenance]__
Update dependencies `tldts` + `tldts-core` to 6.1.74.

* __[maintenance]__
Update dependency `tough-cookie` to 5.1.0.

## Version 5.9.4 (2025-01-08)

* __[maintenance]__
The version of Plotly.js is bumped from 2.35.2 to 2.35.3.
The new version contains some fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2353----2024-12-13).

* __[maintenance]__
Update dependencies `tldts` + `tldts-core` to 6.1.71.

* __[maintenance]__
The lock file package-lock.json is converted from version 2 to version 3.
Version 3 has been supported since (at least) Node.js 16 and is the default in
Node.js 18. Since this project already requires Node.js 18 or later it is save
to convert the file to the newer version.

## Version 5.9.3 (2024-12-21)

* __[maintenance]__
Update dependency `agent-base` to 7.1.3.

* __[maintenance]__
Update dependency `debug` to 4.4.0.

* __[maintenance]__
Update dependency `https-proxy-agent` to 7.0.6.

* __[maintenance]__
Update dependencies `tldts` + `tldts-core` to 6.1.69.

* __[maintenance]__
Update dependency `whatwg-url` to 14.1.0.

## Version 5.9.2 (2024-12-02)

* __[maintenance]__
Update dependencies `tldts` + `tldts-core` to 6.1.65.

## Version 5.9.1 (2024-11-30)

* __[maintenance]__
Update dependency `nwsapi` to 2.2.16.

## Version 5.9.0 (2024-11-25)

* __[improvement]__
The image rendering process is simplified and does now use less I/O operations.

* __[maintenance]__
Update dependencies `tldts` + `tldts-core` to 6.1.64.

## Version 5.8.16 (2024-11-22)

* __[maintenance]__
Update dependencies `tldts` + `tldts-core` to 6.1.63.

## Version 5.8.15 (2024-11-17)

* __[maintenance]__
Update dependencies `tldts` + `tldts-core` to 6.1.61.

## Version 5.8.14 (2024-11-11)

* __[maintenance]__
Update dependencies `tldts` + `tldts-core` to 6.1.60.

* __[maintenance]__
Update dependency `uuid` to 11.0.3.

## Version 5.8.13 (2024-11-03)

* __[maintenance]__
Update dependencies `tldts` + `tldts-core` to 6.1.58.

## Version 5.8.12 (2024-10-30)

* __[maintenance]__
Update dependencies `tldts` + `tldts-core` to 6.1.57.

## Version 5.8.11 (2024-10-29)

* __[bug fix]__
Fix error in handling of array data for graphs.

* __[maintenance]__
Update dependency `parse5` to 7.2.1.

* __[maintenance]__
Update dependencies `tldts` + `tldts-core` to 6.1.56.

* __[maintenance]__
Update dependency `uuid` to 11.0.2.

## Version 5.8.10 (2024-10-28)

* __[maintenance]__
Update dependency `uuid` to 11.0.1.

## Version 5.8.9 (2024-10-27)

* __[improvement]__
A stack trace for some rendering errors is now logged to the console, if a stack
trace is available.

## Version 5.8.8 (2024-10-25)

* __[maintenance]__
Update dependencies `tldts` + `tldts-core` to 6.1.55.

## Version 5.8.7 (2024-10-20)

* __[maintenance]__
Update dependencies `tldts` + `tldts-core` to 6.1.52.

## Version 5.8.6 (2024-10-14)

* __[maintenance]__
Update dependency `form-data` to 4.0.1.

* __[maintenance]__
Update dependency `parse5` to 7.2.0.

* __[maintenance]__
Update dependencies `tldts` + `tldts-core` to 6.1.51.

## Version 5.8.5 (2024-10-03)

* __[maintenance]__
Update dependencies `tldts` + `tldts-core` to 6.1.50.

## Version 5.8.4 (2024-09-30)

* __[maintenance]__
Update dependency `nwsapi` to 2.2.13.

* __[maintenance]__
Update dependencies `tldts` + `tldts-core` to 6.1.48.

## Version 5.8.3 (2024-09-24)

* __[maintenance]__
Update dependency `jsdom` to 25.0.1.

## Version 5.8.2 (2024-09-17)

* __[maintenance]__
The version of Plotly.js is bumped from 2.35.1 to 2.35.2.
The new version contains some fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2352----2024-09-10).

## Version 5.8.1 (2024-09-10)

* __[maintenance]__
The version of Plotly.js is bumped from 2.35.0 to 2.35.1.
The new version contains some fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2351----2024-09-09).

* __[maintenance]__
Update dependency `cssstyle` to 4.1.0.

* __[maintenance]__
Update dependency `debug` to 4.3.7.

* __[maintenance]__
Update dependency `ms` to 2.1.3.

## Version 5.8.0 (2024-08-31)

* __[maintenance]__
The version of Plotly.js is bumped from 2.34.0 to 2.35.0.
The new version contains some new features and fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2350----2024-08-29).

## Version 5.7.3 (2024-08-26)

* __[maintenance]__
Update dependency `jsdom` to 25.0.0.

## Version 5.7.2 (2024-07-28)

* __[maintenance]__
Update dependency `debug` to 4.3.6.

## Version 5.7.1 (2024-07-23)

* __[maintenance]__
Update dependency `jsdom` to 24.1.1.

## Version 5.7.0 (2024-07-20)

* __[maintenance]__
The version of Plotly.js is bumped from 2.33.0 to 2.34.0.
The new version contains some new features and fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2340----2024-07-18).

## Version 5.6.5 (2024-07-13)

* __[maintenance]__
  Update dependency `https-proxy-agent` to 7.0.5.

* __[maintenance]__
  Update dependency `nwsapi` to 2.2.12.

* __[maintenance]__
  Update dependency `ws` to 8.18.0.

## Version 5.6.4 (2024-06-24)

* __[maintenance]__
Update dependency `rrweb-cssom` to 0.7.1.

## Version 5.6.3 (2024-06-22)

* __[maintenance]__
Update dependency `ws` to 8.17.1.
This fixes a DoS vulnerability in the `ws` package,
[CVE-2024-37890](https://nvd.nist.gov/vuln/detail/CVE-2024-37890).

## Version 5.6.2 (2024-06-11)

* __[maintenance]__
Update dependency `uuid` to 10.0.0.

## Version 5.6.1 (2024-06-01)

* __[maintenance]__
Update dependency `debug` to 4.3.5.

## Version 5.6.0 (2024-05-29)

* __[maintenance]__
The version of Plotly.js is bumped from 2.32.0 to 2.33.0.
The new version contains some new features and fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2330----2024-05-29).

## Version 5.5.3 (2024-05-28)

* __[maintenance]__
Update dependency `jsdom` to 24.1.0.

## Version 5.5.2 (2024-05-13)

* __[maintenance]__
Update dependency `nwsapi` to 2.2.10.

## Version 5.5.1 (2024-05-03)

* __[maintenance]__
Update dependency `tough-cookie` to 4.1.4.

* __[maintenance]__
Update dependency `ws` to 8.17.0.

## Version 5.5.0 (2024-04-26)

* __[maintenance]__
The version of Plotly.js is bumped from 2.31.1 to 2.32.0.
The new version contains some new features and fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2320----2024-04-23).

* __[maintenance]__
Update dependency `nwsapi` to 2.2.9.

## Version 5.4.1 (2024-04-16)

* __[maintenance]__
The version of Plotly.js is bumped from 2.31.0 to 2.31.1.
The new version contains some fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2311----2024-04-15).

## Version 5.4.0 (2024-04-10)

* __[maintenance]__
The version of Plotly.js is bumped from 2.30.1 to 2.31.0.
The new version contains some new features and fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2310----2024-04-10).

## Version 5.3.2 (2024-03-31)

* __[maintenance]__
Update dependency `agent-base` to 7.1.1.

## Version 5.3.1 (2024-03-16)

* __[maintenance]__
The version of Plotly.js is bumped from 2.30.0 to 2.30.1.
The new version contains some fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2301----2024-03-15).

## Version 5.3.0 (2024-03-07)

* __[maintenance]__
The version of Plotly.js is bumped from 2.29.1 to 2.30.0.
The new version contains some new features and fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2300----2024-03-06).

## Version 5.2.2 (2024-02-16)

* __[maintenance]__
Update dependency `http-proxy-agent` to 7.0.2.

* __[maintenance]__
Update dependency `https-proxy-agent` to 7.0.4.

## Version 5.2.1 (2024-02-12)

* __[maintenance]__
The version of Plotly.js is bumped from 2.29.0 to 2.29.1.
The new version contains some bug fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2291----2024-02-12).

* __[maintenance]__
Update dependency `http-proxy-agent` to 7.0.1.

* __[maintenance]__
Update dependency `https-proxy-agent` to 7.0.3.

## Version 5.2.0 (2024-02-03)

* __[maintenance]__
The version of Plotly.js is bumped from 2.28.0 to 2.29.0.
The new version contains some new features and fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2290----2024-02-01).

## Version 5.1.2 (2024-01-23)

* __[maintenance]__
Update dependency `jsdom` to 24.0.0.

## Version 5.1.1 (2024-01-09)

* __[maintenance]__
Update dependency `jsdom` to 23.2.0.

## Version 5.1.0 (2024-01-07)

* __[maintenance]__
The version of Plotly.js is bumped from 2.27.1 to 2.28.0.
The new version contains some new features and fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2280----2024-01-05).

## Version 5.0.4 (2024-01-07)

* __[maintenance]__
Update dependency `jsdom` to 23.1.0.

## Version 5.0.3 (2023-12-28)

* __[maintenance]__
Update dependency `ws` to 8.16.0.

## Version 5.0.2 (2023-12-17)

* __[maintenance]__
Update dependency `ws` to 8.15.1.

## Version 5.0.1 (2023-12-10)

* __[maintenance]__
Update dependency `ws` to 8.15.0.

## Version 5.0.0 (2023-12-01)

* __[breaking change]__
__Support for Node.js 17 and older versions is dropped.__ The minimum required
version is now Node.js 18. Node.js versions before 18 have reached their end of
life, so users of those versions should upgrade to newer versions anyway.

* __[maintenance]__
Update dependency `jsdom` to 23.0.1.

## Version 4.5.4 (2023-11-30)

* __[improvement]__
  Whenever the server responds to an unallowed method with HTTP status code 405,
  it will now also send an `Allow` HTTP header to indicate the allowed methods.
  This behaviour is required by [RFC 9110](https://httpwg.org/specs/rfc9110.html#status.405),
  so it should be implemented.

  Furthermore, any HTTP request to the server root using the OPTIONS method will
  now return the allowed options via an `Allow` HTTP header.

## Version 4.5.3 (2023-11-29)

* __[bug fix]__
Fix error in handling of unusually large payloads.

## Version 4.5.2 (2023-11-10)

* __[maintenance]__
The version of Plotly.js is bumped from 2.27.0 to 2.27.1.
The new version contains some chnges and fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2271----2023-11-08).

## Version 4.5.1 (2023-10-31)

* __[maintenance]__
Update dependency `punycode` to 2.3.1.

## Version 4.5.0 (2023-10-22)

* __[maintenance]__
The version of Plotly.js is bumped from 2.26.2 to 2.27.0.
The new version contains some new features and fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2270----2023-10-20).

## Version 4.4.4 (2023-10-06)

* __[maintenance]__
The version of Plotly.js is bumped from 2.26.1 to 2.26.2.
The new version contains some fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2262----2023-10-04).

## Version 4.4.3 (2023-09-25)

* __[maintenance]__
The version of Plotly.js is bumped from 2.26.0 to 2.26.1.
The new version contains some fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2261----2023-09-22).

## Version 4.4.2 (2023-09-21)

* __[maintenance]__
Update dependency `ws` to 8.14.2.

## Version 4.4.1 (2023-09-14)

* __[maintenance]__
Update dependency `uuid` to 9.0.1.

* __[maintenance]__
Update dependency `ws` to 8.14.1.

## Version 4.4.0 (2023-08-26)

* __[maintenance]__
The version of Plotly.js is bumped from 2.25.2 to 2.26.0.
The new version contains some new features. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2260----2023-08-24).

## Version 4.3.1 (2023-08-12)

* __[maintenance]__
The version of Plotly.js is bumped from 2.25.0 to 2.25.2.
The new version contains some fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2252----2023-08-11).

## Version 4.3.0 (2023-07-28)

* __[maintenance]__
The version of Plotly.js is bumped from 2.24.3 to 2.25.0.
The new version contains some fixes and new features. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2250----2023-07-25).

## Version 4.2.3 (2023-07-23)

* __[maintenance]__
The version of Plotly.js is bumped from 2.24.2 to 2.24.3.
The new version contains some fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2243----2023-07-05).

## Version 4.2.2 (2023-07-08)

* __[maintenance]__
Update dependency `nwsapi` to 2.2.7.

## Version 4.2.1 (2023-06-20)

* __[maintenance]__
The version of Plotly.js is bumped from 2.24.0 to 2.24.2.
The new version contains some fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2242----2023-06-09).

## Version 4.2.0 (2023-06-06)

* __[maintenance]__
The version of Plotly.js is bumped from 2.23.2 to 2.24.0.
The new version contains some fixes and new features. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2240----2023-06-06).

* __[maintenance]__
Update dependency `tough-cookie` to 4.1.3.

## Version 4.1.2 (2023-05-28)

* __[maintenance]__
Update dependency `jsdom` to 22.1.0.

* __[maintenance]__
Update dependency `nwsapi` to 2.2.5.

## Version 4.1.1 (2023-05-22)

* __[maintenance]__
The version of Plotly.js is bumped from 2.23.1 to 2.23.2.
The new version contains some fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2232----2023-05-19).

## Version 4.1.0 (2023-05-19)

* __[maintenance]__
The version of Plotly.js is bumped from 2.22.0 to 2.23.1.
The new version contains some fixes and changes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2231----2023-05-16).

## Version 4.0.0 (2023-05-11)

* __[breaking change]__
  Generated image files are now served directly in the response to the request
  instead of just providing a JSON response that contains the file name of the
  generated image. That is, instead of returning a JSON response like
  ```json
  {
    "success": true,
    "filename": "graph-007e94ad-97c7-4f7b-9bf1-a524f689b8b5.svg"
  }
  ```
  the image is returned directly in the HTTP response message body.

  This approach has several advantages:
  * Users only need to make one request to the server instead of two to get the
    generated image.
  * The server does not get filled with generated images files as in previous
    versions, because the images do not need to be stored for later retrieval
    anymore.

## Version 3.1.0 (2023-05-06)

* __[maintenance]__
The version of Plotly.js is bumped from 2.21.0 to 2.22.0.
The new version contains some fixes and changes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2220----2023-04-27).

## Version 3.0.0 (2023-05-02)

* __[breaking change]__
__Support for Node.js 15 and older versions is dropped.__ The minimum required
version is now Node.js 16. Node.js versions before 16 have reached their end of
life, so users of those versions should upgrade to newer versions anyway.

* __[maintenance]__
Update dependency `jsdom` to 22.0.0.

## Version 2.6.1 (2023-05-01)

* __[maintenance]__
Update dependency `jsdom` to 21.1.2.

## Version 2.6.0 (2023-04-23)

* __[maintenance]__
The version of Plotly.js is bumped from 2.20.0 to 2.21.0.
The new version contains a few fixes and changes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2210----2023-04-17).

## Version 2.5.3 (2023-04-16)

* __[maintenance]__
Update dependency `entities` to 4.5.0.

## Version 2.5.2 (2023-04-12)

* __[maintenance]__
Update dependency `nwsapi` to 2.2.4.

## Version 2.5.1 (2023-04-09)

* __[maintenance]__
Update dependency `nwsapi` to 2.2.3.

## Version 2.5.0 (2023-03-16)

* __[maintenance]__
The version of Plotly.js is bumped from 2.18.2 to 2.20.0.
The new version contains a few fixes and changes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2200----2023-03-15).

## Version 2.4.4 (2023-03-13)

* __[maintenance]__
Update dependency `jsdom` to 21.1.1.

* __[maintenance]__
Update dependency `ws` to 8.13.0.

## Version 2.4.3 (2023-02-27)

* __[maintenance]__
The version of Plotly.js is bumped from 2.18.1 to 2.18.2.
The new version contains a few fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2182----2023-02-15).

## Version 2.4.2 (2023-02-13)

* __[maintenance]__
Update dependency `ws` to 8.12.1.

## Version 2.4.1 (2023-02-04)

* __[maintenance]__
The version of Plotly.js is bumped from 2.18.0 to 2.18.1.
The new version contains a few changes and fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2181----2023-02-02).

## Version 2.4.0 (2023-01-24)

* __[maintenance]__
Update dependency `jsdom` to 21.1.0.

* __[maintenance]__
Update dependency `punycode` to 2.3.0.

* __[maintenance]__
Update dependency `acorn` to 8.8.2.

## Version 2.3.0 (2023-01-23)

* __[maintenance]__
The version of Plotly.js is bumped from 2.17.1 to 2.18.0.
The new version contains a few changes and fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2180----2023-01-19).

## Version 2.2.2 (2023-01-10)

* __[maintenance]__
The version of Plotly.js is bumped from 2.17.0 to 2.17.1.
The new version contains a regression fix. For details on this see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2171----2023-01-09).

## Version 2.2.1 (2023-01-10)

* __[maintenance]__
Update dependency `punycode` to 2.2.0.

* __[maintenance]__
Update dependency `ws` to 8.12.0.

* __[maintenance]__
Update dependency `jsdom` to 21.0.0.

## Version 2.2.0 (2022-12-29)

* __[maintenance]__
The version of Plotly.js is bumped from 2.16.5 to 2.17.0.
The new version contains a few fixes and new features. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2170----2022-12-22).

## Version 2.1.5 (2022-12-19)

* __[maintenance]__
The version of Plotly.js is bumped from 2.16.4 to 2.16.5.
The new version contains a few fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2165----2022-12-13).

## Version 2.1.4 (2022-12-09)

* __[maintenance]__
The version of Plotly.js is bumped from 2.16.1 to 2.16.4.
The new version contains a few fixes. For details on those see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#2164----2022-12-07).

## Version 2.1.3 (2022-12-09)

* __[maintenance]__
Update dependency `decimal.js` to 10.4.3.

## Version 2.1.2 (2022-11-24)

* __[maintenance]__
Update dependency `jsdom` to 20.0.3.

## Version 2.1.1 (2022-11-13)

* __[maintenance]__
Update dependency `ws` to 8.11.0.

## Version 2.1.0 (2022-10-30)

__[feature]__
The dimensions of the generated image can now be adjusted by adding the HTTP
headers `X-Image-Width` and / or `X-Image-Height` to the request. If none of
them are specified, the size remains at 700 x 400 pixels as in version 2.0.2.

See the readme for an example of the new feature.

## Version 2.0.2 (2022-10-30)

* __[maintenance]__
Update dependency `jsdom` to 20.0.2.

## Version 2.0.1 (2022-10-30)

* __[maintenance]__
Update dependency `uuid` to 9.0.0.

## Version 2.0.0 (2022-10-29)

* __[breaking change]__
The file format of the generated images is changed from PNG to SVG. This is due
to the internal replacement of PhantomJS with jsdom for rendering. PhantomJS
does not work with newer versions of plotly.js (2.0 and later), so it had to be
replaced. If you still need PNG files, then stick with version 1.5.7 of the
application. However, version 1.5.7 is no longer maintained.

* __[breaking change]__
The version of Plotly.js is bumped from 1.58.5 to 2.16.1. Version 2.0.0 of
Plotly.js came with some breaking changes / removed features. For details see
[the changelog of Plotly.js](https://github.com/plotly/plotly.js/blob/master/CHANGELOG.md#200----2021-06-07).

* __[breaking change]__
__Support for Node.js 13 and older versions is dropped.__ The minimum required
versions is now Node.js 14. Node.js versions before 14 have reached their end of
life anyway, so users of those versions should upgrade to newer versions anyway.

* __[breaking change]__
The default image width is 700 pixels, and the default height is 400 pixels.

## Version 1.5.7 (2022-10-28)

* __[maintenance]__
Update dependency `minimist` to 1.27.0.

## Version 1.5.6 (2022-04-17)

* __[maintenance]__
Update dependencies `graceful-fs` to 4.2.10 and `mkdirp` to 0.5.6.

## Version 1.5.5 (2022-03-30)

* __[maintenance]__
Update dependency `minimist` to 1.26.0. This fixes a prototype pollution
vulnerability in the `minimist` package,
[CVE-2021-44906](https://nvd.nist.gov/vuln/detail/CVE-2021-44906).

## Version 1.5.4 (2022-03-21)

* __[maintenance]__
Update dependencies `mime-db` to 1.52.0 and `mime-types` to 2.1.35.

## Version 1.5.3 (2022-01-23)

* __[maintenance]__
Update dependencies `graceful-fs` to 4.2.9, `qs` to 6.5.3, and `sshpk` to
1.17.0.

## Version 1.5.2 (2021-12-07)

* __[maintenance]__
Update dependencies `asn1` to 0.2.6, `json-schema` to 0.4.0, `jsprim` to 1.4.2,
`mime-db` to 1.51.0, and `mime-types` to 2.1.34.

## Version 1.5.1 (2021-10-10)

* __[maintenance]__
Update dependencies `core-util-is` to 1.0.3, `graceful-fs` to 4.2.8, `mime-db`
to 1.50.0, `mime-types` to 2.1.33.

## Version 1.5.0 (2021-08-01)

* __[new feature]__
The port to which the server binds can now be changed by setting the environment
variable `PORT`. If `PORT` is not set or is not a valid port number, then the
default port 3000 is used.

* __[new feature]__
The hostname which the server shall use can now be changed by setting the
environment variable `HOST`. If `HOST` is not set, then `localhost` will be
used as default.

## Version 1.4.2 (2021-08-01)

* __[maintenance]__
Update dependencies `buffer-from` to 1.1.2, `mime-db` to 1.49.0 and `mime-types`
to 2.1.32.

## Version 1.4.1 (2021-07-18)

* __[maintenance]__
The version of Plotly.js is bumped from 1.58.4 to 1.58.5.

* __[maintenance]__
The package dependencies `mime-db` and `mime-types` are updated to 1.48.0 and
2.1.31, respectively.

## Version 1.4.0 (2021-04-18)

__[improvement]__
The generated names for PNG files are using UUIDs (version 4) instead of a
Unix timestamp in their name from now on. That is, the JSON output of a
successful render will change from something like

    {
      "success": true,
      "filename": "graph-1604764778687.png"
    }

to something like

    {
      "success": true,
      "filename": "graph-25273999-dea9-4da2-aad2-dbdf2e38a0c9.png"
    }

instead. While it is highly unlikely that rendering of a plot with Plotly.js and
JavaScript is so fast that two PNG files are created within the same millisecond
this change makes sure we are on the safe side here.

Also note that the application never gave any guarantees for the naming pattern
of the generated files in the first place. Therefore, anyone consuming the JSON
response should treat the `filename` value as a purely random file name.

## Version 1.3.0

The version of Plotly.js is bumped from 1.57.1 to 1.58.4.

## Version 1.2.3

This is the initial release based on the ECharts server
(<https://gitlab.com/striezel/echarts-node-export-server>) that does the same
thing, just with ECharts.
