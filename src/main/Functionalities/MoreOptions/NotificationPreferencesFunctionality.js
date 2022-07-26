const NotificationPreferencesPage = require('../../Pages/MoreOptions/NotificationPreferencesPage');

class NotificationPreferencesFunctionality {
  async testToggleScenario(controlName, channel) {
    await NotificationPreferencesPage.notificationPreferencesControlsTestToggleScenario(controlName, channel);
  }

  async testRandomToggleScenarios() {
    await NotificationPreferencesPage.notificationPreferenceControlsRandomToggleScenario();
  }
}
module.exports = new NotificationPreferencesFunctionality();
