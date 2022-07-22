const { Then } = require('@wdio/cucumber-framework');
const NotificationPreferencesFunctionality = require('../../../main/Functionalities/MoreOptions/NotificationPreferencesFunctionality');
const { expect } = require('chai');

Then(/^I should see Notification Preferences Page loaded$/, async () => {
  await console.log('Then I should see Notification Preferences Page loaded');
  expect(await NotificationPreferencesFunctionality.notificationPrefPageLaunched()).to.be.true;
});

Then(/^I can update control (.+) for channel (.+)$/, async (controlName, channel) => {
  await console.log(`I can update control ${controlName} for channel ${channel}`);
  NotificationPreferencesFunctionality.testToggleScenario(controlName, channel);
});

Then(/^I can update random group of controls$/, async () => {
  await console.log('Then I can update random group of controls');
  NotificationPreferencesFunctionality.testRandomToggleScenarios();
});
