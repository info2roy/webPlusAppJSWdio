class GovtSchemesObjects {

  govtSchemesInitialPageHeader = {
    web: '//div[text()="One place to track all your Govt. Schemes"]',
    app: '//*[@text="One place to track all your Govt. Schemes"]'
  };

  addGovtSchemesButton = {
    web: '//button[text()="Add Govt. Scheme" or text()="Add Government Scheme"]',
    app: '//*[@text="Add Govt. Scheme" or @text="Add Government Scheme"]'
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

  saveOrUpdateButton = {
    web: '//button[text()="Save" or text()="Update"]'
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
    web: '//div[contains(text(),"NPS") and not(contains(text(), "NPS Tier"))]'
  };

  totalAbsoluteAmountForNPSScheme(index) {
    return {
      web: `(//div[contains(text(),"NPS") and not(contains(text(), "NPS Tier"))])[${index+1}]/parent::div/parent::div/parent::div/parent::div/following-sibling::div/div/div`
    };
  }

  deleteSchemeButton = {
    web: '//div[text()="Delete"]',
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
}
module.exports = new GovtSchemesObjects();
