const { Given, When, Then } = require('@wdio/cucumber-framework');
const homeFunc = require('../../main/PageFunctionalities/HomeFunctionality')


Given(/^I am on the scripbox home page$/, async () => {
    console.log("CAPABILITIES");
    console.log(browser.capabilities);
    await browser.url("https://uat-andromeda-2-uat.scripbox.org");
    await browser.pause(10000);
});

When (/^I click on login tab$/, async () => {
    await homeFunc.login();
    await browser.pause(1000);

});

