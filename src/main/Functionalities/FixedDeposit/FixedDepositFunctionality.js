const FixedDepositPage = require('../../Pages/FixedDeposit/FixedDepositPage');
const CommonPage = require('../../Pages/Common/CommonPage');
const CommonMyWealthPage = require('../../Pages/Common/CommonMyWealthPage');
const CommonFunctionality = require('../Common/CommonFunctionality');

class FixedDepositFunctionality {

  async fixedDepositInitialPageLaunched() {
    return (await FixedDepositPage.govtSchemesInitialPageHeaderIsDisplayed());
  }

  async addExistingFixedDepositInitialState() {
    await FixedDepositPage.clickAddExistingFixedDepositLink();
    return (await CommonPage.selectFamilyMemberPageHeaderIsDisplayed());
  }

  async selectFamilyMember(familyMemberName) {
    return await CommonFunctionality.selectFamilyMember(familyMemberName,
      RealEstateObjects.estimatedCurrentValueHeader, RealEstateObjects.addRealEstatePageHeader);
  }

  async fillAddFDForm(fdFirmName, fdInvestedAmount, fdInterestRate, fdStartMonth, fdMaturityMonth) {
    await FixedDepositPage.enterFDFirmName(fdFirmName);
    await FixedDepositPage.enterFDInvestedAmount(fdInvestedAmount);
    await FixedDepositPage.enterFDInterestRate(fdInterestRate);
    await FixedDepositPage.setFDStartMonth(fdStartMonth);
    await FixedDepositPage.setFDMaturityMonth(fdMaturityMonth);
    await CommonPage.clickSaveOrUpdateButton();
    return (await CommonMyWealthPage.wealthUpdateSuccessMessageIsDisplayed('Fixed deposit'));
  }
}
module.exports = new FixedDepositFunctionality();
