const Utils = require('../../../support/Utils/Utils');
const CommonObjects = require('../../Objects/Common/CommonObjects');
const FixedDepositObjects = require('../../Objects/FixedDeposit/FixedDepositObjects');

class FixedDepositPage {

  async clickAddExistingFixedDepositLink() {
    await Utils.clickElement(FixedDepositObjects.addExistingFixedDepositLink);
  }

  async enterFDFirmName(fdFirmName) {
    await Utils.clickElement(FixedDepositObjects.fdFirmNameField);
    await Utils.clickElement(FixedDepositObjects.fdFirmNameOption(fdFirmName));
    const selectedFirmName = await Utils.getValue(FixedDepositObjects.fdFirmNameField);
    expect(selectedFirmName).to.equal(fdFirmName);
  }

  async enterFDInvestedAmount(investedAmount) {
    await Utils.setInputField(investedAmount, FixedDepositObjects.fdInvestedAmountField);
  }

  async enterFDInterestRate(interestRate) {
    await Utils.setInputField(interestRate, FixedDepositObjects.fdInterestRateField);
  }

  async setFDStartMonth(startMonth) {
    await Utils.setMonthAndYear(startMonth, FixedDepositObjects.fdStartMonthField, CommonObjects.pickedYear,
      CommonObjects.previousYearButton, CommonObjects.nextYearButton, CommonObjects.monthPicker);
  }

  async setFDMaturityMonth(maturityMonth) {
    await Utils.setMonthAndYear(maturityMonth, FixedDepositObjects.fdMaturityMonth, CommonObjects.pickedYear,
      CommonObjects.previousYearButton, CommonObjects.nextYearButton, CommonObjects.monthPicker);
  }
}
module.exports = new FixedDepositPage();
