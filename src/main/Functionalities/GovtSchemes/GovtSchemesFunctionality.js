const CommonPage = require('../../Pages/Common/CommonPage');
const GovtSchemesPage = require('../../Pages/GovtSchemes/GovtSchemesPage');

class GovtSchemesFunctionality {
  async addGovtScheme() {
    await GovtSchemesPage.clickAddGovtSchemeButton();
    return (await GovtSchemesPage.addGovtSchemePageHeaderIsDisplayed());
  }

  async selectFamilyMember(familyMemberName) {
    if(await CommonPage.expandMoreButtonIsDisplayed()) {
      await CommonPage.clickExpandMoreButton();
      await CommonPage.clickOnFamilyMemberByName(familyMemberName);
      return (await GovtSchemesPage.investedAmountHeaderIsDisplayed());
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

  async setAmountForGovtScheme(amount, schemename) {
    await GovtSchemesPage.setAmount(amount);
    await GovtSchemesPage.saveOrUpdateAmount();
    return (await GovtSchemesPage.amountUpdateSuccessMessageIsDisplayed(schemename));
  }

  async getTotalInvestedAmount() {
    return (await GovtSchemesPage.getTotalInvestedAmount());
  }

  async getSchemePercentAndAmount(schemeName) {
    return (await GovtSchemesPage.getSchemePercentAndAmount(schemeName));
  }
}
module.exports = new GovtSchemesFunctionality();
