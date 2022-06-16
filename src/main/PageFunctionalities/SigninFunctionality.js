const signinPage = require('../Pages/SigninPage')

class SigninPage {

  
  async loginWithUsernameAndPassword(username, password) {
      console.log("inside loginWithUsernameAndPassword(username, password)");

      await signinPage.enterEmail(username);
      await signinPage.enterPassword(password);
      await signinPage.clickContinueSigninButton();
            
}
  async secondLoginPageLaunched() {
      return ((await signinPage.emailFieldIsDisplayed()) && (await signinPage.passwordFieldIsDisplayed()) 
      && (await signinPage.continueSigninButtonIsDisplayed()));
  }
  
  async firstLoginPageLaunched() {
      return ((await signinPage.userIdFieldIsDisplayed()) && (await signinPage.continueLoginButtonIsDisplayed()));
  }

  async loginWithUsername(username) {
      await signinPage.enterUserId(username);
      await signinPage.clickContinueLoginButton();
  }


}

module.exports = new SigninPage();
