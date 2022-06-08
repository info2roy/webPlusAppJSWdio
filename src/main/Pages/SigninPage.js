const util = require('../../support/Utils');
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

    clickContinueLoginButton() {
        console.log("clickContinueLoginButton")
        util.clickElement(signinPageObject.continueLoginButton);
        return this;
    }
  
    enterEmail(emailID) {
        console.log("enterEmail")
        util.setInputField(emailID, signinPageObject.email);
        return this;
    }
  
    enterPassword(password) { 
        console.log("enterPassword")
        util.setInputField(password, signinPageObject.password);
        return this;
    }
  
    clickContinueSigninButton() {
        console.log("clickContinueSigninButton")
        util.clickElement(signinPageObject.continueSigninButton);
        return this;
    }
    
}
module.exports = new SigninPage();