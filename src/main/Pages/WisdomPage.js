const util = require('../../support/Utils/Utils');
const wisdomPageObject = require('../PageObjects/WisdomPageObjects');

class WisdomPage {
  async selectWisdomTab_android() {
    await util.clickElement(wisdomPageObject.wisdomButton);
    // return this;
  }

  checkIfWisdomPageIsDisplayed_android() {
    await util.elementIsDisplayed(wisdomPageObject.newsThatMatters);
    return this;
  }

  async scrollToStartCheckup() {
    await util.scrollUntilTextIntoView(wisdomPageObject.startCheckup);
    return this;
  }

  async clickOnStartCheckup() {
    await util.clickElement(wisdomPageObject.startCheckup);
    return this;
  }

  async scrollToBlogs() {
    await util.scrollUntilTextIntoView(wisdomPageObject.wisdomPageFirstBlog);
    return this;
  }

  async clickOnFirstBlog() {
    await util.clickElement(wisdomPageObject.wisdomPageFirstBlog);
    return this;
  }

  async checkBlogIsOpen() {
    return await util.elementIsDisplayed(wisdomPageObject.wisdomPageBlogSubscriptionMessage);
  }
}

module.exports = new WisdomPage();
