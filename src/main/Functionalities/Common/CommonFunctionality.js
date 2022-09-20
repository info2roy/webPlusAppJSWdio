const Device = require('../../../support/libraries/Device');
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
      const expandMoreText = await CommonPage.getExpandMoreText();
      console.log(`expandMore text ${expandMoreText}`);

      for (let index = 0; index < expandMoreText.length; index ++) {
        console.log(`index = ${index} ch ${expandMoreText[index]} code ${expandMoreText.charCodeAt(index)}`);
      }
      if (expandMoreText.length == 1 && expandMoreText.charCodeAt(0) === 58131) {
        await CommonPage.clickExpandMoreButton();
        if (await CommonPage.familyMemberNameIsDisplayed(familyMemberName, 2000)) {
          await CommonPage.clickOnFamilyMemberByName(familyMemberName);
          return (await CommonPage.elementIsDisplayed(landingPageHeaderSelector));
        }
      }
      return true;
    }
    return false;
  }

  async selectFamilyMember(familyMemberName, landingPageHeaderSelector) {
    if (Device.isAndroidApp()) {
      return true;
    }
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
