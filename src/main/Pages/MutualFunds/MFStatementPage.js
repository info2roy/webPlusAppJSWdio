const Utils = require('../../../support/Utils/Utils');
const InvestmentObjects = require('../../Objects/MutualFunds/InvestmentObjects');

class MFStatementPage {

  async MFPageHeaderIsDisplayed() {
    return await Utils.elementIsDisplayed(InvestmentObjects.statementsAndTaxReportsHeader);
  }

  async navigateToMFStatementPage(MfOption) {
    switch (MfOption.toString()) {
      case 'Investment history':
        await Utils.clickElement(InvestmentObjects.investmentHistoryTab);
        break;
      case 'Fund holdings':
        await Utils.clickElement(InvestmentObjects.fundHoldingsTab);
        break;
      case 'Tax statements':
        await Utils.clickElement(InvestmentObjects.taxStatementsTab);
        break;
      case 'Capital gains':
        await Utils.clickElement(InvestmentObjects.capitalGainsTab);
        break;
      default:
        console.log('Mf option not available');
    }
  }

  async validateMFPageLoad(MfOption) {
    switch (MfOption.toString()) {
      case 'Investment history':
        return (
          await Utils.elementIsDisplayed(InvestmentObjects.investmentHistoryFundFoundHeader) &&
          await Utils.elementIsDisplayed(InvestmentObjects.investmentHistoryEmailMe) &&
          await Utils.elementIsDisplayed(InvestmentObjects.investmentHistoryDownload));
      case 'Fund holdings':
        return (
          await Utils.elementIsDisplayed(InvestmentObjects.fundHoldingsCheckbox) &&
          await Utils.elementIsDisplayed(InvestmentObjects.investmentHistoryEmailMe) &&
          await Utils.elementIsDisplayed(InvestmentObjects.fundsCurrentvalue) &&
          await Utils.elementIsDisplayed(InvestmentObjects.fundsSortingOption));
      case 'Tax statements':
        return (
          await Utils.elementIsDisplayed(InvestmentObjects.emailIcon) &&
          await Utils.elementIsDisplayed(InvestmentObjects.downloadAsPdf));
      case 'Capital gains':
        return (
          await Utils.elementIsDisplayed(InvestmentObjects.emailIcon) &&
          await Utils.elementIsDisplayed(InvestmentObjects.downloadIcon));
      default:
        console.log('Wrong type');
    }
  }
}

module.exports = new MFStatementPage();
