const { When } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const loginFunc = require('../../main/PageFunctionalities/LoginFunctionality');

When(/^I login with username$/, async () => {
  await console.log('When I login with username');
  await loginFunc.loginWithUsername('test+180756@scripbox.io'); // uat
  expect(await loginFunc.secondLoginPageLaunched()).to.be.true;
});

When(/^I login with username and password$/, async () => {
  await console.log('When I login with username and password');
  await loginFunc.loginWithUsernameAndPassword('test+180756@scripbox.io', 'folio334!cues');
  await console.log('Filled username and password');
});
