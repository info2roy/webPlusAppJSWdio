const GovtSchemesPage = require('../../Pages/GovtSchemes/GovtSchemesPage');

class GovtSchemesFunctionality {
  async addGovtScheme() {
    await GovtSchemesPage.clickAddGovtSchemeButton();
    return (await GovtSchemesPage.addGovtSchemePageHeaderIsDisplayed());
  }
}
module.exports = new GovtSchemesFunctionality();
