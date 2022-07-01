const Device = require('../../../support/libraries/Device');
const Utils = require('../../../support/Utils/Utils');
const InvestmentObjects = require('../../Objects/MutualFunds/InvestmentObjects');

class InvestmentPage {
  async selectInvestmentTab(investmentType) {
    await Utils.clickElement(InvestmentObjects.investmentTab(investmentType));
  }

  async investmentTabIsDisplayed(investmentType) {
    return (await Utils.elementIsDisplayed(InvestmentObjects.investmentTab(investmentType)));
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
    await Utils.scrollVerticalUntilTextIntoViewForAndroid(InvestmentObjects.ageGroupHeaderText);
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
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid(InvestmentObjects.makePaymentNowText);
    }
  }

  async clickMakePaymentNowButton() {
    await Utils.clickElement(InvestmentObjects.makePaymentNowButton);
  }

  async setupInvestmentPageHeaderIsDisplayed(amount, months) {
    return (await Utils.elementIsDisplayed(InvestmentObjects.setupMFSipInvestmentPageHeader(amount, months)));
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

  async clickMockPaymentStatus(paymentStatus) {
    if (Device.isWeb()) {
      await Utils.clickElement(InvestmentObjects.mockPaymentStatusButton(paymentStatus));
    }
  }

  async fundTransferSuccessMessageIsDisplayed() {
    return (await Utils.elementIsDisplayed(InvestmentObjects.fundTransferSuccessMessage));
  }

  async clickHomeButton() {
    if(Device.isAndroidApp()) {
      await Utils.clickElement(InvestmentObjects.homeButton);
    }
  }

  async investmentSuccessMessageIsDisplayed() {
    if(Device.isAndroidApp()) {
      return (await Utils.elementIsDisplayed(InvestmentObjects.investmentSuccessMessage));
    }
    return true;
  }

  async clickGoToDashboardButton() {
    await Utils.clickElement(InvestmentObjects.goToDashboardButton);
  }

  async clickBackButton() {
    const backButton = await Utils.getMatchingElementByIndex(InvestmentObjects.backButton, 0);
    await Utils.clickWebElement(backButton);
  }
}

module.exports = new InvestmentPage();
