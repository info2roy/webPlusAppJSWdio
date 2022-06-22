const { Given, When, Then } = require('@wdio/cucumber-framework');
const { assert } = require('chai');
const loginFunc = require('../../main/PageFunctionalities/LoginFunctionality')

Given(/^I am on the login page$/, async function(){
    // browser.url("https://uat-myscripbox-2-uat.scripbox.org/login");
    loginFunc.visit("https://learn.conkerworld.com/s/myprofile")
    

})

When(/^I login with "([^"]*)?" and "([^"]*)?" credentials$/, async function(username, password){
    loginFunc.login(username, password);
    await browser.pause(5000)

})

Then(/^I should see a home page$/, function(){
    var currentPageUrl = browser.getUrl();
    console.log("current page url ==> "+currentPageUrl);
    assert.equal(home.com, actualhome.com)
})

Then(/^I click on start exploring$/,  async function(){
        await expect(loginFunc.startExploring()).toBe.true
})

