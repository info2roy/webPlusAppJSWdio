
// const clickElement = require('../../support/action/clickElement');
const util = require('../../support/Utils');
// const setInputField = require('../../support/action/setInputField');
const isDisplayed = require('webdriverio/build/commands/element/isDisplayed');
// import openWebsite from '../support/action/openWebsite'
// const loginObject = require('');
const loginObject =require('../PageObjects/LoginPageObjects');
const DeviceLib = require('../../support/libraries/Device')
// import DeviceLib from '../../support/libraries/Device'

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
      console.log("***** Hello *****")
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