const { When } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const loginFunc = require('../../main/PageFunctionalities/LoginFunctionality');
const loginCreds = require('../data/structured/Login');

When(/^I login with username$/, async () => {
  await console.log('When I login with username');
  await loginFunc.loginWithUsername(loginCreds.username);
  expect(await loginFunc.secondLoginPageLaunched()).to.be.true;
});

When(/^I login with username and password$/, async () => {
  await console.log('When I login with username and password');
  await loginFunc.loginWithUsernameAndPassword(loginCreds.username, loginCreds.password);
  await console.log('Filled username and password');
});

When(/^I login with "([^"]*)"$/, async (username) => {
  await console.log(`When I login with username:${username}`);
  await loginFunc.loginWithUsername(username);
  expect(await loginFunc.secondLoginPageLaunched()).to.be.true;
});

When(/^I login with "([^"]*)" and "([^"]*)"$/, async (username, password) => {
  await console.log(`When I login with username:${username} and password:${password}`);
  await loginFunc.loginWithUsernameAndPassword(username, password);
});
