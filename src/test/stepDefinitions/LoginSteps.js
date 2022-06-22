const { When } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const loginFunc = require('../../main/PageFunctionalities/LoginFunctionality');

When(/^I login with username$/, async () => {
  console.log('When I login with username');
  await loginFunc.loginWithUsername('test+180756@scripbox.io'); // uat
  // await loginFunc.loginWithUsername("mahesh.bale@scripbox.com");
  expect(await loginFunc.secondLoginPageLaunched()).to.be.true;
});

When(/^I login with username and password$/, async () => {
  console.log('When I login with username and password');
  await loginFunc.loginWithUsernameAndPassword('test+180756@scripbox.io', 'folio334!cues');
  // await loginFunc.loginWithUsernameAndPassword("mahesh.bale@scripbox.com", "Aaasssddd123$");
  console.log('filled username and password');
});
