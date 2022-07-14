const Device = require('../../../support/libraries/Device');
const Utils = require('../../../support/Utils/Utils');
const WithdrawalObjects = require('../../Objects/MutualFunds/WithdrawalObjects');

class WithdrawalPage {
  async selectFamilyMemberPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(WithdrawalObjects.selectFamilyMemberPageHeader));
  }

  async clickOnFamilyMemberByName(familyMemberName) {
    await Utils.clickElement(WithdrawalObjects.familyMember(familyMemberName));
  }

  async selectFinancialProductPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(WithdrawalObjects.selectFinancialProductPageHeader));
  }

  async clickOnFinancialProduct(productName) {
    await Utils.clickElement(WithdrawalObjects.financialProduct(productName));
  }

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
}

module.exports = new WithdrawalPage();
