
// const clickElement = require('../../support/action/clickElement');
const util = require('../../support/Utils/Utils');
const isDisplayed = require('webdriverio/build/commands/element/isDisplayed');
const loginObject =require('../PageObjects/LoginPageObjects');
const DeviceLib = require('../../support/libraries/Device')

class LoginPage{

  async visit(url) {
    await browser.url(url)
    return this;
  }
  
    scriptBoxLoginPageImage() {
      isDisplayed(loginObject.scripboxLoginImage);
        return this;
    }

    enterLoginDetails = (userEmail, userPassword) => {
      const emailInputValue = DeviceLib.isMobile() ? `#loginPage-Email` : loginObject.email
      const passInputValue = DeviceLib.isMobile() ? `#loginPage-Password` : loginObject.password
      util.setInputField(userEmail, emailInputValue)
      util.setInputField(userPassword, passInputValue)
    }


    enterEmail(emailID) {
        util.setInputField(emailID, loginObject.email)
        return this;
    }

    enterPassword(password) { 
      util.setInputField(password, loginObject.password)
      return this;
    }

    clickLoginButton() {
      util.clickElement(loginObject.loginButton)
      return this;
    }


}
module.exports = new LoginPage()