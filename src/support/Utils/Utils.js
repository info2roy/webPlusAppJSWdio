const Device = require('../libraries/Device');
const { expect } = require('chai');
const env = require('../../config/env');

class Utils {
  getLocator(object) {
    if (Device.isMobileWeb()) {
      if (object.hasOwnProperty('mobileweb')) {
        return object.mobileweb;
      }
      return object.web;
    } else if (Device.isDesktop()) {
      if (object.hasOwnProperty('desktop')) {
        return object.desktop;
      }
      return object.web;
    } else if (Device.isAndroidApp()) {
      if (object.hasOwnProperty('android')) {
        return object.android;
      }
      return object.app;
    } else if (Device.isiOSApp()) {
      if (object.hasOwnProperty('ios')) {
        return object.ios;
      }
      return object.app;
    }
    return object.app;
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
    await this.elementIsDisplayed(selector);
    const myButton = await $(locator);
    if (Device.isWeb()) {
      await myButton.waitForClickable({ timeout: 10000 });
    }
    await myButton.click();
  }

  async getText(selector) {
    const locator = this.getLocator(selector);
    await this.elementIsDisplayed(selector);
    const element = await $(locator);
    return (await element.getText());
  }

  async clickWebElement(webElement) {
    await webElement.click();
  }

  async elementIsDisplayed(selector) {
    const locator = this.getLocator(selector);
    // const element = await $(locator);
    try {
      await browser.waitUntil(
        async () => await $(locator).isDisplayed(),
        {
          timeout: 15000,
          timeoutMsg: `${locator} Selector not displayed yet`,
          interval: 2000
        },
      );
    } catch(err) {
      console.log(err.message);
    }
    const isDisplayed = await $(locator).isDisplayed();
    console.log(`${locator} is displayed check --> ${isDisplayed}`);
    return isDisplayed;
  }

  async getElementAttributeBySelector(selector, attribute) {
    await this.elementIsDisplayed(selector);
    const element = await $(this.getLocator(selector));
    return (await element.getAttribute(attribute));
  }

  async setInputField(value, selector) {
    await this.clickElement(selector);
    const myButton = await $(this.getLocator(selector));
    await myButton.setValue(value);
  }

  async setTextObject(value, webElement) {
    await webElement.waitForDisplayed({ timeout: 10000 });
    await webElement.setValue(value);
  }

  async getMatchingElementByIndex(selector, index) {
    const locator = this.getLocator(selector);
    const elements = await $$(locator);
    if (elements.length > index) {
      return elements[index];
    }
    return null;
  }

  async getLastMatchingElement(selector) {
    const locator = this.getLocator(selector);
    const elements = await $$(locator);
    if (elements.length > 0) {
      return elements[elements.length - 1];
    }
    return null;
  }

  async uploadFile(localFilePath, fileInputSelector, submitButtonSelector) {
    const fileInput = await $(this.getLocator(fileInputSelector));
    const submitButton = await $(this.getLocator(submitButtonSelector));
    const remoteFilePath = await browser.uploadFile(localFilePath);
    await fileInput.setValue(remoteFilePath);
    await submitButton.click();
  }

  //Scroll until element for a selector is into viewport and return the element
  async scrollToElement(selector) {
    const locator = this.getLocator(selector);
    const element = await $(locator);
    await element.scrollIntoView();
    return element;
  }

  //Move the mouse to an element
  async moveToElement(element) {
    await element.waitForDisplayed({ timeout: 10000 });
    await element.moveTo();
  }

  //Scroll until element by selector is into viewport and move mouse to the element
  async scrollAndMoveToElement(selector) {
    const element = await this.scrollToElement(selector);
    await this.moveToElement(element);
  }

  async scrollVerticalUntilTextIntoViewForAndroid(textToBeIntoView) {
    const func = 'new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView';
    await $(`android=${func}("${this.getLocator(textToBeIntoView)}")`);
  }

  async scrollHorizontalUntilTextIntoViewForAndroid(textToBeIntoView) {
    const func = 'new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollTextIntoView';
    await $(`android=${func}("${this.getLocator(textToBeIntoView)}")`);
  }

  //Choose a Select tag option by Visible Text
  async chooseSelectOptionByVisibleText(selector, visibleText) {
    const locator = this.getLocator(selector);
    await this.elementIsDisplayed(selector);
    const select = await $(locator);
    await select.selectByVisibleText(visibleText);
  }

  //Choose a Select tag option by Attribute
  async chooseSelectOptionByAttribute(selector, attribute, value) {
    const locator = this.getLocator(selector);
    await this.elementIsDisplayed(selector);
    const select = await $(locator);
    await select.selectByAttribute(attribute, value);
    expect(await select.getValue()).to.equal(value);
  }

  //status should be true or false indicating whether the checkbox should be selected or not
  async setCheckBox(selector, status) {
    const locator = this.getLocator(selector);
    const checkbox = await $(locator);
    const isSelected = await checkbox.isSelected();
    if (isSelected != status) {
      await checkbox.click();
    }
  }

  //get a random integer between 0(inclusive) and maxIntValue(exclusive)
  getRandomInt(maxIntValue) {
    return Math.floor(Math.random() * maxIntValue);
  }

  getUAT(environment) {
    switch(environment) {
      case 'UAT2':
      case 'MYSCRIPBOX2':
        return 2;
      case 'UAT38':
      case 'MYSCRIPBOX38':
        return 38;
      default:
        return undefined;
    }
  }

  getMyScripbox(uat) {
    if (uat === 38) {
      return env.myScripboxUat38;
    } else if(uat === 2) {
      return env.myScripboxUat2;
    }
    return undefined;
  }
}

module.exports = new Utils();
