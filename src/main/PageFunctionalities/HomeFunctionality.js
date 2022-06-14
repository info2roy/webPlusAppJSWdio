const homePage = require('../Pages/HomePage')

class HomePage {

  async login() {
      homePage.selectLoginTab();
  }

  async clickMenuButton() {
    if (driver.isAndroid){
      homePage.clickLoginButtonHomePage();
    }
    else{
      homePage.clickMenuButton();
    }
    
  }

  async webHomePageLaunch() {
    return (homePage.loginTabIsDisplayed() && homePage.signupTabIsDisplayed());
  }

  async responsiveHomePageLaunch() {
    return homePage.menuButtonIsDisplayed();
  }

  async androidHomePageLaunch(){
    return (homePage.loginButtonDisplayed_android() && homePage.scripBoxCustomerbannerDisplayed_android());
  }

  async androidlogin(){
   await homePage.clickLoginHomePage_android()
  }
  
}

module.exports = new HomePage();
