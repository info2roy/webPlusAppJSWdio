const CommonPage = require('../../Pages/Common/CommonPage');
const GovtSchemesPage = require('../../Pages/GovtSchemes/GovtSchemesPage');
const { expect } = require('chai');

class GovtSchemesFunctionality {

  async govtSchemesInitialPageLaunched() {
    return (await GovtSchemesPage.govtSchemesInitialPageHeaderIsDisplayed());
  }

  async addGovtScheme() {
    await GovtSchemesPage.clickAddGovtSchemeButton();
    return (await GovtSchemesPage.addGovtSchemePageHeaderIsDisplayed());
  }

  async selectFamilyMember(familyMemberName) {
    if(await CommonPage.expandMoreButtonIsDisplayed(2000)) {
      await CommonPage.clickExpandMoreButton();
      if (await CommonPage.familyMemberNameIsDisplayed(familyMemberName, 2000)) {
        await CommonPage.clickOnFamilyMemberByName(familyMemberName);
        return (await GovtSchemesPage.investedAmountHeaderIsDisplayed());
      }
      return false;
    } else if(await CommonPage.selectFamilyMemberPageHeaderIsDisplayed(2000)) {
      await CommonPage.clickOnFamilyMemberByName(familyMemberName);
      return (await CommonPage.selectASchemePageHeaderIsDisplayed());
    }
    return false;
  }

  async selectGovtScheme(schemeName) {
    await GovtSchemesPage.selectGovtScheme(schemeName);
    return (await GovtSchemesPage.validateNavigateToGovtSchemePage(schemeName));
  }

  async selectGovtSchemeTile(schemeName) {
    await GovtSchemesPage.selectGovtScheme(schemeName);
    return (await GovtSchemesPage.validateNavigateToGovtSchemeStatusPage(schemeName));
  }

  async deleteGovtScheme() {
    await GovtSchemesPage.clickDeleteSchemeButton();
    return (await GovtSchemesPage.govtSchemeDeleteMessageIsDisplayed());
  }

  async setAmountForGovtScheme(amount, schemeName) {
    await GovtSchemesPage.setAmount(amount, schemeName);
    await GovtSchemesPage.saveOrUpdateAmount();
    return (await GovtSchemesPage.amountUpdateSuccessMessageIsDisplayed(schemeName));
  }

  async getTotalInvestedAmount() {
    return (await GovtSchemesPage.getTotalInvestedAmount());
  }

  async getSchemePercentAndAmount(schemeName) {
    return (await GovtSchemesPage.getSchemePercentAndAmountPieChart(schemeName));
  }

  async getSchemeAbsoluteAmount(schemeName) {
    return (await GovtSchemesPage.getSchemeAbsoluteAmount(schemeName));
  }

  async doGovtSchemeValidations(schemeName, familyMemberName, currentAmount, previousInvestedTotalAmount, previousInvestedTotalAmountForSingleGovtScheme, previousInvestedTotalAmountForSingleGovtSchemeOnPieChart) {
    const newInvestedTotalAmount = await this.getTotalInvestedAmount();
    const newSingleGovtSchemePercentAndAmount = await this.getSchemePercentAndAmount(schemeName);
    const newSingleGovtSchemeAbsoluteAmount = await this.getSchemeAbsoluteAmount(schemeName);
    const incrementInTotalAmount = newInvestedTotalAmount - previousInvestedTotalAmount;
    const expectedIncrementInTotalAmount = currentAmount - previousInvestedTotalAmountForSingleGovtScheme;
    console.log(`MYWEALTH ${schemeName} ${familyMemberName} newInvestedTotalAmount ${newInvestedTotalAmount} newSingleGovtSchemePercentAndAmount ${newSingleGovtSchemePercentAndAmount}`);
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
    await GovtSchemesPage.saveOrUpdateAmount();
    return (await GovtSchemesPage.amountUpdateSuccessMessageIsDisplayed(npsType));
  }
}
module.exports = new GovtSchemesFunctionality();
