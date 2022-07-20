const Utils = require('../../../support/Utils/Utils');
const NotificationPreferencesObjects = require('../../Objects/MoreOptions/NotificationPreferencesObjects');
const { expect } = require('chai');

class NotificationPreferencesPage {
  async notificationPreferencesPageHeaderIsDisplayed() {
    return await Utils.elementIsDisplayed(NotificationPreferencesObjects.notificationPreferencesPageHeader);
  }

  async notificationPreferenceControlsAreDisplayedAndAreCorrect() {
    let allDisplayed = true;
    allDisplayed = allDisplayed && (await Utils.elementIsDisplayed(NotificationPreferencesObjects.emailHeader)) &&
    (await Utils.elementIsDisplayed(NotificationPreferencesObjects.smsHeader));
    for (const [key, value] of Object.entries(NotificationPreferencesObjects.notificationPreferenceControls)) {
      allDisplayed = allDisplayed && (await Utils.elementIsDisplayed(
        NotificationPreferencesObjects.notificationPreferenceType(key))
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

  async notificationPreferencesControlsTestToggleScenario(controlName, channel) {
    const selector = NotificationPreferencesObjects.notificationPreferenceControls[controlName][channel];
    console.log(`${controlName}: ${JSON.stringify(selector)}`);
    const initialSrc = await Utils.getElementAttributeBySelector(selector, 'src');
    await Utils.clickElement(selector);
    const firstToggleSrc = await Utils.getElementAttributeBySelector(selector, 'src');
    expect(firstToggleSrc).to.be.equal(NotificationPreferencesObjects.toggleScenarios[initialSrc]);
    await Utils.clickElement(NotificationPreferencesObjects.updateChangesButton);
    expect(await Utils.elementIsDisplayed(NotificationPreferencesObjects.updateSuccessMessage)).to.be.true;
    await Utils.clickElement(selector);
    const secondToggleSrc = await Utils.getElementAttributeBySelector(selector, 'src');
    expect(secondToggleSrc).to.be.equal(NotificationPreferencesObjects.toggleScenarios[firstToggleSrc]);
    await Utils.clickElement(NotificationPreferencesObjects.updateChangesButton);
    expect(await Utils.elementIsDisplayed(NotificationPreferencesObjects.updateSuccessMessage)).to.be.true;
  }

  async notificationPreferenceControlsRandomToggleScenario() {
    Object.entries(NotificationPreferencesObjects.notificationPreferenceControls).forEach(async ([, value]) => {
      let num = Utils.getRandomInt(2);
      if (num === 1) {
        const initialSrc = await Utils.getElementAttributeBySelector(value.email, 'src');
        await Utils.clickElement(value.email);
        const toggleSrc = await Utils.getElementAttributeBySelector(value.email, 'src');
        expect(toggleSrc).to.be.equal(NotificationPreferencesObjects.toggleScenarios[initialSrc]);
      }
      num = Utils.getRandomInt(2);
      if (num === 1) {
        const initialSrc = await Utils.getElementAttributeBySelector(value.sms, 'src');
        await Utils.clickElement(value.sms);
        const toggleSrc = await Utils.getElementAttributeBySelector(value.sms, 'src');
        expect(toggleSrc).to.be.equal(NotificationPreferencesObjects.toggleScenarios[initialSrc]);
      }
    });
    await Utils.clickElement(NotificationPreferencesObjects.updateChangesButton);
    expect(await Utils.elementIsDisplayed(NotificationPreferencesObjects.updateSuccessMessage)).to.be.true;
  }
}
module.exports = new NotificationPreferencesPage();
