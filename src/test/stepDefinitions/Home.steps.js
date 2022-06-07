//import { Given, When, Then } from "@wdio/cucumber-framework";
const { Given, When, Then } = require('@wdio/cucumber-framework');
const homePage = require("../../main/Pages/HomePage");

Given(/^I am on the scripbox home page$/, async () => {
    await browser.url("https://uat-andromeda-38-uat.scripbox.org");
});

When (/^I click on login tab$/, async () => {
    await homePage.login();

});

