class FixedDepositObjects {

  addExistingFixedDepositLink = {
    web: '//div[text()="Add existing Fixed Deposit"]'
  };

  addFixedDepositLink = {
    web: '//button[text()="Add Fixed Deposit"]'
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

  fdMaturityMonthField = {
    web: 'input#my_date'
  };

  totalInvestedAmount = {
    web: '//div[text()="INVESTED AMOUNT"]/following-sibling::div/div'
  };

  //For Fixed Deposit details attributes Interest, Start Month, Maturity Month
  fixedDepositDetailsAttribute(fdAmount, index, attribute) {
    return {
      web: `//div[text()="${fdAmount.toLocaleString('hi')}"]/parent::div/parent::div/following-sibling::div/div[${index}]/div[text()="${attribute}"]/following-sibling::div`
    };
  }

  fixedDepositMoreOptionsButton(fdAmount) {
    return {
      web: `//div[text()="${fdAmount.toLocaleString('hi')}"]/parent::div/following-sibling::div/span[text()="more_horiz"]`
    };
  }
}
module.exports = new FixedDepositObjects();
