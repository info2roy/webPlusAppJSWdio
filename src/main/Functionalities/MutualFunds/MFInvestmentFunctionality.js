const Constants = require('../../../config/data/structured/Constants');
const MFInvestmentPage = require('../../Pages/MutualFunds/MFInvestmentPage');

class MFInvestmentFunctionality {

  async selectMutualFundPortfolio(portfolio) {
    await MFInvestmentPage.selectMutualFundPortfolio(portfolio);
    return (await MFInvestmentPage.scripboxGuidedPathHeaderIsDisplayed());
  }

  async investAsPerScripboxGuidedPath() {
    await MFInvestmentPage.clickInvestAsPerScripboxGuidedPathButton();
    return (await MFInvestmentPage.investmentFormPageHeaderIsDisplayed());
  }

  async fillInvestmentForm(investmentType, amount) {
    await MFInvestmentPage.selectInvestmentType(investmentType);
    await MFInvestmentPage.enterInvestmentAmount(amount);
    await MFInvestmentPage.clickSeeRecommendedFundsButton();
    return (await MFInvestmentPage.recommendedFundPageHeaderIsDisplayed());
  }

  async acceptRecommendedFunds(investmentType, amount) {
    await MFInvestmentPage.clickOnlyNextButton();
    return (await MFInvestmentPage.selectPaymentTypePageHeaderIsDisplayed(investmentType, amount));
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
    return (await MFInvestmentPage.transferFundsPageHeaderIsDisplayed());
  }

  async goToBankForFundTransfer() {
    await MFInvestmentPage.clickGoToBankButton();
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

  async addNewPlan() {
    await MFInvestmentPage.clickOnAddNewPlan();
  }
}

module.exports = new MFInvestmentFunctionality();
