const Utils = require('../../../support/Utils/Utils');
const CommonObjects = require('../../Objects/Common/CommonObjects');
const FixedDepositObjects = require('../../Objects/FixedDeposit/FixedDepositObjects');
const { expect } = require('chai');
const Device = require('../../../support/libraries/Device');

class FixedDepositPage {

  async clickAddExistingFixedDepositLink() {
    await Utils.clickElement(FixedDepositObjects.addExistingFixedDepositLink);
  }

  async fixedDepositPageHeaderIsDisplayed() {
    if (Device.isAndroidApp()) {
      return (await Utils.elementIsDisplayed(FixedDepositObjects.fixedDepositPageHeader));
    }
    return true;
  }

  async clickAddFixedDepositLink() {
    await Utils.clickElement(FixedDepositObjects.addFixedDepositLink);
  }

  async enterInvestmentDetailsHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(FixedDepositObjects.enterInvestmentDetailsHeader));
  }

  async getTotalInvestedAmount() {
    return Utils.numberAbbriviationToAbsoluteValue(await Utils.getText(FixedDepositObjects.totalInvestedAmount));
  }

  async enterFDFirmName(fdFirmName) {
    await Utils.clickElement(FixedDepositObjects.fdFirmNameField);
    await Utils.clickElement(FixedDepositObjects.fdFirmNameOption(fdFirmName));
    let selectedFirmName = '';
    if (Device.isWeb()) {
      selectedFirmName = await Utils.getValue(FixedDepositObjects.fdFirmNameField);
    } else if (Device.isAndroidApp()) {
      selectedFirmName = await Utils.getText(FixedDepositObjects.fdFirmNameField);
    }
    expect(selectedFirmName).to.equal(fdFirmName);
  }

  async getFDFirmName() {
    if (Device.isWeb()) {
      return await Utils.getValue(FixedDepositObjects.fdFirmNameField);
    } else if (Device.isAndroidApp()) {
      return await Utils.getText(FixedDepositObjects.fdFirmNameField);
    }
    return '';
  }

  async enterFDInvestedAmount(investedAmount) {
    await Utils.setInputField(investedAmount, FixedDepositObjects.fdInvestedAmountField);
  }

  async getFDInvestedAmount() {
    if (Device.isWeb()) {
      return await Utils.getValue(FixedDepositObjects.fdInvestedAmountField);
    } else if (Device.isAndroidApp()) {
      return await Utils.getText(FixedDepositObjects.fdInvestedAmountField);
    }
    return '';
  }

  async enterFDInterestRate(interestRate) {
    await Utils.setInputField(interestRate, FixedDepositObjects.fdInterestRateField);
  }

  async getFDInterestRate() {
    if (Device.isWeb()) {
      return await Utils.getValue(FixedDepositObjects.fdInterestRateField);
    } else if (Device.isAndroidApp()) {
      return await Utils.getText(FixedDepositObjects.fdInterestRateField);
    }
  }

  async setFDStartMonth(startMonth) {
    if (Device.isWeb()) {
      await Utils.setDate(1, startMonth, FixedDepositObjects.fdStartMonthField, CommonObjects.currentMonth,
        CommonObjects.previousMonthLink, CommonObjects.nextMonthLink, CommonObjects.dayPicker);
    } else if (Device.isAndroidApp()) {
      await Utils.setMonthAndYearForAndroid(startMonth, FixedDepositObjects.fdStartMonthField,
        CommonObjects.androidMonthPickerYear,
        CommonObjects.androidMonthPickerDoneButton);
    }
  }

  async getFDStartMonth() {
    if (Device.isWeb()) {
      return (await Utils.getValue(FixedDepositObjects.fdStartMonthField)).replace(' ', ', ');
    } else if (Device.isAndroidApp()) {
      await Utils.scrollVerticalToEndForAndroid(0, 1);
      return (await Utils.getText(FixedDepositObjects.fdStartMonthField)).replace(' ', ', ');
    }
    return '';
  }

  async setFDMaturityMonth(maturityMonth) {
    if (Device.isWeb()) {
      await Utils.setDate(1, maturityMonth, FixedDepositObjects.fdMaturityMonthField, CommonObjects.currentMonth,
        CommonObjects.previousMonthLink, CommonObjects.nextMonthLink, CommonObjects.dayPicker);
    } else if (Device.isAndroidApp()) {
      await Utils.scrollVerticalToEndForAndroid(0, 1);
      await Utils.setMonthAndYearForAndroid(maturityMonth, FixedDepositObjects.fdMaturityMonthField,
        CommonObjects.androidMonthPickerYear,
        CommonObjects.androidMonthPickerDoneButton);
    }
  }

  async getFDMaturityMonth() {
    if (Device.isWeb()) {
      return (await Utils.getValue(FixedDepositObjects.fdMaturityMonthField)).replace(' ', ', ');
    } else if (Device.isAndroidApp()) {
      return (await Utils.getText(FixedDepositObjects.fdMaturityMonthField)).replace(' ', ', ');
    }
    return '';
  }

  async fixedDepositGetStringAttribute(fdAmount, index, attrName) {
    return (await Utils.getText(FixedDepositObjects.fixedDepositDetailsAttribute(fdAmount, index, attrName))).trim();
  }

  async clickOnFixedDepositMoreOptionsButton(fdAmount) {
    await Utils.clickElement(FixedDepositObjects.fixedDepositMoreOptionsButton(fdAmount));
  }
}
module.exports = new FixedDepositPage();
