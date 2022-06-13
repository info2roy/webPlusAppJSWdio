const util = require('../../support/Utils/Utils');
const homePageObject =require('../PageObjects/HomePageObjects');

class HomePage {

    selectLoginTab() {
        util.clickElement(homePageObject.loginTab);
    }

    loginTabIsDisplayed() {
        return util.elementIsDisplayed(homePageObject.loginTab);
    }

    signupTabIsDisplayed() {
        return util.elementIsDisplayed(homePageObject.signupTab);
    }

    clickMenuButton() {
        util.clickElement(homePageObject.menuButton);
    }

    menuButtonIsDisplayed() {
        return util.elementIsDisplayed(homePageObject.menuButton);
    }

    loginButton_android(){
        return util.elementIsDisplayed(homePageObject.loginButtonHomePage);
    }

    scripBoxCustomerbanner_android(){
        return util.elementIsDisplayed(homePageObject.ScripboxCustomerBanner);
    }


}

module.exports = new HomePage();