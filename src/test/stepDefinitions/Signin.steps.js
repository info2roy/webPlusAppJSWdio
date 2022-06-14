const { Given, When, Then } = require('@wdio/cucumber-framework');
const signinFunc = require('../../main/PageFunctionalities/SigninFunctionality');
const expect = require('chai').expect;

When(/^I login with username$/, async () => {
        console.log("When I login with username");
        expect(await signinFunc.firstLoginPageLaunched()).to.be.true;
        await signinFunc.loginWithUsername("test+180756@scripbox.io");
});

When(/^I login to scripbox with username and password$/, async () => {
    console.log("When I login with username and password");
    expect(await signinFunc.secondLoginPageLaunched()).to.be.true;
    await signinFunc.loginWithUsernameAndPassword("test+180756@scripbox.io", "folio334!cues");
    console.log("filled username and password");
});

