const homePage = require('../Pages/HomePage')

class HomePage {

  async login() {
    homePage.selectLoginTab();
  }

  async clickMenuButton() {
    homePage.clickMenuButton();
  }
  
}

module.exports = new HomePage();
