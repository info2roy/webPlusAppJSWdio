class FixedDepositObjects {

  addExistingFixedDepositLink = {
    web: '//div[text()="Add existing Fixed Deposit"]',
    app: '//android.widget.TextView[@text="Add existing Fixed Deposit"]'
  };

  fixedDepositPageHeader = {
    app: '//android.widget.TextView[@text="One place to track all your Fixed Deposits"]'
  };

  addFixedDepositLink = {
    web: '//button[text()="Add Fixed Deposit"]',
    app: '//android.widget.TextView[@text="Add Fixed Deposit"]'
  };

  enterInvestmentDetailsHeader = {
    web: '//div[text()="Enter investment details"]',
    app: '//android.widget.TextView[@text="Enter investment details"]'
  };

  fdFirmNameField = {
    web: 'input#firm',
    app: '((//android.widget.TextView[@text="Firm name"]/following-sibling::android.view.ViewGroup)[1]/android.view.ViewGroup/android.widget.TextView)[1]'
  };

  fdFirmNameOption(firmName) {
    return {
      web: `//li[text()="${firmName}"]`,
      app: `//android.widget.TextView[@text="${firmName}"]`
    };
  }

  fdInvestedAmountField = {
    web: 'input#amount',
    app: '//android.widget.EditText[@text="Enter amount"]'
  };

  fdInterestRateField = {
    web: 'input#interest',
    app: '//android.widget.EditText[@text="Enter interest"]'
  };

  fdStartMonthField = {
    web: 'input#st_date',
    app: '//android.widget.TextView[@text="MM/YY"]'
  };

  fdMaturityMonthField = {
    web: 'input#my_date',
    app: '//android.widget.TextView[@text="MM/YY"]'
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
