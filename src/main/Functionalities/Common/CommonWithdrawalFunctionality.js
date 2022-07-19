const CommonWithdrawalPage = require('../../Pages/Common/CommonWithdrawalPage');

class CommonWithdrawalFunctionality {
  async selectFamilyMemberPageLaunched() {
    return (await CommonWithdrawalPage.selectFamilyMemberPageHeaderIsDisplayed());
  }

  async selectFamilyMember(familyMemberName) {
    await CommonWithdrawalPage.clickOnFamilyMemberByName(familyMemberName);
  }

  async selectFinancialProductPageLaunched() {
    return (await CommonWithdrawalPage.selectFinancialProductPageHeaderIsDisplayed());
  }

  async selectFinancialProduct(productName) {
    await CommonWithdrawalPage.clickOnFinancialProduct(productName);
  }
}
module.exports = new CommonWithdrawalFunctionality();
