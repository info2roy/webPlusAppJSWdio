const Device = require('../../../support/libraries/Device');
const Utils = require('../../../support/Utils/Utils');
const MFWithdrawalObjects = require('../../Objects/MutualFunds/MFWithdrawalObjects');

class MFWithdrawalPage {

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
    } else if (Device.isWeb()) {
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

  async clickOnSelectFundsOption() {
    await Utils.clickElement(MFWithdrawalObjects.selectFundsButton);
  }

  async withdrawlPageNavigate(fundPortfolio) {
    return (
      await Utils.elementIsDisplayed(MFWithdrawalObjects.selectFundsPageHeader(fundPortfolio)) &&
      await Utils.elementIsDisplayed(MFWithdrawalObjects.finalWithdrawlPageHeader) &&
      await Utils.elementIsDisplayed(MFWithdrawalObjects.fundSelectButton));
  }

  async clickOnSelect() {
    await Utils.clickElement(MFWithdrawalObjects.fundSelectButton);
  }

  async enterWithdrawAmount() {
    const valueRead = (await (Utils.getText(MFWithdrawalObjects.readTotalAmount()))).replace(/\,/g, '');
    const nearestRound = Math.floor(parseInt(valueRead) / 100) * 100;
    await Utils.setInputField(nearestRound, MFWithdrawalObjects.withdrawAmountValue);
  }

  async clickOnContinue() {
    await Utils.clickElement(MFWithdrawalObjects.continueButtonForWithdrawl);
  }

  async withdrawlConfirmationPageNavigate() {
    return (
      await Utils.elementIsDisplayed(MFWithdrawalObjects.withdrawlConfirmationHeader) &&
      await Utils.elementIsDisplayed(MFWithdrawalObjects.withdrawlCreditStatememnt));
  }

  async confirmWithdrawlDetails() {
    return (
      await Utils.elementIsDisplayed(MFWithdrawalObjects.withdrawlBreakupHeader) &&
      await Utils.elementIsDisplayed(MFWithdrawalObjects.withdrawlGainHeader) &&
      await Utils.elementIsDisplayed(MFWithdrawalObjects.withdrawlYouWillGetHeader));
  }

  async verifyOTPPage() {
    return (
      await Utils.elementIsDisplayed(MFWithdrawalObjects.verifyWithOTP) &&
      await Utils.elementIsDisplayed(MFWithdrawalObjects.PleaseEnterCodeBanner));
  }

  async clickConfirmWithdrawl() {
    await Utils.clickElement(MFWithdrawalObjects.confirmConfirmationButton);
  }

}

module.exports = new MFWithdrawalPage();
