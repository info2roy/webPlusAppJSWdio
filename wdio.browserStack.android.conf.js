const { config } = require('./wdio.conf');

config.user = 'priyankarroy_QvPVx0'; // changes here
config.key = 'obEaBaJdQRn6wxxQmWxj'; // changes here
exports.config = {
  ...config,
  ...{

    services: ['browserstack'],

    capabilities: [{
      platformName: 'android',
      'appium:deviceName': 'Google Pixel 3',
      'appium:platformVersion': '9.0',
      'appium:automationName': 'UIAutomator2',
      'appium:app': 'bs://3e33908996a8458b7616d5f32618d3b15119ea96', // changes here - CURL returns custom id
      'appium:autoGrantPermissions': true
    }],
  }
};
