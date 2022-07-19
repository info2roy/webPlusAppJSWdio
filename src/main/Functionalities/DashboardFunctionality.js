const DashboardPage = require('../Pages/DashboardPage');
const DashboardObjects = require('../Objects/DashboardObjects');
const Utils = require('../../support/Utils/Utils');
const Device = require('../../support/libraries/Device');
const env = require('../../config/env');
const Constants = require('../../config/data/structured/Constants');

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

  async selectAccountFamilyInformation() {
    await DashboardPage.selectAccountFamilyInformation();
  }

  async selectStatementsAndTaxReports() {
    await DashboardPage.selectStatementsAndTaxReports();
  }

  async selectReturnToHome() {
    await DashboardPage.returnToHome();
  }

  async invest() {
    await DashboardPage.selectDashboardTab(Constants.DASHBOARD_INVEST);
  }

  async home() {
    await DashboardPage.selectDashboardTab(Constants.DASHBOARD_HOME);
  }

  async selectWithdrawOrInvestMoreOption(option) {
    await DashboardPage.selectWithdrawOrInvestMoreOption(option);
  }
}
module.exports = new DashboardFunctionality();
