const { Given, When, Then } = require('@wdio/cucumber-framework');
const dashboardFunc = require('../../main/PageFunctionalities/DashboardFunctionality');



Then(/^I should see dashboard page loaded$/, async () => {
    await dashboardFunc.validate();
    await browser.pause(5000);
});

Given (/^I open the profile dropdown$/, async () => {
    console.log("Given I open the profile dropdown");
    await dashboardFunc.openProfileDropdown();
    await browser.pause(5000);
});


When (/^I select personal information$/, async () => {
    console.log("When I select personal information");
    await dashboardFunc.selectPersonalInformation();
    await browser.pause(5000);
});


