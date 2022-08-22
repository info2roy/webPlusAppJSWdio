class GovtSchemesObjects {
  addGovtSchemesButton = {
    web: '//button[text()="Add Govt. Scheme"]',
    app: '//*[@text="Add Govt. Scheme"]'
  };

  addGovtSchemePageHeader = {
    web: '(//div[text()="Add Scheme"])[last()]',
    app: '(//*[@text="Add Scheme"])[last()]'
  };
}
module.exports = new GovtSchemesObjects();
