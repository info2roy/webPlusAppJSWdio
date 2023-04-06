const { config } = require('./wdio.conf');

exports.config = {
  ...config,

  ...{
    // hostname: process.env.SELENIUM_HUB_URL || '',
    // protocol: 'https',
    // port: 443,
    // path: '/',
    services: ['chromedriver'],

    capabilities: [{
      maxInstances: 3,
      browserName: 'chrome',
      acceptInsecureCerts: true,
      'goog:chromeOptions': {
        args: [
          '--no-sandbox',
          '--disable-infobars',
          // '--headless',
          '--disable-gpu',
          // '--window-size=400,960',
          '--disable-dev-shm-usage'
        ],
      },
    }],
  }
};
