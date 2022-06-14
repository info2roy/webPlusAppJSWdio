const { config } = require('./wdio.conf')
const path = require('path');

exports.config = {
    ...config,
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
        //"appium:deviceName": "Pixel 4 API 30",
        "appium:deviceName": "Nexus S API 29",
        "appium:platformVersion": "11.0",
        "appium:automationName": "UIAutomator2",
        "appium:app": path.join(process.cwd(),"src/support/Apps/app-universal-release.apk"),

        "appium:appPackage": "com.scripbox.takecharge",
        "appium:appActivity": "com.scripbox.takecharge.MainActivity",
      }],

        // // For iOS bases mobile device
        // capabilities: [{
            
        // }],
    }
};