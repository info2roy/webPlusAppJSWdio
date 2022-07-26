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
