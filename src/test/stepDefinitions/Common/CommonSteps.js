const { When, Then } = require('@wdio/cucumber-framework');
const CommonFunctionality = require('../../../main/Functionalities/Common/CommonFunctionality');
const Utils = require('../../../support/Utils/Utils');
const { expect } = require('chai');

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
  console.log(`I validate header "${header}"`);
  expect(await Utils.isTextDisplayed(header)).to.be.true;
});

When(/^I select radio option (.+)$/, async (option) => {
  console.log(`I select radio option ${option}`);
  await Utils.clickRadioButton(option);
});

When(/^I enter field (.+) with data (.+)$/, async (fieldId, value) => {
  console.log(`I enter field ${fieldId} with data ${value}`);
  await Utils.enterValueInField(fieldId, value);
});

When(/^I validate button "([^"]*)?"$/, async (buttonText) => {
  console.log(`I validate button ${buttonText}`);
  expect(await Utils.isButtonDisplayed(buttonText)).to.be.true;
});

Then(/^I see message (.+) for (.+)$/, async (uiError, data) => {
  await console.log(`I see message ${uiError}`);
  expect(await CommonFunctionality.validateUIMessage(uiError, data)).to.be.true;
});

Then(/^I see data-error (.+) for (.+)$/, async (uiError, data) => {
  await console.log(`I see data-error ${uiError}`);
  expect(await CommonFunctionality.validateUIDataError(uiError, data)).to.be.true;
});

When(/^I enter data for (.+) with value (.+)$/, async (option, value) => {
  await console.log(`Entering data for ${option}`);
  if (!(value.startsWith('Default:'))) {
    await CommonFunctionality.updateProfileData(option, value);
  }
});

// Following method was started for readin g table data from feature file.
// When(/^Testing "<Option>"$/,  (data) => {
//   await console.log(`Reading data`);
//   // const dataTable = data.raw()
//   // dataTable.forEach((linkType) => {
//   //   console.log('linkType in steps:' + linkType)
//   // })
//   // await console.log("Printing first row data  ->              "+dataTable.get(1).get(1));
// });

// Following method was started for readin g table data from feature file.
// Then(/^Testing "<Option>" and "<value>"$/, async (links) => {
//   await console.log(`Reading data`);
//   const linksarray = links.raw();
//   console.log ("Key - " + linksarray[0][0]);
//   console.log ("Value - " + linksarray[0][1]);
//   linksarray.forEach((linkType) => {
//     console.log('linkType in steps:' + linkType)
//   })
// })

When(/^I scroll until ([^"]+) is visible$/, async (text) => {
  console.log(`I scroll until ${text} is visible`);
  await Utils.scrollUntilTextIsDisplayed(text);
});

When(/^I scroll until "([^"]*)?" is visible$/, async (text) => {
  console.log(`I scroll until "${text}" is visible`);
  await Utils.scrollUntilTextIsDisplayed(text);
});

When(/^I click on button containing "([^"]*)?" and (\d+)$/, async (text, sipAmount) => {
  console.log(`I click on button containing "${text}" and ${sipAmount}`);
  await Utils.clickButtonByTextAndAmount(text, sipAmount);
});

When(/^I select checkbox (.+)$/, async (checkboxId) => {
  console.log(`I select checkbox ${checkboxId}`);
  await Utils.setCheckBoxById(checkboxId);
});
