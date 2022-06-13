const homePage = require('../Pages/HomePage')

class HomePage {

  async login() {
    homePage.selectLoginTab();
  }

  async clickMenuButton() {
    homePage.clickMenuButton();
  }

  async webHomePageLaunch() {
    return (homePage.loginTabIsDisplayed() && homePage.signupTabIsDisplayed());
  }

  async responsiveHomePageLaunch() {
    return homePage.menuButtonIsDisplayed();
  }

  async androidHomePageLaunch(){
    return (homePage.loginButton_android() && homePage.scripBoxCustomerbanner_android());
  }
  
}

module.exports = new HomePage();
