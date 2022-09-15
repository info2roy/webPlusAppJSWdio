const Device = require('../../../support/libraries/Device');
const Utils = require('../../../support/Utils/Utils');
const CommonObjects = require('../../Objects/Common/CommonObjects');

class CommonPage {

  async selectFamilyMemberPageHeaderIsDisplayed(timeoutMS = 15000) {
    if (Device.isWeb()) {
      return (await Utils.elementIsDisplayed(CommonObjects.selectFamilyMemberPageHeader, timeoutMS));
    }
    return true;
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

  async verifyMessage(message) {
    return (await Utils.isTextDisplayed(message));
  }

  async enterOTP(otp) {
    await Utils.setInputField(otp, CommonObjects.otpField);
  }

  async clickVerifyWithOTPButton() {
    await Utils.clickElement(CommonObjects.verifyOTPButton);
  }

  async elementIsDisplayed(selector, timeoutMS = 15000) {
    return (await Utils.elementIsDisplayed(selector, timeoutMS));
  }

  async clickSaveOrUpdateButton() {
    await Utils.clickElement(CommonObjects.saveOrUpdateButton);
  }

  async clickEditDetailsLink() {
    await Utils.clickElement(CommonObjects.editDetailsLink);
  }

  async clickDeleteLink() {
    await Utils.clickElement(CommonObjects.deleteLink);
  }

  async fixedDepositPageIsDisplayed() {
    return (await Utils.elementIsDisplayed(CommonObjects.fixedDepositPageHeader));
  }

}
module.exports = new CommonPage();
