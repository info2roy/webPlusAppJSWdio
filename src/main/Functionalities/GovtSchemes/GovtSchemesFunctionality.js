const GovtSchemesPage = require('../../Pages/GovtSchemes/GovtSchemesPage');
const { expect } = require('chai');
const Constants = require('../../../config/data/structured/Constants');
const Utils = require('../../../support/Utils/Utils');
const CommonFunctionality = require('../Common/CommonFunctionality');
const GovtSchemesObjects = require('../../Objects/GovtSchemes/GovtSchemesObjects');
const CommonObjects = require('../../Objects/Common/CommonObjects');
const CommonPage = require('../../Pages/Common/CommonPage');

class GovtSchemesFunctionality {

  async govtSchemesInitialPageLaunched() {
    return (await GovtSchemesPage.govtSchemesInitialPageHeaderIsDisplayed());
  }

  async addGovtScheme() {
    await GovtSchemesPage.clickAddGovtSchemeButton();
    return (await GovtSchemesPage.addGovtSchemePageHeaderIsDisplayed());
  }

  async selectFamilyMember(familyMemberName) {
    return await CommonFunctionality.selectFamilyMember(familyMemberName,
      CommonObjects.selectASchemePageHeader);
  }

  async selectFamilyMemberViaExpandMore(familyMemberName) {
    return await CommonFunctionality.selectFamilyMemberViaExpandMore(familyMemberName,
      GovtSchemesObjects.investedAmountHeader);
  }

  async selectGovtScheme(schemeName) {
    await GovtSchemesPage.selectGovtScheme(schemeName);
    return (await GovtSchemesPage.validateNavigateToGovtSchemePage(schemeName));
  }

  async selectGovtSchemeTile(schemeName) {
    await GovtSchemesPage.selectGovtSchemeTile(schemeName);
    return (await GovtSchemesPage.validateNavigateToGovtSchemeStatusPage(schemeName));
  }

  async deleteGovtScheme() {
    await GovtSchemesPage.clickDeleteSchemeButton();
    return (await GovtSchemesPage.govtSchemeDeleteMessageIsDisplayed());
  }

  async setAmountForGovtScheme(amount, schemeName) {
    await GovtSchemesPage.setAmount(amount, schemeName);
    await CommonPage.clickSaveOrUpdateButton();
    return (await GovtSchemesPage.amountUpdateSuccessMessageIsDisplayed(schemeName));
  }

  async getTotalInvestedAmount() {
    return (await GovtSchemesPage.getTotalInvestedAmount());
  }

  async getTotalInvestedAmountStr() {
    return (await GovtSchemesPage.getTotalInvestedAmountStr());
  }

  async getSchemePercentAndAmount(schemeName) {
    return (await GovtSchemesPage.getSchemePercentAndAmountPieChart(schemeName));
  }

  async getSchemeAbsoluteAmount(schemeName) {
    return (await GovtSchemesPage.getSchemeAbsoluteAmount(schemeName));
  }

  async getNPSAbsoluteAmount(npsTier) {
    return (await GovtSchemesPage.getNPSAbsoluteAmount(npsTier));
  }

  async getNPSAbsoluteAmountStr(npsTier) {
    return (await GovtSchemesPage.getNPSAbsoluteAmountStr(npsTier));
  }

  getNPSTier(schemeName) {
    if (schemeName === Constants.GOVT_SCHEME_NPS_TIER1) {
      return 'Tier 1';
    } else if (schemeName === Constants.GOVT_SCHEME_NPS_TIER2) {
      return 'Tier 2';
    }
    throw `Unknown NPS scheme ${schemeName}`;

  }

  async doGovtSchemeValidations(schemeName, familyMemberName, currentAmount, previousInvestedTotalAmount, previousInvestedTotalAmountForSingleGovtScheme, previousInvestedTotalAmountForSingleGovtSchemeOnPieChart) {
    const newInvestedTotalAmount = await CommonMyWealthFunctionality.getTotalInvestedAmount();
    // const newSingleGovtSchemePercentAndAmount = await this.getSchemePercentAndAmount(schemeName);
    let newSingleGovtSchemeAbsoluteAmount = 0;
    if ([Constants.GOVT_SCHEME_NPS_TIER1, Constants.GOVT_SCHEME_NPS_TIER2].includes(schemeName)) {
      newSingleGovtSchemeAbsoluteAmount = await this.getNPSAbsoluteAmount(this.getNPSTier(schemeName));
    } else {
      newSingleGovtSchemeAbsoluteAmount = await this.getSchemeAbsoluteAmount(schemeName);
    }
    const incrementInTotalAmount = newInvestedTotalAmount - previousInvestedTotalAmount;
    const currentAmountApprox = Utils.numberAbbriviationToAbsoluteValue(Utils.absoluteValueToNumberAbbriviation(currentAmount));
    const expectedIncrementInTotalAmount = currentAmountApprox - previousInvestedTotalAmountForSingleGovtScheme;
    console.log(`MYWEALTH ${schemeName} ${familyMemberName} newInvestedTotalAmount ${newInvestedTotalAmount} currentAmount ${currentAmount} currentAmountApprox ${currentAmountApprox}`);
    console.log(`MYWEALTH ${schemeName} ${familyMemberName} newSingleGovtSchemeAbsoluteAmount ${newSingleGovtSchemeAbsoluteAmount}`);
    console.log(`MYWEALTH ${schemeName} ${familyMemberName} incrementInTotalAmount ${incrementInTotalAmount} expectedIncrementInTotalAmount ${expectedIncrementInTotalAmount}`);
    expect(incrementInTotalAmount).to.equal(expectedIncrementInTotalAmount);

    //The Pie chart shows the total amount only for SCSS, GPF and EPF. Rest are clubbed under 'Others'
    //Commenting Pie Chart Validations
    // if ([Constants.GOVT_SCHEME_EPF, Constants.GOVT_SCHEME_GPF, Constants.GOVT_SCHEME_SCSS].includes(schemeName)) {
    //   const incrementInSchemeWiseTotalAmountPieChart = newSingleGovtSchemePercentAndAmount[1] - previousInvestedTotalAmountForSingleGovtSchemeOnPieChart;
    //   console.log(`MYWEALTH ${schemeName} ${familyMemberName} incrementInSchemeWiseTotalAmountPieChart ${incrementInSchemeWiseTotalAmountPieChart}`);
    //   expect(incrementInSchemeWiseTotalAmountPieChart).to.equal(expectedIncrementInTotalAmount);
    // }
    if(familyMemberName !== 'All family members') {
      const incrementInSchemeWiseTotalAmountAbsolute = newSingleGovtSchemeAbsoluteAmount - previousInvestedTotalAmountForSingleGovtScheme;
      console.log(`MYWEALTH ${schemeName} ${familyMemberName} incrementInSchemeWiseTotalAmountAbsolute ${incrementInSchemeWiseTotalAmountAbsolute}`);
      expect(incrementInSchemeWiseTotalAmountAbsolute).to.equal(expectedIncrementInTotalAmount);
    }
  }

  async fillNPSForm(npsFundName, npsEquityAmount, npsGovtSecurityAmount, npsCorpDebtAmount, npsAltInvestmentFundsAmount, npsType) {
    await GovtSchemesPage.setNPSFundName(npsFundName);
    await GovtSchemesPage.setNPSEquityAmount(npsEquityAmount);
    await GovtSchemesPage.setNPSGovtSecurityAmount(npsGovtSecurityAmount);
    await GovtSchemesPage.setNPSCorpDebtAmount(npsCorpDebtAmount);
    await GovtSchemesPage.setNPSAltInvestmentFunds(npsAltInvestmentFundsAmount);
    await CommonPage.clickSaveOrUpdateButton();
    return (await GovtSchemesPage.amountUpdateSuccessMessageIsDisplayed(npsType));
  }

  async validateNPSSchemeDetails(npsFundName, npsEquityAmount, npsGovtSecurityAmount, npsCorpDebtAmount, npsAltInvestmentFundsAmount, npsType) {
    expect(await GovtSchemesPage.npsSchemeGetStringAttribute(Constants.NPS_SCHEME_ATTR_TYPE)).to.equal(this.getNPSTier(npsType));
    expect(await GovtSchemesPage.npsSchemeGetStringAttribute(Constants.NPS_SCHEME_ATTR_FUNDNAME)).to.equal(npsFundName);
    expect(await GovtSchemesPage.npsSchemeGetNumericAttribute(Constants.NPS_SCHEME_ATTR_E)).to.equal(npsEquityAmount);
    expect(await GovtSchemesPage.npsSchemeGetNumericAttribute(Constants.NPS_SCHEME_ATTR_G)).to.equal(npsGovtSecurityAmount);
    expect(await GovtSchemesPage.npsSchemeGetNumericAttribute(Constants.NPS_SCHEME_ATTR_C)).to.equal(npsCorpDebtAmount);
    expect(await GovtSchemesPage.npsSchemeGetNumericAttribute(Constants.NPS_SCHEME_ATTR_A)).to.equal(npsAltInvestmentFundsAmount);
  }

  async fillNSCForm(nscInvestedAmount, nscInterestPercent, nscStartMonth, nscMaturityMonth, schemeName) {
    await GovtSchemesPage.setNSCInvestedAmount(nscInvestedAmount);
    await GovtSchemesPage.setNSCInterestPercent(nscInterestPercent);
    await GovtSchemesPage.setNSCStartMonth(nscStartMonth);
    await GovtSchemesPage.setNSCMaturityMonth(nscMaturityMonth);
    await CommonPage.clickSaveOrUpdateButton();
    return (await GovtSchemesPage.amountUpdateSuccessMessageIsDisplayed(schemeName));
  }

  async validateNSCSchemeDetails(nscInvestedAmount, nscInterestPercent, nscStartMonth, nscMaturityMonth) {
    expect(await GovtSchemesPage.nscSchemeGetNumericAttribute(Constants.NSC_SCHEME_ATTR_INTEREST)).to.equal(nscInterestPercent);
    expect(await GovtSchemesPage.nscSchemeGetStringAttribute(Constants.NSC_SCHEME_ATTR_START_MONTH)).to.equal(nscStartMonth);
    expect(await GovtSchemesPage.nscSchemeGetStringAttribute(Constants.NSC_SCHEME_ATTR_MATURITY_MONTH)).to.equal(nscMaturityMonth);
  }
}
module.exports = new GovtSchemesFunctionality();
