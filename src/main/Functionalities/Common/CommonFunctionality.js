const CommonPage = require('../../Pages/Common/CommonPage');

class CommonFunctionality {
  async selectFamilyMemberPageLaunched() {
    return (await CommonPage.selectFamilyMemberPageHeaderIsDisplayed());
  }

  async goBackToPreviousPage() {
    await CommonPage.clickBackButton();
  }

}
module.exports = new CommonFunctionality();
