const Utils = require('../../../support/Utils/Utils');
const CommonMyWealthObjects = require('../../Objects/Common/CommonMyWealthObjects');
const CommonObjects = require('../../Objects/Common/CommonObjects');
const FixedDepositObjects = require('../../Objects/FixedDeposit/FixedDepositObjects');

class FixedDepositPage {

  async clickAddExistingFixedDepositLink() {
    await Utils.clickElement(FixedDepositObjects.addExistingFixedDepositLink);
  }

  async clickAddFixedDepositLink() {
    await Utils.clickElement(FixedDepositObjects.addFixedDepositLink);
  }

  async enterInvestmentDetailsHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(FixedDepositObjects.enterInvestmentDetailsHeader));
  }

  async getTotalInvestedAmount() {
    return Utils.numberAbbriviationToAbsoluteValue(await Utils.getText(CommonMyWealthObjects.totalInvestedAmount));
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
    await Utils.setMonthAndYear(startMonth, FixedDepositObjects.fdStartMonthField, CommonObjects.pickedYear,
      CommonObjects.previousYearButton, CommonObjects.nextYearButton, CommonObjects.monthPicker);
  }

  async getFDStartMonth() {
    return (await Utils.getValue(FixedDepositObjects.fdStartMonthField)).replace(' ', ', ');
  }

  async setFDMaturityMonth(maturityMonth) {
    await Utils.setMonthAndYear(maturityMonth, FixedDepositObjects.fdMaturityMonth, CommonObjects.pickedYear,
      CommonObjects.previousYearButton, CommonObjects.nextYearButton, CommonObjects.monthPicker);
  }

  async getFDMaturityMonth() {
    return (await Utils.getValue(FixedDepositObjects.fdMaturityMonth)).replace(' ', ', ');
  }

  async fixedDepositGetStringAttribute(fdAmount, index, attrName) {
    return (await Utils.getText(FixedDepositObjects.fixedDepositDetailsAttribute(fdAmount, index, attrName))).trim();
  }

  async clickOnFixedDepositMoreOptionsButton(fdAmount) {
    await Utils.clickElement(FixedDepositObjects.fixedDepositMoreOptionsButton(fdAmount));
  }
}
module.exports = new FixedDepositPage();
