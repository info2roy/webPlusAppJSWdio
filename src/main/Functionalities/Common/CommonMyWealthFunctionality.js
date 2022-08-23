const Constants = require('../../../config/data/structured/Constants');
const CommonMyWealthPage = require('../../Pages/Common/CommonMyWealthPage');

class CommonMyWealthFunctionality {
  async myWealthPageLaunched() {
    return (await CommonMyWealthPage.yourWealthHeaderIsDisplayed()) &&
      (await CommonMyWealthPage.myWealthTabIsDisplayed(Constants.MY_WEALTH_INVESTMENTS)) &&
      (await CommonMyWealthPage.myWealthTabIsDisplayed(Constants.MY_WEALTH_INSURANCE));
  }

  async selectMyWealthTab(wealthType) {
    await CommonMyWealthPage.selectMyWealthTab(wealthType);
    return (await CommonMyWealthPage.validateNavigateToMyWealthTab(wealthType));
  }

  async selectMyWealthInvestmentType(investmentType) {
    await CommonMyWealthPage.selectMyWealthInvestmentType(investmentType);
    return (await CommonMyWealthPage.validateNavigateToMyWealthInvestmentTypePage(investmentType));
  }
}
module.exports = new CommonMyWealthFunctionality();
