const WithdrawalPage = require('../../Pages/MutualFunds/WithdrawalPage');

class WithdrawalFunctionality {
  async selectFamilyMemberPageLaunched() {
    return (await WithdrawalPage.selectFamilyMemberPageHeaderIsDisplayed());
  }

  async selectFamilyMember(familyMemberName) {
    await WithdrawalPage.clickOnFamilyMemberByName(familyMemberName);
  }

  async selectFinancialProductPageLaunched() {
    return (await WithdrawalPage.selectFinancialProductPageHeaderIsDisplayed());
  }

  async selectFinancialProduct(productName) {
    await WithdrawalPage.clickOnFinancialProduct(productName);
  }

  async selectMFPlanPageLaunched() {
    return (await WithdrawalPage.selectMFPlanPageHeaderIsDisplayed());
  }

  async selectMFPlan(planName) {
    await WithdrawalPage.scrollUntilMFPlanNameTextIsDisplayed(planName);
    await WithdrawalPage.clickOnMFPlan(planName);
  }

  async confirmBankDetailsPageLaunched() {
    return (await WithdrawalPage.confirmBankDetailsPageHeaderIsDisplayed());
  }

  async selectWithdrawalBankOption(option) {
    await WithdrawalPage.clickOnWithdrawalBankOption(option);
  }

  async withdrawAmountPageLaunched(mutualFundPortfolio) {
    return (await WithdrawalPage.withdrawAmountPageHeaderIsDisplayed(mutualFundPortfolio));
  }

  async fillWithdrawAmountForm(amount) {
    await WithdrawalPage.enterWithdrawalAmount(amount);
    await WithdrawalPage.clickNextButton();
  }

  async selectFundsPageLaunched(mutualFundPortfolio, amount) {
    return (await WithdrawalPage.selectFundsPageHeaderIsDisplayed(mutualFundPortfolio)) &&
     (await WithdrawalPage.selectFundsPageSummaryIsDisplayed()) &&
     (await WithdrawalPage.selectFundsPageAmountIsDisplayed(amount)) &&
     (await WithdrawalPage.selectFundsPageSelectFundsIsDisplayed());
  }

  async selectFund(mutualFundName, amount, index) {
    await WithdrawalPage.scrollUntilMutualFundNameIsDisplayed(mutualFundName);
    await browser.pause(3000);
    await WithdrawalPage.clickOnMutualFund(mutualFundName);
    await browser.pause(3000);
    await WithdrawalPage.enterWithdrawalAmountForFund(amount, index);
  }
}

module.exports = new WithdrawalFunctionality();
