const Constants = require('../../../config/data/structured/Constants');
const Utils = require('../../../support/Utils/Utils');
const GovtSchemesObjects = require('../../Objects/GovtSchemes/GovtSchemesObjects');
const { expect } = require('chai');
const CommonObjects = require('../../Objects/Common/CommonObjects');
const Device = require('../../../support/libraries/Device');

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
        await Utils.clickElement(GovtSchemesObjects.govtScheme(schemeName));
        break;
      case Constants.GOVT_SCHEME_SCSS:
        if (Device.isAndroidApp()) {
          await Utils.scrollVerticalToEndForAndroid(0, 1);
        }
        await Utils.clickElement(GovtSchemesObjects.govtScheme(schemeName));
        break;
      case Constants.GOVT_SCHEME_NSC:
        if (Device.isAndroidApp()) {
          await Utils.scrollVerticalToEndForAndroid(0, 1);
        }
        await Utils.clickElement(GovtSchemesObjects.govtScheme(schemeName));
        break;
      case Constants.GOVT_SCHEME_NPS_TIER1:
        if (Device.isAndroidApp()) {
          await Utils.scrollVerticalToBeginningForAndroid(0, 1);
        }
        await Utils.clickElement(GovtSchemesObjects.govtScheme('Tier 1'));
        break;
      case Constants.GOVT_SCHEME_NPS_TIER2:
        if (Device.isAndroidApp()) {
          await Utils.scrollVerticalToBeginningForAndroid(0, 1);
        }
        await Utils.clickElement(GovtSchemesObjects.govtScheme('Tier 2'));
        break;
      default:
        await console.log(`unsupported Govt Scheme ${schemeName}`);
    }
  }

  async selectGovtSchemeTile(schemeName) {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid(schemeName);
    }
    switch(schemeName) {
      case Constants.GOVT_SCHEME_EPF:
      case Constants.GOVT_SCHEME_PPF:
      case Constants.GOVT_SCHEME_GPF:
      case Constants.GOVT_SCHEME_SSY:
      case Constants.GOVT_SCHEME_SCSS:
        await Utils.clickElement(GovtSchemesObjects.govtScheme(schemeName));
        break;
      case Constants.GOVT_SCHEME_NSC:
        await Utils.scrollVerticalUntilTextIntoViewForAndroid(schemeName);
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
    if (Device.isAndroidApp() && schemeName === Constants.GOVT_SCHEME_EPF) {
      await Utils.scrollVerticalToBeginningForAndroid(0, 1);
    }
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
        if (Device.isAndroidApp()) {
          await Utils.scrollVerticalToBeginningForAndroid(0, 1);
        }
        return (await Utils.elementIsDisplayed(GovtSchemesObjects.currentValueHeader));
      case Constants.GOVT_SCHEME_NSC:
        return (await Utils.elementIsDisplayed(GovtSchemesObjects.investedAmountHeader));
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
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid(schemeName);
    }
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
    let npsTierStr = '';
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid('National Pension Scheme');
      npsTierStr = `NPS   | ${npsTier}`;
    } else {
      npsTierStr = `NPS | ${npsTier}`;
    }
    const index = await Utils.findMatchingElementIndexWithGivenText(GovtSchemesObjects.npsSchemeTile, npsTierStr);
    console.log(`index = ${index}`);
    if(index >= 0) {
      const value = await Utils.getText(GovtSchemesObjects.totalAbsoluteAmountForNPSScheme(index));
      return Utils.numberAbbriviationToAbsoluteValue(value.trim());
    }
    return 0;
  }

  async clickNPSSchemeTile(npsTier) {
    let npsTierStr = '';
    if (Device.isAndroidApp()) {
      npsTierStr = `NPS   | ${npsTier}`;
    } else {
      npsTierStr = `NPS | ${npsTier}`;
    }
    const element = await Utils.findMatchingElementWithGivenText(GovtSchemesObjects.npsSchemeTile, npsTierStr);
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
    let selectedFundName = '';
    if (Device.isWeb()) {
      selectedFundName = await Utils.getValue(GovtSchemesObjects.npsFundNameField);
    } else if (Device.isAndroidApp()) {
      selectedFundName = await Utils.getText(GovtSchemesObjects.npsFundNameField);
    }
    expect(selectedFundName).to.equal(npsFundName);
  }

  async setNPSEquityAmount(npsEquityAmount) {
    await Utils.setInputField(npsEquityAmount, GovtSchemesObjects.npsEquityAmountField);
  }

  async setNPSGovtSecurityAmount(npsGovtSecurityAmount) {
    await Utils.setInputField(npsGovtSecurityAmount, GovtSchemesObjects.npsGovtSecurityAmountField);
  }

  async setNPSCorpDebtAmount(npsCorpDebtAmount) {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalToEndForAndroid(0, 1);
    }
    await Utils.setInputField(npsCorpDebtAmount, GovtSchemesObjects.npsCorpDebtAmountField);
  }

  async setNPSAltInvestmentFunds(npsAltInvestmentFundsAmount) {
    await Utils.setInputField(npsAltInvestmentFundsAmount, GovtSchemesObjects.npsAltInvestmentFundsAmountField);
  }

  async npsSchemeGetStringAttribute(attrName) {
    if (Device.isAndroidApp()) {
      if (attrName.startsWith('Scheme')) {
        await Utils.scrollVerticalUntilTextIntoViewForAndroid(attrName);
      }
    }
    return (await Utils.getText(GovtSchemesObjects.npsSchemeDetailsAttribute(attrName)));
  }

  async npsSchemeGetNumericAttribute(attrName) {
    if (Device.isAndroidApp()) {
      if (attrName.startsWith('Scheme')) {
        await Utils.scrollVerticalUntilTextIntoViewForAndroid(attrName);
      }
    }
    return parseFloat((await Utils.getText(GovtSchemesObjects.npsSchemeDetailsAttribute(attrName))).replace(/,/g, ''));
  }

  async setNSCInvestedAmount(nscInvestedAmount) {
    await Utils.setInputField(nscInvestedAmount, GovtSchemesObjects.nscInvestedAmountField);
  }

  async setNSCInterestPercent(nscInterestPercent) {
    await Utils.setInputField(nscInterestPercent, GovtSchemesObjects.nscInterestPercentField);
  }

  async setNSCStartMonth(startMonth) {
    if (Device.isWeb()) {
      await Utils.setMonthAndYear(startMonth, GovtSchemesObjects.nscStartDateField, CommonObjects.pickedYear,
        CommonObjects.previousYearButton, CommonObjects.nextYearButton, CommonObjects.monthPicker);
    } else if(Device.isAndroidApp()) {
      await Utils.setMonthAndYearForAndroid(startMonth, GovtSchemesObjects.nscStartDateField,
        CommonObjects.androidMonthPickerMonth, CommonObjects.androidMonthPickerYear,
        CommonObjects.androidMonthPickerDoneButton);
    }
  }

  async setNSCMaturityMonth(maturityMonth) {
    if (Device.isWeb()) {
      await Utils.setMonthAndYear(maturityMonth, GovtSchemesObjects.nscMaturityDateField, CommonObjects.pickedYear,
        CommonObjects.previousYearButton, CommonObjects.nextYearButton, CommonObjects.monthPicker);
    } else if(Device.isAndroidApp()) {
      await Utils.setMonthAndYearForAndroid(maturityMonth, GovtSchemesObjects.nscMaturityDateField,
        CommonObjects.androidMonthPickerMonth, CommonObjects.androidMonthPickerYear,
        CommonObjects.androidMonthPickerDoneButton);
    }
  }

  async nscSchemeGetStringAttribute(nscInvestedAmount, index, attrName) {
    return (await Utils.getText(GovtSchemesObjects.nscSchemeDetailsAttribute(nscInvestedAmount, index, attrName)));
  }

  async nscSchemeGetNumericAttribute(nscInvestedAmount, index, attrName) {
    return parseFloat((await Utils.getText(GovtSchemesObjects.nscSchemeDetailsAttribute(nscInvestedAmount, index, attrName))).replace(/,/g, ''));
  }

  async clickNscSchemeMoreOptionsButton(nscInvestedAmount) {
    await Utils.clickElement(GovtSchemesObjects.nscSchemeMoreOptionsButton(nscInvestedAmount));
  }

}
module.exports = new GovtSchemesPage();
