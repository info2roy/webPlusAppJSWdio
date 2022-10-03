const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const PersonalInfoFunctionality = require('../../../main/Functionalities/MoreOptions/PersonalInfoFunctionality');
const CommonFunctionality = require('../../../main/Functionalities/Common/CommonFunctionality');

When(/^I update the profile picture$/, async () => {
  await console.log('When I update the profile picture');
  await PersonalInfoFunctionality.updateProfilePicture();
});

Then(/^The picture is uploaded successfully$/, async () => {
  await console.log('Then The picture is uploaded successfully');
});

Then(/^I click edit "([^"]*)?"$/, async (option) => {
  await console.log(`Check stepdef method ${option}`);
  await PersonalInfoFunctionality.clickEdit(option);
});

When(/^I enter data for (.+) with value (.+)$/, async (option, value) => {
  await console.log(`Entering data for ${option}`);
  await PersonalInfoFunctionality.updateProfileData(option, value);
});

Then(/^I see message (.+) for (.+)$/, async (uiError, data) => {
  await console.log(`I see message ${uiError}`);
  expect(await CommonFunctionality.validateUIMessage(uiError, data)).to.be.true;
});

Then(/^I update changes$/, async () => {
  await console.log('Clicking on update changes');
  await PersonalInfoFunctionality.updateChanges();
});
