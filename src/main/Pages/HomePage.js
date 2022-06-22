const util = require('../../support/Utils/Utils');
const homePageObject =require('../PageObjects/HomePageObjects');
const loginPageObject = require('../PageObjects/LoginPageObjects')

class HomePage {

    selectLoginTab() {
        util.clickElement(homePageObject.loginTab);
    }

    clickLoginOrSignup_android(){
        util.clickElement(loginPageObject.loginSignupButton_android)
    }

    async clickLoginHomePage_android() {
        await util.clickElement(homePageObject.loginButtonHomePage_android);
    }
    
    loginTabIsDisplayed() {
        return util.elementIsDisplayed(homePageObject.loginTab);
    }

    signupTabIsDisplayed() {
        return util.elementIsDisplayed(homePageObject.signupTab);
    }

    clickMenuButton() {
        util.clickElement(homePageObject.menuButton);
        if (driver.isAndroid){
            util.clickElement(homePageObject.moreOptions_android);
        }
    }


    async loginButtonDisplayed_android(){
        return await util.elementIsDisplayed(homePageObject.loginButtonHomePage_android);
    }

    menuButtonIsDisplayed() {
        return util.elementIsDisplayed(homePageObject.menuButton);
    }

    async scripBoxCustomerbannerDisplayed_android(){
        return await util.elementIsDisplayed(homePageObject.ScripboxCustomerBanner);
    }


}

module.exports = new HomePage();