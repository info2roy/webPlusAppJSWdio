const mfStatementPage = require('../../Pages/MutualFunds/MFStatementPage');

class MFStatementFunctionality {

  async navigateToMFPage(mfOption) {
    await mfStatementPage.navigateToMFStatementPage(mfOption.toString());
    return (await mfStatementPage.validateMFPageLoad(mfOption.toString()));
  }

  async MFPageLaunched() {
    return (await mfStatementPage.MFPageHeaderIsDisplayed());
  }
}

module.exports = new MFStatementFunctionality();
