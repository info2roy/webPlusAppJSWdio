const FixedDepositPage = require('../../Pages/FixedDeposit/FixedDepositPage');
const CommonPage = require('../../Pages/Common/CommonPage');
const CommonMyWealthPage = require('../../Pages/Common/CommonMyWealthPage');
const CommonFunctionality = require('../Common/CommonFunctionality');
const FixedDepositObjects = require('../../Objects/FixedDeposit/FixedDepositObjects');
const Constants = require('../../../config/data/structured/Constants');
const { expect } = require('chai');

class FixedDepositFunctionality {

  //corresponds to state when no existing fixed deposit is added
  async addExistingFixedDepositInitialState() {
    await FixedDepositPage.clickAddExistingFixedDepositLink();
    return (await CommonPage.selectFamilyMemberPageHeaderIsDisplayed());
  }

  //corresponds to state when at least one existing fixed deposit is added
  async addExistingFixedDepositInitializedState() {
    await FixedDepositPage.clickAddFixedDepositLink();
    await FixedDepositPage.clickAddExistingFixedDepositLink();
    return (await FixedDepositPage.enterInvestmentDetailsHeaderIsDisplayed());
  }

  async selectFamilyMember(familyMemberName) {
    return await CommonFunctionality.selectFamilyMember(familyMemberName,
      FixedDepositObjects.enterInvestmentDetailsHeader);
  }

  async selectFamilyMemberViaExpandMore(familyMemberName) {
    return await CommonFunctionality.selectFamilyMemberViaExpandMore(familyMemberName,
      FixedDepositObjects.enterInvestmentDetailsHeader);
  }

  async getTotalInvestedAmount() {
    return (await FixedDepositPage.getTotalInvestedAmount());
  }

  async fillAddFDForm(wealthType, fdFirmName, fdInvestedAmount, fdInterestRate, fdStartMonth, fdMaturityMonth) {
    await FixedDepositPage.enterFDFirmName(fdFirmName);
    await FixedDepositPage.enterFDInvestedAmount(fdInvestedAmount);
    await FixedDepositPage.enterFDInterestRate(fdInterestRate);
    await FixedDepositPage.setFDStartMonth(fdStartMonth);
    await FixedDepositPage.setFDMaturityMonth(fdMaturityMonth);
    await CommonPage.clickSaveOrUpdateButton();
    return (await CommonMyWealthPage.wealthUpdateSuccessMessageIsDisplayed(wealthType));
  }

  async validateFixedDepositDetails(fdFirmName, fdInvestedAmount, fdInterestRate, fdStartMonth, fdMaturityMonth,
    prevTotalInvestedAmount) {
    expect(await FixedDepositPage.getTotalInvestedAmount() - prevTotalInvestedAmount).to.equal(fdInvestedAmount);
    expect(await FixedDepositPage.fixedDepositGetStringAttribute(fdInvestedAmount, 1, Constants.FIXED_DEPOSIT_ATTR_INTEREST)
    ).to.equal(`${fdInterestRate}%`);
    expect(await FixedDepositPage.fixedDepositGetStringAttribute(fdInvestedAmount, 2, Constants.FIXED_DEPOSIT_ATTR_START_MONTH)
    ).to.equal(fdStartMonth);
    expect(await FixedDepositPage.fixedDepositGetStringAttribute(fdInvestedAmount, 3, Constants.FIXED_DEPOSIT_ATTR_MATURITY_MONTH)
    ).to.equal(fdMaturityMonth);
    await FixedDepositPage.clickOnFixedDepositMoreOptionsButton(fdInvestedAmount);
    await CommonPage.clickEditDetailsLink();
    expect(await FixedDepositPage.getFDFirmName()).to.equal(fdFirmName);
    expect(await FixedDepositPage.getFDInvestedAmount()).to.equal(fdInvestedAmount.toLocaleString('hi'));
    expect(await FixedDepositPage.getFDInterestRate()).to.equal(fdInterestRate);
    expect(await FixedDepositPage.getFDStartMonth()).to.equal(fdStartMonth);
    expect(await FixedDepositPage.getFDMaturityMonth()).to.equal(fdMaturityMonth);
    await CommonPage.clickSaveOrUpdateButton();
  }

  async editFixedDeposit(wealthType, fdInvestedAmount, fdNewInvestedAmount, fdInterestRate, fdStartMonth, fdMaturityMonth) {
    await FixedDepositPage.clickOnFixedDepositMoreOptionsButton(fdInvestedAmount);
    await CommonPage.clickEditDetailsLink();
    await FixedDepositPage.enterFDInvestedAmount(fdNewInvestedAmount);
    await FixedDepositPage.enterFDInterestRate(fdInterestRate);
    await FixedDepositPage.setFDStartMonth(fdStartMonth);
    await FixedDepositPage.setFDMaturityMonth(fdMaturityMonth);
    await CommonPage.clickSaveOrUpdateButton();
    return (await CommonMyWealthPage.wealthUpdateSuccessMessageIsDisplayed(wealthType));
  }

  async deleteFixedDeposit(fdInvestedAmount) {
    await FixedDepositPage.clickOnFixedDepositMoreOptionsButton(fdInvestedAmount);
    await CommonPage.clickDeleteLink();
    return true;
    //return (await CommonMyWealthPage.wealthDeleteSuccessMessageIsDisplayed('Fixed deposit'));
  }
}
module.exports = new FixedDepositFunctionality();
