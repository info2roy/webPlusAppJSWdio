const LoginPage = require('../Pages/LoginPage');

class LoginFunctionality {
  async startExploring() {
    await LoginPage.clickStartExploring();
    return (await LoginPage.scripBoxExclusiveBenifitsDisplayed());
  }

  async loginWithPassword(password) {
    await LoginPage.enterPassword(password);
    await LoginPage.clickContinueLoginButton();
  }

  async secondLoginPageLaunched() {
    return (await LoginPage.secondLoginPageHeaderIsDisplayed());
  }

  async firstLoginPageLaunched() {
    return (await LoginPage.firstLoginPageHeaderIsDisplayed());
  }

  async loginViaOTPPageLaunched() {
    return (await LoginPage.enterOTPHeaderIsDisplayed());
  }

  async continueWithPassword() {
    await LoginPage.clickContinueWithPasswordButton();
  }

  async continueWithPasswordButtonIsDisplayed() {
    return (await LoginPage.continueWithPasswordButtonIsDisplayed());
  }

  async loginWithUsername(username) {
    await LoginPage.enterUserId(username);
    await LoginPage.clickContinueOrNextButton();
  }
}

module.exports = new LoginFunctionality();
