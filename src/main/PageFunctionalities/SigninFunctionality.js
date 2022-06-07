const signinPage = require('../Pages/SigninPage')

class SigninPage {

  async login() {
    homePage.selectLoginTab();
  }
  
}

module.exports = new SigninPage();
