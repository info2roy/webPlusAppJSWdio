const Constants = require('../../../config/data/structured/Constants');
const MFWithdrawalPage = require('../../Pages/MutualFunds/MFWithdrawalPage');

class MFWithdrawalFunctionality {

  async selectMFPlanPageLaunched() {
    return (await MFWithdrawalPage.selectMFPlanPageHeaderIsDisplayed());
  }

  async selectMFPlan(planName) {
    await MFWithdrawalPage.scrollUntilMFPlanNameTextIsDisplayed(planName);
    await MFWithdrawalPage.clickOnMFPlan(planName);
  }

  async confirmBankDetailsPageLaunched() {
    return (await MFWithdrawalPage.confirmBankDetailsPageHeaderIsDisplayed());
  }

  async selectWithdrawalBankOption(option) {
    await MFWithdrawalPage.clickOnWithdrawalBankOption(option);
  }

  async withdrawAmountPageLaunched(mutualFundPortfolio) {
    return (await MFWithdrawalPage.withdrawAmountPageHeaderIsDisplayed(mutualFundPortfolio));
  }

  async fillWithdrawalAmount(amount) {
    await MFWithdrawalPage.enterWithdrawalAmount(amount);
  }

  async selectWithdrawalStrategy(withdrawalStrategy) {
    if (withdrawalStrategy === Constants.WITHDRAW_CUSTOM_FUND_BASED_WITHDRAWAL) {
      await MFWithdrawalPage.clickSelectFundsButton();
    } else if (withdrawalStrategy == Constants.WITHDRAW_TAX_OPTIMIZED_WITHDRAWAL) {
      await MFWithdrawalPage.clickNextButton();
    }
  }

  async selectCustomFundsPageLaunched(mutualFundPortfolio, amount) {
    return (await MFWithdrawalPage.selectFundsPageHeaderIsDisplayed(mutualFundPortfolio)) &&
     (await MFWithdrawalPage.selectFundsPageSummaryIsDisplayed()) &&
     (await MFWithdrawalPage.selectFundsPageAmountIsDisplayed(amount)) &&
     (await MFWithdrawalPage.selectFundsPageSelectFundsIsDisplayed());
  }

  async taxOptimizedSelectedFundsPageLaunched(mutualFundPortfolio, amount) {
    return (await MFWithdrawalPage.selectFundsPageHeaderIsDisplayed(mutualFundPortfolio)) &&
     (await MFWithdrawalPage.selectFundsPageSummaryIsDisplayed()) &&
     (await MFWithdrawalPage.selectFundsPageAmountIsDisplayed(amount));
  }

  async selectFund(mutualFundName, amount, index) {
    await MFWithdrawalPage.scrollUntilMutualFundNameIsDisplayed(mutualFundName);
    await MFWithdrawalPage.clickOnMutualFund(mutualFundName);
    await MFWithdrawalPage.enterWithdrawalAmountForFund(amount, index);
  }

  async continueWithFundAllocation(amount) {
    await MFWithdrawalPage.clickContiueWithFundAllocationButton(amount);
  }

  async confirmWithdrawalPageLaunched() {
    return (await MFWithdrawalPage.confirmWithdrawalPageHeaderIsDisplayed());
  }

  async takeFinalAction(actionText) {
    // Either CONFIRM WITHDRAWAL or CANCEL|NO, STAY INVESTED
    await MFWithdrawalPage.clickOnWithdrawalFinalActionButton(actionText);
  }

  async verifyOTPPageLaunched() {
    return (await MFWithdrawalPage.verifyWithOTPPageHeaderIsDisplayed());
  }

  async verifyWithOTP(otp) {
    await MFWithdrawalPage.enterOTP(otp);
    await MFWithdrawalPage.clickVerifyWithOTPButton();
  }

  async withdrawalScheduledPageLaunched() {
    return (await MFWithdrawalPage.withdrawScheduledPageHeaderIsDisplayed());
  }
}

module.exports = new MFWithdrawalFunctionality();
