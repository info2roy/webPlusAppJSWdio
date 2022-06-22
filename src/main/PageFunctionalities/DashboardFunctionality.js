const dashboardPage = require('../Pages/DashboardPage')
const device = require('../../support/libraries/Device');
const dashboardPageObject = require('../PageObjects/DashboardPageObjects');
const Utils = require('../../support/Utils/Utils');
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
            expect (await Utils.elementIsDisplayed(dashboardPageObject.helloUser_android)).toBe.true
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