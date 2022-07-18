const Constants = require('../../../config/data/structured/Constants');
const WithdrawalPage = require('../../Pages/MutualFunds/WithdrawalPage');

class WithdrawalFunctionality {

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

  async fillWithdrawalAmount(amount) {
    await WithdrawalPage.enterWithdrawalAmount(amount);
  }

  async selectWithdrawalStrategy(withdrawalStrategy) {
    if (withdrawalStrategy === Constants.WITHDRAW_CUSTOM_FUND_BASED_WITHDRAWAL) {
      await WithdrawalPage.clickSelectFundsButton();
    } else if (withdrawalStrategy == Constants.WITHDRAW_TAX_OPTIMIZED_WITHDRAWAL) {
      await WithdrawalPage.clickNextButton();
    }
  }

  async selectCustomFundsPageLaunched(mutualFundPortfolio, amount) {
    return (await WithdrawalPage.selectFundsPageHeaderIsDisplayed(mutualFundPortfolio)) &&
     (await WithdrawalPage.selectFundsPageSummaryIsDisplayed()) &&
     (await WithdrawalPage.selectFundsPageAmountIsDisplayed(amount)) &&
     (await WithdrawalPage.selectFundsPageSelectFundsIsDisplayed());
  }

  async taxOptimizedSelectedFundsPageLaunched(mutualFundPortfolio, amount) {
    return (await WithdrawalPage.selectFundsPageHeaderIsDisplayed(mutualFundPortfolio)) &&
     (await WithdrawalPage.selectFundsPageSummaryIsDisplayed()) &&
     (await WithdrawalPage.selectFundsPageAmountIsDisplayed(amount));
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
