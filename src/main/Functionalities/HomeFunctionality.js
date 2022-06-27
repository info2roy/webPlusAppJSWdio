const homePage = require('../Pages/HomePage');

class HomePage {
  async login() {
    await homePage.selectLoginOption();
  }

  async clickMenuButton() {
    await homePage.clickMenuButton();
  }

  async webHomePageLaunch() {
    return ((await homePage.loginOptionIsDisplayed()) && (await homePage.signupOptionIsDisplayed()));
  }

  async responsiveHomePageLaunch() {
    return (await homePage.menuButtonIsDisplayed());
  }

  async androidHomePageLaunch() {
    return ((await homePage.loginButtonDisplayedAndroid()) && (await homePage.scripBoxCustomerbannerDisplayedAndroid()));
  }
}

module.exports = new HomePage();
