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
}

module.exports = new InvestmentPage();
