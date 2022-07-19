const MoreOptionsPage = require('../../Pages/MoreOptions/MoreOptionsPage');
class MoreOptionsPageFunctionality {

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
}
module.exports = new MoreOptionsPageFunctionality();
