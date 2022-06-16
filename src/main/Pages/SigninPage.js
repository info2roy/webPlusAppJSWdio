const util = require('../../support/Utils/Utils');
const signinPageObject =require('../PageObjects/SigninPageObjects');
const loginPageObject=require('../PageObjects/LoginPageObjects')
const device = require("../../support/libraries/Device");

class SigninPage  {
    
    enterLoginDetails = (userEmail, userPassword) => {
        const emailInputValue = DeviceLib.isMobile() ? `#loginPage-Email` : signinPageObject.email
        const passInputValue = DeviceLib.isMobile() ? `#loginPage-Password` : signinPageObject.password
        util.setInputField(userEmail, emailInputValue)
        util.setInputField(userPassword, passInputValue)
    }
  
    async enterUserId(emailID) {
        if (device.isMobileWeb() || device.isDesktop()){
            util.setInputField(emailID, signinPageObject.userId);
            return this;
        }
        else if(driver.isAndroid){
            util.setInputValueToAndroid(emailID, loginPageObject.loginCredentialsText_android);
            await browser.pause(4000)
            return this;
        }
        return this 
    }

    userIdFieldIsDisplayed() {
        if (device.isMobileWeb() || device.isDesktop()){
            return util.elementIsDisplayed(signinPageObject.userId);
        }
        else if (driver.isAndroid){
            browser.pause(4000)
            return util.elementIsDisplayed(loginPageObject.loginCredentialsText_android);
        }
        
    }


    async clickContinueLoginButton() {
        if (device.isMobileWeb() || device.isDesktop()){
            await browser.pause(5000);                                        //this pause has to be removed 
            await util.clickElement(signinPageObject.continueLoginButton);
        }
        else if(driver.isAndroid){
            util.clickElement(loginPageObject.nextButtonLoginPage_android);
            await browser.pause(5000)
        }
        
    }

    async continueLoginButtonIsDisplayed() {
        if (device.isMobileWeb() || device.isDesktop()){
            return await util.elementIsDisplayed(signinPageObject.continueLoginButton);
        }
        else if(driver.isAndroid){
            browser.pause(4000)
            return util.elementIsDisplayed(loginPageObject.nextButtonLoginPage_android)
        }
        
    }

    emailFieldIsDisplayed() {
        if (device.isMobileWeb() || device.isDesktop()){
            return util.elementIsDisplayed(signinPageObject.email);
        }
        else if(driver.isAndroid){
            console.log("Email field not available for Android")
            return true
        }
        
    }
  
    enterEmail(emailID) {
        if (device.isMobileWeb() || device.isDesktop()){
            util.setInputField(emailID, signinPageObject.email);
            return this;
        }
        else if(device.isAndroid){
            console.log("Skipping for Android")
            return this;
        }
        
    }
  
    passwordFieldIsDisplayed() {
        if (device.isMobileWeb() || device.isDesktop()){
            return util.elementIsDisplayed(signinPageObject.password);
        }
        else if(driver.isAndroid){
            console.log("Password field not available for Android")
            return util.elementIsDisplayed(loginPageObject.loginCredentialsText_android);
        }
        
    }

    async enterPassword(password) { 
        if (device.isMobileWeb() || device.isDesktop()){
            util.setInputField(password, signinPageObject.password);
            return this;
        }
        else if(driver.isAndroid){
            await browser.pause(5000)
            await util.setInputValueToAndroid(password, loginPageObject.loginCredentialsText_android);
            return this;
        }
    }
  
    continueSigninButtonIsDisplayed() {
        if (device.isMobileWeb() || device.isDesktop()){
            return util.elementIsDisplayed(signinPageObject.continueSigninButton);
        }
        else if(driver.isAndroid){
            return util.elementIsDisplayed(loginPageObject.continueButton_android);
        }
        
    }

    async clickContinueSigninButton() {
        if (device.isMobileWeb() || device.isDesktop()){
            util.clickElement(signinPageObject.continueSigninButton);
        }
        else if(driver.isAndroid){
            await browser.pause(4000)
            await util.clickElement(loginPageObject.continueButton_android);
        }
        return this;
    }
    
}
module.exports = new SigninPage();