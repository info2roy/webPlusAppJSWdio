const MoreOptionsPage = require('../../Pages/MoreOptions/MoreOptionsPage');
class MoreOptionsPageFunctionality {

  async moreOptionsPageLaunched() {
    return true;
  }

  async selectPersonalInformation() {
    await MoreOptionsPage.selectPersonalInformation();
  }

  async selectAccountFamilyInformation() {
    await MoreOptionsPage.selectAccountFamilyInformation();
  }
}
module.exports = new MoreOptionsPageFunctionality();
