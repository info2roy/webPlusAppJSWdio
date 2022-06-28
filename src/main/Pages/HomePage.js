const util = require('../../support/Utils/Utils');
const homePageObject = require('../PageObjects/HomePageObjects');
const device = require('../../support/libraries/Device');

class HomePage {
  async selectLoginOption() {
    await util.clickElement(homePageObject.loginButton);
  }

  async loginTabIsDisplayed() {
    return (await util.elementIsDisplayed(homePageObject.loginButton));
  }

  async signupTabIsDisplayed() {
    if (device.isMobileWeb() || device.isDesktop()) {
      return (await util.elementIsDisplayed(homePageObject.signupButton));
    }
    return true;
  }

  async clickMenuButton() {
    if (device.isMobileWeb()) {
      await util.clickElement(homePageObject.menuButton);
    }
  }

  async loginButtonDisplayedAndroid() {
    return await util.elementIsDisplayed(homePageObject.loginButton);
  }

  async menuButtonIsDisplayed() {
    return await util.elementIsDisplayed(homePageObject.menuButton);
  }

  async scripBoxCustomerbannerDisplayedAndroid() {
    return await util.elementIsDisplayed(homePageObject.loginButton);
  }
}

module.exports = new HomePage();
