const dashboardPage = require('../Pages/DashboardPage')
const device = require('../../support/libraries/Device');
const dashboardPageObject = require('../PageObjects/DashboardPageObjects')
class DashboardPage {

    async validate () {
        expect(await dashboardPageObject.helloUser).toBeDisplayed();
    }

    async openProfileDropdown() {
        await dashboardPage.openProfileDropdown();
        await browser.pause(2000);
    } 

    async selectPersonalInformation() {
        await dashboardPage.selectPersonalInformation();
        await browser.pause(2000);
    }

}
module.exports = new DashboardPage();