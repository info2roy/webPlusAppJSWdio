const { Given, When, Then } = require('@wdio/cucumber-framework');
const { assert } = require('chai');
const wisdomFunc = require('../../main/PageFunctionalities/WisdomFunctionality');
// const expect = require('chai').expect;

const device = require('../../support/libraries/Device');

When(/^I navigate to Wisdom page$/, async () => {
  if (device.isMobileWeb()) {
  } else if (driver.isAndroid) {
    expect(
      await wisdomFunc.navigateToWisdomPage(),
    ).toBe.true;
  }
});

When(/^I scroll to see START CHECKPUP button$/, async () => {
  if (device.isMobileWeb()) {
  } else if (driver.isAndroid) {
    await wisdomFunc.startCheckup();
  }
});

When(/^I click on a BLOG$/, async () => {
  if (device.isMobileWeb()) {
  } else if (driver.isAndroid) {
    await wisdomFunc.openFirstBlog();
  }
});
