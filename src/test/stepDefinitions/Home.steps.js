const { Given, When, Then } = require('@wdio/cucumber-framework');
const homeFunc = require('../../main/PageFunctionalities/HomeFunctionality');
const device = require("../../support/libraries/Device");

Given(/^I am on the scripbox home page$/, async () => {
    console.log("When I am on the scripbox home page");
    console.log(browser.requestedCapabilities);
    if ("goog:chromeOptions" in browser.requestedCapabilities) {
        platform = "mobileweb";
    } else {
        platform = "desktop"
    }
    device.setDevice(platform);
    await browser.url("https://uat-andromeda-2-uat.scripbox.org");   
    await browser.pause(1000);
});

When (/^I click on menu button$/, async () => {
    console.log(`When I click on menu button => mobileweb: ${device.isMobileWeb()}`);
    if (device.isMobileWeb()) {
        await homeFunc.clickMenuButton();
        await browser.pause(1000);
    }
})

When (/^I click on login tab$/, async () => {
    console.log("When I click on login tab");
    await homeFunc.login();
    await browser.pause(1000);

});