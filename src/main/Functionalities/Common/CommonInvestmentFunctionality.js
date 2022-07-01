const CommonInvestmentPage = require('../../Pages/Common/CommonInvestmentPage');

class CommonInvestmentFunctionality {
  async investmentPageLaunched() {
    return ((await CommonInvestmentPage.investmentTabIsDisplayed('Mutual Funds')) &&
      (await CommonInvestmentPage.investmentTabIsDisplayed('Fixed Deposit')));
  }

  async selectInvestmentTab(investmentInstrument) {
    await CommonInvestmentPage.selectInvestmentTab(investmentInstrument);
  }
}
module.exports = new CommonInvestmentFunctionality();