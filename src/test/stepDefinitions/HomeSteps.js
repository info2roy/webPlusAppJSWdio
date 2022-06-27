const { Given, When } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const HomeFunctionality = require('../../main/Functionalities/HomeFunctionality');
const LoginFunctionality = require('../../main/Functionalities/LoginFunctionality');
const Device = require('../../support/libraries/Device');
const Utils = require('../../support/Utils/Utils');

Given(/^I am on the scripbox home page$/, async () => {
  await console.log('Given I am on the scripbox home page');
  const platform = Utils.getPlatform();
  Device.setDevice(platform);
  if (Device.isMobileWeb() || Device.isDesktop()) {
    await console.log(`Launching web app mobileweb:${Device.isMobileWeb()} desktop: ${Device.isDesktop()}`);
    await browser.url('/');
  } else if (Device.isAndroidApp()) {
    await console.log('Launching Android app');
    expect(await HomeFunctionality.androidHomePageLaunch()).to.be.true;
  }
});

When(/^I click on menu button$/, async () => {
  await console.log('When I click on menu button');
  await HomeFunctionality.clickMenuButton();
  expect(await HomeFunctionality.webHomePageLaunch()).to.be.true;
});

When(/^I click on login option$/, async () => {
  await console.log('When I click on login option');
  await HomeFunctionality.login();
  expect(await LoginFunctionality.firstLoginPageLaunched()).to.be.true;
});
