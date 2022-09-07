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

  async expandMore() {
    await CommonPage.clickExpandMoreButton();
  }

  async goBackToPreviousPage() {
    await CommonPage.clickBackButton();
  }

  async selectASchemePageLaunched() {
    return (await CommonPage.selectASchemePageHeaderIsDisplayed(2000));
  }

}
module.exports = new CommonFunctionality();
