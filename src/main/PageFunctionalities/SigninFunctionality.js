const signinPage = require('../Pages/SigninPage')

class SigninPage {

  
  async loginWithUsernameAndPassword(username, password) {
      console.log("inside loginWithUsernameAndPassword(username, password)");

      await signinPage.enterEmail(username);
      await browser.pause(2000);
      await signinPage.enterPassword(password);
      await browser.pause(2000);
      await signinPage.clickContinueSigninButton();
      await browser.pause(5000);
}


  async loginWithUsername(username) {

      console.log("inside loginWithUsername(username)");

      await signinPage.enterUserId(username);
      await browser.pause(1000);
      await signinPage.clickContinueLoginButton();
      await browser.pause(1000);
  }
}

module.exports = new SigninPage();
