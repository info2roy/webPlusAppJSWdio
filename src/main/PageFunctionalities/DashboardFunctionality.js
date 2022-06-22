const dashboardPage = require('../Pages/DashboardPage')
const device = require('../../support/libraries/Device');
const dashboardPageObject = require('../PageObjects/DashboardPageObjects');
const Utils = require('../../support/Utils/Utils');
class DashboardPage {

    async validate () {
        expect (await Utils.elementIsDisplayed(dashboardPageObject.helloUser)).toBe.true
    }

    async openProfileDropdown() {
        await dashboardPage.openProfileDropdown();
    } 

    async selectPersonalInformation() {
        await dashboardPage.selectPersonalInformation();
    }

}
module.exports = new DashboardPage();