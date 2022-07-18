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
      await Utils.scrollVerticalUntilTextIntoViewForAndroid(DashboardObjects.personalInfoText);
    }
    await Utils.clickElement(DashboardObjects.personalInfoOption);
  }

  async selectAccountFamilyInformation() {
    await Utils.clickElement(DashboardObjects.accountFamilyInformationOption);
  }

  async selectStatementsAndTaxReports(){
    await Utils.clickElement(DashboardObjects.statementsAndTaxReports);
  }

  async returnToHome() {
    await Utils.clickElement(DashboardObjects.returnToHome);
  }

  async selectInvestOption() {
    await Utils.clickElement(DashboardObjects.investTab);
  }
}
module.exports = new DashboardPage();
