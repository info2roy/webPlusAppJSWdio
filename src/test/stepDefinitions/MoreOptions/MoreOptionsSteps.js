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

When(/^I select About Scripbox$/, async () => {
  await console.log('When I select About Scripbox');
  await MoreOptionsFunctionality.selectAboutScripbox();
});

Then(/^I should see About Scripbox Page loaded$/, async () => {
  await console.log('Then I should see About Scripbox Page loaded');
  expect(await MoreOptionsFunctionality.aboutScripboxPageLaunched()).to.be.true;
});

When(/^I navigate to "Service Agreement" Page$/, async () => {
  await console.log('When I navigate to "Service Agreement" Page');
  await MoreOptionsFunctionality.selectAboutScripboxServiceAgreement();
});

Then(/^I should see "Service Agreement" Page loaded$/, async () => {
  await console.log('Then I should see "Service Agreement" Page loaded');
  expect(await MoreOptionsFunctionality.aboutScripboxServiceAgreementPageLaunched()).to.be.true;
});

Then(/^I go back to "About Scripbox" Page$/, async () => {
  await console.log('Then I go back to "About Scripbox" Page');
  await MoreOptionsFunctionality.goBackToPreviousPage();
});

When(/^I navigate to "Company" Page$/, async () => {
  await console.log('When I navigate to "Company" Page');
  await MoreOptionsFunctionality.selectAboutScripboxCompany();
});

Then(/^I should see "Company" Page loaded$/, async () => {
  await console.log('Then I should see "Company" Page loaded');
  expect(await MoreOptionsFunctionality.aboutScripboxCompanyPageLaunched()).to.be.true;
});

When(/^I select Refer a Friend$/, async () => {
  await console.log('When I select Refer a Friend');
  await MoreOptionsFunctionality.selectReferAFriend();
});

Then(/^I should see Refer a Friend Page loaded$/, async () => {
  await console.log('Then I should see Refer a Friend Page loaded');
  expect(await MoreOptionsFunctionality.referAFriendPageLaunched()).to.be.true;
});

When(/^I select Give Feedback$/, async () => {
  await console.log('When I select Give Feedback');
  await MoreOptionsFunctionality.selectGiveFeedback();
});

Then(/^I should see Give Feedback Page loaded$/, async () => {
  await console.log('Then I should see Give Feedback Page loaded');
  expect(await MoreOptionsFunctionality.giveFeedbackPageLaunched()).to.be.true;
});