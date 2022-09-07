const CommonWithdrawalPage = require('../../Pages/Common/CommonWithdrawalPage');
const CommonPage = require('../../Pages/Common/CommonPage');

class CommonWithdrawalFunctionality {
  async selectFamilyMember(familyMemberName) {
    await CommonPage.clickOnFamilyMemberByName(familyMemberName);
    return (await CommonPage.selectFinancialProductPageHeaderIsDisplayed());
  }

  async selectFinancialProduct(productName) {
    await CommonPage.clickOnFinancialProduct(productName);
    return CommonWithdrawalPage.validateFinancialProductPage(productName);
  }
}
module.exports = new CommonWithdrawalFunctionality();
