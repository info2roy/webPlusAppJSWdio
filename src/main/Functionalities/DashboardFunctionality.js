const DashboardPage = require('../Pages/DashboardPage');
const DashboardObjects = require('../Objects/DashboardObjects');
const Utils = require('../../support/Utils/Utils');

class DashboardFunctionality {
  async validate() {
    expect(await Utils.elementIsDisplayed(DashboardObjects.helloUser)).toBe.true;
  }

  async openProfileDropdown() {
    await DashboardPage.openProfileDropdown();
  }

  async selectPersonalInformation() {
    await DashboardPage.selectPersonalInformation();
  }
}
module.exports = new DashboardFunctionality();
