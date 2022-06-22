const homePage = require('../Pages/HomePage')

class HomePage {

  async login() {
      await homePage.selectLoginOption();
  }

  async clickMenuButton() {
    homePage.clickMenuButton();
  }

  async webHomePageLaunch() {
    return ((await homePage.loginTabIsDisplayed()) && (await homePage.signupTabIsDisplayed()));
  }

  async responsiveHomePageLaunch() {
    return homePage.menuButtonIsDisplayed();
  }

  async androidHomePageLaunch(){
    return ((await homePage.loginButtonDisplayed_android()) && (await homePage.scripBoxCustomerbannerDisplayed_android()));
  }
  
}

module.exports = new HomePage();
