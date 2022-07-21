const dashboardPage = require('../Pages/DashboardPage');
const dashboardObjects = require('../Objects/DashboardObjects');
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
    expect(await Utils.elementIsDisplayed(dashboardObjects.helloUser)).toBe.true;
  }

  async openProfileDropdown() {
    await dashboardPage.openProfileDropdown();
  }

  async selectPersonalInformation() {
    await dashboardPage.selectPersonalInformation();
  }

  async selectAccountFamilyInformation() {
    await dashboardPage.selectAccountFamilyInformation();
  }

  async selectStatementsAndTaxReports() {
    await dashboardPage.selectStatementsAndTaxReports();
  }

  async selectReturnToHome() {
    await dashboardPage.returnToHome();
  }

  async invest() {
    await dashboardPage.selectDashboardTab(Constants.DASHBOARD_INVEST);
  }

  async home() {
    await dashboardPage.selectDashboardTab(Constants.DASHBOARD_HOME);
  }

  async selectWithdrawOrInvestMoreOption(option) {
    await dashboardPage.selectWithdrawOrInvestMoreOption(option);
  }

  async navigateToPageFromDashboard(pageOption) {
    await dashboardPage.navigateToPage(pageOption);
    return (await dashboardPage.validateNavigateToPage(pageOption.toString()));
  }

  async navigateToDashboard() {
    await browser.back(); // Not creating a method for navigation back now. Will create if more use-case comes up
    return (await this.validate());
  }
}
module.exports = new DashboardFunctionality();
