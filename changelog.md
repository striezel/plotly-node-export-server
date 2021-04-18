# Version history of Node.js server for offline export of Plotly.js graphs

_(Note: This changelog focuses on the major changes between the different
versions. Therefore, it may not contain all changes. Especially smaller fixes or
improvements may be omitted.)_

As a general rule the version tries to follow the
[Semantic Versioning](https://semver.org/) scheme.
Since [Plotly.js](https://plotly.com/javascript/) is the main dependency of this
application, major version changes in Plotly.js will also trigger a major
version change in this application.


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
