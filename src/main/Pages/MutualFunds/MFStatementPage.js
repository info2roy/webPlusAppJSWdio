const Utils = require('../../../support/Utils/Utils');
const mFStatementObjects = require('../../Objects/MutualFunds/MfStatementObjects');

class MFStatementPage {

  async MFPageHeaderIsDisplayed() {
    return await Utils.elementIsDisplayed(mFStatementObjects.statementsAndTaxReportsHeader);
  }

  async navigateToMFStatementPage(mfOption) {
    switch (mfOption.toString()) {
      case 'Investment history':
        await Utils.clickElement(mFStatementObjects.investmentHistoryTab);
        break;
      case 'Fund holdings':
        await Utils.clickElement(mFStatementObjects.fundHoldingsTab);
        break;
      case 'Tax statements':
        await Utils.clickElement(mFStatementObjects.taxStatementsTab);
        break;
      case 'Capital gains':
        await Utils.clickElement(mFStatementObjects.capitalGainsTab);
        break;
      default:
        console.log('Mf option not available');
    }
  }

  async validateMFPageLoad(mfOption) {
    switch (mfOption.toString()) {
      case 'Investment history':
        return (
          await Utils.elementIsDisplayed(mFStatementObjects.investmentHistoryFundFoundHeader) &&
          await Utils.elementIsDisplayed(mFStatementObjects.investmentHistoryEmailMe) &&
          await Utils.elementIsDisplayed(mFStatementObjects.investmentHistoryDownload));
      case 'Fund holdings':
        return (
          await Utils.elementIsDisplayed(mFStatementObjects.fundHoldingsCheckbox) &&
          await Utils.elementIsDisplayed(mFStatementObjects.investmentHistoryEmailMe) &&
          await Utils.elementIsDisplayed(mFStatementObjects.fundsCurrentvalue) &&
          await Utils.elementIsDisplayed(mFStatementObjects.fundsSortingOption));
      case 'Tax statements':
        return (
          await Utils.elementIsDisplayed(mFStatementObjects.emailIcon) &&
          await Utils.elementIsDisplayed(mFStatementObjects.downloadAsPdf));
      case 'Capital gains':
        return (
          await Utils.elementIsDisplayed(mFStatementObjects.emailIcon) &&
          await Utils.elementIsDisplayed(mFStatementObjects.downloadIcon));
      default:
        console.log('Wrong type');
    }
  }
}

module.exports = new MFStatementPage();
