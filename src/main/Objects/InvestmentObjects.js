class InvestmentObjects {
  investTab = { web: '//div[text()="Invest"]', app: '//*[@text="Invest"]' };

  mutualFundsTab = {
    web: '//div[text()="Mutual Funds"]',
    app: '//*[@text="Mutual Funds"]'
  };

  fixedDepositTab = {
    web: '//div[text()="Fixed Deposit"]',
    app: '//*[@text="Fixed Deposit"]'
  };

  mutualFundsPageHeader = {
    web: '//div[text()="Choose your plan"]',
    app: '//*[@text="Choose your plan"]'
  };

  mutualFundPortfolioOption(portfolio) {
    return {
      web: `//div[contains(text(),"${portfolio}")]`,
      app: `//*[contains(@text,"${portfolio}")]`
    };
  }

  scripboxGuidedPathHeader = {
    web: '//div[text()="Scripbox Guided Path"]',
    app: '//*[@text="Scripbox Guided Path"]'
  };

  investAsPerScripboxGuidedPathButton = {
    web: '//button[text()="Invest"]',
    app: '//*[@text="Invest"]'
  };

  ageGroupHeaderText = {
    web: 'What this plan good for?',
    app: 'What is this plan good for?'
  };

  ageGroupHeader = {
    web: `//div[text()="${this.ageGroupHeaderText.web}"]`,
    app: `//*[@text="${this.ageGroupHeaderText.app}"]`
  };

  ageGroupTab(ageGroup) {
    return {
      web: `//div[text()="${ageGroup}"]`,
      app: `//*[@text="${ageGroup}"]`
    };
  }

  nextButton = { web: '//button[text()="Next"]', app: '//*[@text="NEXT"]' };

  investmentFormPageHeader = {
    web: '//div[text()="I want to invest"]',
    app: '//*[@text="I want to invest"]'
  };

  investmentTypeOption(investmentType) {
    return {
      web: `//label[text()="${investmentType}"]`,
      app: `//*[@text="${investmentType}"]`
    };
  }

  investmentAmountField = {
    web: '#investment-amount',
    app: '.android.widget.EditText'
  };

  seeRecommendedFundsButton = {
    web: '//button[text()="See Recommended Funds"]',
    app: '//*[@text="SEE RECOMMENDED FUNDS"]'
  };

  recommendedFundsPageHeader = {
    web: '//div[text()="Recommended Funds and Amounts"]',
    app: '//*[@text="Recommended Funds"]'
  };

}
module.exports = new InvestmentObjects();
