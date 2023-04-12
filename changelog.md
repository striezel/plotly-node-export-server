# Version history of Node.js server for offline export of Plotly.js graphs

_(Note: This changelog focuses on the major changes between the different
versions. Therefore, it may not contain all changes. Especially smaller fixes or
improvements may be omitted.)_

As a general rule the version tries to follow the
[Semantic Versioning](https://semver.org/) scheme.
Since [Plotly.js](https://plotly.com/javascript/) is the main dependency of this
application, major version changes in Plotly.js will also trigger a major
version change in this application.

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
vulnerabilty in the `minimist` package,
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
