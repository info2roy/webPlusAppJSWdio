const Utils = require('../../../support/Utils/Utils');
const InvestmentCalendarObjects = require('../../Objects/Reports/InvestmentCalendarObjects');

class InvestmentCalendarPage {
  async investmentCalendarPageLaunched() {
    return (await Utils.elementIsDisplayed(InvestmentCalendarObjects.investmentCalendarPageHeader)) &&
    (await Utils.elementIsDisplayed(InvestmentCalendarObjects.monthlySummaryHeader)) &&
    (await Utils.elementIsDisplayed(InvestmentCalendarObjects.upcomingInvestmentCalendarHeader)) &&
    (await Utils.elementIsDisplayed(InvestmentCalendarObjects.completedInvestmentCalendarHeader));
  }
}
module.exports = new InvestmentCalendarPage();
