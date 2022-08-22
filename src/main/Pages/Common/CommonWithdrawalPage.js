const Constants = require('../../../config/data/structured/Constants');
const MFWithdrawalPage = require('../../Pages/MutualFunds/MFWithdrawalPage');

class CommonWithdrawalPage {

  async validateFinancialProductPage(productName) {
    switch(productName.toString()) {
      case Constants.INVESTMENT_INSTRUMENT_MUTUAL_FUND:
        return (await MFWithdrawalPage.selectMFPlanPageHeaderIsDisplayed());
      default:
        await console.log(`unsupported product ${productName}`);
        return false;
    }
  }
}

module.exports = new CommonWithdrawalPage();
