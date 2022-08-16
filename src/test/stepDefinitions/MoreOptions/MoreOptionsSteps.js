const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const MoreOptionsFunctionality = require('../../../main/Functionalities/MoreOptions/MoreOptionsFunctionality');
const DashboardFunctionality = require('../../../main/Functionalities/DashboardFunctionality');
const NotificationPreferencesFunctionality = require('../../../main/Functionalities/MoreOptions/NotificationPreferencesFunctionality');
const WhatappNotificationsFunctionality = require('../../../main/Functionalities/MoreOptions/WhatappNotificationsFunctionality');

Then(/^I should see all of the more options$/, async () => {
  await console.log('Then I should see all of the more options');
  expect(await MoreOptionsFunctionality.moreOptionsPageLaunched()).to.be.true;
});

When(/^I select option "Personal Information"$/, async () => {
  await console.log('When I select option "Personal Information');
  await MoreOptionsFunctionality.selectPersonalInformation();
  expect(await PersonalInfoFunctionality.profileInfoPageLaunched()).to.be.true;
});

When(/^I select option "Account and Family Information"$/, async () => {
  await console.log('I select option "Account and Family Information"');
  await MoreOptionsFunctionality.selectAccountFamilyInformation();
  expect(await PersonalInfoFunctionality.accountFamilyInfoPageLaunched()).to.be.true;
});

When(/^I select option "Statements and Tax Reports"$/, async () => {
  await console.log('When I select option "Statements and Tax Reports"');
  await MoreOptionsFunctionality.selectStatementsAndTaxReports();
  expect(await MfStatementfunctionality.statementsAndTaxReportPageLaunched()).to.be.true;
});

When(/^I select option "Notification Preferences"$/, async () => {
  await console.log('When I select option "Notification Preferences"');
  await MoreOptionsFunctionality.selectNotificationPreferences();
});

When(/^I select option "Whatsapp Notifications"$/, async () => {
  await console.log('When I select option "Whatsapp Notifications"');
  await MoreOptionsFunctionality.selectWhatsappNotifications();
});

When(/^I select option "About Scripbox"$/, async () => {
  await console.log('When I select option "About Scripbox"');
  await MoreOptionsFunctionality.selectAboutScripbox();
});

Then(/^I should see "About Scripbox" Page loaded$/, async () => {
  await console.log('Then I should see "About Scripbox" Page loaded');
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

When(/^I navigate to "([^"]*)?" Page from More Options Page$/, async (pageName) => {
  await console.log(`When I navigate to "${pageName}" Page from More Options Page`);
  expect(await MoreOptionsFunctionality.navigateToPage(pageName)).to.be.true;
});

When(/^I navigate to "(Service Agreement|Company)" Page from About Scripbox Page$/, async (pageName) => {
  await console.log(`When I navigate to "${pageName}" Page from About Scripbox Page`);
  expect(await MoreOptionsFunctionality.navigateToPageFromAboutScripboxPage(pageName)).to.be.true;
});

Then(/^I logout of Scripbox$/, async () => {
  await console.log('Then I logout of Scripbox');
  await DashboardFunctionality.open();
  await DashboardFunctionality.openMoreOptions();
  await MoreOptionsFunctionality.selectLogout();
});

Then(/^I can update notifications preference control (.+) for channel (.+)$/, async (controlName, channel) => {
  await console.log(`I can update control ${controlName} for channel ${channel}`);
  NotificationPreferencesFunctionality.testToggleScenario(controlName, channel);
});

Then(/^I can update random group of notifications preference controls$/, async () => {
  await console.log('Then I can update random group of notifications preference controls');
  NotificationPreferencesFunctionality.testRandomToggleScenarios();
});

Then(/^I can update whatsapp notifications control$/, async () => {
  await console.log('Then I can update whatsapp notifications control');
  await WhatappNotificationsFunctionality.testToggleScenario();
});
