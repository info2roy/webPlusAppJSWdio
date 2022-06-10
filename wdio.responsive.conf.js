const { config } = require('./wdio.conf')
const path = require('path');

exports.config = {
    ...config,

    ...{
    host: 'http://localhost',
    port: 4723,
    path: '/wd/hub',
    services: ['chromedriver'], 

    // For mobile web platform
    capabilities: [{
      maxInstances: 1,
      browserName: 'chrome',
      acceptInsecureCerts: true,
      "goog:chromeOptions": {
        args: [
          //"--headless",
          "--window-size=400,960",
          "--use-mobile-user-agent",
        ],
      },
    }],

    }
};