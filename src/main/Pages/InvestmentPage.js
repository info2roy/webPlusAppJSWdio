const Device = require('../../support/libraries/Device');
const Utils = require('../../support/Utils/Utils');
const InvestmentObjects = require('../Objects/InvestmentObjects');

class InvestmentPage {
  async selectInvestOption() {
    await Utils.clickElement(InvestmentObjects.investTab);
  }

  async selectMutualFundsTab() {
    await Utils.clickElement(InvestmentObjects.mutualFundsTab);
  }

  async mutualFundsTabIsDisplayed() {
    return (await Utils.elementIsDisplayed(InvestmentObjects.mutualFundsTab));
  }

  async fixedDepositTabIsDisplayed() {
    return (await Utils.elementIsDisplayed(InvestmentObjects.fixedDepositTab));
  }

  async mutualFundsPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(InvestmentObjects.mutualFundsPageHeader));
  }

  async selectMutualFundPortfolio(portfolio) {
    await Utils.clickElement(InvestmentObjects.mutualFundPortfolioOption(portfolio));
  }

  async scripboxGuidedPathHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(InvestmentObjects.scripboxGuidedPathHeader));
  }

  async clickInvestAsPerScripboxGuidedPathButton() {
    await Utils.clickElement(InvestmentObjects.investAsPerScripboxGuidedPathButton);
  }

  async mutualFundPortfolioHeaderIsDisplayed(portfolio) {
    return (await Utils.elementIsDisplayed(InvestmentObjects.mutualFundPortfolioOption(portfolio)));
  }

  async scrollUntilAgegroupHeaderIsDisplayed() {
    await Utils.scrollUntilTextIntoView(InvestmentObjects.ageGroupHeaderText);
  }

  async selectAgeGroupTab(ageGroup) {
    await Utils.clickElement(InvestmentObjects.ageGroupTab(ageGroup));
  }

  async clickNextButton() {
    await Utils.clickElement(InvestmentObjects.nextButton);
  }

  async investmentFormPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(InvestmentObjects.investmentFormPageHeader));
  }

  async selectInvestmentType(investmentType) {
    await Utils.clickElement(InvestmentObjects.investmentTypeOption(investmentType));
  }

  async enterInvestmentAmount(amount) {
    await Utils.setInputField(amount, InvestmentObjects.investmentAmountField);
  }

  async clickSeeRecommendedFundsButton() {
    await Utils.clickElement(InvestmentObjects.seeRecommendedFundsButton);
  }

  async recommendedFundPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(InvestmentObjects.recommendedFundsPageHeader));
  }

  async scrollUntilMakePaymentNowIsDisplayed() {
    await Utils.scrollUntilTextIntoView(InvestmentObjects.makePaymentNowText);
  }

  async clickMakePaymentNowButton() {
    await Utils.clickElement(InvestmentObjects.makePaymentNowButton);
  }

  async setupInvestmentPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(InvestmentObjects.setupInvestmentPageHeader));
  }

  async enterSipDurationInMonths(months) {
    await Utils.setInputField(months, InvestmentObjects.sipDurationInMonthsField);
  }

  async paymentInstrumentPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(InvestmentObjects.paymentInstrumentPageHeader));
  }

  async clickOnPaymentInstrument(paymentInstrumentType) {
    await Utils.clickElement(InvestmentObjects.paymentInstrument(paymentInstrumentType));
  }

  async transferFundsPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(InvestmentObjects.transferFundsPageHeader));
  }

  async clickGoToBankButton() {
    await Utils.clickElement(InvestmentObjects.goToBankForFundTransferButton);
  }

  async mockPaymentStatusPageHeaderIsDisplayed() {
    if (Device.isWeb()) {
      return (await Utils.elementIsDisplayed(InvestmentObjects.mockPaymentStatusPageHeader));
    }
    return true;
  }

  async clickMockPaymentSuccess() {
    await Utils.clickElement(InvestmentObjects.mockPaymentSuccessButton);
  }
}

module.exports = new InvestmentPage();
