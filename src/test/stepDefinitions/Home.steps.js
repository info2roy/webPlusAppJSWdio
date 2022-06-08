const { Given, When, Then } = require('@wdio/cucumber-framework');
const homeFunc = require('../../main/PageFunctionalities/HomeFunctionality')


Given(/^I am on the scripbox home page$/, async () => {
    await browser.url("https://uat-andromeda-38-uat.scripbox.org");
});

When (/^I click on login tab$/, async () => {
    await homeFunc.login();
    await browser.pause(1000);

});

