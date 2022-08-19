const { config } = require('./wdio.conf');

exports.config = {
  ...config,

  ...{
    host: process.env.SELENIUM_HUB_URL || '',
    /*
    Enable chromedriver service to execute tests in local.
    Command to execute: ./node_modules/.bin/wdio wdio.responsive.conf.js
    */
    // services: ['chromedriver'],
    /*
    Enable docker service and port to execute tests in docker.
    Command to execute: npm test
    */
    hostname: process.env.SELENIUM_HUB_URL || 'localhost',
    protocol: 'https',
    port: 443,
    path: '/',
    services: ['docker'],

    // For mobile web platform
    capabilities: [{
      maxInstances: 1,
      browserName: 'chrome',
      acceptInsecureCerts: true,
      'goog:chromeOptions': {
        args: [
          '--headless',
          '--window-size=400,960',
          '--disable-dev-shm-usage'
          // '--window-size=250,700'
        ],
      },
    }],

    // baseUrl: 'https://stag-myscripbox-2-feature-qa-automation.scripbox.org/'
  }
};
