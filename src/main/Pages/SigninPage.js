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
        util.clickElement(signinPageObject.continueLoginButton);
        return this;
    }
  
    enterEmail(emailID) {
        util.setInputField(emailID, signinPageObject.email);
        return this;
    }
  
    enterPassword(password) { 
        util.setInputField(password, signinPageObject.password);
        return this;
    }
  
    clickContinueSigninButton() {
        util.clickElement(signinPageObject.continueSigninButton);
        return this;
    }
    
}
module.exports = new SigninPage();