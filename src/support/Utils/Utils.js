const isDisplayed = require('webdriverio/build/commands/element/isDisplayed');
const device = require('../libraries/Device');

class Utils {


    getLocator(object) {
        if (device.isMobileWeb() || device.isDesktop()) {
            return object.web;
        } else if (device.isAndroidApp() ) {
            return object.androidapp;
        } else if (device.isiOSApp() ) {
            return object.iosapp;
        }
    }
    getPlatform() {
        let platform = "";
        console.log(browser.requestedCapabilities);
        if ("goog:chromeOptions" in browser.requestedCapabilities) {
            platform = "mobileweb";
        } else if (driver.isAndroid){
            platform = "androidApp";
        }
        else
            platform = "desktop";
        console.log(`platform ${platform}`)
        return platform;
    }

    async waitForElementDisplayed (selector) {
        let elem = await $(this.getLocator(selector))
        await elem.waitForDisplayed({ timeout: 10000 });
        return this;
    }

    async clickElement(selector){
      browser.pause(5000)
      const locator = this.getLocator(selector);
      const myButton = await $(locator);
      //expect(myButton).toBeDisplayed();
      this.elementIsDisplayed(selector);
      await myButton.click();
    }

    async elementIsDisplayed(selector){
        await browser.pause(2000);
        const locator = this.getLocator(selector);
        let isDisplayed = await $(locator).isDisplayed();
        console.log(locator+" is displayed check --> "+isDisplayed);
        await browser.pause(2000);
        return isDisplayed
    }

    async setInputField(value, selector) {
        const myButton = await $(this.getLocator(selector));
        await expect(myButton).toBeDisplayed()
        await myButton.setValue(value);
    }

    async setInputValueToAndroid(value, selector) {
        const myButton = $(this.getLocator(selector));
        expect(myButton).toBeDisplayed()
        myButton.addValue(value);
        await browser.pause(5000)
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

module.exports = new Utils()