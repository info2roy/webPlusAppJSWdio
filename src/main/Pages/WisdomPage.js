const Utils = require('../../support/Utils/Utils');
const WisdomObjects = require('../Objects/WisdomObjects');

class WisdomPage {
  async selectWisdomTab() {
    await Utils.clickElement(WisdomObjects.wisdomButton);
    // return this;
  }

  async checkIfWisdomPageIsDisplayed() {
    await Utils.elementIsDisplayed(WisdomObjects.newsThatMatters);
    return this;
  }

  async scrollToStartCheckup() {
    await Utils.scrollVerticalUntilTextIntoViewForAndroid(WisdomObjects.startCheckup);
    return this;
  }

  async clickOnStartCheckup() {
    await Utils.clickElement(WisdomObjects.startCheckup);
    return this;
  }

  async scrollToBlogs() {
    await Utils.scrollVerticalUntilTextIntoViewForAndroid(WisdomObjects.wisdomPageFirstBlog);
    return this;
  }

  async clickOnFirstBlog() {
    await Utils.clickElement(WisdomObjects.wisdomPageFirstBlog);
    return this;
  }

  async checkBlogIsOpen() {
    return await Utils.elementIsDisplayed(WisdomObjects.wisdomPageBlogSubscriptionMessage);
  }
}

module.exports = new WisdomPage();
