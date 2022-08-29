const Constants = require('../../../config/data/structured/Constants');
const Utils = require('../../../support/Utils/Utils');
const GovtSchemesObjects = require('../../Objects/GovtSchemes/GovtSchemesObjects');
const { expect } = require('chai');

class GovtSchemesPage {

  async govtSchemesInitialPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(GovtSchemesObjects.govtSchemesInitialPageHeader, 2000));
  }

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
      case Constants.GOVT_SCHEME_NSC:
        await Utils.clickElement(GovtSchemesObjects.govtScheme(schemeName));
        break;
      case Constants.GOVT_SCHEME_NPS_TIER1:
        await Utils.clickElement(GovtSchemesObjects.govtScheme('Tier 1'));
        break;
      case Constants.GOVT_SCHEME_NPS_TIER2:
        await Utils.clickElement(GovtSchemesObjects.govtScheme('Tier 2'));
        break;
      default:
        await console.log(`unsupported Govt Scheme ${schemeName}`);
    }
  }

  async selectGovtSchemeTile(schemeName) {
    switch(schemeName) {
      case Constants.GOVT_SCHEME_EPF:
      case Constants.GOVT_SCHEME_PPF:
      case Constants.GOVT_SCHEME_GPF:
      case Constants.GOVT_SCHEME_SSY:
      case Constants.GOVT_SCHEME_SCSS:
      case Constants.GOVT_SCHEME_NSC:
        await Utils.clickElement(GovtSchemesObjects.govtScheme(schemeName));
        break;
      case Constants.GOVT_SCHEME_NPS_TIER1:
        await this.clickNPSSchemeTile('Tier 1');
        break;
      case Constants.GOVT_SCHEME_NPS_TIER2:
        await this.clickNPSSchemeTile('Tier 2');
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
      case Constants.GOVT_SCHEME_NPS_TIER1:
      case Constants.GOVT_SCHEME_NPS_TIER2:
        return (await Utils.elementIsDisplayed(GovtSchemesObjects.enterSchemeDetailsHeader));
      case Constants.GOVT_SCHEME_NSC:
        return (await Utils.elementIsDisplayed(GovtSchemesObjects.enterInvestmentDetailsHeader));
      default:
        await console.log(`unsupported Govt Scheme ${schemeName}`);
        return false;
    }
  }

  async validateNavigateToGovtSchemeStatusPage(schemeName) {
    switch(schemeName) {
      case Constants.GOVT_SCHEME_EPF:
      case Constants.GOVT_SCHEME_PPF:
      case Constants.GOVT_SCHEME_GPF:
      case Constants.GOVT_SCHEME_SSY:
      case Constants.GOVT_SCHEME_SCSS:
      case Constants.GOVT_SCHEME_NPS_TIER1:
      case Constants.GOVT_SCHEME_NPS_TIER2:
        return (await Utils.elementIsDisplayed(GovtSchemesObjects.currentValueHeader));
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

  async amountUpdateSuccessMessageIsDisplayed(schemeName) {
    return (await Utils.elementIsDisplayed(GovtSchemesObjects.amountUpdateSuccessMessage(schemeName)));
  }

  async getTotalInvestedAmount() {
    return Utils.numberAbbriviationToAbsoluteValue(await Utils.getText(GovtSchemesObjects.totalInvestedAmount));
  }

  async getTotalInvestedAmountStr() {
    return await Utils.getText(GovtSchemesObjects.totalInvestedAmount);
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
    }
    return [0, 0];

  }

  async totalAmountForSchemeAbsoluteIsDisplayed(schemeName) {
    return (await Utils.elementIsDisplayed(GovtSchemesObjects.totalAbsoluteAmountForScheme(schemeName), 2000));
  }

  async getSchemeAbsoluteAmount(schemeName) {
    if(await this.totalAmountForSchemeAbsoluteIsDisplayed(schemeName)) {
      const value = await Utils.getText(GovtSchemesObjects.totalAbsoluteAmountForScheme(schemeName));
      return Utils.numberAbbriviationToAbsoluteValue(value.trim());
    }
    return 0;

  }

  async getNPSAbsoluteAmountStr(npsTier) {
    const index = await Utils.findMatchingElementIndexWithGivenText(GovtSchemesObjects.npsSchemeTile, `NPS | ${npsTier}`);
    console.log(`index = ${index}`);
    if(index >= 0) {
      return await Utils.getText(GovtSchemesObjects.totalAbsoluteAmountForNPSScheme(index));
    }
    return '';

  }

  async getNPSAbsoluteAmount(npsTier) {
    const index = await Utils.findMatchingElementIndexWithGivenText(GovtSchemesObjects.npsSchemeTile, `NPS | ${npsTier}`);
    console.log(`index = ${index}`);
    if(index >= 0) {
      const value = await Utils.getText(GovtSchemesObjects.totalAbsoluteAmountForNPSScheme(index));
      return Utils.numberAbbriviationToAbsoluteValue(value.trim());
    }
    return 0;

  }

  async clickNPSSchemeTile(npsTier) {
    const element = await Utils.findMatchingElementWithGivenText(GovtSchemesObjects.npsSchemeTile, `NPS | ${npsTier}`);
    if (element != undefined) {
      await Utils.clickWebElement(element);
    }
  }

  async clickDeleteSchemeButton() {
    await Utils.clickElement(GovtSchemesObjects.deleteSchemeButton);
  }

  async govtSchemeDeleteMessageIsDisplayed() {
    return (await Utils.elementIsDisplayed(GovtSchemesObjects.govtSchemeDeleteMessage));
  }

  async setNPSFundName(npsFundName) {
    await Utils.clickElement(GovtSchemesObjects.npsFundNameField);
    await Utils.clickElement(GovtSchemesObjects.npsFundNameOption(npsFundName));
    const selectedFundName = await Utils.getValue(GovtSchemesObjects.npsFundNameField);
    expect(selectedFundName).to.equal(npsFundName);
  }

  async setNPSEquityAmount(npsEquityAmount) {
    await Utils.setInputField(npsEquityAmount, GovtSchemesObjects.npsEquityAmountField);
  }

  async setNPSGovtSecurityAmount(npsGovtSecurityAmount) {
    await Utils.setInputField(npsGovtSecurityAmount, GovtSchemesObjects.npsGovtSecurityAmountField);
  }

  async setNPSCorpDebtAmount(npsCorpDebtAmount) {
    await Utils.setInputField(npsCorpDebtAmount, GovtSchemesObjects.npsCorpDebtAmountField);
  }

  async setNPSAltInvestmentFunds(npsAltInvestmentFundsAmount) {
    await Utils.setInputField(npsAltInvestmentFundsAmount, GovtSchemesObjects.npsAltInvestmentFundsAmountField);
  }

  async npsSchemeGetStringAttribute(attrName) {
    return (await Utils.getText(GovtSchemesObjects.npsSchemeDetailsAttribute(attrName)));
  }

  async npsSchemeGetNumericAttribute(attrName) {
    return parseFloat((await Utils.getText(GovtSchemesObjects.npsSchemeDetailsAttribute(attrName))).replace(/,/g, ''));
  }

  async setNSCInvestedAmount(nscInvestedAmount) {
    await Utils.setInputField(nscInvestedAmount, GovtSchemesObjects.nscInvestedAmountField);
  }

  async setNSCInterestPercent(nscInterestPercent) {
    await Utils.setInputField(nscInterestPercent, GovtSchemesObjects.nscInterestPercentField);
  }

  async setNSCStartMonth(startMonth) {
    await Utils.setMonthAndYear(startMonth, GovtSchemesObjects.nscStartDateField, GovtSchemesObjects.nscPickedYear,
      GovtSchemesObjects.previousYearButton, GovtSchemesObjects.nextYearButton, GovtSchemesObjects.nscMonthPicker);
  }

  async setNSCMaturityMonth(maturityMonth) {
    await Utils.setMonthAndYear(maturityMonth, GovtSchemesObjects.nscMaturityDateField, GovtSchemesObjects.nscPickedYear,
      GovtSchemesObjects.previousYearButton, GovtSchemesObjects.nextYearButton, GovtSchemesObjects.nscMonthPicker);
  }

  async nscSchemeGetStringAttribute(attrName) {
    return (await Utils.getText(GovtSchemesObjects.nscSchemeDetailsAttribute(attrName)));
  }

  async nscSchemeGetNumericAttribute(attrName) {
    return parseFloat((await Utils.getText(GovtSchemesObjects.nscSchemeDetailsAttribute(attrName))).replace(/,/g, ''));
  }

}
module.exports = new GovtSchemesPage();
