const Utils = require('../../../support/Utils/Utils');
const GovtSchemesObjects = require('../../Objects/GovtSchemes/GovtSchemesObjects');

class GovtSchemesPage {
  async clickAddGovtSchemeButton() {
    await Utils.clickElement(GovtSchemesObjects.addGovtSchemesButton);
  }

  async addGovtSchemePageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(GovtSchemesObjects.addGovtSchemePageHeader));
  }
}
module.exports = new GovtSchemesPage();
