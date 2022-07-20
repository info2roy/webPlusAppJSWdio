const Utils = require('../../../support/Utils/Utils');
const NotificationPreferenceObjects = require('../../Objects/MoreOptions/NotificationPreferenceObjects');
const { expect } = require('chai');

class NotificationPreferencesPage {
  async notificationPreferencesPageHeaderIsDisplayed() {
    return await Utils.elementIsDisplayed(NotificationPreferenceObjects.notificationPreferencesPageHeader);
  }

  async notificationPreferenceControlsAreDisplayedAndAreCorrect() {
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
      expect(await Utils.getElementAttributeBySelector(value.email, 'src')).to.be.oneOf(
        ['/images/icons/misc/toggle-on.svg', '/images/icons/misc/toggle-off.svg']
      );
      expect(await Utils.getElementAttributeBySelector(value.sms, 'src')).to.be.oneOf(
        ['/images/icons/misc/toggle-on.svg', '/images/icons/misc/toggle-off.svg']
      );
    }
    return allDisplayed;
  }
}
module.exports = new NotificationPreferencesPage();
