const Constants = require('../../../config/data/structured/Constants');
const CommonInvestmentPage = require('../../Pages/Common/CommonInvestmentPage');

class CommonInvestmentFunctionality {
  async investmentPageLaunched() {
    return ((await CommonInvestmentPage.investmentTabIsDisplayed(Constants.INVESTMENT_INSTRUMENT_MUTUAL_FUND)) &&
      (await CommonInvestmentPage.investmentTabIsDisplayed(Constants.INVESTMENT_INSTRUMENT_FIXED_DEPOSIT)));
  }

  async selectInvestmentTab(investmentInstrumentType) {
    await CommonInvestmentPage.selectInvestmentTab(investmentInstrumentType);
    return (await CommonInvestmentPage.validateNavigateToInvestmentTab(investmentInstrumentType));
  }
}
module.exports = new CommonInvestmentFunctionality();
