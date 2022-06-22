const wisdomPage = require('../Pages/WisdomPage');

class WisdomFunctionality {
  async navigateToWisdomPage() {
    await console.log('Navigating user to Wisdom page');
    await wisdomPage.selectWisdomTab_android();
    return (await wisdomPage.checkIfWisdomPageIsDisplayed_android());
  }

  async startCheckup() {
    await console.log('Clicking on start checkup in wisdom page');
    await wisdomPage.scrollToStartCheckup();
    await wisdomPage.clickOnStartCheckup();
  }

  async openFirstBlog() {
    await console.log('Clicking on start checkup in wisdom page');
    await wisdomPage.scrollToBlogs();
    await wisdomPage.clickOnFirstBlog();
    await wisdomPage.checkBlogIsOpen();
  }
}

module.exports = new WisdomFunctionality();
