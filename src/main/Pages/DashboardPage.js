const Utils = require('../../support/Utils/Utils');
const DashboardObjects = require('../Objects/DashboardObjects');
const Device = require('../../support/libraries/Device');

class DashboardPage {
  async openProfileDropdown() {
    await Utils.clickElement(DashboardObjects.moreButton);
  }

  async selectPersonalInformation() {
    if (Device.isAndroidApp()) {
      await console.log('AndroidApp: click on Personal Infomation requires scrolling until it comes into view');
      await Utils.scrollUntilTextIntoView('Personal information');
    }
    await Utils.clickElement(DashboardObjects.personalInfoOption);
  }
}
module.exports = new DashboardPage();
