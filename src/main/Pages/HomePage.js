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
        util.clickElement(homePageObject.loginButtonHomePage_android);
        // await browser.pause(10000)
    }
    
    loginTabIsDisplayed() {
        return util.elementIsDisplayed(homePageObject.loginTab);
    }

    signupTabIsDisplayed() {
        return util.elementIsDisplayed(homePageObject.signupTab);
    }

    async clickMenuButton() {
        await util.clickElement(homePageObject.menuButton);
        if (driver.isAndroid){
            util.clickElement(homePageObject.moreOptions_android);
        }
    }


    loginButtonDisplayed_android(){
        return util.elementIsDisplayed(homePageObject.loginButtonHomePage_android);
    }

    menuButtonIsDisplayed() {
        return util.elementIsDisplayed(homePageObject.menuButton);
    }

    scripBoxCustomerbannerDisplayed_android(){
        return util.elementIsDisplayed(homePageObject.ScripboxCustomerBanner);
    }


}

module.exports = new HomePage();