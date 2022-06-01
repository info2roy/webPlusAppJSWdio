const loginPage = require('../Pages/LoginPage')

class LoginPage {

  async visit() {
    loginPage.visit('https://learn.conkerworld.com/s/myprofile');
    // await browser.url('http://zero.webappsecurity.com/login.html')
    await browser.pause(2000)
  }

  async login(username, password) {
      loginPage.enterEmail(username).enterPassword(password); 
      console.log("************************************************************* hello  ")

      const myButton = await $('//button[text()="Login"]')
      await myButton.click()
      console.log("############################################################## hello  ")
      await browser.pause(20000)
      return this;
  }
  
}

module.exports = new LoginPage()
