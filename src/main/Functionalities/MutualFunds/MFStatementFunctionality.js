const MfStatementPage = require('../../Pages/MutualFunds/MFStatementPage');

class MFStatementFunctionality {
  async navigateToMFPage(mfOption) {
    await MfStatementPage.navigateToMFStatementPage(mfOption.toString());
    return (await MfStatementPage.validateMFPageLoad(mfOption.toString()));
  }
}

module.exports = new MFStatementFunctionality();
