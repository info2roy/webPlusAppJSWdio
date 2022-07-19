const { Then } = require('@wdio/cucumber-framework');
const NotificationPreferencesFunctionality = require('../../../main/Functionalities/MoreOptions/NotificationPreferencesFunctionality');

Then(/^I should see Notification Preferences Page loaded$/, async () => {
  await console.log('Then I should see Notification Preferences Page loaded');
  await NotificationPreferencesFunctionality.notificationPrefPageLaunched();
});
