const signinPage = require('../Pages/SigninPage')

class SigninPage {

  
  async loginWithUsernameAndPassword(username, password) {
      console.log("inside loginWithUsernameAndPassword(username, password)");

      await signinPage.enterEmail(username);
      await signinPage.enterPassword(password);
      await signinPage.clickContinueSigninButton();
            
}
  async secondLoginPageLaunched() {
      return (signinPage.emailFieldIsDisplayed() && signinPage.passwordFieldIsDisplayed() && signinPage.continueSigninButtonIsDisplayed());
  }
  
  async firstLoginPageLaunched() {
      return (signinPage.userIdFieldIsDisplayed() && signinPage.continueLoginButtonIsDisplayed());
  }

  async loginWithUsername(username) {
      await signinPage.enterUserId(username);
      await signinPage.clickContinueLoginButton();
  }


}

module.exports = new SigninPage();
