const HomePage = require('../Pages/HomePage');
const LoginPage = require('../Pages/LoginPage');
const loginData = require('../../config/data/structured/LoginData');
const LoginObjects = require('../Objects/LoginObjects');
const DashboardFunctionality = require('../Functionalities/DashboardFunctionality');
const Utils = require('../../support/Utils/Utils');

class HomeFunctionality {
  async login() {
    await HomePage.selectLoginOption();
  }

  async performLogin(env, user) {
    console.log('testing for environment ' + env);
    if (env === 'UAT38' || env === 'ANDROMEDA') {
      await HomePage.clickMenuButton();
      await HomePage.selectLoginOption();
      switch (user.toString()) {
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
      await LoginPage.clickContinueOrNextButton();
      await LoginPage.clickContinueWithPasswordButton();
      await LoginPage.enterPassword(loginData.password);
      await LoginPage.clickContinueLoginButton();
      await DashboardFunctionality.validate();
    } else if (env == 'STAGING' || env === 'MYSCRIPBOX') {
      switch (user.toString()) {
        case 'user189182':
          await Utils.setInputField(loginData.user189182, LoginObjects.stagingUserIdField);
          break;
        case 'user120405':
          await Utils.setInputField(loginData.user120405, LoginObjects.stagingUserIdField);
          break;
        case 'user120409':
          await Utils.setInputField(loginData.user120409, LoginObjects.stagingUserIdField);
          break;
        case 'user123473':
          await Utils.setInputField(loginData.user123473, LoginObjects.stagingUserIdField);
          break;
        default:
          await console.log(user + ' User not available to add. Please add in login data to proceed');
      }
      await Utils.setInputField(loginData.password, LoginObjects.stagingPasswordField);
      await Utils.clickElement(LoginObjects.stagingLoginButton);
      await DashboardFunctionality.validate();
    }
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
}

module.exports = new HomeFunctionality();
