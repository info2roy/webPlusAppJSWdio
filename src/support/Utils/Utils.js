const Device = require('../libraries/Device');
const { expect } = require('chai');

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

  //Get the text of an element found by given selector.
  async getText(selector) {
    const locator = this.getLocator(selector);
    await this.elementIsDisplayed(selector);
    const element = await $(locator);
    return (await element.getText());
  }

  /**
   * Return the matching element index for a given selector which matches input text
   * @param  {string} selector The selector representing multiple matching elements
   * @param  {string} text The text which should be matched with element's enclosing text
   * @returns the element index whose text matches input text
   */
  async findMatchingElementIndexWithGivenText(selector, text) {
    const locator = this.getLocator(selector);
    const elements = await $$(locator);
    for (let index = 0; index < elements.length; index ++) {
      const value = await elements[index].getText();
      console.log(`index ${index} value ${value}`);
      if (value === text) {
        return index;
      }
    }
    return -1;
  }

  /**
   * Return the matching element for a given selector which matches input text
   * @param  {string} selector The selector representing multiple matching elements
   * @param  {string} text The text which should be matched with element's enclosing text
   * @returns the element whose text matches input text
   */
  async findMatchingElementWithGivenText(selector, text) {
    const locator = this.getLocator(selector);
    const elements = await $$(locator);
    for (let index = 0; index < elements.length; index ++) {
      const value = await elements[index].getText();
      console.log(`index ${index} value ${value}`);
      if (value === text) {
        return elements[index];
      }
    }
    return undefined;
  }

  //Get the value of a <textarea>, <select> or text <input> found by given selector.
  async getValue(selector) {
    const locator = this.getLocator(selector);
    await this.elementIsDisplayed(selector);
    const element = await $(locator);
    return (await element.getValue());
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

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  /**
   * Convert abbriviated string representation of a number to absolute value
   * @param  {string} abbrStr the abbriviated string like 10.0 K, 10.0K, 23 k, 23k, 12.4 L, 12.4L, 1.2 l, 1.2l, 4 M, 4M, 5.4 m, 5.4m etc
   * @returns '10.0 K' OR '10.0K'-> 10000.0, '23 k' OR '23k' -> 23000.0, '12.4 L' OR '12.4L' -> 1240000.0, '1.2 l' OR '1.2l' -> 120000.0, '4 M' or '4M' -> 4000000.0, '5.4 m' or '5.4m ' -> 5400000
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
    console.log(`parts ${parts} abbrChar ${abbrChar}`);
    switch(abbrChar) {
      case 'K':
      case 'k':
        return Math.round(parseFloat(parts[0]) * 1000);
      case 'L':
      case 'l':
        return Math.round(parseFloat(parts[0]) * 100000);
      case 'M':
      case 'm':
        return Math.round(parseFloat(parts[0]) * 1000000);
      default:
        return Math.round(parseFloat(abbrStr));
    }
  }

  absoluteValueToNumberAbbriviation(number) {
    if (number > 100000) {
      const lacs = number / 100000;
      return `${lacs.toFixed(2)}L`;
    } else if (number > 1000) {
      const thousands = number / 1000;
      return `${thousands.toFixed(2)}K`;
    }
  }

  clickElementByText(button) {
    const webElement = (`//*[text()="${button}"]`);
    const myButton = await $(webElement);
    await myButton.click();

  }
}

module.exports = new Utils();
