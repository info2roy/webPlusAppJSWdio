const { When } = require('@wdio/cucumber-framework');
const WisdomFunctionality = require('../../main/Functionalities/WisdomFunctionality');

When(/^I navigate to Wisdom page$/, async () => {
  // if (device.isMobileWeb()) {

  // } else if (driver.isAndroid) {
  //   expect(
  await WisdomFunctionality.navigateToWisdomPage();
  //   ).toBe.true;
  // }
});

When(/^I scroll to see START CHECKPUP button$/, async () => {
  // if (device.isMobileWeb()) {
  // } else if (driver.isAndroid) {
  await WisdomFunctionality.startCheckup();
  // }
});

When(/^I click on a BLOG$/, async () => {
  // if (device.isMobileWeb()) {
  // } else if (driver.isAndroid) {
  await WisdomFunctionality.openFirstBlog();
  // }
});
