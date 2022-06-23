const { Given, When, Then } = require('@wdio/cucumber-framework');
const personalInfoFunc = require('../../main/PageFunctionalities/PersonalInfoFunctionality');

Then(/^I should see personal information page loaded$/, async () => {
  await console.log('Then I should see personal information page loaded');
  await personalInfoFunc.profileInfoPageLaunched();
});

When(/^I update the profile picture$/, async () => {
  await console.log('When I update the profile picture');
  await personalInfoFunc.updateProfilePicture();
});

Then(/^The picture is uploaded successfully$/, async () => {
  await console.log('Then The picture is uploaded successfully');
});
