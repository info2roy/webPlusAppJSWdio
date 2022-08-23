const Constants = require('../../../config/data/structured/Constants');
const Utils = require('../../../support/Utils/Utils');
const GovtSchemesObjects = require('../../Objects/GovtSchemes/GovtSchemesObjects');
const { expect } = require('chai');

class GovtSchemesPage {
  async clickAddGovtSchemeButton() {
    await Utils.clickElement(GovtSchemesObjects.addGovtSchemesButton);
  }

  async addGovtSchemePageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(GovtSchemesObjects.addGovtSchemePageHeader));
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

  async setAmount(amount, schemeName) {
    if (schemeName == Constants.GOVT_SCHEME_SCSS) {
      await Utils.setInputField(amount, GovtSchemesObjects.amountFieldSCSS);
    } else {
      await Utils.setInputField(amount, GovtSchemesObjects.amountField);
    }
  }

  async saveOrUpdateAmount() {
    await Utils.clickElement(GovtSchemesObjects.saveOrUpdateButton);
  }

  async amountUpdateSuccessMessageIsDisplayed(schemeName) {
    return (await Utils.elementIsDisplayed(GovtSchemesObjects.amountUpdateSuccessMessage(schemeName)));
  }

  async getTotalInvestedAmount() {
    return Utils.numberAbbriviationToAbsoluteValue(await Utils.getText(GovtSchemesObjects.totalInvestedAmount));
  }

  async totalAmountForSchemePieChartIsDisplayed(schemeName) {
    return (await Utils.elementIsDisplayed(GovtSchemesObjects.totalAmountForSchemePieChart(schemeName), 2000));
  }

  async investedAmountHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(GovtSchemesObjects.investedAmountHeader));
  }

  async getSchemePercentAndAmountPieChart(schemeName) {
    if(await this.totalAmountForSchemePieChartIsDisplayed(schemeName)) {
      const value = await Utils.getText(GovtSchemesObjects.totalAmountForSchemePieChart(schemeName));
      const parts = value.split('|');
      expect(parts.length).to.equal(2);
      const percent = parseFloat(parts[0]);
      const total = Utils.numberAbbriviationToAbsoluteValue(parts[1].trim());
      return [percent, total];
    } else {
      return [0, 0];
    }
  }

  async totalAmountForSchemeAbsoluteIsDisplayed(schemeName) {
    return (await Utils.elementIsDisplayed(GovtSchemesObjects.totalAbsoluteAmountForScheme(schemeName), 2000));
  }

  async getSchemeAbsoluteAmount(schemeName) {
    if(await this.totalAmountForSchemeAbsoluteIsDisplayed(schemeName)) {
      const value = await Utils.getText(GovtSchemesObjects.totalAbsoluteAmountForScheme(schemeName));
      return Utils.numberAbbriviationToAbsoluteValue(value.trim());
    } else {
      return 0;
    }
  }
}
module.exports = new GovtSchemesPage();
