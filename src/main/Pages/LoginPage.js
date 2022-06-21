
// const clickElement = require('../../support/action/clickElement');
const util = require('../../support/Utils/Utils');
const isDisplayed = require('webdriverio/build/commands/element/isDisplayed');
const loginObject =require('../PageObjects/LoginPageObjects');
const device = require('../../support/libraries/Device')

class LoginPage{

    async visit(url) {
      await browser.url(url)
      return this;
    }
  
    scriptBoxLoginPageImage() {
      isDisplayed(loginObject.scripboxLoginImage);
        return this;
    }

    loginSignupPageNavigation_android(){
      return util.elementIsDisplayed(loginObject.loginSignUpHeader_android)
    }

    loginEmailTextBoxPresent(){
      return util.elementIsDisplayed(loginObject.loginCredentialsText_android)
    }
  
    async enterUserId(emailID) {
        await util.setInputField(emailID, loginObject.userIdField);
        return this;
    }

    async userIdFieldIsDisplayed() {
        return await util.elementIsDisplayed(loginObject.userIdField);
    }

    async clickContinueOrNextButton() {
        await util.clickElement(loginObject.continueOrNextButton);
        return this;
    }

    async continueOrNextButtonIsDisplayed() {
        return await util.elementIsDisplayed(loginObject.continueOrNextButton);
    }

    async firstLoginPageHeaderIsDisplayed() {
        if (device.isAndroidApp()) {
            return await util.elementIsDisplayed(loginObject.firstLoginPageHeader);
        } else {
            return true;
        }
    }

    emailFieldIsDisplayed() {
        if (device.isMobileWeb() || device.isDesktop()){
            return util.elementIsDisplayed(loginObject.emailField);
        }
        else if(driver.isAndroid){
            console.log("Email field not available for Android")
            return true
        }
    }

    async enterEmail(emailID) {
        if (device.isMobileWeb() || device.isDesktop()){
            await util.setInputField(emailID, loginObject.emailField);
            return this;
        }
        else if(device.isAndroid){
            console.log("Skipping enterEmail for Android")
            return this;
        }
    }

    passwordFieldIsDisplayed() {
        return util.elementIsDisplayed(loginObject.passwordField);
    }

    async enterPassword(password) {
        await util.setInputField(password, loginObject.passwordField);
        return this;
    }

    continueLoginButtonIsDisplayed() {
        return util.elementIsDisplayed(loginObject.continueLoginButton);
    }

    async clickContinueLoginButton() {
        await util.clickElement(loginObject.continueLoginButton);
        return this;
    }
  
}
module.exports = new LoginPage()