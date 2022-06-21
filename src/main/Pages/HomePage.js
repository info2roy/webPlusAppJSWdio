const util = require('../../support/Utils/Utils');
const homePageObject =require('../PageObjects/HomePageObjects');
const loginPageObject = require('../PageObjects/LoginPageObjects');
const device = require('../../support/libraries/Device');

class HomePage {

    selectLoginOption() {
        util.clickElement(homePageObject.loginButton);
    }

    clickLoginOrSignup_android(){
        util.clickElement(loginPageObject.loginSignupButton_android)
    }

    async clickLoginHomePage_android() {
        util.clickElement(homePageObject.loginButton);
    }
    
    loginTabIsDisplayed() {
        return util.elementIsDisplayed(homePageObject.loginButton);
    }

    signupTabIsDisplayed() {
        if (device.isMobileWeb() || device.isDesktop() ) {
            return util.elementIsDisplayed(homePageObject.signupButton);
        } else {
            return true;
        }
    }

    async clickMenuButton() {
        if (device.isMobileWeb()) {
            await util.clickElement(homePageObject.menuButton);
        }
        // if (driver.isAndroid){
        //     util.clickElement(homePageObject.moreOptions);
        // }
    }


    loginButtonDisplayed_android(){
        return util.elementIsDisplayed(homePageObject.loginButton);
    }

    menuButtonIsDisplayed() {
        return util.elementIsDisplayed(homePageObject.menuButton);
    }

    scripBoxCustomerbannerDisplayed_android(){
        return util.elementIsDisplayed(homePageObject.customerBanner);
    }


}

module.exports = new HomePage();