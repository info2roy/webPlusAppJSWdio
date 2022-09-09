const DashboardPage = require('../Pages/DashboardPage');
const DashboardObjects = require('../Objects/DashboardObjects');
const Utils = require('../../support/Utils/Utils');
const Device = require('../../support/libraries/Device');
require('dotenv').config();
const { MYSCRIPBOX } = require('../../config/env');
const Constants = require('../../config/data/structured/Constants');

class DashboardFunctionality {

  async open() {
    if (Device.isWeb()) {
      await browser.url(`${MYSCRIPBOX}/dashboard`);
    } else if (Device.isAndroidApp()) {
      await browser.url('scripbox://scripbox');
    }
  }

  async validate() {
    expect(await Utils.elementIsDisplayed(DashboardObjects.helloUser)).toBe.true;
    if (Device.isWeb()) {
      expect(await browser.getUrl()).toContain('dashboard');
    }
  }

  async openMoreOptions() {
    await DashboardPage.openMoreOptions();
  }

  async selectReturnToHome() {
    await DashboardPage.returnToHome();
  }

  async goToHome() {
    await DashboardPage.clickHomeButton();
    await this.validate();
  }

  async goToDashboard() {
    await DashboardPage.clickGoToDashboardButton();
    await this.validate();
  }

  async invest() {
    await DashboardPage.selectDashboardTab(Constants.DASHBOARD_INVEST);
  }

  async home() {
    await DashboardPage.selectDashboardTab(Constants.DASHBOARD_HOME);
  }

  async myWealth() {
    await DashboardPage.selectDashboardTab(Constants.DASHBOARD_MYWEALTH);
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
