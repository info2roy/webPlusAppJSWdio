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
        await util.clickElement(homePageObject.loginButton);
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


    async loginButtonDisplayed_android(){
        return await util.elementIsDisplayed(homePageObject.loginButton);
    }

    async menuButtonIsDisplayed() {
        return await util.elementIsDisplayed(homePageObject.menuButton);
    }

    async scripBoxCustomerbannerDisplayed_android(){
        return await util.elementIsDisplayed(homePageObject.customerBanner);
    }


}

module.exports = new HomePage();