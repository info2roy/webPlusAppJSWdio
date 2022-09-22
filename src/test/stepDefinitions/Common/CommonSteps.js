const { When, Then } = require('@wdio/cucumber-framework');
const CommonFunctionality = require('../../../main/Functionalities/Common/CommonFunctionality');
const { expect } = require('chai');

When(/^I refresh the current page$/, async () => {
  await console.log('When I refresh the current page');
  await browser.refresh();
});

When(/^I go back to previous page$/, async () => {
  await console.log('When I go back to previous page');
  await CommonFunctionality.goBackToPreviousPage();
});

When(/^I enter OTP as (\d+) for verification$/, async (otp) => {
  await console.log(`When I enter OTP as ${otp} for verification`);
  await CommonFunctionality.verifyWithOTP(otp);
});

Then(/^I should see "([^"]*)?" success message$/, async (message) => {
  await console.log(`I should see ${message} success message`);
  expect(await CommonFunctionality.assertMessage(message)).to.be.true;
});
