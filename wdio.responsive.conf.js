const { config } = require('./wdio.conf');

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
      'goog:chromeOptions': {
        args: [
          //"--headless",
          '--window-size=400,960'
          // '--window-size=250,700'
        ],
      },
    }],

    baseUrl: 'https://uat-andromeda-38-uat.scripbox.org'
    // baseUrl: 'https://stag-myscripbox-2-feature-qa-automation.scripbox.org/'

  }
};
