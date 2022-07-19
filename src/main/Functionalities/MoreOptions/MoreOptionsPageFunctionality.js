class MoreOptionsPageFunctionality {

  async selectPersonalInformation() {
    await DashboardPage.selectPersonalInformation();
  }

  async selectAccountFamilyInformation() {
    await DashboardPage.selectAccountFamilyInformation();
  }
}
module.exports = new MoreOptionsPageFunctionality();
