const { Given, When, Then } = require('@wdio/cucumber-framework');
const personalInfoFunc = require('../../main/PageFunctionalities/PersonalInfoFunctionality');



Then(/^I should see personal information page loaded$/, async () => {
    console.log("Then I should see personal information page loaded");
    await personalInfoFunc.validate();
    await browser.pause(1000);
});

Given (/^I click on the Update Picture button$/, async () => {
    console.log("Given I click on the Update Picture button");
    await personalInfoFunc.clickUpdatePicture();
    await browser.pause(1000);
});

When (/^I select a picture file to update$/, async () => {
    console.log("When I select a picture file to update");
    await personalInfoFunc.uploadFile();
    await browser.pause(1000);
});

Then (/^The picture is uploaded successfully$/, async () => {
    console.log("Then The picture is uploaded successfully");
    await browser.pause(1000);
});
