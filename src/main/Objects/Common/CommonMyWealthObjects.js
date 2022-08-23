class CommonMyWealthObjects {

  yourWealthPageHeader = {
    web: '//div[text()="YOUR WEALTH"]',
    app: '//*[@text="YOUR WEALTH"]'
  };

  myWealthTab(wealthType) { //wealthType belongs to ["Investments", "Insurance"]
    return {
      web: `//div[text()="${wealthType}"]`,
      app: `//*[@text="${wealthType}"]`
    };
  }

  myWealthInvestmentType(investmentType) { //investmentType belongs to ["Mutual Funds", "Stocks", "US Stocks", "Fixed Deposits", "Real Estate", "Govt. Schemes", "Other Investments"]
    return {
      web: `//div[text()="${investmentType}"]`,
      app: `//*[@text="${investmentType}"]`
    };
  }

  myWealthInsuranceType(insuranceType) { //insuranceType belongs to ["Life Insurance", "Stocks", "PF Linked Free Insurance", "Fixed Deposits", "Other Insurance"]
    return {
      web: `//div[text()="${insuranceType}"]`,
      app: `//*[@text="${insuranceType}"]`
    };
  }

  myWealthInvestmentGovtSchemesHeader = {
    web: '(//div[text()="Government Schemes"])[last()]',
    app: '(//*[@text="Government Schemes"])[last()]'
  };
}
module.exports = new CommonMyWealthObjects();
