const { Given, When } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const homeFunc = require('../../main/PageFunctionalities/HomeFunctionality');
const loginFunc = require('../../main/PageFunctionalities/LoginFunctionality');
const device = require('../../support/libraries/Device');
const util = require('../../support/Utils/Utils');

Given(/^I am on the scripbox home page$/, async () => {
  await console.log('Given I am on the scripbox home page');
  const platform = util.getPlatform();
  device.setDevice(platform);
  if (device.isMobileWeb() || device.isDesktop()) {
    await console.log(`Launching web app mobileweb:${device.isMobileWeb()} desktop: ${device.isDesktop()}`);
    await browser.url('https://uat-andromeda-2-uat.scripbox.org'); // This to be driven from a config file
  } else if (device.isAndroidApp()) {
    await console.log('Launching Android app');
    expect(await homeFunc.androidHomePageLaunch()).to.be.true;
  }
});

When(/^I click on menu button$/, async () => {
  await console.log('When I click on menu button');
  await homeFunc.clickMenuButton();
  expect(await homeFunc.webHomePageLaunch()).to.be.true;
});

When(/^I click on login option$/, async () => {
  await console.log('When I click on login option');
  await homeFunc.login();
  expect(await loginFunc.firstLoginPageLaunched()).to.be.true;
});
