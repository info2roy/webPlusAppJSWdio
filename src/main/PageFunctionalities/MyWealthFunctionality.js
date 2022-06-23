const myWealthPage = require('../Pages/MyWealthPage');

class MyWealthFunctionality {
  async navigateToMyWealthPage() {
    await console.log('Navigating user to My Wealth page');
    await myWealthPage.selectWealthTab();
    // return (await wisdomPage.checkIfWealthPageIsDisplayed());
  }

  async navigateToInvestmentStrategy() {
    await myWealthPage.navigateToInvestmentStrategyTab();
  }
}

module.exports = new MyWealthFunctionality();
