const Constants = require('../../../config/data/structured/Constants');
const Utils = require('../../../support/Utils/Utils');
const CommonWithdrawalObjects = require('../../Objects/Common/CommonWithdrawalObjects');
const MFWithdrawalPage = require('../../Pages/MutualFunds/MFWithdrawalPage');

class CommonWithdrawalPage {
  async selectFamilyMemberPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(CommonWithdrawalObjects.selectFamilyMemberPageHeader));
  }

  async clickOnFamilyMemberByName(familyMemberName) {
    await Utils.clickElement(CommonWithdrawalObjects.familyMember(familyMemberName));
  }

  async selectFinancialProductPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(CommonWithdrawalObjects.selectFinancialProductPageHeader));
  }

  async clickOnFinancialProduct(productName) {
    await Utils.clickElement(CommonWithdrawalObjects.financialProduct(productName));
  }

  async validateFinancialProductPage(productName) {
    switch(productName.toString()) {
      case Constants.INVESTMENT_INSTRUMENT_MUTUAL_FUND:
        return (await MFWithdrawalPage.selectMFPlanPageHeaderIsDisplayed());
      default:
        await console.log(`unsupported product ${productName}`);
        return false;
    }
  }
}

module.exports = new CommonWithdrawalPage();
