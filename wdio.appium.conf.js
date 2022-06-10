const { config } = require('./wdio.conf')
const path = require('path');

exports.config = {
    ...config,
    // specs: [
    //     './src/test/features/Login.feature',
    // ],
    ...{
    //   host: '0.0.0.0',
    host: 'http://localhost',
      port: 4723,
      path: '/wd/hub',
      services: [['appium', {
        args: {
            address: 'localhost',
            port: 4723
        },
        logPath: './'

              }]
          ],

      // For Android bases mobile device
      capabilities: [{
        platformName: "android",
        "appium:deviceName": "Pixel 4 API 30",
        "appium:automationName": "UIAutomator2",
        "appium:app": path.join(process.cwd(),"src/support/Apps/UAT.apk"),
      }],

    //   cucumberOpts: {
    //     require: [
    //         './src/test/stepDefinitions/*.js',
    //     ]},

        // // For iOS bases mobile device
        // capabilities: [{
            
        // }],
    }
};