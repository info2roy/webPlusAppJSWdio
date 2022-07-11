const Utils = require('../../support/Utils/Utils');
const LoginObjects = require('../Objects/LoginObjects');
const Device = require('../../support/libraries/Device');

class LoginPage {
  async enterUserId(emailID) {
    await Utils.setInputField(emailID, LoginObjects.userIdField);
  }

  async clickContinueOrNextButton() {
    await Utils.clickElement(LoginObjects.continueOrNextButton);
  }

  async clickContinueWithPasswordButton() {
    await Utils.clickElement(LoginObjects.continueWithPasswordButton);
  }

  async firstLoginPageHeaderIsDisplayed() {
    return await Utils.elementIsDisplayed(LoginObjects.firstLoginPageHeader);
  }

  async secondLoginPageHeaderIsDisplayed() {
    return await Utils.elementIsDisplayed(LoginObjects.secondLoginPageHeader);
  }

  async enterEmail(emailID) {
    if (Device.isMobileWeb() || Device.isDesktop()) {
      await Utils.setInputField(emailID, LoginObjects.emailField);
    } else if (Device.isAndroid) {
      await console.log('Skipping enterEmail for Android');
    }
  }

  async clickStartExploring() {
    if (driver.isAndroid) {
      await Utils.clickElement(LoginObjects.startExploring);
    }
  }

  async scripBoxExclusiveBenifitsDisplayed() {
    return (await Utils.elementIsDisplayed(LoginObjects.scripBoxExclusiveBenifits));
  }

  async enterPassword(password) {
    await Utils.setInputField(password, LoginObjects.passwordField);
  }

  async clickContinueLoginButton() {
    await Utils.clickElement(LoginObjects.continueLoginButton);
  }

  async enterOTPHeaderIsDisplayed() {
    if (Device.isWeb()) {
      return (await Utils.elementIsDisplayed(LoginObjects.enterOTPPageHeader));
    }
    return true;
  }

}
module.exports = new LoginPage();
