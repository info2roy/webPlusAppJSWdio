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
    for (let index = 0; index < elements.length; index++) {
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
    for (let index = 0; index < elements.length; index++) {
      const value = await elements[index].getText();
      console.log(`index ${index} value ${value}`);
      if (value === text) {
        return elements[index];
      }
    }
    return undefined;
  }

  /**
   * Return the matching element for a given selector which matches all (attribute, value) in atrributes_object
   * @param  {string} selector The selector representing multiple matching elements
   * @param  {string} atrributes_object The object contains key,value corresponding to attribute,value
   * @returns the first matching element, undefined if no match found
   */
  async findMatchingElementWithGivenAttributes(selector, atrributes_object) {
    const locator = this.getLocator(selector);
    const elements = await $$(locator);
    for (let index = 0; index < elements.length; index ++) {
      let all_matched = true;
      for (attribute in atrributes_object) {
        const value = await elements[index].getAttribute(attribute);
        console.log(`index ${index} attribute ${attribute} value ${value} expected ${atrributes_object[attribute]}`);
        if (value !== atrributes_object[attribute]) {
          all_matched = false;
          break;
        }
      }
      if(all_matched) {
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
    } catch (err) {
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

  async scrollVerticalUntilTextIntoViewForAndroid(textToBeIntoView, scrollableInstanceId = 0) {
    const func = `new UiScrollable(new UiSelector().scrollable(true).instance(${scrollableInstanceId})).scrollTextIntoView`;
    await $(`android=${func}("${this.getLocator(textToBeIntoView)}")`);
  }

  async scrollVerticalToEndForAndroid(scrollableInstanceId, maxSwipes) {
    //Ref: https://developer.android.com/reference/androidx/test/uiautomator/UiScrollable#scrolltoend
    const func = `new UiScrollable(new UiSelector().scrollable(true).instance(${scrollableInstanceId})).setAsVerticalList().scrollToEnd`;
    await $(`android=${func}(${maxSwipes})`);
  }

  async scrollHorizontalUntilTextIntoViewForAndroid(textToBeIntoView, scrollableInstanceId = 0) {
    const func = `new UiScrollable(new UiSelector().scrollable(true).instance(${scrollableInstanceId})).setAsHorizontalList().scrollTextIntoView`;
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
    switch (abbrChar) {
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
        return Math.round(parseFloat(abbrStr.replace(/,/g, '')));
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

  async clickRadioButton(option) {
    const webElement = (`//*[contains(@class, 'radio-input') and contains(text(),"${option}")]`);
    const myButton = await $(webElement);
    await myButton.click();
  }

  async isTextDisplayed(text) {
    await browser.pause(1000);
    const webElement = (`//*[contains(text(),"${text}")]`);
    const isDisplayed = await $(webElement).isDisplayed();
    return isDisplayed;
  }

  /**
   * Set a monthYear for given month and year on the month calendar shown on the page
   * @param  {string} monthYear The text of the form 'Jan, 2022'
   * @param  {object} monthYearFieldSelector The selector for monthYear textfield
   * @param  {object} pickedYearSelector The selector for the displayed selected/picked year
   * @param  {object} prevYearButtonSelector The selector for arrow to be used for navigating to the previous year
   * @param  {object} nextYearButtonSelector The selector for arrow to be used for navigating to the next year
   * @param  {object} monthSelector The selector for selecting the month on the calendar
   */
  async setMonthAndYear(monthYear, monthYearFieldSelector, pickedYearSelector, prevYearButtonSelector, nextYearButtonSelector, monthSelector) {
    const parts = monthYear.split(' ');
    const month = parts[0].slice(0, -1);
    const year = parseInt(parts[1].trim(), 10);
    await this.clickElement(monthYearFieldSelector);
    const currentYear = parseInt(await this.getText(pickedYearSelector), 10);
    let yearDiff = currentYear - year;
    if (yearDiff > 0) {
      for (let index = 0; index < yearDiff; index ++) {
        await this.clickElement(prevYearButtonSelector);
      }
    } else if (yearDiff < 0) {
      yearDiff = yearDiff * (-1);
      for (let index = 0; index < yearDiff; index ++) {
        await this.clickElement(nextYearButtonSelector);
      }
    }
    const selectedYear = parseInt(await this.getText(pickedYearSelector), 10);
    expect(selectedYear).to.equal(year);
    await this.clickElement(monthSelector(month));
  }

  //pad zeroes at the beginning so that the string num has total places digits
  zeroPad(num, places) {
    return String(num).padStart(places, '0');
  }

  /**
   * Set a date for given day, month and year on the calendar shown on the page
   * @param  {Number} day The day between 1 and 31
   * @param  {string} monthYear The text of the form 'Jan, 2022'
   * @param  {object} monthYearFieldSelector The selector for monthYear textfield
   * @param  {object} pickedMonthSelector The selector for the displayed selected/picked month
   * @param  {object} prevMonthButtonSelector The selector for arrow to be used for navigating to the previous month
   * @param  {object} nextMonthButtonSelector The selector for arrow to be used for navigating to the next month
   * @param  {object} daySelector The selector for selecting the day on the calendar
   */
  async setDate(day, monthYear, monthYearFieldSelector, pickedMonthSelector, prevMonthButtonSelector, nextMonthButtonSelector, daySelector) {
    const monthNames = { 'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6, 'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12};
    const parts = monthYear.split(' ');
    const month = parts[0].slice(0, -1);
    const year = parseInt(parts[1].trim(), 10);
    console.log(`monthYear ${monthYear} month ${month} year ${year}`);
    await this.clickElement(monthYearFieldSelector);
    const currentMonthStr = await this.getText(pickedMonthSelector);
    const currentMonthParts = currentMonthStr.trim().split(' ');
    const currentMonth = currentMonthParts[0].slice(0, 3);
    const currentYear = parseInt(currentMonthParts[1], 10);
    console.log(`currentMonth ${currentMonthStr} month ${currentMonth} year ${currentYear}`);
    let yearDiff = currentYear - year;
    let monthDiff = monthNames[currentMonth] - monthNames[month];
    console.log(`yearDiff ${yearDiff} monthDiff ${monthDiff}`);
    if (yearDiff > 0 || (yearDiff === 0 && monthDiff >= 0)) {
      for (let index = 0; index < (12 * yearDiff + monthDiff); index ++) {
        await this.clickElement(prevMonthButtonSelector);
      }
    } else if (yearDiff <= 0) {
      yearDiff = yearDiff * (-1);
      monthDiff = monthDiff * (-1);
      for (let index = 0; index < (12 * yearDiff + monthDiff); index ++) {
        await this.clickElement(nextMonthButtonSelector);
      }
    }
    const selectedMonthStr = await this.getText(pickedMonthSelector);
    const selectedMonthParts = selectedMonthStr.trim().split(' ');
    const selectedMonth = selectedMonthParts[0].slice(0, 3);
    const selectedYear = parseInt(selectedMonthParts[1], 10);
    console.log(`selectedMonth ${selectedMonthStr} month ${selectedMonth} year ${selectedYear}`);
    expect(selectedYear).to.equal(year);
    expect(selectedMonth).to.equal(month);
    await this.clickElement(daySelector(day));
  }
}

module.exports = new Utils();
