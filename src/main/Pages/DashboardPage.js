const util = require('../../support/Utils/Utils');
const dashboardPageObject =require('../PageObjects/DashboardPageObjects');
const device = require('../../support/libraries/Device');

class DashboardPage  {

    openProfileDropdown() {
        if (device.isDesktop()) {
            console.log("Desktop: openProfileDropdown");
            util.clickElement(dashboardPageObject.profileDropdown);
        } else if (device.isMobileWeb()) {
            console.log("Responsive: click more button");
            util.clickElement(dashboardPageObject.moreButton);
        } else if (device.isAndroidApp()) {
            console.log("AndroidApp: click on more button");
            util.clickElement(dashboardPageObject.moreButton_android);

        }
    } 

    async selectPersonalInformation() {
        if (device.isDesktop()) {
            console.log("Desktop: selectPersonalInformation");
            util.clickElement(dashboardPageObject.personalInfo);
        } else if(device.isMobileWeb()) {
            console.log("Responsive: click on Personal Infomation");
            util.clickElement(dashboardPageObject.personalInfoResponsive);
        } else if(device.isAndroidApp()) {
            console.log("AndroidApp: click on Personal Infomation");
            util.scrollUntilTextIntoView("Personal information");
            await util.clickElement(dashboardPageObject.personalInfo_android);
        }
    }


}
module.exports = new DashboardPage();