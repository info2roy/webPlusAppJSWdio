const Device = require('../../../support/libraries/Device');
const Utils = require('../../../support/Utils/Utils');
const WithdrawalObjects = require('../../Objects/MutualFunds/WithdrawalObjects');

class WithdrawalPage {

  async selectMFPlanPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(WithdrawalObjects.selectMFPlanPageHeader));
  }

  async scrollUntilMFPlanNameTextIsDisplayed(planName) {
    if (Device.isAndroidApp()) {
      await console.log(`scrollUntilMFPlanNameTextIsDisplayed ${planName}`);
      await Utils.scrollVerticalUntilTextIntoViewForAndroid(WithdrawalObjects.mutualFundPlanNameText(planName));
    }
  }

  async clickOnMFPlan(planName) {
    await Utils.clickElement(WithdrawalObjects.mutualFundPlan(planName));
  }

  async confirmBankDetailsPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(WithdrawalObjects.confirmBankDetailsPageHeader));
  }

  async clickOnWithdrawalBankOption(option) {
    await Utils.clickElement(WithdrawalObjects.withdrawalBankOption(option));
  }

  async withdrawAmountPageHeaderIsDisplayed(mutualFundPortfolio) {
    return (await Utils.elementIsDisplayed(WithdrawalObjects.withdrawAmountPageHeader(mutualFundPortfolio)));
  }

  async enterWithdrawalAmount(amount) {
    await Utils.setInputField(amount, WithdrawalObjects.withdrawAmountField);
  }

  async clickNextButton() {
    await Utils.clickElement(WithdrawalObjects.withdrawAmountNextButton);
  }

  async clickSelectFundsButton() {
    await Utils.clickElement(WithdrawalObjects.withdrawAmountSelectFundsButton);
  }

  async selectFundsPageHeaderIsDisplayed(mutualFundPortfolio) {
    return (await Utils.elementIsDisplayed(WithdrawalObjects.selectFundsPageHeader(mutualFundPortfolio)));
  }

  async selectFundsPageSummaryIsDisplayed() {
    return (await Utils.elementIsDisplayed(WithdrawalObjects.selectFundsPageSummary));
  }

  async selectFundsPageAmountIsDisplayed(amount) {
    return (await Utils.elementIsDisplayed(WithdrawalObjects.selectFundsPageAmount(amount)));
  }

  async selectFundsPageSelectFundsIsDisplayed() {
    return (await Utils.elementIsDisplayed(WithdrawalObjects.selectFundsPageSelectFunds));
  }

  async scrollUntilMutualFundNameIsDisplayed(fundName) {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid(WithdrawalObjects.mutualFundNameText(fundName));
    }
  }

  async clickOnMutualFund(fundName) {
    await Utils.clickElement(WithdrawalObjects.mutualFund(fundName));
    if (Device.isAndroidApp()) {
      await Utils.clickElement(WithdrawalObjects.mutualFund(fundName));
    }
  }

  async enterWithdrawalAmountForFund(amount, index) {
    if (Device.isAndroidApp()) {
      const inputField = await Utils.getLastMatchingElement(WithdrawalObjects.mutualFundAmountFields);
      await Utils.setInputWebElement(amount, inputField);
    } else if(Device.isWeb()) {
      const inputField = await Utils.getMatchingElementByIndex(WithdrawalObjects.mutualFundAmountFields, index - 1);
      await Utils.setInputWebElement(amount, inputField);
    }
  }

  async clickContiueWithFundAllocationButton(amount) {
    await Utils.clickElement(WithdrawalObjects.continueWithFundAllocationButton(amount));
  }

  async confirmWithdrawalPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(WithdrawalObjects.confirmWithdrawalPageHeader));
  }

  async clickOnWithdrawalFinalActionButton(buttonText) {
    await Utils.clickElement(WithdrawalObjects.withdrawalFinalActionButton(buttonText));
  }

  async verifyWithOTPPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(WithdrawalObjects.verifyWithOTPPageHeader));
  }

  async enterOTP(otp) {
    await Utils.setInputField(otp, WithdrawalObjects.otpField);
  }

  async clickVerifyWithOTPButton() {
    await Utils.clickElement(WithdrawalObjects.verifyOTPButton);
  }

  async withdrawScheduledPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(WithdrawalObjects.withdrawScheduledPageHeader));
  }
}

module.exports = new WithdrawalPage();
