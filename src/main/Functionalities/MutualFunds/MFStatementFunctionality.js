const MfStatementPage = require('../../Pages/MutualFunds/MFStatementPage');

class MFStatementFunctionality {

  async navigateToMFPage(mfOption) {
    await MfStatementPage.navigateToMFStatementPage(mfOption.toString());
    return (await MfStatementPage.validateMFPageLoad(mfOption.toString()));
  }

  async MFPageLaunched() {
    return (await MfStatementPage.MFPageHeaderIsDisplayed());
  }
}

module.exports = new MFStatementFunctionality();
