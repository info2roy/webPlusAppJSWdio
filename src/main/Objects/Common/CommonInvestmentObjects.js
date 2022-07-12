class CommonInvestmentObjects {
  investmentTab(investmentInstrumentType) { //investmentInstrumentType belongs to ["Mutual Funds", "Fixed Deposit" , ..]
    return {
      web: `//div[text()="${investmentInstrumentType}"]`,
      app: `//*[@text="${investmentInstrumentType}"]`
    };
  }
}
module.exports = new CommonInvestmentObjects();
