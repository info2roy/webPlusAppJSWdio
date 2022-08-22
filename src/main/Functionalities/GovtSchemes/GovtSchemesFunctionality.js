const CommonPage = require('../../Pages/Common/CommonPage');
const GovtSchemesPage = require('../../Pages/GovtSchemes/GovtSchemesPage');

class GovtSchemesFunctionality {
  async addGovtScheme() {
    await GovtSchemesPage.clickAddGovtSchemeButton();
    return (await GovtSchemesPage.addGovtSchemePageHeaderIsDisplayed());
  }
  async selectFamilyMember(familyMemberName) {
    await CommonPage.clickOnFamilyMemberByName(familyMemberName);
    return (await CommonPage.selectASchemePageHeaderIsDisplayed());
  }
}
module.exports = new GovtSchemesFunctionality();
