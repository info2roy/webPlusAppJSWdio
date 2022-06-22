const isDisplayed = require('webdriverio/build/commands/element/isDisplayed');

class Utils {

    async waitForElementDisplayed (selector) {
        let elem = await $(selector)
        await elem.waitForDisplayed({ timeout: 10000 });
        return this;
    }

    async clickElement(selector){
      const myButton = await $(selector);
      this.elementIsDisplayed(selector)
      await myButton.click();
    }

    async elementIsDisplayed(selector){
        await browser.waitUntil(
            async () => (await $(selector).isDisplayed()),
            {
                timeout: 30000,
                timeoutMsg: selector + ' Selector not displayed yet'
            }
        );
        // await browser.pause(5000);
        let isDisplayed = await $(selector).isDisplayed();
        console.log(selector+" is displayed check --> "+isDisplayed);
        return isDisplayed
    }

    async setInputField(value, selector) {
        const myButton = $(selector);
        expect(myButton).toBeDisplayed()
        myButton.setValue(value);
        await browser.pause(5000)
    }

    async setInputValueToAndroid(value, selector) {
        const myButton = $(selector);
        expect(myButton).toBeDisplayed()
        myButton.addValue(value);
        await browser.pause(5000)
    }

    async uploadFile(localFilePath, fileInputSelector, submitButtonSelector) {
        const fileInput = $(fileInputSelector);
        const submitButton = $(submitButtonSelector);
        const remoteFilePath = await browser.uploadFile(localFilePath);
        await fileInput.setValue(remoteFilePath);
        await submitButton.click();
    }

    async scrollUntilTextIntoView(textToBeIntoView) {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${textToBeIntoView}")');
    }

}

module.exports = new Utils()