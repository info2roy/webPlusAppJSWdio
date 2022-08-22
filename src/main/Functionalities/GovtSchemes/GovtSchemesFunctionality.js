const CommonPage = require('../../Pages/Common/CommonPage');
const GovtSchemesPage = require('../../Pages/GovtSchemes/GovtSchemesPage');

class GovtSchemesFunctionality {
  async addGovtScheme(familyMemberName) {
    if(await GovtSchemesPage.expandMoreButtonIsDisplayed()) {
      await GovtSchemesPage.clickExpandMoreButton();
      await CommonPage.clickOnFamilyMemberByName(familyMemberName);
    }
    await GovtSchemesPage.clickAddGovtSchemeButton();
    return (await GovtSchemesPage.addGovtSchemePageHeaderIsDisplayed());
  }

  async selectFamilyMember(familyMemberName) {
    if(await CommonPage.selectFamilyMemberPageHeaderIsDisplayed(2000)) {
      await CommonPage.clickOnFamilyMemberByName(familyMemberName);
      return (await CommonPage.selectASchemePageHeaderIsDisplayed());
    }
    return true;
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
}
module.exports = new GovtSchemesFunctionality();
