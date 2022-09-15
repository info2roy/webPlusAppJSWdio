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
    const selectedFirmName = await Utils.getValue(FixedDepositObjects.fdFirmNameField);
    expect(selectedFirmName).to.equal(fdFirmName);
  }

  async getFDFirmName() {
    return await Utils.getValue(FixedDepositObjects.fdFirmNameField);
  }

  async enterFDInvestedAmount(investedAmount) {
    await Utils.setInputField(investedAmount, FixedDepositObjects.fdInvestedAmountField);
  }

  async getFDInvestedAmount() {
    return await Utils.getValue(FixedDepositObjects.fdInvestedAmountField);
  }

  async enterFDInterestRate(interestRate) {
    await Utils.setInputField(interestRate, FixedDepositObjects.fdInterestRateField);
  }

  async getFDInterestRate() {
    return await Utils.getValue(FixedDepositObjects.fdInterestRateField);
  }

  async setFDStartMonth(startMonth) {
    if (Device.isWeb()) {
      await Utils.setDate(1, startMonth, FixedDepositObjects.fdStartMonthField, CommonObjects.currentMonth,
        CommonObjects.previousMonthLink, CommonObjects.nextMonthLink, CommonObjects.dayPicker);
    } else if (Device.isAndroidApp()) {
      await Utils.setMonthAndYearForAndroid(startMonth, FixedDepositObjects.fdStartMonthField,
        CommonObjects.androidMonthPickerMonth, CommonObjects.androidMonthPickerYear,
        CommonObjects.androidMonthPickerDoneButton);
    }
  }

  async getFDStartMonth() {
    return (await Utils.getValue(FixedDepositObjects.fdStartMonthField)).replace(' ', ', ');
  }

  async setFDMaturityMonth(maturityMonth) {
    if (Device.isWeb()) {
      await Utils.setDate(1, maturityMonth, FixedDepositObjects.fdMaturityMonthField, CommonObjects.currentMonth,
        CommonObjects.previousMonthLink, CommonObjects.nextMonthLink, CommonObjects.dayPicker);
    } else if (Device.isAndroidApp()) {
      await Utils.scrollVerticalToEndForAndroid(0, 1);
      await Utils.setMonthAndYearForAndroid(maturityMonth, FixedDepositObjects.fdMaturityMonthField,
        CommonObjects.androidMonthPickerMonth, CommonObjects.androidMonthPickerYear,
        CommonObjects.androidMonthPickerDoneButton);
    }
  }

  async getFDMaturityMonth() {
    return (await Utils.getValue(FixedDepositObjects.fdMaturityMonthField)).replace(' ', ', ');
  }

  async fixedDepositGetStringAttribute(fdAmount, index, attrName) {
    return (await Utils.getText(FixedDepositObjects.fixedDepositDetailsAttribute(fdAmount, index, attrName))).trim();
  }

  async clickOnFixedDepositMoreOptionsButton(fdAmount) {
    await Utils.clickElement(FixedDepositObjects.fixedDepositMoreOptionsButton(fdAmount));
  }
}
module.exports = new FixedDepositPage();
