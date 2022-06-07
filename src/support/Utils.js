class Utils {

    waitForDisplayed (selector, falseCase) {
        /**
         * Maximum number of milliseconds to wait for
         * @type {Int}
         */
        const ms = 10000
        $(selector).waitForDisplayed(ms, !!falseCase)
        return this;
    }

    async clickElement(selector){
      const myButton = await $(selector);
      await myButton.click()
           
    }

    async setInputField(value, selector) {
        const myButton = $(selector);
        expect(myButton).toBeDisplayed()
        myButton.setValue(value);
        await browser.pause(5000)
    }

    async uploadFile(localFilePath, fileInputSelector, submitButtonSelector) {
        //const localFilePath = path.join(__dirname, '../data/desktop.jpg');
        //const fileInputSelector = "input#file"
        const fileInput = $(fileInputSelector);
        //const submitButtonSelector = "//button[contains(text(), 'Submit')]";
        const submitButton = $(submitButtonSelector);
        const remoteFilePath = await browser.uploadFile(localFilePath);
        await input.setValue(remoteFilePath);
        await submitButton.click();
    }

}

module.exports = new Utils()