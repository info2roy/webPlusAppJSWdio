const NotificationPreferencesPage = require('../../Pages/MoreOptions/NotificationPreferencesPage');

class NotificationPreferencesFunctionality {
  async notificationPrefPageLaunched() {
    return (await NotificationPreferencesPage.notificationPreferencesPageHeaderIsDisplayed()) &&
    (await NotificationPreferencesPage.notificationPreferenceControlsAreDisplayedAndAreCorrect());
  }

  async testToggleScenario(controlName, channel) {
    await NotificationPreferencesPage.notificationPreferencesControlsTestToggleScenario(controlName, channel);
  }

  async testRandomToggleScenarios() {
    await NotificationPreferencesPage.notificationPreferenceControlsRandomToggleScenario();
  }
}
module.exports = new NotificationPreferencesFunctionality();
