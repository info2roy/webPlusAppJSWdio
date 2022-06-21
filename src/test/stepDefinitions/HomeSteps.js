const { Given, When, Then } = require('@wdio/cucumber-framework');
// const { default: DriverCommand } = require('appium/build/lib/cli/driver-command');
const homeFunc = require('../../main/PageFunctionalities/HomeFunctionality');
const HomePage = require('../../main/Pages/HomePage');
const loginFunc = require('../../main/PageFunctionalities/LoginFunctionality')
const device = require("../../support/libraries/Device");
const expect = require('chai').expect
const util = require('../../support/Utils/Utils');


Given(/^I am on the scripbox home page$/, async () => {
    console.log("Given I am on the scripbox home page");
    let platform = util.getPlatform();
    device.setDevice(platform);

    if (device.isMobileWeb() || device.isDesktop()){
        console.log(`Launching web app mobileweb:${device.isMobileWeb()} desktop: ${device.isDesktop()}`);
        await browser.url("https://uat-andromeda-2-uat.scripbox.org");   // This to be driven from a config file
        //await browser.url("https://scripbox.com");   // This to be driven from a config file
    }
    else if ( device.isAndroidApp() ){
        console.log("Launching Android app")
        expect(await homeFunc.androidHomePageLaunch()).to.be.true
    }
});

When (/^I click on menu button$/, async () => {
    console.log("When I click on menu button");
    await homeFunc.clickMenuButton();
    expect(await homeFunc.webHomePageLaunch()).to.be.true;
})

When (/^I click on login tab$/, async () => {
    console.log("When I click on login tab");
    await homeFunc.login();
    expect(await loginFunc.firstLoginPageLaunched()).to.be.true
});