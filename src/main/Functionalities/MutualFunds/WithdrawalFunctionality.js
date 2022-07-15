const Constants = require('../../../support/Constants/Constants');
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

  async fillWithdrawAmountForm(amount, buttonText) {
    await WithdrawalPage.enterWithdrawalAmount(amount);
    if (buttonText === Constants.WITHDRAW_SELECT_FUNDS_BUTTON) {
      await WithdrawalPage.clickSelectFundsButton();
    } else if (buttonText.toUpperCase() == Constants.WITHDRAW_NEXT_BUTTON) {
      await WithdrawalPage.clickNextButton();
    }
  }

  async selectFundsPageLaunched(mutualFundPortfolio, amount) {
    return (await WithdrawalPage.selectFundsPageHeaderIsDisplayed(mutualFundPortfolio)) &&
     (await WithdrawalPage.selectFundsPageSummaryIsDisplayed()) &&
     (await WithdrawalPage.selectFundsPageAmountIsDisplayed(amount)) &&
     (await WithdrawalPage.selectFundsPageSelectFundsIsDisplayed());
  }

  async selectFund(mutualFundName, amount, index) {
    await WithdrawalPage.scrollUntilMutualFundNameIsDisplayed(mutualFundName);
    await WithdrawalPage.clickOnMutualFund(mutualFundName);
    await WithdrawalPage.enterWithdrawalAmountForFund(amount, index);
  }

  async continueWithFundAllocation(amount) {
    await WithdrawalPage.clickContiueWithFundAllocationButton(amount);
  }

  async confirmWithdrawalPageLaunched() {
    return (await WithdrawalPage.confirmWithdrawalPageHeaderIsDisplayed());
  }

  async takeFinalAction(actionText) {
    // Either CONFIRM WITHDRAWAL or CANCEL|NO, STAY INVESTED
    await WithdrawalPage.clickOnWithdrawalFinalActionButton(actionText);
  }

  async verifyOTPPageLaunched() {
    return (await WithdrawalPage.verifyWithOTPPageHeaderIsDisplayed());
  }

  async verifyWithOTP(otp) {
    await WithdrawalPage.enterOTP(otp);
    await WithdrawalPage.clickVerifyWithOTPButton();
  }

  async withdrawalScheduledPageLaunched() {
    return (await WithdrawalPage.withdrawScheduledPageHeaderIsDisplayed());
  }
}

module.exports = new WithdrawalFunctionality();
