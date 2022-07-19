class DashboardObjects {
  helloUser = { web: '//div[text()="HELLO"]', app: '//*[@text="HELLO"]' };

  moreButton = {
    web: '//div[text()="More"]',
    desktop: 'span.desktop-dropdown-icon',
    app: '//android.widget.TextView[@text="More"]',
  };

  personalInfoOption = {
    web: '//div[text()="Personal Information"]',
    desktop: 'span.test-personal-information',
    app: '//android.widget.TextView[@text="Personal information"]',
  };

  accountFamilyInformationOption = {
    web: '//div[text()="Account & Family Information"]'
  };

  statementsAndTaxReports = { web: '//div[text()="Statements & Tax Reports"]'};

  returnToHome = {web: '//*[contains(text(),"Return to Home")]'};

  personalInfoText = {
    app: 'Personal information'
  };

  withdrawButton = { web: '//button/div[text()="Withdraw"]', app: '//*[@text="Withdraw"]' };

  investMoreButton = { web: '//button/div[text()="Invest more"]', app: '//*[@text="Invest more"]' };

  dashboardTab(tabName) { //Dashboard tabs like Invest, Home, My Wealth, Statements etc.
    return {
      web: `//div[text()="${tabName}"]`,
      app: `//*[@text="${tabName}"]`
    };
  }
}

module.exports = new DashboardObjects();
