const Utils = require('../../../support/Utils/Utils');
const CommonInvestmentObjects = require('../../Objects/Common/CommonInvestmentObjects');

class CommonInvestmentPage {
  async selectInvestmentTab(investmentType) {
    await Utils.clickElement(CommonInvestmentObjects.investmentTab(investmentType));
  }

  async investmentTabIsDisplayed(investmentType) {
    return (await Utils.elementIsDisplayed(CommonInvestmentObjects.investmentTab(investmentType)));
  }
}

module.exports = new CommonInvestmentPage();
