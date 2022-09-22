const Utils = require('../../../support/Utils/Utils');
const CommonObjects = require('../../Objects/Common/CommonObjects');

class CommonPage {

  async selectFamilyMemberPageHeaderIsDisplayed(timeoutMS = 15000) {
    return (await Utils.elementIsDisplayed(CommonObjects.selectFamilyMemberPageHeader, timeoutMS));
  }

  async familyMemberNameIsDisplayed(familyMemberName, timeoutMS = 15000) {
    return (await Utils.elementIsDisplayed(CommonObjects.familyMember(familyMemberName), timeoutMS));
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

  async selectASchemePageHeaderIsDisplayed(timeoutMS = 15000) {
    return (await Utils.elementIsDisplayed(CommonObjects.selectASchemePageHeader, timeoutMS));
  }

  async clickBackButton() {
    await Utils.clickElement(CommonObjects.backButton);
  }

  async clickExpandMoreButton() {
    await Utils.clickElement(CommonObjects.expandMoreButton);
  }

  async expandMoreButtonIsDisplayed(timeoutMS = 15000) {
    return (await Utils.elementIsDisplayed(CommonObjects.expandMoreButton, timeoutMS));
  }

  async clickNextMonthNavgationButton() {
    await Utils.clickElement(CommonObjects.nextMonthButtonInCalander);
  }

  async selectFirstDate() {
    await browser.pause(3000);
    await Utils.clickElement(CommonObjects.calanderInput);
    await browser.pause(3000);
    for (let i=0; i>=0; i++) {
      await console.log('Clicking next month button');
      if (Utils.elementIsDisplayed(CommonObjects.nextMonthFirstDayInCalander))
        await Utils.clickElement(CommonObjects.nextMonthFirstDayInCalander);
    }
  }
}
module.exports = new CommonPage();
