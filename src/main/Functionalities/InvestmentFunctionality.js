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
    await InvestmentPage.scrollUntilAgegroupHeaderIsDisplayed();
    await InvestmentPage.selectAgeGroupTab(ageGroup);
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
}

module.exports = new InvestmentFunctionality();
