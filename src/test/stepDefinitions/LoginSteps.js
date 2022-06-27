const { When } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const LoginFunctionality = require('../../main/Functionalities/LoginFunctionality');
const LoginData = require('../data/structured/LoginData');

When(/^I login with username$/, async () => {
  await console.log('When I login with username');
  await LoginFunctionality.loginWithUsername(LoginData.username);
  expect(await LoginFunctionality.secondLoginPageLaunched()).to.be.true;
});

When(/^I login with username and password$/, async () => {
  await console.log('When I login with username and password');
  await LoginFunctionality.loginWithUsernameAndPassword(LoginData.username, LoginData.password);
  await console.log('Filled username and password');
});

When(/^I login with "([^"]*)"$/, async (username) => {
  await console.log(`When I login with username:${username}`);
  await LoginFunctionality.loginWithUsername(username);
  expect(await LoginFunctionality.secondLoginPageLaunched()).to.be.true;
});

When(/^I login with "([^"]*)" and "([^"]*)"$/, async (username, password) => {
  await console.log(`When I login with username:${username} and password:${password}`);
  await LoginFunctionality.loginWithUsernameAndPassword(username, password);
});
