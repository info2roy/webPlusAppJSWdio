const Utils = require('../../support/Utils/Utils');
const HomeObjects = require('../Objects/HomeObjects');
const Device = require('../../support/libraries/Device');
const env = require('../../config/env');

class HomePage {
  async selectLoginOption() {
    await Utils.clickElement(HomeObjects.loginButton);
  }

  async loginOptionIsDisplayed() {
    if (Device.isWeb()) {
      return (await Utils.elementIsDisplayed(HomeObjects.loginButton));
    }
    return true;
  }

  async signupOptionIsDisplayed() {
    if (Device.isWeb()) {
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

  async myScripboxLoginPageIsDisplayed() {
    return browser.getUrl() === `${env.myScripBox}login`;
  }
}

module.exports = new HomePage();
