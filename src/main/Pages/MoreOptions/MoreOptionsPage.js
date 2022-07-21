const Utils = require('../../../support/Utils/Utils');
const MoreOptionsObjects = require('../../Objects/MoreOptions/MoreOptionsObjects');
const Device = require('../../../support/libraries/Device');

class MoreOptionsPage {

  async scripboxImageIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.scripboxImage);
  }

  async bellImageIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.bellImage);
  }

  async supportImageIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.supportImage);
  }

  async addAFamilyMemberButtonIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.addAFamilyMemberButton);
  }

  async yourProfileHeaderIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.yourProfileHeader);
  }

  async yourProfileImageIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.yourProfileImage);
  }

  async personalInfoOptionIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.personalInfoOption);
  }

  async accountFamilyInformationOptionIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.accountFamilyInformationOption);
  }

  async statementsAndTaxReportsOptionIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.statementsAndTaxReportsOption);
  }

  async appSettingsHeaderIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.appSettingsHeader);
  }

  async appSettingsImageIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.appSettingsImage);
  }

  async notificationPreferencesOptionIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.notificationPreferencesOption);
  }

  async whatsappNotificationsOptionIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.whatsappNotificationsOption);
  }

  async aboutScripboxOptionIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.aboutScripboxOption);
  }

  async referAFriendOptionIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.referAFriendOption);
  }

  async giveFeedbackOptionIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.giveFeedbackOption);
  }

  async logoutOptionIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.logoutOption);
  }

  async whatsappImageIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.whatsAppImage);
  }

  async linkedinImageIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.linkedInImage);
  }

  async facebookImageIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.facebookImage);
  }

  async twitterImageIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.twitterImage);
  }

  async selectPersonalInformation() {
    if (Device.isAndroidApp()) {
      await console.log('AndroidApp: click on Personal Infomation requires scrolling until it comes into view');
      await Utils.scrollVerticalUntilTextIntoViewForAndroid(MoreOptionsObjects.personalInfoText);
    }
    await Utils.clickElement(MoreOptionsObjects.personalInfoOption);
  }

  async selectAccountFamilyInformation() {
    await Utils.clickElement(MoreOptionsObjects.accountFamilyInformationOption);
  }

  async selectNotificationPreferences() {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid(MoreOptionsObjects.notificationPreferencesOptionText);
    } else if(Device.isWeb()) {
      await Utils.scrollAndMoveToElement(MoreOptionsObjects.notificationPreferencesOption);
    }
    await Utils.clickElement(MoreOptionsObjects.notificationPreferencesOption);
  }

  async selectWhatsappNotifications() {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid(MoreOptionsObjects.whatsAppNotificationsOptionText);
    } else if(Device.isWeb()) {
      await Utils.scrollAndMoveToElement(MoreOptionsObjects.whatsappNotificationsOption);
    }
    await Utils.clickElement(MoreOptionsObjects.whatsappNotificationsOption);
  }

  //Begin About Scripbox
  async selectAboutScripbox() {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid(MoreOptionsObjects.aboutScripboxOptionText);
    } else if(Device.isWeb()) {
      await Utils.scrollAndMoveToElement(MoreOptionsObjects.aboutScripboxOption);
    }
    await Utils.clickElement(MoreOptionsObjects.aboutScripboxOption);
  }

  async aboutScripboxPageHeaderIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.aboutScripboxPageHeader);
  }

  async aboutScripboxPageBodyIsDisplayed() {
    return (await Utils.elementIsDisplayed(MoreOptionsObjects.aboutScripboxPageServiceAgreement)) &&
      (await Utils.elementIsDisplayed(MoreOptionsObjects.aboutScripboxPageCompany));
  }

  async selectAboutScripboxServiceAgreement() {
    await Utils.clickElement(MoreOptionsObjects.aboutScripboxPageServiceAgreement);
  }

  async aboutScripboxServiceAgreementPageHeaderIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.aboutScripboxPageServiceAgreementPageHeader);
  }

  async aboutScripboxServiceAgreementPageAgreementNameIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.aboutScripboxPageServiceAgreementPageAgreementName);
  }

  async pressBackButton() {
    await Utils.clickElement(MoreOptionsObjects.backButton);
  }

  async selectAboutScripboxCompany() {
    await Utils.clickElement(MoreOptionsObjects.aboutScripboxPageCompany);
  }

  async aboutScripboxCompanyPageHeaderIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.aboutScripboxPageCompanyPageHeader);
  }

  async aboutScripboxPageCompanyPageNameLabelIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.aboutScripboxPageCompanyPageNameLabel);
  }

  async aboutScripboxPageCompanyPageCompanyNameIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.aboutScripboxPageCompanyPageCompanyName);
  }
  //End About Scripbox

  async selectReferAFriend() {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid(MoreOptionsObjects.referAFriendOptionText);
    } else if(Device.isWeb()) {
      await Utils.scrollAndMoveToElement(MoreOptionsObjects.referAFriendOption);
    }
    await Utils.clickElement(MoreOptionsObjects.referAFriendOption);
  }

  async referAFriendPageHeaderIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.referAFriendPageHeader);
  }

  async referAFriendPageSummaryIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.referAFriendPageSummary);
  }

  async selectGiveFeedback() {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid(MoreOptionsObjects.giveFeedbackOptionText);
    } else if(Device.isWeb()) {
      await Utils.scrollAndMoveToElement(MoreOptionsObjects.giveFeedbackOption);
    }
    await Utils.clickElement(MoreOptionsObjects.giveFeedbackOption);
  }

  async giveFeedbackPageHeaderIsDisplayed() {
    return await Utils.elementIsDisplayed(MoreOptionsObjects.giveFeedbackPageHeader);
  }

  async selectLogout() {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid(MoreOptionsObjects.logoutOptionText);
    } else if(Device.isWeb()) {
      await Utils.scrollAndMoveToElement(MoreOptionsObjects.logoutOption);
    }
    await Utils.clickElement(MoreOptionsObjects.logoutOption);
  }

}
module.exports = new MoreOptionsPage();
