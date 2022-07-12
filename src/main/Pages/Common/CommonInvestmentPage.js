const Utils = require('../../../support/Utils/Utils');
const CommonInvestmentObjects = require('../../Objects/Common/CommonInvestmentObjects');

class CommonInvestmentPage {
  async selectInvestmentTab(investmentInstrumentType) {
    await Utils.clickElement(CommonInvestmentObjects.investmentTab(investmentInstrumentType));
  }

  async investmentTabIsDisplayed(investmentInstrumentType) {
    return (await Utils.elementIsDisplayed(CommonInvestmentObjects.investmentTab(investmentInstrumentType)));
  }
}

module.exports = new CommonInvestmentPage();
