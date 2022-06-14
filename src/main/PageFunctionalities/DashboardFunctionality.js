const dashboardPage = require('../Pages/DashboardPage')

class DashboardPage {

    async validate () {
        let url = await browser.getUrl();
        console.log(`url => ${url}`);
        await expect(url).toContain("dashboard");
        await browser.pause(1000);
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