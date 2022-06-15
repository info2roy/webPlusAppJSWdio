const util = require('../../support/Utils/Utils');
const dashboardPageObject =require('../PageObjects/DashboardPageObjects');
const device = require('../../support/libraries/Device');

class DashboardPage  {

    openProfileDropdown() {
        if (device.isDesktop()) {
            console.log("openProfileDropdown");
            util.clickElement(dashboardPageObject.profileDropdown);
        } else if (device.isMobileWeb()) {
            console.log("click more button");
            util.clickElement(dashboardPageObject.moreButton);
        }
    } 

    selectPersonalInformation() {
        if (device.isDesktop()) {
            console.log("selectPersonalInformation");
            util.clickElement(dashboardPageObject.personalInfo);
        } else if(device.isMobileWeb()) {
            console.log("click on Personal Infomation");
            util.clickElement(dashboardPageObject.personalInfoResponsive);
        }
    }


}
module.exports = new DashboardPage();