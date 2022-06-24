const util = require('../../support/Utils/Utils');
const loginObject = require('../PageObjects/LoginPageObjects');
const device = require('../../support/libraries/Device');

class LoginPage {
  async visit(url) {
    await browser.url(url);
  }

  async scriptBoxLoginPageImage() {
    await util.elementIsDisplayed(loginObject.scripboxLoginImage);
  }

  async enterUserId(emailID) {
    await util.setInputField(emailID, loginObject.userIdField);
  }

  async userIdFieldIsDisplayed() {
    return await util.elementIsDisplayed(loginObject.userIdField);
  }

  async clickContinueOrNextButton() {
    await util.clickElement(loginObject.continueOrNextButton);
  }

  async continueOrNextButtonIsDisplayed() {
    return await util.elementIsDisplayed(loginObject.continueOrNextButton);
  }

  async firstLoginPageHeaderIsDisplayed() {
    return await util.elementIsDisplayed(loginObject.firstLoginPageHeader);
  }

  async emailFieldIsDisplayed() {
    if (device.isMobileWeb() || device.isDesktop()) {
      return await util.elementIsDisplayed(loginObject.emailField);
    } else if (driver.isAndroid) {
      await console.log('Email field not available for Android');
      return true;
    }
    return true;
  }

  async enterEmail(emailID) {
    if (device.isMobileWeb() || device.isDesktop()) {
      await util.setInputField(emailID, loginObject.emailField);
    } else if (device.isAndroid) {
      await console.log('Skipping enterEmail for Android');
    }
  }

  async clickStartExploring() {
    if (driver.isAndroid) {
      await util.clickElement(loginObject.startExploring);
    }
  }

  async scripBoxExclusiveBenifitsDisplayed() {
    return (await util.elementIsDisplayed(loginObject.scripBoxExclusiveBenifits));
  }

  async passwordFieldIsDisplayed() {
    return await util.elementIsDisplayed(loginObject.passwordField);
  }

  async enterPassword(password) {
    await util.setInputField(password, loginObject.passwordField);
  }

  async continueLoginButtonIsDisplayed() {
    return await util.elementIsDisplayed(loginObject.continueLoginButton);
  }

  async clickContinueLoginButton() {
    await util.clickElement(loginObject.continueLoginButton);
  }

}
module.exports = new LoginPage();
