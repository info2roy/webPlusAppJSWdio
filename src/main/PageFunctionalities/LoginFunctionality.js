const loginPage = require('../Pages/LoginPage')

class LoginPage {

  async androidHomePageLaunch(){
    
    return (loginPage.loginSignupPageNavigation_android() && loginPage.loginEmailTextBoxPresent());
  }

  
  async loginWithUsernameAndPassword(username, password) {
    console.log("inside loginWithUsernameAndPassword(username, password)");

    await loginPage.enterEmail(username);
    await loginPage.enterPassword(password);
    await loginPage.clickContinueSigninButton();
          
}
  async secondLoginPageLaunched() {
      return ((await loginPage.emailFieldIsDisplayed()) && (await loginPage.passwordFieldIsDisplayed()) 
      && (await loginPage.continueSigninButtonIsDisplayed()));
  }

  async firstLoginPageLaunched() {
      return ( (await loginPage.firstLoginPageHeaderIsDisplayed()) && 
      (await loginPage.userIdFieldIsDisplayed()) && 
      (await loginPage.continueLoginButtonIsDisplayed()));
  }

  async loginWithUsername(username) {
      await loginPage.enterUserId(username);
      await loginPage.clickContinueLoginButton();
  }  
}

module.exports = new LoginPage()
