const Constants = require('../../../config/data/structured/Constants');
const MFInvestmentPage = require('../../Pages/MutualFunds/MFInvestmentPage');

class InvestmentFunctionality {

  async selectMutualFundPortfolio(portfolio) {
    await MFInvestmentPage.selectMutualFundPortfolio(portfolio);
    return (await MFInvestmentPage.scripboxGuidedPathHeaderIsDisplayed());
  }

  async investAsPerScripboxGuidedPath() {
    await MFInvestmentPage.clickInvestAsPerScripboxGuidedPathButton();
  }

  async mutualFundPortfolioPageLaunched(portfolio) {
    return (await MFInvestmentPage.mutualFundPortfolioHeaderIsDisplayed(portfolio));
  }

  async fillMutualFundPortfolioForm(ageGroup) {
    //await InvestmentPage.scrollUntilAgegroupHeaderIsDisplayed();
    //await InvestmentPage.selectAgeGroupTab(ageGroup);
    await console.log(`fillMutualFundPortfolioForm ageGroup:${ageGroup}`);
    await MFInvestmentPage.clickNextButton();
  }

  async investmentFormPageLaunched() {
    return (await MFInvestmentPage.investmentFormPageHeaderIsDisplayed());
  }

  async fillInvestmentForm(investmentType, amount) {
    await MFInvestmentPage.selectInvestmentType(investmentType);
    await MFInvestmentPage.enterInvestmentAmount(amount);
    await MFInvestmentPage.clickSeeRecommendedFundsButton();
  }

  async recommendedFundsPageIsLaunched() {
    return (await MFInvestmentPage.recommendedFundPageHeaderIsDisplayed());
  }

  async acceptRecommendedFunds() {
    await MFInvestmentPage.clickOnlyNextButton();
  }

  async makePayment(paymentType) {
    await MFInvestmentPage.scrollUntilInvestmentTypeTextIsDisplayed(paymentType);
    await MFInvestmentPage.clickMakePaymentButton(paymentType);
  }

  async setupMFInvestmentPageLaunched(investmentType, amount, months) {
    return (await MFInvestmentPage.setupMFInvestmentPageHeaderIsDisplayed(investmentType, amount, months));
  }

  async setupInvestment(sipDurationInMonths, paymentType, investmentType) {
    if (investmentType == Constants.INVESTMENT_TYPE_SIP) {
      await MFInvestmentPage.enterSipDurationInMonths(sipDurationInMonths);
    }
    await MFInvestmentPage.clickNextButtonForPayment(paymentType);
  }

  async paymentInstrumentPageLaunched(paymentType) {
    if (paymentType === Constants.PAYMENT_TYPE_IMMEDIATE) {
      return (await MFInvestmentPage.paymentInstrumentPageHeaderIsDisplayed());
    } else if (paymentType === Constants.PAYMENT_TYPE_SCHEDULED) {
      return (await MFInvestmentPage.investmentScheduledSuccessfulPageHeaderIsDisplayed());
    }
    return false;
  }

  async selectPaymentInstrument(paymentInstrumentType) {
    await MFInvestmentPage.clickOnPaymentInstrument(paymentInstrumentType);
  }

  async transferFundsPageLaunched() {
    return (await MFInvestmentPage.transferFundsPageHeaderIsDisplayed());
  }

  async goToBankForFundTransfer() {
    await MFInvestmentPage.clickGoToBankButton();
  }

  async mockPaymentStatusPageLaunched() {
    return (await MFInvestmentPage.mockPaymentStatusPageHeaderIsDisplayed());
  }

  async selectMockPaymentStatus(paymentStatus) {
    await MFInvestmentPage.clickMockPaymentStatus(paymentStatus);
  }

  async fundTransferIsSuccessful() {
    return (await MFInvestmentPage.fundTransferSuccessMessageIsDisplayed());
  }

  async goToHome() {
    await MFInvestmentPage.clickHomeButton();
  }

  async investmentIsSuccessful() {
    return (await MFInvestmentPage.investmentSuccessMessageIsDisplayed());
  }

  async investmentScheduledSuccessfully() {
    return (await MFInvestmentPage.investmentScheduledSuccessfulPageHeaderIsDisplayed());
  }

  async goBackToDashboard() {
    await MFInvestmentPage.clickGoToDashboardButton();
    await MFInvestmentPage.clickBackButton();
  }

}

module.exports = new InvestmentFunctionality();