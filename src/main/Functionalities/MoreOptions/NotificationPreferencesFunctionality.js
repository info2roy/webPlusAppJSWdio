const NotificationPreferencesPage = require('../../Pages/MoreOptions/NotificationPreferencesPage');

class NotificationPreferencesFunctionality {
  async notificationPrefPageLaunched() {
    return (await NotificationPreferencesPage.notificationPreferencesPageHeaderIsDisplayed()) &&
    (await NotificationPreferencesPage.notificationPreferenceControlsAreDisplayedAndAreCorrect());
  }
}
module.exports = new NotificationPreferencesFunctionality();
