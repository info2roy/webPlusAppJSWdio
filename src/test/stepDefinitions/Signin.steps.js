const { Given, When, Then } = require('@wdio/cucumber-framework');
const signinFunc = require('../../main/PageFunctionalities/SigninFunctionality');


When(/^I login with username$/, async () => {
    console.log("When I login with username");
    await signinFunc.loginWithUsername("test+180756@scripbox.io");
    await browser.pause(1000);
});

When(/^I login to scripbox with username and password$/, async () => {
    console.log("When I login with username and password");
    await signinFunc.loginWithUsernameAndPassword("test+180756@scripbox.io", "folio334!cues");
    console.log("filled username and password");
    await browser.pause(1000);
});

