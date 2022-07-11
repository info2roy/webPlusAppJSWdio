const Device = require('../../../support/libraries/Device');
const Utils = require('../../../support/Utils/Utils');
const InvestmentObjects = require('../../Objects/MutualFunds/InvestmentObjects');

class InvestmentPage {
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

  async clickOnlyNextButton() {
    await Utils.clickElement(InvestmentObjects.nextButton);
  }

  async clickNextButtonForPayment(paymentType) {
    if (paymentType === InvestmentObjects.PAYMENT_TYPE_IMMEDIATE) {
      await Utils.clickElement(InvestmentObjects.nextButton);
    } else if (paymentType === InvestmentObjects.PAYMENT_TYPE_SCHEDULED) {
      await Utils.clickElement(InvestmentObjects.confirmButton);
    }
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

  async scrollUntilInvestmentTypeTextIsDisplayed(paymentType) {
    if (Device.isAndroidApp()) {
      let investmentTypeText = InvestmentObjects.MAKE_PAYMENT_NOW_TEXT;
      if (paymentType === InvestmentObjects.PAYMENT_TYPE_SCHEDULED) {
        investmentTypeText = InvestmentObjects.ONE_CLICK_INVEST_TEXT;
      }
      console.log(`scrollUntilInvestmentTypeTextIsDisplayed: investmentTypeText: ${JSON.stringify(investmentTypeText)}`);
      await Utils.scrollVerticalUntilTextIntoViewForAndroid(investmentTypeText);
    }
  }

  async clickMakePaymentButton(paymentType) {
    if (paymentType === InvestmentObjects.PAYMENT_TYPE_IMMEDIATE) {
      await Utils.clickElement(InvestmentObjects.makePaymentNowButton);
    } else if(paymentType === InvestmentObjects.PAYMENT_TYPE_SCHEDULED) {
      await Utils.clickElement(InvestmentObjects.oneClickInvestButton);
    }
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

  async investmentScheduledSuccessfulPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(InvestmentObjects.investmentScheduledSuccessfullyPageHeader));
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
    await console.log('clickBackButton : begin');
    const backButton = await Utils.getMatchingElementByIndex(InvestmentObjects.backButton, 0);
    await console.log(`backButton : ${JSON.stringify(backButton)}`);
    await Utils.clickWebElement(backButton);
    await console.log(`clicked backButton`);
    if (Device.isWeb()) {
      await Utils.clickWebElement(backButton);
    }
  }
}

module.exports = new InvestmentPage();
