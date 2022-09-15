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
    console.log(`testing for environment ${ env}`);
    if (env === 'ANDROMEDA') {
      await HomePage.clickMenuButton();
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
          await console.log(`${user } User not available to add. Please add in login data to proceed`);
      }
      await LoginPage.clickContinueOrNextButton();
      await LoginPage.enterPassword(loginData.password);
      await LoginPage.clickContinueLoginButton();
      await DashboardFunctionality.validate();
    } else if (env === 'MOCKAPI' || env === 'MYSCRIPBOX') {
      switch (user.toString()) {
        case 'user180756':
          await Utils.setInputField(loginData.user180756, LoginObjects.stagingUserIdField);
          break;
        case 'user189182':
          await Utils.setInputField(loginData.user189182, LoginObjects.stagingUserIdField);
          break;
        case 'user120405':
          await Utils.setInputField(loginData.user120405, LoginObjects.stagingUserIdField);
          break;
        case 'user120406':
          await Utils.setInputField(loginData.user120406, LoginObjects.stagingUserIdField);
          break;
        case 'user120409':
          await Utils.setInputField(loginData.user120409, LoginObjects.stagingUserIdField);
          break;
        case 'user123473':
          await Utils.setInputField(loginData.user123473, LoginObjects.stagingUserIdField);
          break;
        case 'user124148':
          await Utils.setInputField(loginData.user124148, LoginObjects.stagingUserIdField);
          break;
        default:
          await console.log(`${user } User not available to add. Please add in login data to proceed`);
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
        await console.log(`${user } User not available to add. Please add in login data to proceed`);
    }
    await LoginPage.clickContinueOrNextButton();
    await LoginPage.enterPassword(loginData.password);
    await LoginPage.clickContinueLoginButton();
    await DashboardFunctionality.validate();
  }
}

module.exports = new HomeFunctionality();
