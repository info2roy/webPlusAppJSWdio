const util = require('../../support/Utils/Utils');
const dashboardPageObject = require('../PageObjects/DashboardPageObjects');
const device = require('../../support/libraries/Device');

class DashboardPage {
  async openProfileDropdown() {
    await util.clickElement(dashboardPageObject.moreButton);
  }

  async selectPersonalInformation() {
    if (device.isAndroidApp()) {
      await console.log('AndroidApp: click on Personal Infomation requires scrolling until it comes into view');
      await util.scrollUntilTextIntoView('Personal information');
    }
    await util.clickElement(dashboardPageObject.personalInfoOption);
  }
}
module.exports = new DashboardPage();
