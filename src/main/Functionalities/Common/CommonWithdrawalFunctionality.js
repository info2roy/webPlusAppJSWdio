const CommonWithdrawalPage = require('../../Pages/Common/CommonWithdrawalPage');
const CommonPage = require('../../Pages/Common/CommonPage');

class CommonWithdrawalFunctionality {
  async selectFinancialProduct(productName) {
    await CommonPage.clickOnFinancialProduct(productName);
    return CommonWithdrawalPage.validateFinancialProductPage(productName);
  }
}
module.exports = new CommonWithdrawalFunctionality();
