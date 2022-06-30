const InvestmentPage = require('../Pages/InvestmentPage');

class InvestmentFunctionality {
  async investmentPageLaunched() {
    return ((await InvestmentPage.investmentTabIsDisplayed('Mutual Funds')) &&
      (await InvestmentPage.investmentTabIsDisplayed('Fixed Deposit')));
  }

  async selectInvestmentTab() {
    await InvestmentPage.selectInvestmentTab('Mutual Funds');
  }

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
    await InvestmentPage.clickNextButton();
  }

  async makePayment() {
    await InvestmentPage.scrollUntilMakePaymentNowIsDisplayed();
    await InvestmentPage.clickMakePaymentNowButton();
  }

  async setupInvestmentPageLaunched(amount, months) {
    return (await InvestmentPage.setupInvestmentPageHeaderIsDisplayed(amount, months));
  }

  async setupInvestment(months) {
    await InvestmentPage.enterSipDurationInMonths(months);
    await InvestmentPage.clickNextButton();
  }

  async paymentInstrumentPageLaunched() {
    return (await InvestmentPage.paymentInstrumentPageHeaderIsDisplayed());
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
}

module.exports = new InvestmentFunctionality();
