const util = require('../../support/Utils/Utils');
const signinPageObject =require('../PageObjects/SigninPageObjects');

class SigninPage  {
    
    enterLoginDetails = (userEmail, userPassword) => {
        const emailInputValue = DeviceLib.isMobile() ? `#loginPage-Email` : signinPageObject.email
        const passInputValue = DeviceLib.isMobile() ? `#loginPage-Password` : signinPageObject.password
        util.setInputField(userEmail, emailInputValue)
        util.setInputField(userPassword, passInputValue)
    }
  
    enterUserId(emailID) {
        util.setInputField(emailID, signinPageObject.userId);
        return this;
    }

    userIdFieldIsDisplayed() {
        return util.elementIsDisplayed(signinPageObject.userId);
    }


    clickContinueLoginButton() {
        console.log("clickContinueLoginButton")
        util.clickElement(signinPageObject.continueLoginButton);
        return this;
    }

    continueLoginButtonIsDisplayed() {
        return util.elementIsDisplayed(signinPageObject.continueLoginButton);
    }

    emailFieldIsDisplayed() {
        return util.elementIsDisplayed(signinPageObject.email);
    }
  
    enterEmail(emailID) {
        console.log("enterEmail")
        util.setInputField(emailID, signinPageObject.email);
        return this;
    }
  
    passwordFieldIsDisplayed() {
        return util.elementIsDisplayed(signinPageObject.password);
    }

    enterPassword(password) { 
        console.log("enterPassword")
        util.setInputField(password, signinPageObject.password);
        return this;
    }
  
    continueSigninButtonIsDisplayed() {
        return util.elementIsDisplayed(signinPageObject.continueSigninButton);
    }

    clickContinueSigninButton() {
        console.log("clickContinueSigninButton")
        util.clickElement(signinPageObject.continueSigninButton);
        return this;
    }
    
}
module.exports = new SigninPage();