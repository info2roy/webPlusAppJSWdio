const Constants = require('../../../config/data/structured/Constants');
const Utils = require('../../../support/Utils/Utils');
const GovtSchemesObjects = require('../../Objects/GovtSchemes/GovtSchemesObjects');

class GovtSchemesPage {
  async clickAddGovtSchemeButton() {
    await Utils.clickElement(GovtSchemesObjects.addGovtSchemesButton);
  }

  async addGovtSchemePageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(GovtSchemesObjects.addGovtSchemePageHeader));
  }

  async expandMoreButtonIsDisplayed() {
    return (await Utils.elementIsDisplayed(GovtSchemesObjects.expandMoreButton));
  }

  async clickExpandMoreButton() {
    await Utils.clickElement(GovtSchemesObjects.expandMoreButton);
  }

  async selectGovtScheme(schemeName) {
    switch(schemeName) {
      case Constants.GOVT_SCHEME_EPF:
      case Constants.GOVT_SCHEME_PPF:
      case Constants.GOVT_SCHEME_GPF:
      case Constants.GOVT_SCHEME_SSY:
      case Constants.GOVT_SCHEME_SCSS:
        await Utils.clickElement(GovtSchemesObjects.govtScheme(schemeName));
        break;
      default:
        await console.log(`unsupported Govt Scheme ${schemeName}`);
    }
  }

  async validateNavigateToGovtSchemePage(schemeName) {
    switch(schemeName) {
      case Constants.GOVT_SCHEME_EPF:
      case Constants.GOVT_SCHEME_PPF:
      case Constants.GOVT_SCHEME_GPF:
      case Constants.GOVT_SCHEME_SSY:
      case Constants.GOVT_SCHEME_SCSS:
        return (await Utils.elementIsDisplayed(GovtSchemesObjects.enterSchemeDetailsHeader));
      default:
        await console.log(`unsupported Govt Scheme ${schemeName}`);
        return false;
    }
  }

  async setAmount(amount) {
    await Utils.setInputField(amount, GovtSchemesObjects.amountField);
  }

  async saveOrUpdateAmount() {
    await Utils.clickElement(GovtSchemesObjects.saveOrUpdateButton);
  }

  async amountUpdateSuccessMessageIsDisplayed(schemeName) {
    return (await Utils.elementIsDisplayed(GovtSchemesObjects.amountUpdateSuccessMessage(schemeName)));
  }
}
module.exports = new GovtSchemesPage();
