const myWealthPage = require('../Pages/MyWealthPage');

class MyWealthFunctionality {
  async navigateToMyWealthPage() {
    await console.log('Navigating user to My Wealth page');
    await myWealthPage.selectWealthTab_android();
    // return (await wisdomPage.checkIfWealthPageIsDisplayed_android());
  }

  async navigateToInvestmentStrategy() {
    await myWealthPage.navigateToInvestmentStrategyTab_android();
  }
}

module.exports = new MyWealthFunctionality();
