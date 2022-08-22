const CommonPage = require('../../Pages/Common/CommonPage');

class CommonFunctionality {
  async selectFamilyMemberPageLaunched() {
    return (await CommonPage.selectFamilyMemberPageHeaderIsDisplayed());
  }

}
module.exports = new CommonFunctionality();
