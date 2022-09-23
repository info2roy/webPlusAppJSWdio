const CommonPage = require('../../Pages/Common/CommonPage');

class CommonFunctionality {

  async selectFamilyMemberPageLaunched() {
    return (await CommonPage.selectFamilyMemberPageHeaderIsDisplayed());
  }

  async familyMemberNameIsDisplayed(familyMemberName) {
    await CommonPage.clickExpandMoreButton();
    const status = await CommonPage.familyMemberNameIsDisplayed(familyMemberName, 2000);
    await CommonPage.clickExpandMoreButton();
    return status;
  }

  async selectFamilyMemberViaExpandMore(familyMemberName, landingPageHeaderSelector) {
    if(await CommonPage.expandMoreButtonIsDisplayed(2000)) {
      await CommonPage.clickExpandMoreButton();
      if (await CommonPage.familyMemberNameIsDisplayed(familyMemberName, 2000)) {
        await CommonPage.clickOnFamilyMemberByName(familyMemberName);
        return (await CommonPage.elementIsDisplayed(landingPageHeaderSelector));
      }
      return false;
    }
    return false;
  }

  async selectFamilyMember(familyMemberName, landingPageHeaderSelector) {
    if(await CommonPage.selectFamilyMemberPageHeaderIsDisplayed(2000)) {
      await CommonPage.clickOnFamilyMemberByName(familyMemberName);
      return (await CommonPage.elementIsDisplayed(landingPageHeaderSelector));
    }
    return false;
  }

  async expandMore() {
    await CommonPage.clickExpandMoreButton();
  }

  async goBackToPreviousPage() {
    await CommonPage.clickBackButton();
  }

  async selectASchemePageLaunched() {
    return (await CommonPage.selectASchemePageHeaderIsDisplayed(2000));
  }

  async assertMessage(message) {
    return (await CommonPage.verifyMessage(message));
  }

  async verifyWithOTP(otp) {
    await CommonPage.enterOTP(otp);
    await CommonPage.clickVerifyWithOTPButton();
  }

  async fixedDepositInitialPageLaunched() {
    return (await CommonPage.fixedDepositPageIsDisplayed());
  }

}
module.exports = new CommonFunctionality();
