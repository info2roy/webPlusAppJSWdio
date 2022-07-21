const Utils = require('../../support/Utils/Utils');
const dashboardObjects = require('../Objects/DashboardObjects');
const Device = require('../../support/libraries/Device');
const Constants = require('../../config/data/structured/Constants');

class DashboardPage {
  async openProfileDropdown() {
    await Utils.clickElement(dashboardObjects.moreButton);
  }

  async selectPersonalInformation() {
    if (Device.isAndroidApp()) {
      await console.log('AndroidApp: click on Personal Infomation requires scrolling until it comes into view');
      await Utils.scrollVerticalUntilTextIntoViewForAndroid(dashboardObjects.personalInfoText);
    }
    await Utils.clickElement(dashboardObjects.personalInfoOption);
  }

  async selectAccountFamilyInformation() {
    await Utils.clickElement(dashboardObjects.accountFamilyInformationOption);
  }

  async selectStatementsAndTaxReports() {
    await Utils.clickElement(dashboardObjects.statementsAndTaxReports);
  }

  async returnToHome() {
    await Utils.clickElement(dashboardObjects.returnToHome);
  }

  async selectInvestOption() {
    await Utils.clickElement(dashboardObjects.investTab);
  }

  async selectDashboardTab(tabName) {
    await Utils.clickElement(dashboardObjects.dashboardTab(tabName));
  }

  async selectWithdrawOrInvestMoreOption(option) {
    if (option === Constants.DASHBOARD_WITHDRAW) {
      await Utils.clickElement(dashboardObjects.withdrawButton);
    } else if (option === Constants.DASHBOARD_INVEST_MORE) {
      await Utils.clickElement(dashboardObjects.investMoreButton);
    }
  }

  async navigateToPage(pageOption) {
    await console.log('Navigating to ' + pageOption.toString());
    switch (pageOption.toString()) {
      case 'Investment Calender':
        await Utils.clickElement(dashboardObjects.viewInvestmentCalender);
        break;
      case 'Wealth Calender':
        await Utils.clickElement(dashboardObjects.wealthCalenderNavigationButton);
        break;
      case 'Withdraw':
        await Utils.clickElement(dashboardObjects.withdrawButton);
        break;
      case 'Invest Now':
        await Utils.clickElement(dashboardObjects.investNowButton);
        break;
      case 'Notifications':
        await Utils.clickElement(dashboardObjects.notifications);
        break;
      default:
        await console.log(pageOption.toString() + ' Option not available in Dashboard page');
    }
  }

  async validateNavigateToPage(pageOption) {
    switch (pageOption.toString()) {
      case 'Investment Calender':
        return (await Utils.elementIsDisplayed(dashboardObjects.investmentCalenderHeader));
      case 'Wealth Calender':
        return (await Utils.elementIsDisplayed(dashboardObjects.wealthCalenderHeader));
      case 'Withdraw':
        return (
          await Utils.elementIsDisplayed(dashboardObjects.withdrawHeader) &&
          await Utils.elementIsDisplayed(dashboardObjects.backButton));
      case 'Invest Now':
        return (await Utils.elementIsDisplayed(dashboardObjects.investNowHeader));
      case 'Notifications':
        return (
          await Utils.elementIsDisplayed(dashboardObjects.notificationsHeaders) &&
          await Utils.elementIsDisplayed(dashboardObjects.backButton));
      default:
        await console.log('Wrong type');
    }
  }
}
module.exports = new DashboardPage();
