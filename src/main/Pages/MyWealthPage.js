const Utils = require('../../support/Utils/Utils');
const MyWealthObjects = require('../Objects/MyWealthObjects');
const WisdomObjects = require('../Objects/WisdomObjects');

class MyWealthPage {
  async selectWealthTab() {
    await Utils.clickElement(MyWealthObjects.myWealthButton);
    // return this;
  }

  async checkIfWealthPageIsDisplayed() {
    await Utils.elementIsDisplayed(WisdomObjects.newsThatMatters);
    return this;
  }

  async navigateToInvestmentStrategyTab() {
    await console.log('Navigating to other tabs in web view.');
    await Utils.clickElement(MyWealthObjects.investmentStrategyTabInBlogs);
  }
}

module.exports = new MyWealthPage();
