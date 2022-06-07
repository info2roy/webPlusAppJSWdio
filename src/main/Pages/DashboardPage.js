const util = require('../../support/Utils');
const dashboardPageObject =require('../PageObjects/DashboardPageObjects');

class DashboardPage  {

    openProfileDropdown() {
        console.log("openProfileDropdown");
        util.clickElement(dashboardPageObject.profileDropdown);
    } 

    selectPersonalInformation() {
        console.log("selectPersonalInformation");
        util.clickElement(dashboardPageObject.personalInfo);
    }


}
module.exports = new DashboardPage();