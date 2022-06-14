const loginPage = require('../Pages/LoginPage')

class LoginPage {

  async visit() {
    loginPage.visit('https://learn.conkerworld.com/s/myprofile');
  }

  async login(username, password) {
      loginPage.enterEmail(username).enterPassword(password).clickLoginButton();
      
  }

  async androidHomePageLaunch(){
    
    return (loginPage.loginSignupPageNavigation_android() && loginPage.loginEmailTextBoxPresent());
  }
  
}

module.exports = new LoginPage()
