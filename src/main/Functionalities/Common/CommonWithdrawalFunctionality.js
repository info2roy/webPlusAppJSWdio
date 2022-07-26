const CommonWithdrawalPage = require('../../Pages/Common/CommonWithdrawalPage');

class CommonWithdrawalFunctionality {
  async selectFamilyMemberPageLaunched() {
    return (await CommonWithdrawalPage.selectFamilyMemberPageHeaderIsDisplayed());
  }

  async selectFamilyMember(familyMemberName) {
    await CommonWithdrawalPage.clickOnFamilyMemberByName(familyMemberName);
    return (await CommonWithdrawalPage.selectFinancialProductPageHeaderIsDisplayed());
  }

  async selectFinancialProduct(productName) {
    await CommonWithdrawalPage.clickOnFinancialProduct(productName);
    return CommonWithdrawalPage.validateFinancialProductPage(productName);
  }
}
module.exports = new CommonWithdrawalFunctionality();
