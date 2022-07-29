const { config } = require('./wdio.conf');

exports.config = {
  ...config,

  ...{
    host: 'http://localhost',
    // port: 4723,
    port: 4444,
    path: '/wd/hub',
    /*
    Enable chromedriver service to execute tests in local. 
    Command to execute: ./node_modules/.bin/wdio wdio.responsive.conf.js
    */
    // services: ['chromedriver'],
    /*
    Enable docker service to execute tests in docker. 
    Command to execute: npm test
    */
    services: ['docker'], 


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
