const { Then } = require('@wdio/cucumber-framework');
const NotificationPreferencesFunctionality = require('../../../main/Functionalities/MoreOptions/NotificationPreferencesFunctionality');

Then(/^I can update notifications preference control (.+) for channel (.+)$/, async (controlName, channel) => {
  await console.log(`I can update control ${controlName} for channel ${channel}`);
  NotificationPreferencesFunctionality.testToggleScenario(controlName, channel);
});

Then(/^I can update random group of notifications preference controls$/, async () => {
  await console.log('Then I can update random group of notifications preference controls');
  NotificationPreferencesFunctionality.testRandomToggleScenarios();
});
