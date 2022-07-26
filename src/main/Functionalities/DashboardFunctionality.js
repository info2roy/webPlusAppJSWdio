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

  async openMoreOptions() {
    await DashboardPage.openMoreOptions();
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

  async navigateToPageFromDashboard(pageOption) {
    await DashboardPage.navigateToPage(pageOption);
    return (await DashboardPage.validateNavigateToPage(pageOption.toString()));
  }

  async navigateToDashboard() {
    await browser.back(); // Not creating a method for navigation back now. Will create if more use-case comes up
    return (await this.validate());
  }
}
module.exports = new DashboardFunctionality();
