
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
      if (device.isMobileWeb() || device.isDesktop()){
          util.setInputField(emailID, loginObject.userId);
          return this;
      }
      else if(driver.isAndroid){
          util.setInputValueToAndroid(emailID, loginObject.loginCredentialsText_android);
          await browser.pause(4000)
          return this;
      }
      return this 
    }

    userIdFieldIsDisplayed() {
        if (device.isMobileWeb() || device.isDesktop()){
            return util.elementIsDisplayed(loginObject.userId);
        }
        else if (driver.isAndroid){
            browser.pause(4000)
            return util.elementIsDisplayed(loginObject.loginCredentialsText_android);
        }
        
    }

    async clickContinueLoginButton() {
        if (device.isMobileWeb() || device.isDesktop()){
            await browser.pause(5000);                                        //this pause has to be removed 
            await util.clickElement(loginObject.continueLoginButton);
        }
        else if(driver.isAndroid){
            util.clickElement(loginObject.nextButtonLoginPage_android);
            await browser.pause(5000)
        }
        
    }

    async continueLoginButtonIsDisplayed() {
        if (device.isMobileWeb() || device.isDesktop()){
            return await util.elementIsDisplayed(loginObject.continueLoginButton);
        }
        else if(driver.isAndroid){
            browser.pause(4000)
            return util.elementIsDisplayed(loginObject.nextButtonLoginPage_android)
        }
        
    }

    emailFieldIsDisplayed() {
        if (device.isMobileWeb() || device.isDesktop()){
            return util.elementIsDisplayed(loginObject.email);
        }
        else if(driver.isAndroid){
            console.log("Email field not available for Android")
            return true
        }
        
    }

    async enterEmail(emailID) {
        if (device.isMobileWeb() || device.isDesktop()){
            await util.setInputField(emailID, loginObject.email);
            return this;
        }
        else if(device.isAndroid){
            console.log("Skipping for Android")
            return this;
        }
        
    }

    passwordFieldIsDisplayed() {
        if (device.isMobileWeb() || device.isDesktop()){
            return util.elementIsDisplayed(loginObject.password);
        }
        else if(driver.isAndroid){
            console.log("Password field not available for Android")
            return util.elementIsDisplayed(loginObject.loginCredentialsText_android);
        }
        
    }

    async enterPassword(password) { 
        if (device.isMobileWeb() || device.isDesktop()){
            await util.setInputField(password, loginObject.password);
            return this;
        }
        else if(driver.isAndroid){
            await browser.pause(5000)
            await util.setInputValueToAndroid(password, loginObject.loginCredentialsText_android);
            return this;
        }
    }

    continueSigninButtonIsDisplayed() {
        if (device.isMobileWeb() || device.isDesktop()){
            return util.elementIsDisplayed(loginObject.continueSigninButton);
        }
        else if(driver.isAndroid){
            return util.elementIsDisplayed(loginObject.continueButton_android);
        }
        
    }

    async clickContinueSigninButton() {
        if (device.isMobileWeb() || device.isDesktop()){
            await util.clickElement(loginObject.continueSigninButton);
            await browser.pause(10000);
        }
        else if(driver.isAndroid){
            await browser.pause(4000)
            await util.clickElement(loginObject.continueButton_android);
        }
        return this;
    }
  
}
module.exports = new LoginPage()