const Utils = require('../../../support/Utils/Utils');
const CommonObjects = require('../../Objects/Common/CommonObjects');

class CommonPage {

  async selectFamilyMemberPageHeaderIsDisplayed(timeoutMS = 15000) {
    return (await Utils.elementIsDisplayed(CommonObjects.selectFamilyMemberPageHeader, timeoutMS));
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

  async clickBackButton() {
    await Utils.clickElement(CommonObjects.backButton);
  }

  async clickExpandMoreButton() {
    await Utils.clickElement(CommonObjects.expandMoreButton);
  }

  async expandMoreButtonIsDisplayed() {
    return (await Utils.elementIsDisplayed(CommonObjects.expandMoreButton));
  }
}
module.exports = new CommonPage();
