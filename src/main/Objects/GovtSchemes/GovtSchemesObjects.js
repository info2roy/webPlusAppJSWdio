class GovtSchemesObjects {
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
    web: '//div[text()="Enter Scheme details"]',
    app: '//*[@text="Enter Scheme details"]'
  };

  expandMoreButton = {
    web: '//i[text()="expand_more"]',
    app: '//*[@text="expand_more"]'
  };

  amountField = {
    web: 'input#current_value'
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
      web: `//div[text()="${this.schemeNameToCode[schemeName]} data updated successfully"]`
    };
  }
}
module.exports = new GovtSchemesObjects();
