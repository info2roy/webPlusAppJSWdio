const HomePage = require('../Pages/HomePage');
const LoginPage = require('../Pages/LoginPage');
const loginData = require('../../config/data/structured/LoginData')

class HomeFunctionality {
  async login() {
    await HomePage.selectLoginOption();
  }

  async performLogin(user){
    await HomePage.clickMenuButton();
    await HomePage.selectLoginOption();
    await LoginPage.enterUserId(loginData.user189182)
    await LoginPage.clickContinueOrNextButton();
    await LoginPage.clickContinueWithPasswordButton();
    await LoginPage.enterPassword(loginData.password);
    await LoginPage.clickContinueLoginButton();
    await browser.pause(5000)
  }

  async clickMenuButton() {
    await HomePage.clickMenuButton();
  }

  async webHomePageLaunch() {
    return ((await HomePage.loginOptionIsDisplayed()) && (await HomePage.signupOptionIsDisplayed()));
  }

  async responsiveHomePageLaunch() {
    return (await HomePage.menuButtonIsDisplayed());
  }

  async androidHomePageLaunch() {
    return ((await HomePage.loginButtonDisplayedAndroid()) && (await HomePage.scripBoxCustomerbannerDisplayedAndroid()));
  }
}

module.exports = new HomeFunctionality();
