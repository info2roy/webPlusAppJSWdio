const { When } = require('@wdio/cucumber-framework');
const loginFunc = require('../../main/PageFunctionalities/LoginFunctionality')
const expect = require('chai').expect;

When(/^I login with username$/, async () => {
    console.log("When I login with username");
    expect(await loginFunc.firstLoginPageLaunched()).to.be.true;
    await loginFunc.loginWithUsername("test+167650@scripbox.io"); //uat
    //await loginFunc.loginWithUsername("mahesh.bale@scripbox.com");
});

When(/^I login to scripbox with username and password$/, async () => {
    console.log("When I login to scripbox with username and password");
    expect(await loginFunc.secondLoginPageLaunched()).to.be.true;
    await loginFunc.loginWithUsernameAndPassword("test+167650@scripbox.io", "folio334!cues");
    //await loginFunc.loginWithUsernameAndPassword("mahesh.bale@scripbox.com", "Aaasssddd123$");
    console.log("filled username and password");
});
