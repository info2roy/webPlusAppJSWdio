const Constants = require('../../../config/data/structured/Constants');
const MFWithdrawalPage = require('../../Pages/MutualFunds/MFWithdrawalPage');

class MFWithdrawalFunctionality {

  async selectMFPlan(planName) {
    await MFWithdrawalPage.scrollUntilMFPlanNameTextIsDisplayed(planName);
    await MFWithdrawalPage.clickOnMFPlan(planName);
    return (await MFWithdrawalPage.confirmBankDetailsPageHeaderIsDisplayed());
  }

  async selectWithdrawalBankOption(option, mutualFundPortfolio) {
    await MFWithdrawalPage.clickOnWithdrawalBankOption(option);
    return (await MFWithdrawalPage.withdrawAmountPageHeaderIsDisplayed(mutualFundPortfolio));
  }

  async fillWithdrawalAmount(amount) {
    await MFWithdrawalPage.enterWithdrawalAmount(amount);
  }

  async selectWithdrawalStrategy(withdrawalStrategy, mutualFundPortfolio, withdrawalAmount) {
    if (withdrawalStrategy === Constants.WITHDRAW_CUSTOM_FUND_BASED_WITHDRAWAL) {
      await MFWithdrawalPage.clickSelectFundsButton();
      return (await this.selectCustomFundsPageLaunched(
        mutualFundPortfolio,
        withdrawalAmount));
    } else if (withdrawalStrategy == Constants.WITHDRAW_TAX_OPTIMIZED_WITHDRAWAL) {
      await MFWithdrawalPage.clickNextButton();
      return (await this.taxOptimizedSelectedFundsPageLaunched(
        mutualFundPortfolio,
        withdrawalAmount));
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
    return (await MFWithdrawalPage.confirmWithdrawalPageHeaderIsDisplayed());
  }

  async takeFinalAction(actionText) {
    // Either CONFIRM WITHDRAWAL or CANCEL|NO, STAY INVESTED
    await MFWithdrawalPage.clickOnWithdrawalFinalActionButton(actionText);
    return (await MFWithdrawalPage.verifyWithOTPPageHeaderIsDisplayed());
  }

  async verifyWithOTP(otp) {
    await MFWithdrawalPage.enterOTP(otp);
    await MFWithdrawalPage.clickVerifyWithOTPButton();
  }

  async withdrawalScheduledPageLaunched() {
    return (await MFWithdrawalPage.withdrawScheduledPageHeaderIsDisplayed());
  }

  async verifyWithdrawlPageNavigate(fundPortfolio) {
    await MFWithdrawalPage.clickOnSelectFundsOption();
    return (await MFWithdrawalPage.withdrawlPageNavigate(fundPortfolio));
  }

  async selectFundForWithdrawlUnits() {
    await MFWithdrawalPage.clickOnSelect();
    await MFWithdrawalPage.enterWithdrawAmount();
    await MFWithdrawalPage.clickOnContinue();
  }

  async withdrawlConfirmationPage() {
    return (await MFWithdrawalPage.withdrawlConfirmationPageNavigate());
  }

  async clickConfirmWithdrawl() {
    await MFWithdrawalPage.clickConfirmWithdrawl();
  }

  async verifyOTPPageNavigate() {
    return (await MFWithdrawalPage.verifyOTPPage());
  }
}

module.exports = new MFWithdrawalFunctionality();
