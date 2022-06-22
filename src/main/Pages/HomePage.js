const util = require('../../support/Utils/Utils');
const homePageObject =require('../PageObjects/HomePageObjects');
const loginPageObject = require('../PageObjects/LoginPageObjects');
const device = require('../../support/libraries/Device');

class HomePage {

    async selectLoginOption() {
        await util.clickElement(homePageObject.loginButton);
    }
    
    async loginTabIsDisplayed() {
        return (await util.elementIsDisplayed(homePageObject.loginButton));
    }

    async signupTabIsDisplayed() {
        if (device.isMobileWeb() || device.isDesktop() ) {
            return (await util.elementIsDisplayed(homePageObject.signupButton));
        } else {
            return true;
        }
    }

    async clickMenuButton() {
        if (device.isMobileWeb()) {
            await util.clickElement(homePageObject.menuButton);
        }
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