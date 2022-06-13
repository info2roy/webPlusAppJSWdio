const util = require('../../support/Utils/Utils');
const homePageObject =require('../PageObjects/HomePageObjects');

class HomePage {

    selectLoginTab() {
        util.clickElement(homePageObject.loginTab);
    }

    clickMenuButton() {
        util.clickElement(homePageObject.menuButton);
    }

    loginButton_android(){
        return util.elementIsDisplayed(homePageObject.loginButtonHomePage);
    }

    scripBoxCustomerbanner_android(){
        return util.elementIsDisplayed(homePageObject.ScripboxCustomerBanner);
    }


}

module.exports = new HomePage();