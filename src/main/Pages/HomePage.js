const Utils = require('../../support/Utils/Utils');
const HomeObjects = require('../Objects/HomeObjects');
const Device = require('../../support/libraries/Device');

class HomePage {
  async selectLoginOption() {
    await Utils.clickElement(HomeObjects.loginButton);
  }

  async loginOptionIsDisplayed() {
    return (await Utils.elementIsDisplayed(HomeObjects.loginButton));
  }

  async signupOptionIsDisplayed() {
    if (Device.isMobileWeb() || Device.isDesktop()) {
      return (await Utils.elementIsDisplayed(HomeObjects.signupButton));
    }
    return true;
  }

  async clickMenuButton() {
    if (Device.isMobileWeb()) {
      await Utils.clickElement(HomeObjects.menuButton);
    }
  }

  async loginButtonDisplayedAndroid() {
    return await Utils.elementIsDisplayed(HomeObjects.loginButton);
  }

  async menuButtonIsDisplayed() {
    return await Utils.elementIsDisplayed(HomeObjects.menuButton);
  }

  async scripBoxCustomerbannerDisplayedAndroid() {
    return await Utils.elementIsDisplayed(HomeObjects.customerBanner);
  }
}

module.exports = new HomePage();
