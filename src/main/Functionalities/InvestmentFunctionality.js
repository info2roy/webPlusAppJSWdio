const InvestmentPage = require('../Pages/InvestmentPage');

class InvestmentFunctionality {
  async invest() {
    await InvestmentPage.selectInvestOption();
  }

  async investmentPageLaunched() {
    return ((await InvestmentPage.mutualFundsTabIsDisplayed()) && (await InvestmentPage.fixedDepositTabIsDisplayed()));
  }

  async selectMutualFunds() {
    await InvestmentPage.selectMutualFundsTab();
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

  async setupInvestmentPageLaunched() {
    return (await InvestmentPage.setupInvestmentPageHeaderIsDisplayed());
  }

  async setupInvestment(months) {
    await InvestmentPage.enterSipDurationInMonths(months);
    await InvestmentPage.clickNextButton();
  }

  async paymentInstrumentPageLaunched() {
    return (await InvestmentPage.paymentInstrumentPageHeaderIsDisplayed());
  }

  async selectPaymentInstrument(paymentInstrumentType) {
    InvestmentPage.selectPaymentInstrument(paymentInstrumentType);
  }

  async transferFundsPageLaunched() {
    return (await InvestmentPage.transferFundsPageHeaderIsDisplayed());
  }

  async goToBankForFundTransfer() {
    InvestmentPage.clickGoToBankButton();
  }

  async mockPaymentStatusPageLaunched() {
    return (await InvestmentPage.mockPaymentStatusPageHeaderIsDisplayed());
  }
}

module.exports = new InvestmentFunctionality();
