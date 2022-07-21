const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const MoreOptionsFunctionality = require('../../../main/Functionalities/MoreOptions/MoreOptionsFunctionality');
const PersonalInfoFunctionality = require('../../../main/Functionalities/MoreOptions/PersonalInfoFunctionality');

Then(/^I should see all of the more options$/, async () => {
  await console.log('Then I should see all of the more options');
  expect(await MoreOptionsFunctionality.moreOptionsPageLaunched()).to.be.true;
});

When(/^I select personal information$/, async () => {
  await console.log('When I select personal information');
  await MoreOptionsFunctionality.selectPersonalInformation();
  expect(await PersonalInfoFunctionality.profileInfoPageLaunched()).to.be.true;
});

When(/^I select Account and Family Information$/, async () => {
  await console.log('I select Account and Family Information');
  await MoreOptionsFunctionality.selectAccountFamilyInformation();
  expect(await PersonalInfoFunctionality.accountFamilyInfoPageLaunched()).to.be.true;
});

When(/^I select Notification Preferences$/, async () => {
  await console.log('When I select Notification Preferences');
  await MoreOptionsFunctionality.selectNotificationPreferences();
});

When(/^I select Whatsapp Notifications$/, async () => {
  await console.log('When I select Whatsapp Notifications');
  await MoreOptionsFunctionality.selectWhatsappNotifications();
});
