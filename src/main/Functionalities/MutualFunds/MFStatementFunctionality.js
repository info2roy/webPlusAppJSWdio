const mfStatementPage = require('../../Pages/MutualFunds/MFStatementPage');

class MFStatementFunctionality {

  async navigateToMFPage(mfOpion) {
    await mfStatementPage.navigateToMFStatementPage(mfOpion.toString());
    return (await mfStatementPage.validateMFPageLoad(mfOpion.toString()));
  }

  async MFPageLaunched() {
    return (await mfStatementPage.MFPageHeaderIsDisplayed());
  }
}

module.exports = new MFStatementFunctionality();
