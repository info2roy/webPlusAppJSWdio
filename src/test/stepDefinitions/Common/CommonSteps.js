const { When, Then } = require('@wdio/cucumber-framework');
const CommonFunctionality = require('../../../main/Functionalities/Common/CommonFunctionality');
const Utils = require('../../../support/Utils/Utils');
const { expect } = require('chai');
const Utils = require('../../../support/Utils/Utils');

When(/^I refresh the current page$/, async () => {
  await console.log('When I refresh the current page');
  await browser.refresh();
});

When(/^I go back to previous page$/, async () => {
  await console.log('When I go back to previous page');
  await CommonFunctionality.goBackToPreviousPage();
});

When(/^I click on "([^"]*)?"$/, async (button) => {
  await console.log(`I click on ${button}`);
  await Utils.clickElementByText(button);
});

When(/^I select first date of next month$/, async () => {
});

When(/^I enter OTP as (\d+) for verification$/, async (otp) => {
  await console.log(`When I enter OTP as ${otp} for verification`);
  await CommonFunctionality.verifyWithOTP(otp);
});

Then(/^I should see "([^"]*)?" success message$/, async (message) => {
  await console.log(`I should see ${message} success message`);
  expect(await CommonFunctionality.assertMessage(message)).to.be.true;
});

When(/^I validate header "([^"]*)?"$/, async (header) => {
  console.log(`I validate header ${header}`);
  expect(await Utils.validateHeaderPresent(header)).to.be.true;
});
