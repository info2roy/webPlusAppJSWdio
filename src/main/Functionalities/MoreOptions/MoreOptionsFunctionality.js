const MoreOptionsPage = require('../../Pages/MoreOptions/MoreOptionsPage');
class MoreOptionsFunctionality {

  async moreOptionsPageLaunched() {
    return (await MoreOptionsPage.scripboxImageIsDisplayed()) &&
    (await MoreOptionsPage.bellImageIsDisplayed()) &&
    (await MoreOptionsPage.supportImageIsDisplayed()) &&
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

  async navigateToPage(pageName) {
    await MoreOptionsPage.navigateToPage(pageName);
    return (await MoreOptionsPage.validateNavigateToPage(pageName));
  }

  async selectAccountFamilyInformation() {
    await MoreOptionsPage.selectAccountFamilyInformation();
  }

  async selectStatementsAndTaxReports() {
    await MoreOptionsPage.navigateToStatementsAndReports();
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

  async navigateToPageFromAboutScripboxPage(pageName) {
    await MoreOptionsPage.navigateToPageFromAboutScripboxPage(pageName);
    return (await MoreOptionsPage.validateNavigateToPageFromAboutScripboxPage(pageName));
  }

  async goBackToPreviousPage() {
    await MoreOptionsPage.pressBackButton();
  }

  async selectLogout() {
    await MoreOptionsPage.selectLogout();
  }
}
module.exports = new MoreOptionsFunctionality();
