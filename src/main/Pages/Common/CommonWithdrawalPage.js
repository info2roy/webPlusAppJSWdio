const Utils = require('../../../support/Utils/Utils');
const CommonWithdrawalObjects = require('../../Objects/Common/CommonWithdrawalObjects');

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
}

module.exports = new CommonWithdrawalPage();
