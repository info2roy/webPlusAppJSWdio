const DashboardPage = require('../Pages/DashboardPage');
const DashboardObjects = require('../Objects/DashboardObjects');
const Utils = require('../../support/Utils/Utils');
const Device = require('../../support/libraries/Device');
const env = require('../../config/env');

class DashboardFunctionality {

  async open() {
    if (Device.isWeb()) {
      await browser.url(`${env.myScripBox}dashboard`);
    } else if (Device.isAndroidApp()) {
      await browser.url('scripbox://scripbox');
    }
  }
  async validate() {
    expect(await Utils.elementIsDisplayed(DashboardObjects.helloUser)).toBe.true;
  }

  async openProfileDropdown() {
    await DashboardPage.openProfileDropdown();
  }

  async selectPersonalInformation() {
    await DashboardPage.selectPersonalInformation();
  }

  async invest() {
    await DashboardPage.selectInvestOption();
  }
}
module.exports = new DashboardFunctionality();
