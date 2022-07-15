const HomePage = require('../Pages/HomePage');
const LoginPage = require('../Pages/LoginPage');
const loginData = require('../../config/data/structured/LoginData');
const DashboardFunctionality = require('../../main/Functionalities/DashboardFunctionality');

class HomeFunctionality {
  async login() {
    await HomePage.selectLoginOption();
  }

  async performLogin(user){
    await HomePage.clickMenuButton();
    await HomePage.selectLoginOption();
    switch (user.toString()){
      case 'user189182':
        await LoginPage.enterUserId(loginData.user189182);
        break;
      case 'user120405':
        await LoginPage.enterUserId(loginData.user120405);
        break;
      case 'user120409':
        await LoginPage.enterUserId(loginData.user120409);
        break;
      case 'user123473':
        await LoginPage.enterUserId(loginData.user123473);
        break;
      default:
        await console.log(user + ' User not available to add. Please add in login data to proceed');
    }
    await LoginPage.enterUserId(loginData.user189182);
    await LoginPage.clickContinueOrNextButton();
    await LoginPage.clickContinueWithPasswordButton();
    await LoginPage.enterPassword(loginData.password);
    await LoginPage.clickContinueLoginButton();
    await DashboardFunctionality.validate();
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
