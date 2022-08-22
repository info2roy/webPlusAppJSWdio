const Utils = require('../../../support/Utils/Utils');
const CommonObjects = require('../../Objects/Common/CommonObjects');

class CommonPage {

  async selectFamilyMemberPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(CommonObjects.selectFamilyMemberPageHeader));
  }

  async clickOnFamilyMemberByName(familyMemberName) {
    await Utils.clickElement(CommonObjects.familyMember(familyMemberName));
  }

  async selectFinancialProductPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(CommonObjects.selectFinancialProductPageHeader));
  }

  async clickOnFinancialProduct(productName) {
    await Utils.clickElement(CommonObjects.financialProduct(productName));
  }

  async selectASchemePageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(CommonObjects.selectASchemePageHeader));
  }
}
module.exports = new CommonPage();
