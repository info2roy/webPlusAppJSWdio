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
      web: `//div[text()="${schemaName}"]`,
      app: `//*[@text="${schemaName}"]`
    };
  }

  enterSchemeDetailsHeader = {
    web: '//div[text()="Enter Scheme details" or text()="Enter Scheme Details"]',
    app: '//*[@text="Enter Scheme details" or @text="Enter Scheme Details"]'
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
    'Senior Citizen Saving Scheme': 'SCSS'
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
}
module.exports = new GovtSchemesObjects();
