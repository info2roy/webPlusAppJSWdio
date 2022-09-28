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
    app: '//android.widget.TextView[@text="Firm name"]/following-sibling::android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView[1]'
  };

  fdFirmNameOption(firmName) {
    return {
      web: `//li[text()="${firmName}"]`,
      app: `//android.widget.TextView[@text="${firmName}"]`
    };
  }

  fdInvestedAmountField = {
    web: 'input#amount',
    app: '//android.widget.TextView[@text="Invested amount"]/following-sibling::android.view.ViewGroup[1]/android.widget.EditText'
  };

  fdInterestRateField = {
    web: 'input#interest',
    app: '//android.widget.TextView[@text="Interest (%)"]/following-sibling::android.view.ViewGroup[1]/android.widget.EditText'
  };

  fdStartMonthField = {
    web: 'input#st_date',
    app: '//android.widget.TextView[@text="Start date"]/following-sibling::android.view.ViewGroup[1]/android.widget.TextView'
  };

  fdMaturityMonthField = {
    web: 'input#my_date',
    app: '//android.widget.TextView[@text="Maturity date"]/following-sibling::android.view.ViewGroup[1]/android.widget.TextView'
  };

  totalInvestedAmount = {
    web: '//div[text()="INVESTED AMOUNT"]/following-sibling::div/div',
    app: '//android.widget.TextView[@text="INVESTED AMOUNT"]/following-sibling::android.view.ViewGroup[1]/android.widget.TextView[1]'
  };

  //For Fixed Deposit details attributes Interest, Start Month, Maturity Month
  fixedDepositDetailsAttribute(fdAmount, index, attribute) {
    return {
      web: `//div[text()="${fdAmount.toLocaleString('hi')}"]/parent::div/parent::div/following-sibling::div/div[${index}]/div[text()="${attribute}"]/following-sibling::div`,
      app: `//android.widget.TextView[@text="${fdAmount.toLocaleString('hi')}"]/following-sibling::android.widget.TextView[${index+3}]`
    };
  }

  fixedDepositMoreOptionsButton(fdAmount) {
    return {
      web: `//div[text()="${fdAmount.toLocaleString('hi')}"]/parent::div/following-sibling::div/span[text()="more_horiz"]`,
      app: `//android.widget.TextView[@text="${fdAmount.toLocaleString('hi')}"]/following-sibling::android.view.ViewGroup/android.widget.TextView`
    };
  }
}
module.exports = new FixedDepositObjects();
