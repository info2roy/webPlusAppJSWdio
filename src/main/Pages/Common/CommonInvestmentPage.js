const Utils = require('../../../support/Utils/Utils');
const CommonInvestmentObjects = require('../../Objects/Common/CommonInvestmentObjects');
const MFInvestmentPage = require('../MutualFunds/InvestmentPage');
const Constants = require('../../../config/data/structured/Constants');

class CommonInvestmentPage {
  async selectInvestmentTab(investmentInstrumentType) {
    await Utils.clickElement(CommonInvestmentObjects.investmentTab(investmentInstrumentType));
  }

  async validateNavigateToInvestmentTab(investmentInstrumentType) {
    switch(investmentInstrumentType.toString()) {
      case Constants.INVESTMENT_INSTRUMENT_MUTUAL_FUND:
        return (await MFInvestmentPage.mutualFundsPageHeaderIsDisplayed());
      default:
        await console.log('Unsupported instrument type -> ' + investmentInstrumentType.toString());
        return false;
    }
  }

  async investmentTabIsDisplayed(investmentInstrumentType) {
    return (await Utils.elementIsDisplayed(CommonInvestmentObjects.investmentTab(investmentInstrumentType)));
  }
}

module.exports = new CommonInvestmentPage();
