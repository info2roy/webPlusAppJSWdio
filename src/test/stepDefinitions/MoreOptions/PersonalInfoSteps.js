const { When, Then } = require('@wdio/cucumber-framework');
const PersonalInfoFunctionality = require('../../../main/Functionalities/PersonalInfoFunctionality');

When(/^I update the profile picture$/, async () => {
  await console.log('When I update the profile picture');
  await PersonalInfoFunctionality.updateProfilePicture();
});

Then(/^The picture is uploaded successfully$/, async () => {
  await console.log('Then The picture is uploaded successfully');
});

Then(/^I edit "([^"]*)?"$/, async (value) => {
  await console.log('Check stepdef method '+value);
  await PersonalInfoFunctionality.updateProfileData(value);
});

Then(/^I update changes$/, async () => {
  await console.log('Clicking on update changes');
  await PersonalInfoFunctionality.updateChanges();
});
