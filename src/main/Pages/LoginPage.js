/* eslint-disable prefer-template */
const Utils = require('../../support/Utils/Utils');
const LoginObjects = require('../Objects/LoginObjects');
const loginData = require('../../config/data/structured/LoginData');

class LoginPage {

  async validateHealthDayLogo() {
    return (await Utils.elementIsDisplayed(LoginObjects.loginPageBanner));
  }

  async validateLoginForm() {
    return (await Utils.elementIsDisplayed(LoginObjects.loginForm));
  }

  async validateEmailTextBox() {
    return (await Utils.elementIsDisplayed(LoginObjects.loginEmailField));
  }

  async validatePasswordTextBox() {
    return (await Utils.elementIsDisplayed(LoginObjects.loginPasswordField));
  }

  async validateShowPasswordCheckbox() {
    return (await Utils.elementIsDisplayed(LoginObjects.showPasswordCheckBox));
  }

  async validateloginButton() {
    return (await Utils.elementIsDisplayed(LoginObjects.logInButton));
  }

  async enterEmail(emailID) {
    await Utils.setInputField(emailID, LoginObjects.loginEmailField);
  }

  async enterPassword(password) {
    await Utils.setInputField(password, LoginObjects.loginPasswordField);
  }

  async clickLoginButton() {
    return (await Utils.clickElement(LoginObjects.logInButton));
  }

  async performLogin(env, user) {
    console.log(`testing for environment ${env}`);
    if (env === 'HDAY_QA' || env === 'HDAY_DEV') {
      switch (user.toString()) {
        case 'ADMIN_QA':
          await this.enterEmail(loginData.username_QA);
          await this.enterPassword(loginData.password);
          break;
        case 'ADMIN_DEV':
          await LoginPage.enterUserId(loginData.username_DEV);
          await this.enterPassword(loginData.password);
          break;
        default:
          await console.log(user + ' User not available. Please add user to strapi to proceed.');
      }

    } else {
      await console.log(user + ' User not available. Please add user to strapi to proceed.');
    }
    this.clickLoginButton();
  }

}
module.exports = new LoginPage();
