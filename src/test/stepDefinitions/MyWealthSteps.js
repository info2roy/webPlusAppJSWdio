const { When } = require('@wdio/cucumber-framework');
const MyWealthFunctionality = require('../../main/Functionalities/MyWealthFunctionality');
const MyWealthPageObjects = require('../../main/Objects/MyWealthObjects');
const Utils = require('../../support/Utils/Utils');

When(/^I navigate to My Wealth page$/, async () => {
  if (driver.isAndroid) {
    await console.log('My Wealth page');
    expect(
      await MyWealthFunctionality.navigateToMyWealthPage(),
    ).toBe.true;
  }
});

When(/^I want to navigate to Investment strategy tab$/, async () => {
  if (driver.isAndroid) {
    await MyWealthFunctionality.navigateToInvestmentStrategy();
    expect(await Utils.elementIsDisplayed(MyWealthPageObjects.investmentPageBlogSubscribe)).toBe.true;
  }
});
