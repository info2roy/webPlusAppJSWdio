const Constants = require('../../../support/Constants/Constants');
const InvestmentPage = require('../../Pages/MutualFunds/InvestmentPage');

class InvestmentFunctionality {
  async mutualFundsPageLaunched() {
    return (await InvestmentPage.mutualFundsPageHeaderIsDisplayed());
  }

  async selectMutualFundPortfolio(portfolio) {
    await InvestmentPage.selectMutualFundPortfolio(portfolio);
  }

  async scripBoxGuidedPathPageLaunched() {
    return (await InvestmentPage.scripboxGuidedPathHeaderIsDisplayed());
  }

  async investAsPerScripboxGuidedPath() {
    await InvestmentPage.clickInvestAsPerScripboxGuidedPathButton();
  }

  async mutualFundPortfolioPageLaunched(portfolio) {
    return (await InvestmentPage.mutualFundPortfolioHeaderIsDisplayed(portfolio));
  }

  async fillMutualFundPortfolioForm(ageGroup) {
    //await InvestmentPage.scrollUntilAgegroupHeaderIsDisplayed();
    //await InvestmentPage.selectAgeGroupTab(ageGroup);
    await console.log(`fillMutualFundPortfolioForm ageGroup:${ageGroup}`);
    await InvestmentPage.clickNextButton();
  }

  async investmentFormPageLaunched() {
    return (await InvestmentPage.investmentFormPageHeaderIsDisplayed());
  }

  async fillInvestmentForm(investmentType, amount) {
    await InvestmentPage.selectInvestmentType(investmentType);
    await InvestmentPage.enterInvestmentAmount(amount);
    await InvestmentPage.clickSeeRecommendedFundsButton();
  }

  async recommendedFundsPageIsLaunched() {
    return (await InvestmentPage.recommendedFundPageHeaderIsDisplayed());
  }

  async acceptRecommendedFunds() {
    await InvestmentPage.clickOnlyNextButton();
  }

  async makePayment(paymentType) {
    await InvestmentPage.scrollUntilInvestmentTypeTextIsDisplayed(paymentType);
    await InvestmentPage.clickMakePaymentButton(paymentType);
  }

  async setupMFInvestmentPageLaunched(investmentType, amount, months) {
    return (await InvestmentPage.setupMFInvestmentPageHeaderIsDisplayed(investmentType, amount, months));
  }

  async setupInvestment(sipDurationInMonths, paymentType, investmentType) {
    if (investmentType == Constants.INVESTMENT_TYPE_SIP) {
      await InvestmentPage.enterSipDurationInMonths(sipDurationInMonths);
    }
    await InvestmentPage.clickNextButtonForPayment(paymentType);
  }

  async paymentInstrumentPageLaunched(paymentType) {
    if (paymentType === Constants.PAYMENT_TYPE_IMMEDIATE) {
      return (await InvestmentPage.paymentInstrumentPageHeaderIsDisplayed());
    } else if (paymentType === Constants.PAYMENT_TYPE_SCHEDULED) {
      return (await InvestmentPage.investmentScheduledSuccessfulPageHeaderIsDisplayed());
    }
    return true;
  }

  async selectPaymentInstrument(paymentInstrumentType) {
    await InvestmentPage.clickOnPaymentInstrument(paymentInstrumentType);
  }

  async transferFundsPageLaunched() {
    return (await InvestmentPage.transferFundsPageHeaderIsDisplayed());
  }

  async goToBankForFundTransfer() {
    await InvestmentPage.clickGoToBankButton();
  }

  async mockPaymentStatusPageLaunched() {
    return (await InvestmentPage.mockPaymentStatusPageHeaderIsDisplayed());
  }

  async selectMockPaymentStatus(paymentStatus) {
    await InvestmentPage.clickMockPaymentStatus(paymentStatus);
  }

  async fundTransferIsSuccessful() {
    return (await InvestmentPage.fundTransferSuccessMessageIsDisplayed());
  }

  async goToHome() {
    await InvestmentPage.clickHomeButton();
  }

  async investmentIsSuccessful() {
    return (await InvestmentPage.investmentSuccessMessageIsDisplayed());
  }

  async investmentScheduledSuccessfully() {
    return (await InvestmentPage.investmentScheduledSuccessfulPageHeaderIsDisplayed());
  }

  async goBackToDashboard() {
    await InvestmentPage.clickGoToDashboardButton();
    await InvestmentPage.clickBackButton();
  }

}

module.exports = new InvestmentFunctionality();
