const util = require('../../support/Utils/Utils');
const myWealthPageObject = require('../PageObjects/MyWealthPageObjects');
const wisdomPageObject = require('../PageObjects/WisdomPageObjects');

class MyWealthPage {
  async selectWealthTab_android() {
    await util.clickElement(myWealthPageObject.myWealthButton);
    // return this;
  }

  async checkIfWealthPageIsDisplayed_android() {
    util.elementIsDisplayed(wisdomPageObject.newsThatMatters);
    return this;
  }

  async navigateToInvestmentStrategyTab_android() {
    console.log('Navigating to other tabs in web view.');
    await util.clickElement(myWealthPageObject.investmentStrategyTabInBlogs);
  }
}

module.exports = new MyWealthPage();
