# Installation of Node.js

Since this a Node.js application, Node.js is obviously required to run it.
I recommend to use the LTS version of Node.js, which is currently version 18.
This is also the version under which this application has been developed and
tested. Therefore, using an older version of Node.js may work, but it is not
recommended.

## Node.js on Windows

If you are on Windows, just [download](https://nodejs.org/en/download/) the MSI
installer package and install it.

## Node.js on Linux

If your Linux distribution does not provide a recent Node.js version (at least
version 20 is recommended), you can add an (unofficial) Node.js package
repository to your system.

### Debian-based

On Debian-based systems you need curl and GnuPG for download and preparation of
the Node.js installation. Both can be installed by typing

    apt-get install curl gnupg2

into a root terminal. Next, download and install the package signing key for the
Node.js package repository:

    curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg

Then create the file **/etc/apt/sources.list.d/nodejs.list** and give it the
following contents:

    # Node.js 20.x for Debian
    deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x nodistro main

After that do

    apt-get update && apt-get upgrade

to update the APT package lists. To install Node.js 20, type

    apt-get install nodejs

That's it.

### RedHat-based

On a RedHat-based system (e.g. CentOS) make sure curl is installed and then type

    curl -sL https://rpm.nodesource.com/setup_20.x | bash -

to download and execute a bash script that will take care of the installation.
You might want to check the script code before doing that, though.

## Initial setup: install Node.js packages

The application requires a package for jsdom. To install that, type

    npm install

in the directory `export-server/`. You only need to do this once. The packages
are then cached in the `node_modules/` directory for future use.
