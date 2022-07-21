const MoreOptionsPage = require('../../Pages/MoreOptions/MoreOptionsPage');
class MoreOptionsFunctionality {

  async moreOptionsPageLaunched() {
    return (await MoreOptionsPage.scripboxImageIsDisplayed()) &&
    (await MoreOptionsPage.bellImageIsDisplayed()) &&
    (await MoreOptionsPage.supportImageIsDisplayed()) &&
    (await MoreOptionsPage.addAFamilyMemberButtonIsDisplayed()) &&
    (await MoreOptionsPage.yourProfileHeaderIsDisplayed()) &&
    (await MoreOptionsPage.yourProfileImageIsDisplayed()) &&
    (await MoreOptionsPage.personalInfoOptionIsDisplayed()) &&
    (await MoreOptionsPage.accountFamilyInformationOptionIsDisplayed()) &&
    (await MoreOptionsPage.statementsAndTaxReportsOptionIsDisplayed()) &&
    (await MoreOptionsPage.appSettingsHeaderIsDisplayed()) &&
    (await MoreOptionsPage.appSettingsImageIsDisplayed()) &&
    (await MoreOptionsPage.notificationPreferencesOptionIsDisplayed()) &&
    (await MoreOptionsPage.whatsappNotificationsOptionIsDisplayed()) &&
    (await MoreOptionsPage.aboutScripboxOptionIsDisplayed()) &&
    (await MoreOptionsPage.referAFriendOptionIsDisplayed()) &&
    (await MoreOptionsPage.giveFeedbackOptionIsDisplayed()) &&
    (await MoreOptionsPage.logoutOptionIsDisplayed()) &&
    (await MoreOptionsPage.whatsappImageIsDisplayed()) &&
    (await MoreOptionsPage.linkedinImageIsDisplayed()) &&
    (await MoreOptionsPage.facebookImageIsDisplayed()) &&
    (await MoreOptionsPage.twitterImageIsDisplayed());
  }

  async selectPersonalInformation() {
    await MoreOptionsPage.selectPersonalInformation();
  }

  async selectAccountFamilyInformation() {
    await MoreOptionsPage.selectAccountFamilyInformation();
  }

  async selectNotificationPreferences() {
    await MoreOptionsPage.selectNotificationPreferences();
  }

  async selectWhatsappNotifications() {
    await MoreOptionsPage.selectWhatsappNotifications();
  }
  //Begin About Scripbox
  async selectAboutScripbox() {
    await MoreOptionsPage.selectAboutScripbox();
  }

  async aboutScripboxPageLaunched() {
    return (await MoreOptionsPage.aboutScripboxPageHeaderIsDisplayed()) &&
    (await MoreOptionsPage.aboutScripboxPageBodyIsDisplayed());
  }

  async selectAboutScripboxServiceAgreement() {
    await MoreOptionsPage.selectAboutScripboxServiceAgreement();
  }

  async aboutScripboxServiceAgreementPageLaunched() {
    return (await MoreOptionsPage.aboutScripboxServiceAgreementPageHeaderIsDisplayed()) &&
    (await MoreOptionsPage.aboutScripboxServiceAgreementPageAgreementNameIsDisplayed());
  }

  async goBackToPreviousPage() {
    await MoreOptionsPage.pressBackButton();
  }

  async selectAboutScripboxCompany() {
    await MoreOptionsPage.selectAboutScripboxCompany();
  }

  async aboutScripboxCompanyPageLaunched() {
    return (await MoreOptionsPage.aboutScripboxCompanyPageHeaderIsDisplayed()) &&
    (await MoreOptionsPage.aboutScripboxPageCompanyPageNameLabelIsDisplayed()) &&
    (await MoreOptionsPage.aboutScripboxPageCompanyPageCompanyNameIsDisplayed());
  }
  //End About Scripbox

  async selectReferAFriend() {
    await MoreOptionsPage.selectReferAFriend();
  }

  async selectGiveFeedback() {
    await MoreOptionsPage.selectGiveFeedback();
  }

  async selectLogout() {
    await MoreOptionsPage.selectLogout();
  }
}
module.exports = new MoreOptionsFunctionality();
