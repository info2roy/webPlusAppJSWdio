const MyWealthPage = require('../Pages/MyWealthPage');

class MyWealthFunctionality {
  async navigateToMyWealthPage() {
    await console.log('Navigating user to My Wealth page');
    await MyWealthPage.selectWealthTab();
    // return (await wisdomPage.checkIfWealthPageIsDisplayed());
  }

  async navigateToInvestmentStrategy() {
    await MyWealthPage.navigateToInvestmentStrategyTab();
  }
}

module.exports = new MyWealthFunctionality();
