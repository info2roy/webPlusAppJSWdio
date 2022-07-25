const Device = require('../../../support/libraries/Device');
const Utils = require('../../../support/Utils/Utils');
const MFWithdrawalObjects = require('../../Objects/MutualFunds/MFWithdrawalObjects');

class WithdrawalPage {

  async selectMFPlanPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFWithdrawalObjects.selectMFPlanPageHeader));
  }

  async scrollUntilMFPlanNameTextIsDisplayed(planName) {
    if (Device.isAndroidApp()) {
      await console.log(`scrollUntilMFPlanNameTextIsDisplayed ${planName}`);
      await Utils.scrollVerticalUntilTextIntoViewForAndroid(MFWithdrawalObjects.mutualFundPlanNameText(planName));
    } else if (Device.isWeb()) {
      await Utils.scrollAndMoveToElement(MFWithdrawalObjects.mutualFundPlan(planName));
    }
  }

  async clickOnMFPlan(planName) {
    await Utils.clickElement(MFWithdrawalObjects.mutualFundPlan(planName));
  }

  async confirmBankDetailsPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFWithdrawalObjects.confirmBankDetailsPageHeader));
  }

  async clickOnWithdrawalBankOption(option) {
    await Utils.clickElement(MFWithdrawalObjects.withdrawalBankOption(option));
  }

  async withdrawAmountPageHeaderIsDisplayed(mutualFundPortfolio) {
    return (await Utils.elementIsDisplayed(MFWithdrawalObjects.withdrawAmountPageHeader(mutualFundPortfolio)));
  }

  async enterWithdrawalAmount(amount) {
    await Utils.setInputField(amount, MFWithdrawalObjects.withdrawAmountField);
  }

  async clickNextButton() {
    await Utils.clickElement(MFWithdrawalObjects.withdrawAmountNextButton);
  }

  async clickSelectFundsButton() {
    await Utils.clickElement(MFWithdrawalObjects.withdrawAmountSelectFundsButton);
  }

  async selectFundsPageHeaderIsDisplayed(mutualFundPortfolio) {
    return (await Utils.elementIsDisplayed(MFWithdrawalObjects.selectFundsPageHeader(mutualFundPortfolio)));
  }

  async selectFundsPageSummaryIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFWithdrawalObjects.selectFundsPageSummary));
  }

  async selectFundsPageAmountIsDisplayed(amount) {
    return (await Utils.elementIsDisplayed(MFWithdrawalObjects.selectFundsPageAmount(amount)));
  }

  async selectFundsPageSelectFundsIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFWithdrawalObjects.selectFundsPageSelectFunds));
  }

  async scrollUntilMutualFundNameIsDisplayed(fundName) {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid(MFWithdrawalObjects.mutualFundNameText(fundName));
    }
  }

  async clickOnMutualFund(fundName) {
    await Utils.clickElement(MFWithdrawalObjects.mutualFund(fundName));
    if (Device.isAndroidApp()) {
      await Utils.clickElement(MFWithdrawalObjects.mutualFund(fundName));
    }
  }

  async enterWithdrawalAmountForFund(amount, index) {
    if (Device.isAndroidApp()) {
      const inputField = await Utils.getLastMatchingElement(MFWithdrawalObjects.mutualFundAmountFields);
      await Utils.setTextObject(amount, inputField);
    } else if(Device.isWeb()) {
      const inputField = await Utils.getMatchingElementByIndex(MFWithdrawalObjects.mutualFundAmountFields, index - 1);
      await Utils.setTextObject(amount, inputField);
    }
  }

  async clickContiueWithFundAllocationButton(amount) {
    await Utils.clickElement(MFWithdrawalObjects.continueWithFundAllocationButton(amount));
  }

  async confirmWithdrawalPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFWithdrawalObjects.confirmWithdrawalPageHeader));
  }

  async clickOnWithdrawalFinalActionButton(buttonText) {
    await Utils.clickElement(MFWithdrawalObjects.withdrawalFinalActionButton(buttonText));
  }

  async verifyWithOTPPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFWithdrawalObjects.verifyWithOTPPageHeader));
  }

  async enterOTP(otp) {
    await Utils.setInputField(otp, MFWithdrawalObjects.otpField);
  }

  async clickVerifyWithOTPButton() {
    await Utils.clickElement(MFWithdrawalObjects.verifyOTPButton);
  }

  async withdrawScheduledPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFWithdrawalObjects.withdrawScheduledPageHeader));
  }
}

module.exports = new WithdrawalPage();
