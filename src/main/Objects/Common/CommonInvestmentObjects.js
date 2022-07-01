class CommonInvestmentObjects {
  investmentTab(investmentType) { //investmentType belongs to ["Mutual Funds", "Fixed Deposit" , ..]
    return {
      web: `//div[text()="${investmentType}"]`,
      app: `//*[@text="${investmentType}"]`
    };
  }
}
module.exports = new CommonInvestmentObjects();
