const { When } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const LoginFunctionality = require('../../main/Functionalities/LoginFunctionality');
const LoginData = require('../../config/data/structured/LoginData');

When(/^I login with username$/, async () => {
  await console.log('When I login with username');
  await LoginFunctionality.loginWithUsername(LoginData.username);
  expect(await LoginFunctionality.loginViaOTPPageLaunched()).to.be.true;
});

When(/^I click on continue with password$/, async () => {
  await console.log('When I I click on continue with password');
  await LoginFunctionality.continueWithPassword();
  expect(await LoginFunctionality.secondLoginPageLaunched()).to.be.true;
});

When(/^I login with password$/, async () => {
  await console.log('When I login with password');
  await LoginFunctionality.loginWithPassword(LoginData.password);
  await console.log('Filled username and password');
});
