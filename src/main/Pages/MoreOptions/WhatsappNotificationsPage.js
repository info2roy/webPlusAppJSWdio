const Utils = require('../../../support/Utils/Utils');
const WhatsappNotificationsObjects = require('../../Objects/MoreOptions/WhatsappNotificationsObjects');
const MoreOptionsObjects = require('../../Objects/MoreOptions/MoreOptionsObjects');
const { expect } = require('chai');

class WhatsappNotificationsPage {
  async whatsappNotificationsPageHeaderIsDisplayed() {
    return await Utils.elementIsDisplayed(WhatsappNotificationsObjects.whatsappPreferencesPageHeader);
  }

  async whatsappNotificationsPageBodyIsDisplayed() {
    return (await Utils.elementIsDisplayed(WhatsappNotificationsObjects.whatsappPreferencesPageSummmaryHeader)) &&
      (await Utils.elementIsDisplayed(WhatsappNotificationsObjects.enableWhatsapp)) &&
      (await Utils.elementIsDisplayed(WhatsappNotificationsObjects.enableWhatsappImage));
  }

  async whatsappNotificationsTestToggleScenario() {
    const selector = WhatsappNotificationsObjects.enableWhatsappImage;
    const initialSrc = await Utils.getElementAttributeBySelector(selector, 'src');
    await Utils.clickElement(selector);
    const firstToggleSrc = await Utils.getElementAttributeBySelector(selector, 'src');
    expect(firstToggleSrc).to.be.equal(MoreOptionsObjects.communicationsToggleScenarios[initialSrc]);
    await Utils.clickElement(selector);
    const secondToggleSrc = await Utils.getElementAttributeBySelector(selector, 'src');
    expect(secondToggleSrc).to.be.equal(MoreOptionsObjects.communicationsToggleScenarios[firstToggleSrc]);
  }
}
module.exports = new WhatsappNotificationsPage();
