const isDisplayed = require('webdriverio/build/commands/element/isDisplayed');
const device = require('../libraries/Device');

class Utils {
  getLocator(object) {
    if (device.isMobileWeb()) {
      if (object.hasOwnProperty('mobileweb')) {
        return object.mobileweb;
      }
      return object.web;
    } if (device.isDesktop()) {
      if (object.hasOwnProperty('desktop')) {
        return object.desktop;
      }
      return object.web;
    } if (device.isAndroidApp()) {
      return object.androidapp;
    } if (device.isiOSApp()) {
      return object.iosapp;
    }
  }

  getPlatform() {
    let platform = '';
    console.log(browser.requestedCapabilities);
    if ('goog:chromeOptions' in browser.requestedCapabilities) {
      platform = 'mobileweb';
    } else if (driver.isAndroid) {
      platform = 'androidApp';
    } else platform = 'desktop';
    console.log(`platform ${platform}`);
    return platform;
  }

  async waitForElementDisplayed(selector) {
    const elem = await $(this.getLocator(selector));
    await elem.waitForDisplayed({ timeout: 10000 });
    return this;
  }

  async clickElement(selector) {
    const locator = this.getLocator(selector);
    const myButton = await $(locator);
    this.elementIsDisplayed(selector);
    await myButton.click();
  }

  async elementIsDisplayed(selector) {
    const locator = this.getLocator(selector);
    // const element = await $(locator);
    await browser.waitUntil(
      async () => await $(locator).isDisplayed(),
      {
        timeout: 30000,
        timeoutMsg: `${locator} Selector not displayed yet`,
      },
    );

    const isDisplayed = await $(locator).isDisplayed();
    console.log(`${locator} is displayed check --> ${isDisplayed}`);
    return isDisplayed;
  }

  async setInputField(value, selector) {
    const myButton = await $(this.getLocator(selector));
    this.elementIsDisplayed(selector);
    if (device.isAndroidApp()) {
      await myButton.addValue(value);
    } else {
      await myButton.setValue(value);
    }
  }

  async setInputValueToAndroid(value, selector) {
    const myButton = $(this.getLocator(selector));
    expect(myButton).toBeDisplayed();
    myButton.addValue(value);
  }

  async uploadFile(localFilePath, fileInputSelector, submitButtonSelector) {
    const fileInput = await $(this.getLocator(fileInputSelector));
    const submitButton = await $(this.getLocator(submitButtonSelector));
    const remoteFilePath = await browser.uploadFile(localFilePath);
    await fileInput.setValue(remoteFilePath);
    await submitButton.click();
  }

  async scrollUntilTextIntoView(textToBeIntoView) {
    await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${textToBeIntoView}")`);
  }
}

module.exports = new Utils();
