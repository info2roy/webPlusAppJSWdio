const Utils = require('../../support/Utils/Utils');
const DashboardObjects = require('../Objects/DashboardObjects');
const Device = require('../../support/libraries/Device');
const Constants = require('../../config/data/structured/Constants');
const InvestmentCalendarPage = require('./Reports/InvestmentCalendarPage');

class DashboardPage {
  async openMoreOptions() {
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

  async selectStatementsAndTaxReports() {
    await Utils.clickElement(DashboardObjects.statementsAndTaxReports);
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

  async navigateToPage(pageOption) {
    await console.log('Navigating to ' + pageOption.toString());
    switch (pageOption.toString()) {
      case 'Investment Calender':
        await Utils.clickElement(DashboardObjects.viewInvestmentCalender);
        break;
      case 'Wealth Calender':
        await Utils.clickElement(DashboardObjects.wealthCalenderNavigationButton);
        break;
      case 'Withdraw':
        await Utils.clickElement(DashboardObjects.withdrawButton);
        break;
      case 'Invest Now':
        await Utils.clickElement(DashboardObjects.investNowButton);
        break;
      case 'Notifications':
        await Utils.clickElement(DashboardObjects.notifications);
        break;
      default:
        await console.log(pageOption.toString() + ' Option not available in Dashboard page');
    }
  }

  async validateNavigateToPage(pageOption) {
    switch (pageOption.toString()) {
      case 'Investment Calender':
        return InvestmentCalendarPage.investmentCalendarPageLaunched();
      case 'Wealth Calender':
        return (await Utils.elementIsDisplayed(DashboardObjects.wealthCalenderHeader));
      case 'Withdraw':
        return (
          await Utils.elementIsDisplayed(DashboardObjects.withdrawHeader) &&
          await Utils.elementIsDisplayed(DashboardObjects.backButton));
      case 'Invest Now':
        return (await Utils.elementIsDisplayed(DashboardObjects.investNowHeader));
      case 'Notifications':
        return (
          await Utils.elementIsDisplayed(DashboardObjects.notificationsHeaders) &&
          await Utils.elementIsDisplayed(DashboardObjects.backButton));
      default:
        await console.log('Wrong page type -> ' + pageOption.toString());
    }
  }
}
module.exports = new DashboardPage();
