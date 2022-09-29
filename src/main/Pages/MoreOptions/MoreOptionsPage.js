const Utils = require('../../../support/Utils/Utils');
const MoreOptionsObjects = require('../../Objects/MoreOptions/MoreOptionsObjects');
const Device = require('../../../support/libraries/Device');
const PersonalInfoPage = require('./PersonalInfoPage');
const MfStatementPage = require('../MutualFunds/MFStatementPage');
const NotificationPreferencesPage = require('./NotificationPreferencesPage');
const WhatsappNotificationsPage = require('./WhatsappNotificationsPage');
const HomePage = require('../HomePage');

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

  async navigateToStatementsAndReports() {
    if (Device.isAndroidApp()) {
      await console.log('Scrolling to Statements & Reports section');
      await Utils.scrollVerticalUntilTextIntoViewForAndroid(MoreOptionsObjects.statementsAndTaxReportsText);
    }
    await Utils.clickElement(MoreOptionsObjects.statementsAndTaxReportsOption);
  }

  async selectPersonalInformation() {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid(MoreOptionsObjects.personalInfoText);
    }
    await Utils.clickElement(MoreOptionsObjects.personalInfoOption);
  }

  async selectAccountFamilyInformation() {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid(MoreOptionsObjects.accountFamilyInformationOptionText);
    }
    await Utils.clickElement(MoreOptionsObjects.accountFamilyInformationOption);
  }

  async selectStatementsAndTaxReports() {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid(MoreOptionsObjects.statementsAndTaxReportsOptionText);
    }
    await Utils.clickElement(MoreOptionsObjects.statementsAndTaxReportsOption);
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

  async navigateToPage(pageName) {
    switch (pageName) {
      case 'Personal Information':
        await this.selectPersonalInformation();
        break;
      case 'Account and Family Information':
        await this.selectAccountFamilyInformation();
        break;
      case 'Statements and Tax Reports':
        await this.selectStatementsAndTaxReports();
        break;
      case 'Notification Preferences':
        await this.selectNotificationPreferences();
        break;
      case 'Whatsapp Notifications':
        await this.selectWhatsappNotifications();
        break;
      case 'About Scripbox':
        await this.selectAboutScripbox();
        break;
      case 'Give Feedback':
        await this.selectGiveFeedback();
        break;
      case 'Refer a Friend':
        await this.selectReferAFriend();
        break;
      case 'Logout':
        await this.selectLogout();
        break;
      default:
        console.log(`unsupported page ${pageName} from More Options Page`);
    }
  }

  async validateNavigateToPage(pageName) {
    switch (pageName) {
      case 'Personal Information':
        return (await PersonalInfoPage.profileInfomationHeaderIsDisplayed());
      case 'Account and Family Information':
        return (await PersonalInfoPage.accountFamilyInfoPageHeaderIsDisplayed());
      case 'Statements and Tax Reports':
        return (await MfStatementPage.statementsAndTaxReportPageHeaderIsDisplayed());
      case 'Notification Preferences':
        return (await NotificationPreferencesPage.notificationPreferencesPageHeaderIsDisplayed()) &&
          (await NotificationPreferencesPage.notificationPreferenceControlsAreDisplayedAndAreCorrect());
      case 'Whatsapp Notifications':
        return (await WhatsappNotificationsPage.whatsappNotificationsPageHeaderIsDisplayed()) &&
          (await WhatsappNotificationsPage.whatsappNotificationsPageBodyIsDisplayed());
      case 'About Scripbox':
        return (await this.aboutScripboxPageHeaderIsDisplayed()) &&
          (await this.aboutScripboxPageBodyIsDisplayed());
      case 'Give Feedback':
        return (this.giveFeedbackPageHeaderIsDisplayed());
      case 'Refer a Friend':
        return (await this.referAFriendPageHeaderIsDisplayed()) &&
          (await this.referAFriendPageSummaryIsDisplayed()) &&
          (await this.referAFriendSocialMediaLinksAreDisplayed());
      case 'Logout':
        return await HomePage.myScripboxLoginPageIsDisplayed();
      default:
        console.log(`unsupported page ${pageName} from More Options Page`);
        return false;
    }
  }

  async navigateToPageFromAboutScripboxPage(pageName) {
    switch(pageName) {
      case 'Service Agreement':
        await Utils.clickElement(MoreOptionsObjects.aboutScripboxPageServiceAgreement);
        break;
      case 'Company':
        await Utils.clickElement(MoreOptionsObjects.aboutScripboxPageCompany);
        break;
      default:
        console.log(`unsupported page ${pageName} from About Scripbox Page`);
    }
  }

  async validateNavigateToPageFromAboutScripboxPage(pageName) {
    let status = true;
    switch(pageName) {
      case 'Service Agreement':
        return (await Utils.elementIsDisplayed(MoreOptionsObjects.aboutScripboxPageServiceAgreementPageHeader)) &&
         (await Utils.elementIsDisplayed(MoreOptionsObjects.aboutScripboxPageServiceAgreementPageAgreementName));
      case 'Company':
        status = (await Utils.elementIsDisplayed(MoreOptionsObjects.aboutScripboxPageCompanyPageHeader));
        for (const [property, propertyValue] of Object.entries(MoreOptionsObjects.aboutScripboxCompanyDetails)) {
          status = status &&
            (await Utils.getText(MoreOptionsObjects.aboutScripboxPageCompanyPageProperty(
              property))).includes(propertyValue);
        }
        return status;
      default:
        console.log(`unsupported page ${pageName} from About Scripbox Page`);
        return false;
    }
  }

  async pressBackButton() {
    await Utils.clickElement(MoreOptionsObjects.backButton);
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
    const iframe = await browser.$('//iframe');
    await browser.switchToFrame(iframe);
    const status = await Utils.elementIsDisplayed(MoreOptionsObjects.referAFriendPageSummary);
    await browser.switchToParentFrame();
    return status;
  }

  async referAFriendSocialMediaLinksAreDisplayed() {
    const iframe = await browser.$('//iframe');
    await browser.switchToFrame(iframe);
    const imagePathPrefix = 'https://clientcdn.notifyvisitors.com/scriptbox/';
    const socialMediaLinks = {
      'Whatsapp': { image: `${imagePathPrefix}Whatsapp.png`, aProperty: 'href', aPropertyValue: 'api.whatsapp.com' },
      'Email': { image: `${imagePathPrefix}Mail.png`, aProperty: 'class', aPropertyValue: 'gmailInvite' },
      'Facebook': { image: `${imagePathPrefix}FB.png`, aProperty: 'onclick', aPropertyValue: 'fbShare()' },
      'Tweet': { image: `${imagePathPrefix}Twitter.png`, aProperty: 'href', aPropertyValue: 'twitter.com' },
      'Messenger': { image: `${imagePathPrefix}Messenger.png`, aProperty: 'onclick', aPropertyValue: 'fbMessage()' },
      'LinkedIn': { image: `${imagePathPrefix}Linkedin.png`, aProperty: 'id', aPropertyValue: 'linkedin' },
      'Pinterest': { image: `${imagePathPrefix}Pinterest.png`, aProperty: 'id', aPropertyValue: 'pinterest' },
      'Copy Link': { image: `${imagePathPrefix}Share_link.png`, aProperty: 'id', aPropertyValue: 'copyLink' }
    };
    let status = true;
    for (const [key, value] of Object.entries(socialMediaLinks)) {
      status = status && (await Utils.elementIsDisplayed(MoreOptionsObjects.referAFriendSocialMediaLabel(key)));

      status = status && (await Utils.getElementAttributeBySelector(
        MoreOptionsObjects.referAFriendSocialMediaImageLink(key), 'src') === value.image);

      status = status && (await Utils.getElementAttributeBySelector(
        MoreOptionsObjects.referAFriendSocialMediaHyperlink(key), value.aProperty)).includes(value.aPropertyValue);
    }
    await browser.switchToParentFrame();
    return status;
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
    await browser.switchWindow('docs.google.com');
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
