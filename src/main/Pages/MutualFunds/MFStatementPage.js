const Utils = require('../../../support/Utils/Utils');
const MFStatementObjects = require('../../Objects/MutualFunds/MfStatementObjects');
const Device = require('../../../support/libraries/Device');

class MFStatementPage {

  async statementsAndTaxReportPageHeaderIsDisplayed() {
    return await Utils.elementIsDisplayed(MFStatementObjects.statementsAndTaxReportsHeader);
  }

  async navigateToMFStatementPage(mfOption) {
    switch (mfOption.toString()) {
      case 'Investment history':
        if(Device.isAndroidApp()){
          Utils.scrollHorizontalUntilTextIntoViewForAndroid(MFStatementObjects.investmentHistoryTab);
        }
        await Utils.clickElement(MFStatementObjects.investmentHistoryTab);
        break;
      case 'Fund holdings':
        if(Device.isAndroidApp()){
          Utils.scrollHorizontalUntilTextIntoViewForAndroid(MFStatementObjects.fundHoldingsTab);
        }
        await Utils.clickElement(MFStatementObjects.fundHoldingsTab);
        break;
      case 'Tax statements':
        if(Device.isAndroidApp()){
          Utils.scrollHorizontalUntilTextIntoViewForAndroid(MFStatementObjects.taxStatementsTab);
        }
        await Utils.clickElement(MFStatementObjects.taxStatementsTab);
        break;
      case 'Capital gains':
        if(Device.isAndroidApp()){
          Utils.scrollHorizontalUntilTextIntoViewForAndroid(MFStatementObjects.capitalGainsTab);
        }
        await Utils.clickElement(MFStatementObjects.capitalGainsTab);
        break;
      default:
        console.log('Mf option not available');
    }
  }
  // MF page validation not done for Android. No data avilable.
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
