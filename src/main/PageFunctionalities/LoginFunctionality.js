const loginPage = require('../Pages/LoginPage');

class LoginPage {
  async startExploring() {
    await loginPage.clickStartExploring();
    return (await loginPage.scripBoxExclusiveBenifitsDisplayed());
  }

  async loginWithUsernameAndPassword(username, password) {
    await loginPage.enterEmail(username);
    await loginPage.enterPassword(password);
    await loginPage.clickContinueLoginButton();
  }

  async secondLoginPageLaunched() {
    return ((await loginPage.emailFieldIsDisplayed()) && (await loginPage.passwordFieldIsDisplayed()) &&
      (await loginPage.continueLoginButtonIsDisplayed()));
  }

  async firstLoginPageLaunched() {
    return (await loginPage.firstLoginPageHeaderIsDisplayed());
  }

  async loginWithUsername(username) {
    await loginPage.enterUserId(username);
    await loginPage.clickContinueOrNextButton();
  }
}

module.exports = new LoginPage();
