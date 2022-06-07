const homePage = require('../Pages/HomePage')

class HomePage {

  async login() {
    homePage.selectLoginTab();
  }
  
}

module.exports = new HomePage();
