const { Then } = require('@wdio/cucumber-framework');
const NotificationPreferencesFunctionality = require('../../../main/Functionalities/MoreOptions/NotificationPreferencesFunctionality');
const { expect } = require('chai');

Then(/^I should see Notification Preferences Page loaded$/, async () => {
  await console.log('Then I should see Notification Preferences Page loaded');
  expect(await NotificationPreferencesFunctionality.notificationPrefPageLaunched()).to.be.true;
});
