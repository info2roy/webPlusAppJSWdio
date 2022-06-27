const WisdomPage = require('../Pages/WisdomPage');

class WisdomFunctionality {
  async navigateToWisdomPage() {
    await console.log('Navigating user to Wisdom page');
    await WisdomPage.selectWisdomTab();
    return (await WisdomPage.checkIfWisdomPageIsDisplayed());
  }

  async startCheckup() {
    await console.log('Clicking on start checkup in wisdom page');
    await WisdomPage.scrollToStartCheckup();
    await WisdomPage.clickOnStartCheckup();
  }

  async openFirstBlog() {
    await console.log('Clicking on start checkup in wisdom page');
    await WisdomPage.scrollToBlogs();
    await WisdomPage.clickOnFirstBlog();
    await WisdomPage.checkBlogIsOpen();
  }
}

module.exports = new WisdomFunctionality();
