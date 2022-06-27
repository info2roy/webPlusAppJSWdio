const LoginPage = require('../Pages/LoginPage');

class LoginFunctionality {
  async startExploring() {
    await LoginPage.clickStartExploring();
    return (await LoginPage.scripBoxExclusiveBenifitsDisplayed());
  }

  async loginWithUsernameAndPassword(username, password) {
    await LoginPage.enterEmail(username);
    await LoginPage.enterPassword(password);
    await LoginPage.clickContinueLoginButton();
  }

  async secondLoginPageLaunched() {
    return (await LoginPage.secondLoginPageHeaderIsDisplayed());
  }

  async firstLoginPageLaunched() {
    return (await LoginPage.firstLoginPageHeaderIsDisplayed());
  }

  async loginWithUsername(username) {
    await LoginPage.enterUserId(username);
    await LoginPage.clickContinueOrNextButton();
  }
}

module.exports = new LoginFunctionality();
