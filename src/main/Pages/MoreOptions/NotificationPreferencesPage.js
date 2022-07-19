const Utils = require('../../../support/Utils/Utils');
const NotificationPreferenceObjects = require('../../Objects/MoreOptions/NotificationPreferenceObjects');

class NotificationPreferencesPage {
  async notificationPreferencesPageHeaderIsDisplayed() {
    return await Utils.elementIsDisplayed(NotificationPreferenceObjects.notificationPreferencesPageHeader);
  }

  async notificationPreferenceControlsAreDisplayed() {
    let allDisplayed = true;
    for (const [key, value] of Object.entries(NotificationPreferenceObjects.notificationPreferenceControls)) {
      console.log(`${key}: ${JSON.stringify(value)}`);
      allDisplayed = allDisplayed && (await Utils.elementIsDisplayed(
        NotificationPreferenceObjects.notificationPreferenceType(key))
      );
      allDisplayed = allDisplayed && (await Utils.elementIsDisplayed(value.email)) &&
        (await Utils.elementIsDisplayed(value.sms));
      if (!allDisplayed) {
        break;
      }
    }
    return allDisplayed;
  }
}
module.exports = new NotificationPreferencesPage();
