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

  async elementIsDisplayed(selector, timeoutMS = 15000) {
    const locator = this.getLocator(selector);
    // const element = await $(locator);
    try {
      await browser.waitUntil(
        async () => await $(locator).isDisplayed(),
        {
          timeout: timeoutMS,
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

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  /**
   * Convert abbriviated string representation of a number to absolute value
   * @param  {string} abbrStr the abbriviated string like 10.0 K, 23 k, 12.4 L, 1.2 l, 4 M, 5.4 m etc
   * @returns '10.0 K' -> 10000.0, '23 k' -> 23000.0, '12.4 L' -> 1240000.0, 1.2 l -> 120000.0, '4 M' -> 4000000.0, '5.4 m' -> 5400000
   */
  numberAbbriviationToAbsoluteValue(abbrStr) {
    const parts = abbrStr.split(' ');
    let abbrChar = '';
    if (parts.length == 2) {
      abbrChar = parts[1];
    } else {
      abbrChar = abbrStr.at(-1);
      parts[0] = parts[0].slice(0, -1);
    }
    switch(abbrChar) {
      case 'K':
      case 'k':
        return (parseFloat(parts[0]) * 1000);
      case 'L':
      case 'l':
        return (parseFloat(parts[0]) * 100000);
      case 'M':
      case 'm':
        return (parseFloat(parts[0]) * 1000000);
      default:
        throw `invalid number string ${abbrStr}`;
    }
  }
}

module.exports = new Utils();
