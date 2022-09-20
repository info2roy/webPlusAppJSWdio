class CommonMyWealthObjects {

  yourWealthPageHeader = {
    web: '//div[text()="YOUR WEALTH" or text()="MY WEALTH"]',
    app: '//android.widget.TextView[@text="YOUR WEALTH" or @text="MY WEALTH"]'
  };

  myWealthTab(wealthType) { //wealthType belongs to ["Investments", "Insurance"]
    return {
      web: `//div[text()="${wealthType}"]`,
      app: `//android.widget.TextView[@text="${wealthType}"]`
    };
  }

  myWealthInvestmentType(investmentType) { //investmentType belongs to ["Mutual Funds", "Stocks", "US Stocks", "Fixed Deposits", "Real Estate", "Govt. Schemes", "Other Investments"]
    return {
      web: `//div[text()="${investmentType}"]`,
      app: `//android.widget.TextView[@text="${investmentType}"]`
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
    app: '//android.widget.TextView[@text="Government Schemes"]'
  };

  myWealthInvestmentRealEstateHeader = {
    web: '(//div[text()="Real Estate"])[last()]',
    app: '//android.widget.TextView[@text="Real Estate"]'
  };

  wealthUpdateSuccessMessage(wealthType) {
    return {
      web: `//div[text()="${wealthType} data updated successfully" or text()="${wealthType} data added successfully" or text()="ESTIMATED CURRENT VALUE"]`,
      app: `//*[@text="${wealthType} data updated successfully" or @text="${wealthType} data added successfully" or @text="ESTIMATED CURRENT VALUE"]`
    };
  }

  wealthDeleteSuccessMessage(wealthType) {
    return {
      web: `//div[contains(text(),"${wealthType} deleted successfully") or contains(text(),"${wealthType} data deleted successfully") or text()="ESTIMATED CURRENT VALUE"]`,
      app: `//*[contains(@text,"${wealthType} deleted successfully") or contains(@text,"${wealthType} data deleted successfully") or @text="ESTIMATED CURRENT VALUE"]`
    };
  }

  totalInvestedAmount = {
    web: '//div[text()="INVESTED AMOUNT"]/parent::div/following-sibling::div',
    app: '(//android.widget.TextView[@text="INVESTED AMOUNT"]/following-sibling::android.widget.TextView)[1]'
  };
}
module.exports = new CommonMyWealthObjects();
