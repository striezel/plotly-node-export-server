FROM debian:12-slim
MAINTAINER Dirk Stolle <striezel-dev@web.de>

# Always update package lists and install updates first.
# HTTPS transport for APT is required to get the Node.js packages.
# curl, GnuPG and CA certificates are needed to get the key for the Nodesource
# APT repository.
RUN apt-get update && apt-get upgrade -y && \
    apt-get install --no-install-recommends -y \
        apt-transport-https \
        curl \
        gnupg2 \
        dirmngr \
        ca-certificates \
        libfontconfig1
# Node.js is required to run this application.
RUN curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg \
  && echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_18.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list
RUN apt-get update && apt-get install nodejs -y
# In some rare cases, the Node.js version in Debian stable may be more recent
# than the one provided by nodesource.com. In that case, the version from the
# Debian stable repository will be installed. But since Debian stable split the
# NPM binary into another package, this will have to be installed separately.
RUN npm --version || apt-get install -y --no-install-recommends --no-install-suggests npm
# Create directory for application.
RUN mkdir -p /opt/export-server
# Copy all files to that directory.
COPY export-server /opt/export-server
WORKDIR /opt/export-server
# Install required Node.js packages (basically jsdom).
RUN npm install
# Node.js server runs on port 3000.
EXPOSE 3000
# Start server via NPM.
CMD npm start
