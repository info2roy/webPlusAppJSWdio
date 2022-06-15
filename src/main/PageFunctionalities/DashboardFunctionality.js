const dashboardPage = require('../Pages/DashboardPage')
const device = require('../../support/libraries/Device');
const dashboardPageObject = require('../PageObjects/DashboardPageObjects')
class DashboardPage {

    async validate () {
        if(device.isMobileWeb()){
            let url = await browser.getUrl();
            console.log(`url => ${url}`);
            await expect(url).toContain("dashboard");
            await browser.pause(1000);
        }
        else if(driver.isAndroid){
            console.log("checking android dashboard assertion")
            await browser.pause(3000)
            expect(await dashboardPageObject.helloUser_android).toBeDisplayed()
        }
        
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