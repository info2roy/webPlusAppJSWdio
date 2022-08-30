class CommonMyWealthObjects {

  yourWealthPageHeader = {
    web: '//div[text()="YOUR WEALTH" or text()="MY WEALTH"]',
    app: '//*[@text="YOUR WEALTH" or @text="MY WEALTH"]'
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

  myWealthInvestmentRealEstateHeader = {
    web: '(//div[text()="Real Estate"])[last()]',
    app: '(//*[@text="Real Estate"])[last()]'
  };

  wealthUpdateSuccessMessage(wealthType) {
    return {
      web: `//div[text()="${wealthType} data updated successfully" or text()="${wealthType} data added successfully"]`
    };
  }

  wealthDeleteSuccessMessage(wealthType) {
    return {
      web: `//div[text()="${wealthType} deleted successfully"]`
    };
  }

  totalInvestedAmount = {
    web: '//div[text()="INVESTED AMOUNT"]/parent::div/following-sibling::div'
  };
}
module.exports = new CommonMyWealthObjects();
