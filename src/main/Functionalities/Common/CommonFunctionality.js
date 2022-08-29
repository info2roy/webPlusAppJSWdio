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

  async selectFamilyMember(familyMemberName, page1HeaderSelector, page2HeaderSelector) {
    if(await CommonPage.expandMoreButtonIsDisplayed(2000)) {
      await CommonPage.clickExpandMoreButton();
      if (await CommonPage.familyMemberNameIsDisplayed(familyMemberName, 2000)) {
        await CommonPage.clickOnFamilyMemberByName(familyMemberName);
        return (await CommonPage.elementIsDisplayed(page1HeaderSelector));
      }
      return false;
    } else if(await CommonPage.selectFamilyMemberPageHeaderIsDisplayed(2000)) {
      await CommonPage.clickOnFamilyMemberByName(familyMemberName);
      return (await CommonPage.elementIsDisplayed(page2HeaderSelector));
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
}
module.exports = new CommonFunctionality();
