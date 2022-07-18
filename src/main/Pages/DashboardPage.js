const Utils = require('../../support/Utils/Utils');
const DashboardObjects = require('../Objects/DashboardObjects');
const Device = require('../../support/libraries/Device');
const Constants = require('../../config/data/structured/Constants');

class DashboardPage {
  async openProfileDropdown() {
    await Utils.clickElement(DashboardObjects.moreButton);
  }

  async selectPersonalInformation() {
    if (Device.isAndroidApp()) {
      await console.log('AndroidApp: click on Personal Infomation requires scrolling until it comes into view');
      await Utils.scrollVerticalUntilTextIntoViewForAndroid(DashboardObjects.personalInfoText);
    }
    await Utils.clickElement(DashboardObjects.personalInfoOption);
  }

  async selectAccountFamilyInformation() {
    await Utils.clickElement(DashboardObjects.accountFamilyInformationOption);
  }

  async returnToHome() {
    await Utils.clickElement(DashboardObjects.returnToHome);
  }

  async selectInvestOption() {
    await Utils.clickElement(DashboardObjects.investTab);
  }

  async selectDashboardTab(tabName) {
    await Utils.clickElement(DashboardObjects.dashboardTab(tabName));
  }

  async selectWithdrawOrInvestMoreOption(option) {
    if (option === Constants.DASHBOARD_WITHDRAW) {
      await Utils.clickElement(DashboardObjects.withdrawButton);
    } else if (option === Constants.DASHBOARD_INVEST_MORE) {
      await Utils.clickElement(DashboardObjects.investMoreButton);
    }
  }
}
module.exports = new DashboardPage();
