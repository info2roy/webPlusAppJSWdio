const loginPage = require('../Pages/LoginPage')

class LoginPage {

  async visit() {
    loginPage.visit('https://learn.conkerworld.com/s/myprofile');
  }

  async login(username, password) {
      loginPage.enterEmail(username).enterPassword(password).clickLoginButton();
      
  }
  
}

module.exports = new LoginPage()
