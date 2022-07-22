const Utils = require('../../../support/Utils/Utils');
const InvestmentCalendarObjects = require('../../Objects/Reports/InvestmentCalendarObjects');

class InvestmentCalendarPage {
  async investmentCalendarPageLaunched() {
    return (await Utils.elementIsDisplayed(InvestmentCalendarObjects.investmentCalendarPageHeader));
  }
}
module.exports = new InvestmentCalendarPage();
