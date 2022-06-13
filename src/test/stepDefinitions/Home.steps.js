const { Given, When, Then } = require('@wdio/cucumber-framework');
// const { default: DriverCommand } = require('appium/build/lib/cli/driver-command');
const homeFunc = require('../../main/PageFunctionalities/HomeFunctionality');
const HomePage = require('../../main/Pages/HomePage');
const device = require("../../support/libraries/Device");
const expect = require('chai').expect


Given(/^I am on the scripbox home page$/, async () => {
    console.log("When I am on the scripbox home page");
    console.log(browser.requestedCapabilities);
    if ("goog:chromeOptions" in browser.requestedCapabilities) {
        platform = "mobileweb";
    } else if (driver.isAndroid){
        platform = "androidApp" 
    }
    else
        platform = "desktop"

    console.log(`platform ${platform}`)

    device.setDevice(platform);
    if (device.isMobileWeb() || device.isDesktop()){
        console.log(`Launching web app mobileweb:${device.isMobileWeb()} desktop: ${device.isDesktop()}`);
        await browser.url("https://uat-andromeda-2-uat.scripbox.org");   
        await browser.pause(1000);
    }
    else if ( device.isAndroidApp() ){
        console.log("Launching Android app")
        expect(await homeFunc.androidHomePageLaunch()).to.be.true
    }
    
});

When (/^I click on menu button$/, async () => {
    console.log(`When I click on menu button => mobileweb: ${device.isMobileWeb()}`);
    if (device.isMobileWeb()) {
        expect(await homeFunc.responsiveHomePageLaunch()).to.be.true;
        await homeFunc.clickMenuButton();
        await browser.pause(1000);
    }
    else if (driver.isAndroid){
        
    }
})

When (/^I click on login tab$/, async () => {
    console.log("When I click on login tab");
    expect(await homeFunc.webHomePageLaunch()).to.be.true;
    await homeFunc.login();
    await browser.pause(1000);

});