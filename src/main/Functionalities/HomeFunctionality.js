const HomePage = require('../Pages/HomePage');

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
}

module.exports = new HomeFunctionality();
