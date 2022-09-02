class GovtSchemesObjects {

  govtSchemesInitialPageHeader = {
    web: '//div[text()="One place to track all your Govt. Schemes"] | //h5[text()="One place to track all your Govt. Schemes"]',
    app: '//*[@text="One place to track all your Govt. Schemes"]'
  };

  addGovtSchemesButton = {
    web: '//button[text()="Add Govt. Scheme" or text()="Add Government Scheme"] | //div[text()="Add government scheme"]',
    app: '//*[@text="Add Govt. Scheme" or @text="Add Government Scheme" or @text="Add government scheme"]'
  };

  addGovtSchemePageHeader = {
    web: '(//div[text()="Add Scheme"])[last()]',
    app: '(//*[@text="Add Scheme"])[last()]'
  };

  govtScheme(schemaName) {
    return {
      web: `//div[contains(text(),"${schemaName}")]`,
      app: `//*[contains(@text,"${schemaName}")]`
    };
  }

  enterSchemeDetailsHeader = {
    web: '//div[text()="Enter Scheme details" or text()="Enter Scheme Details"]',
    app: '//*[@text="Enter Scheme details" or @text="Enter Scheme Details"]'
  };

  enterInvestmentDetailsHeader = {
    web: '//div[text()="Enter Investment details"]',
    app: '//*[@text="Enter Investment details"]'
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
    'National Pension Scheme Tier2': 'NPS'
  };

  amountUpdateSuccessMessage(schemeName) {
    return {
      web: `//div[text()="${this.schemeNameToCode[schemeName]} data updated successfully" or text()="${this.schemeNameToCode[schemeName]} data added successfully"]`
    };
  }

  investedAmountHeader = {
    web: '//div[text()="INVESTED AMOUNT"]',
    app: '//*[@text="INVESTED AMOUNT"]'
  };

  totalInvestedAmount = {
    web: '//div[text()="INVESTED AMOUNT"]/parent::div/following-sibling::div'
  };

  totalAmountForSchemePieChart(schemeName) {
    const schemeCode = this.schemeNameToCode[schemeName];
    return {
      web: `//div[contains(text(),"${schemeCode}")]/parent::span/following-sibling::span/div`
    };
  }

  totalAbsoluteAmountForScheme(schemeName) {
    return {
      web: `//div[contains(text(),"${schemeName}")]/parent::div/parent::div/parent::div/following-sibling::div/div/div`
    };
  }

  npsSchemeTile = {
    web: '//div[contains(text(),"NPS") and not(contains(text(), "NPS Tier"))] | //p[contains(text(),"NPS") and not(contains(text(), "NPS Tier"))]'
  };

  totalAbsoluteAmountForNPSScheme(index) {
    return {
      web: `(//div[contains(text(),"NPS") and not(contains(text(), "NPS Tier"))] | //p[contains(text(),"NPS") and not(contains(text(), "NPS Tier"))])[${index + 1}]/parent::div/parent::div/parent::div/parent::div/following-sibling::div/div/div`
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
    web: 'input#fund'
  };

  npsFundNameOption(fundName) {
    return {
      web: `//li[text()="${fundName}"]`
    };
  }
  npsEquityAmountField = {
    web: 'input#value1'
  };

  npsGovtSecurityAmountField = {
    web: 'input#value2'
  };

  npsCorpDebtAmountField = {
    web: 'input#value3'
  };

  npsAltInvestmentFundsAmountField = {
    web: 'input#value4'
  };

  //For NPS Scheme details attributes Type, Fund Name, Scheme E - Equity, Scheme G - Government securities, Scheme A - Alternative Investment Funds or Scheme C - Corporate Debt
  npsSchemeDetailsAttribute(attribute) {
    return {
      web: `//div[text()="${attribute}"]/following-sibling::div`
    };
  }

  nscInvestedAmountField = {
    web: 'input#invested_val'
  };

  nscInterestPercentField = {
    web: 'input#interest'
  };

  nscStartDateField = {
    web: 'input#start_date'
  };

  nscMaturityDateField = {
    web: 'input#my_date'
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
  nscSchemeDetailsAttribute(attribute) {
    return {
      web: `//div[text()="${attribute}"]/following-sibling::div`
    };
  }
}
module.exports = new GovtSchemesObjects();
