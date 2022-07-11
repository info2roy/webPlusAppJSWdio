const Constants = require('../../../support/Constants/Constants');
const CommonInvestmentPage = require('../../Pages/Common/CommonInvestmentPage');

class CommonInvestmentFunctionality {
  async investmentPageLaunched() {
    return ((await CommonInvestmentPage.investmentTabIsDisplayed(Constants.INVESTMENT_INSTRUMENT_MUTUAL_FUND)) &&
      (await CommonInvestmentPage.investmentTabIsDisplayed(Constants.INVESTMENT_INSTRUMENT_FIXED_DEPOSIT)));
  }

  async selectInvestmentTab(investmentInstrument) {
    await CommonInvestmentPage.selectInvestmentTab(investmentInstrument);
  }
}
module.exports = new CommonInvestmentFunctionality();
