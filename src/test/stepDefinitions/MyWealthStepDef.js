const { Given, When, Then } = require('@wdio/cucumber-framework');
const myWealthFunc = require('../../main/PageFunctionalities/MyWealthFunctionality')
const myWealthPageObject = require('../../main/PageObjects/MyWealthPageObjects')
const device = require('../../support/libraries/Device');
const Utils = require('../../support/Utils/Utils');

When(/^I navigate to My Wealth page$/, async () => {
    if (device.isMobileWeb()){
    }
    else if (driver.isAndroid){  
        await console.log("My Wealth page");
        expect( 
        await myWealthFunc.navigateToMyWealthPage()
            ).toBe.true;
    }
        
});


When(/^I want to navigate to Investment strategy tab$/, async () => {
    if (device.isMobileWeb()){
    }
    else if (driver.isAndroid){  
        await myWealthFunc.navigateToInvestmentStrategy()
        expect(await Utils.elementIsDisplayed(myWealthPageObject.investmentPageBlogSubscribe)).toBe.true
    }
        
});


