class GovtSchemesObjects {

  govtSchemesInitialPageHeader = {
    web: '//*[text()="One place to track all your Govt. Schemes"]',
    app: '//android.widget.TextView[@text="One place to track all your Govt. Schemes"]'
  };

  addGovtSchemesButton = {
    web: '//button[text()="Add Govt. Scheme" or text()="Add Government Scheme"] | //div[text()="Add government scheme"]',
    app: '//android.widget.TextView[@text="ADD GOVT. SCHEME" or @text="Add Government Scheme"]'
  };

  addGovtSchemePageHeader = {
    web: '(//div[text()="Add Scheme"])[last()]',
    app: '//android.widget.TextView[@text="Add Scheme"]'
  };

  govtScheme(schemaName) {
    return {
      web: `//div[contains(text(),"${schemaName}")]`,
      app: `//android.widget.TextView[contains(@text,"${schemaName}")]`
    };
  }

  enterSchemeDetailsHeader = {
    web: '//div[text()="Enter Scheme details" or text()="Enter Scheme Details"]',
    app: '//android.widget.TextView[@text="Enter Scheme details" or @text="Enter Scheme Details" or @text="Enter scheme details"]'
  };

  enterInvestmentDetailsHeader = {
    web: '//div[text()="Enter Investment details"]',
    app: '//android.widget.TextView[@text="Enter investment details"]'
  };

  currentValueHeader = {
    web: '//div[text()="CURRENT VALUE"]',
    app: '//*[@text="CURRENT VALUE"]'
  };

  amountField = {
    web: 'input#current_value'
  };

  amountFieldSCSS = {
    web: 'input#value'
  };

  schemeNameToCode = {
    'Employee Provident Fund': 'EPF',
    'Public Provident Fund': 'PPF',
    'General Provident Fund': 'GPF',
    'Sukanya Samridhi Yojna': 'SSY',
    'Senior Citizen Saving Scheme': 'SCSS',
    'National Pension Scheme Tier1': 'NPS',
    'National Pension Scheme Tier2': 'NPS',
    'National Saving Certificate': 'NSC'
  };

  amountUpdateSuccessMessage(schemeName) {
    return {
      web: `//div[text()="${this.schemeNameToCode[schemeName]} data updated successfully" or text()="${this.schemeNameToCode[schemeName]} data added successfully"]`,
      app: `//*[@text="${this.schemeNameToCode[schemeName]} data added successfully" or @text="${this.schemeNameToCode[schemeName]} data updated successfully"]`
    };
  }

  investedAmountHeader = {
    web: '//div[text()="INVESTED AMOUNT"]',
    app: '//*[@text="INVESTED AMOUNT"]'
  };

  totalAmountForSchemePieChart(schemeName) {
    const schemeCode = this.schemeNameToCode[schemeName];
    return {
      web: `//div[contains(text(),"${schemeCode}")]/parent::span/following-sibling::span/div`
    };
  }

  totalAbsoluteAmountForScheme(schemeName) {
    return {
      web: `//div[contains(text(),"${schemeName}")]/parent::div/parent::div/parent::div/following-sibling::div/div/div`,
      app: `(//android.widget.TextView[@text="${schemeName}"]/following-sibling::android.widget.TextView)[2]`
    };
  }

  npsSchemeTile = {
    web: '//div[contains(text(),"NPS") and not(contains(text(), "NPS Tier"))] | //p[contains(text(),"NPS") and not(contains(text(), "NPS Tier"))]',
    app: '//android.widget.TextView[contains(@text,"NPS") and not(contains(@text, "NPS Tier"))]'
  };

  totalAbsoluteAmountForNPSScheme(index) {
    return {
      web: `(${this.npsSchemeTile.web})[${index + 1}]/parent::div/parent::div/parent::div/parent::div/following-sibling::div/div/div`,
      app: `${this.npsSchemeTile.app}/following-sibling::android.widget.TextView`
    };
  }

  deleteSchemeButton = {
    web: '//div[text()="Delete"] | //p[text()="Delete"]',
    app: '//*[@text="Delete"]'
  };

  govtSchemeDeleteMessage = {
    web: '//div[text()="Govt Scheme deleted successfully"]',
    app: '//*[@text="Govt Scheme deleted successfully"]'
  };

  npsFundNameField = {
    web: 'input#fund',
    app: '(//android.widget.TextView[@text="Fund Name"]/following-sibling::android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView)[1]'
  };

  npsFundNameOption(fundName) {
    return {
      web: `//li[text()="${fundName}"]`,
      app: `//android.widget.TextView[@text="${fundName}"]`
    };
  }
  npsEquityAmountField = {
    web: 'input#value1',
    app: '(//android.widget.TextView[@text="Scheme E - Equity"]/following-sibling::android.view.ViewGroup/android.widget.EditText)[1]'
  };

  npsGovtSecurityAmountField = {
    web: 'input#value2',
    app: '(//android.widget.TextView[@text="Scheme G - Government securities"]/following-sibling::android.view.ViewGroup/android.widget.EditText)[1]'
  };

  npsCorpDebtAmountField = {
    web: 'input#value3',
    app: '(//android.widget.TextView[@text="Scheme C - Corporate Debt"]/following-sibling::android.view.ViewGroup/android.widget.EditText)[1]'
  };

  npsAltInvestmentFundsAmountField = {
    web: 'input#value4',
    app: '(//android.widget.TextView[@text="Scheme A - Alternative Investment Funds"]/following-sibling::android.view.ViewGroup/android.widget.EditText)[1]'
  };

  //For NPS Scheme details attributes Type, Fund Name, Scheme E - Equity, Scheme G - Government securities, Scheme A - Alternative Investment Funds or Scheme C - Corporate Debt
  npsSchemeDetailsAttribute(attribute) {
    return {
      web: `//div[text()="${attribute}"]/following-sibling::div`,
      app: `//android.widget.TextView[@text="${attribute}"]/following-sibling::android.widget.TextView`
    };
  }

  nscInvestedAmountField = {
    web: 'input#invested_val',
    app: '(//android.widget.TextView[@text="Invested Amount"]/following-sibling::android.view.ViewGroup/android.widget.EditText)[1]'
  };

  nscInterestPercentField = {
    web: 'input#interest',
    app: '(//android.widget.TextView[@text="Interest (%)"]/following-sibling::android.view.ViewGroup/android.widget.EditText)[1]'
  };

  nscStartDateField = {
    web: 'input#start_date',
    app: '(//android.widget.TextView[@text="Start Date"]/following-sibling::android.view.ViewGroup/android.widget.TextView)[1]'
  };

  nscMaturityDateField = {
    web: 'input#my_date',
    app: '(//android.widget.TextView[@text="Maturity Date"]/following-sibling::android.view.ViewGroup/android.widget.TextView)[1]'
  };

  previousYearButton = {
    web: 'button.react-datepicker__navigation--previous'
  };

  nextYearButton = {
    web: 'button.react-datepicker__navigation--next'
  };

  nscPickedYear = {
    web: 'div.react-datepicker-year-header'
  };

  nscMonthPicker(month) {
    return {
      web: `//div[text()="${month}"]`
    };
  }

  //For NSC Scheme details attributes Interest, Start, Maturity
  nscSchemeDetailsAttribute(nscAmount, index, attribute) {
    return {
      web: `//h5[text()="${nscAmount.toLocaleString('hi')}"]/parent::div/parent::div/following-sibling::div/div[${index}]/p[text()="${attribute}"]/following-sibling::p`,
      app: `//android.widget.TextView[@text="1 Investment"]/following-sibling::android.view.ViewGroup/android.widget.TextView[@text="${nscAmount.toLocaleString('hi')}"]/following-sibling::android.widget.TextView[${index + 3}]`
    };
  }

  nscSchemeMoreOptionsButton(nscAmount) {
    return {
      web: `//h5[text()="${nscAmount.toLocaleString('hi')}"]/parent::div/following-sibling::div/span[text()="more_horiz"]`,
      app: `//android.widget.TextView[@text="1 Investment"]/following-sibling::android.view.ViewGroup/android.widget.TextView[@text="${nscAmount.toLocaleString('hi')}"]/following-sibling::android.view.ViewGroup/android.widget.TextView`
    };
  }
}
module.exports = new GovtSchemesObjects();
