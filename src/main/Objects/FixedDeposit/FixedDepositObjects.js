class FixedDepositObjects {

  addExistingFixedDepositLink = {
    web: '//div[text()="Add existing Fixed Deposit"]'
  };

  enterInvestmentDetailsHeader = {
    web: '//div[text()="Enter investment details"]'
  };

  fdFirmNameField = {
    web: 'input#firm'
  };

  fdFirmNameOption(firmName) {
    return {
      web: `//li[text()="${firmName}"]`
    };
  }

  fdInvestedAmountField = {
    web: 'input#amount'
  };

  fdInterestRateField = {
    web: 'input#interest'
  };

  fdStartMonthField = {
    web: 'input#st_date'
  };

  fdMaturityMonth = {
    web: 'input#my_date'
  };
}
module.exports = new FixedDepositObjects();
