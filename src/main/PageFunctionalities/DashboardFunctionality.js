const dashboardPage = require('../Pages/DashboardPage')
const device = require('../../support/libraries/Device');
const dashboardPageObject = require('../PageObjects/DashboardPageObjects')
class DashboardPage {

    async validate () {
        expect(await dashboardPageObject.helloUser).toBeDisplayed();
    }

    async openProfileDropdown() {
        await dashboardPage.openProfileDropdown();
    } 

    async selectPersonalInformation() {
        await dashboardPage.selectPersonalInformation();
    }

}
module.exports = new DashboardPage();