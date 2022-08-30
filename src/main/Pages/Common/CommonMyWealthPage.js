const Utils = require('../../../support/Utils/Utils');
const CommonMyWealthObjects = require('../../Objects/Common/CommonMyWealthObjects');
const Constants = require('../../../config/data/structured/Constants');
const Device = require('../../../support/libraries/Device');
const CommonPage = require('./CommonPage');

class CommonMyWealthPage {

  async yourWealthHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(CommonMyWealthObjects.yourWealthPageHeader));
  }

  async myWealthTabIsDisplayed(wealthType) {
    return (await Utils.elementIsDisplayed(CommonMyWealthObjects.myWealthTab(wealthType)));
  }

  async selectMyWealthTab(wealthType) {
    await Utils.clickElement(CommonMyWealthObjects.myWealthTab(wealthType));
  }

  async myWealthInvestmentsPageIsDisplayed() {
    return (await Utils.elementIsDisplayed(CommonMyWealthObjects.myWealthInvestmentType('Mutual Funds'))) &&
      (await Utils.elementIsDisplayed(CommonMyWealthObjects.myWealthInvestmentType('Stocks')));
  }

  async myWealthInsurancePageIsDisplayed() {
    return (await Utils.elementIsDisplayed(CommonMyWealthObjects.myWealthInsuranceType('Life Insurance'))) &&
      (await Utils.elementIsDisplayed(CommonMyWealthObjects.myWealthInsuranceType('PF Linked Free Insurance'))) &&
      (await Utils.elementIsDisplayed(CommonMyWealthObjects.myWealthInsuranceType('Other Insurance')));
  }

  async validateNavigateToMyWealthTab(wealthType) {
    switch(wealthType.toString()) {
      case Constants.MY_WEALTH_INVESTMENTS:
        return (await this.myWealthInvestmentsPageIsDisplayed());
      case Constants.MY_WEALTH_INSURANCE:
        return (await this.myWealthInsurancePageIsDisplayed());
      default:
        await console.log(`Unsupported wealthType type -> ${ wealthType.toString()}`);
        return false;
    }
  }

  async selectMyWealthInvestmentType(investmentType) {
    if (Device.isWeb()) {
      await Utils.scrollAndMoveToElement(CommonMyWealthObjects.myWealthInvestmentType(investmentType));
    }
    await Utils.clickElement(CommonMyWealthObjects.myWealthInvestmentType(investmentType));
  }

  async myWealthInvestmentGovtSchemePageIsDisplayed() {
    return (await Utils.elementIsDisplayed(CommonMyWealthObjects.myWealthInvestmentGovtSchemesHeader));
  }

  async myWealthInvestmentRealEstatePageIsDisplayed() {
    return (await Utils.elementIsDisplayed(CommonMyWealthObjects.myWealthInvestmentRealEstateHeader));
  }

  async validateNavigateToMyWealthInvestmentTypePage(investmentType) {
    switch(investmentType.toString()) {
      case Constants.MY_WEALTH_INVESTMENTS_GOVT_SCHEMES:
        return (await this.myWealthInvestmentGovtSchemePageIsDisplayed());
      case Constants.MY_WEALTH_INVESTMENTS_REAL_ESTATE:
        return (await this.myWealthInvestmentRealEstatePageIsDisplayed());
      case Constants.MY_WEALTH_INVESTMENTS_FIXED_DEPOSITS:
        return (await CommonPage.fixedDepositPageIsDisplayed());
      default:
        await console.log(`Unsupported investmentType type -> ${ investmentType.toString()}`);
        return false;
    }
  }

  async wealthUpdateSuccessMessageIsDisplayed(wealthType) {
    return (await Utils.elementIsDisplayed(CommonMyWealthObjects.wealthUpdateSuccessMessage(wealthType)));
  }
}

module.exports = new CommonMyWealthPage();
