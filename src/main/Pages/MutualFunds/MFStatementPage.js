const Utils = require('../../../support/Utils/Utils');
const MFStatementObjects = require('../../Objects/MutualFunds/MfStatementObjects');

class MFStatementPage {

  async MFPageHeaderIsDisplayed() {
    return await Utils.elementIsDisplayed(MFStatementObjects.statementsAndTaxReportsHeader);
  }

  async navigateToMFStatementPage(mfOption) {
    switch (mfOption.toString()) {
      case 'Investment history':
        await Utils.clickElement(MFStatementObjects.investmentHistoryTab);
        break;
      case 'Fund holdings':
        await Utils.clickElement(MFStatementObjects.fundHoldingsTab);
        break;
      case 'Tax statements':
        await Utils.clickElement(MFStatementObjects.taxStatementsTab);
        break;
      case 'Capital gains':
        await Utils.clickElement(MFStatementObjects.capitalGainsTab);
        break;
      default:
        console.log('Mf option not available');
    }
  }

  async validateMFPageLoad(mfOption) {
    switch (mfOption.toString()) {
      case 'Investment history':
        return (
          await Utils.elementIsDisplayed(MFStatementObjects.investmentHistoryFundFoundHeader) &&
          await Utils.elementIsDisplayed(MFStatementObjects.investmentHistoryEmailMe) &&
          await Utils.elementIsDisplayed(MFStatementObjects.investmentHistoryDownload));
      case 'Fund holdings':
        return (
          await Utils.elementIsDisplayed(MFStatementObjects.fundHoldingsCheckbox) &&
          await Utils.elementIsDisplayed(MFStatementObjects.investmentHistoryEmailMe) &&
          await Utils.elementIsDisplayed(MFStatementObjects.fundsCurrentvalue) &&
          await Utils.elementIsDisplayed(MFStatementObjects.fundsSortingOption));
      case 'Tax statements':
        return (
          await Utils.elementIsDisplayed(MFStatementObjects.emailIcon) &&
          await Utils.elementIsDisplayed(MFStatementObjects.downloadAsPdf));
      case 'Capital gains':
        return (
          await Utils.elementIsDisplayed(MFStatementObjects.emailIcon) &&
          await Utils.elementIsDisplayed(MFStatementObjects.downloadIcon));
      default:
        console.log('Wrong type');
    }
  }
}

module.exports = new MFStatementPage();
