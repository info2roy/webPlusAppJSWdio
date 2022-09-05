const Utils = require('../../support/Utils/Utils');
const LoginObjects = require('../Objects/LoginObjects');
const Device = require('../../support/libraries/Device');

class LoginPage {
  async enterUserId(emailID) {
    await Utils.setInputField(emailID, LoginObjects.userIdField);
    if (Device.isAndroidApp()) {
      await Utils.clickElement(LoginObjects.loginPageBanner);
    }
  }

  async clickContinueOrNextButton() {
    await Utils.clickElement(LoginObjects.continueOrNextButton);
  }

  async clickContinueWithPasswordButton() {
    await Utils.clickElement(LoginObjects.continueWithPasswordButton);
  }

  async continueWithPasswordButtonIsDisplayed() {
    return (await Utils.elementIsDisplayed(LoginObjects.continueWithPasswordButton));
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
    await browser.pause(2000); // App slow to react. Added 2 secs pause.
    if (Device.isAndroidApp()) {
      await Utils.clickElement(LoginObjects.passwordPageBanner);
    }
  }

  async clickContinueLoginButton() {
    await Utils.clickElement(LoginObjects.continueLoginButton);
  }

  async enterOTPHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(LoginObjects.enterOTPPageHeader));
  }

  async loginYourAccountToContinueHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(LoginObjects.loginYourAccountToContinueHeader));
  }

  async enterOTPDigit(index, digit) {
    await Utils.setInputField(digit, LoginObjects.otpField(index));
  }

}
module.exports = new LoginPage();
