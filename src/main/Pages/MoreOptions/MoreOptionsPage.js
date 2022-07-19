const Utils = require('../../../support/Utils/Utils');
const MoreOptionsPageObjects = require('../../Objects/MoreOptions/MoreOptionsPageObjects');
const Device = require('../../../support/libraries/Device');

class MoreOptionsPage {

  async scripboxImageIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsPageObjects.scripboxImage);
  }

  async bellImageIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsPageObjects.bellImage);
  }

  async supportImageIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsPageObjects.supportImage);
  }

  async addAFamilyMemberButtonIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsPageObjects.addAFamilyMemberButton);
  }

  async yourProfileHeaderIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsPageObjects.yourProfileHeader);
  }

  async yourProfileImageIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsPageObjects.yourProfileImage);
  }

  async personalInfoOptionIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsPageObjects.personalInfoOption);
  }

  async accountFamilyInformationOptionIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsPageObjects.accountFamilyInformationOption);
  }

  async statementsAndTaxReportsOptionIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsPageObjects.statementsAndTaxReportsOption);
  }

  async appSettingsHeaderIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsPageObjects.appSettingsHeader);
  }

  async appSettingsImageIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsPageObjects.appSettingsImage);
  }

  async notificationPreferencesOptionIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsPageObjects.notificationPreferencesOption);
  }

  async whatsappNotificationsOptionIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsPageObjects.whatsappNotificationsOption);
  }

  async aboutScripboxOptionIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsPageObjects.aboutScripboxOption);
  }

  async referAFriendOptionIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsPageObjects.referAFriendOption);
  }

  async giveFeedbackOptionIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsPageObjects.giveFeedbackOption);
  }

  async logoutOptionIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsPageObjects.logoutOption);
  }

  async whatsappImageIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsPageObjects.whatsAppImage);
  }

  async linkedinImageIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsPageObjects.linkedInImage);
  }

  async facebookImageIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsPageObjects.facebookImage);
  }

  async twitterImageIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsPageObjects.twitterImage);
  }

  async selectPersonalInformation() {
    if (Device.isAndroidApp()) {
      await console.log('AndroidApp: click on Personal Infomation requires scrolling until it comes into view');
      await Utils.scrollVerticalUntilTextIntoViewForAndroid(MoreOptionsPageObjects.personalInfoText);
    }
    await Utils.clickElement(MoreOptionsPageObjects.personalInfoOption);
  }

  async selectAccountFamilyInformation() {
    await Utils.clickElement(MoreOptionsPageObjects.accountFamilyInformationOption);
  }

}
module.exports = new MoreOptionsPage();
