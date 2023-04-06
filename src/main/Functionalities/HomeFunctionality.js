const HomePage = require('../Pages/HomePage');
const LoginPage = require('../Pages/LoginPage');
const loginData = require('../../config/data/structured/LoginData');
const DashboardFunctionality = require('../Functionalities/DashboardFunctionality');
const LoginFunctionality = require('./LoginFunctionality');

class HomeFunctionality {
  async login() {
    await HomePage.selectLoginOption();
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

  async myscripboxLoginPageLaunched() {
    return await HomePage.myScripboxLoginPageIsDisplayed();
  }

  async performLoginApp(user) {
    await HomePage.selectLoginOption();
    switch (user.toString()) {
      case 'user180756':
        await LoginPage.enterUserId(loginData.user180756);
        break;
      case 'user189182':
        await LoginPage.enterUserId(loginData.user189182);
        break;
      case 'user120405':
        await LoginPage.enterUserId(loginData.user120405);
        break;
      case 'user120406':
        await LoginPage.enterUserId(loginData.user120406);
        break;
      case 'user120409':
        await LoginPage.enterUserId(loginData.user120409);
        break;
      case 'user123473':
        await LoginPage.enterUserId(loginData.user123473);
        break;
      case 'user124148':
        await LoginPage.enterUserId(loginData.user124148);
        break;
      default:
        await console.log(`${user} User not available to add. Please add in login data to proceed`);
    }
    await LoginPage.clickContinueOrNextButton();
    if (await LoginPage.enterOTPHeaderIsDisplayed()) {
      await LoginFunctionality.enterOTP([1, 1, 1, 1, 1, 1]);
    } else {
      await LoginPage.enterPassword(loginData.password);
      await LoginPage.clickContinueLoginButton();
    }
    if (await LoginPage.newTermsHeaderIsDisplayed()) {
      await LoginPage.clickAcceptNewTermsCheckbox();
      await LoginPage.clickIAcceptButton();
    }
    await DashboardFunctionality.validate();
  }
}

module.exports = new HomeFunctionality();
