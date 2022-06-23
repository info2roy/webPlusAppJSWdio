const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const dashboardFunc = require('../../main/PageFunctionalities/DashboardFunctionality');
const personalInfoFunc = require('../../main/PageFunctionalities/PersonalInfoFunctionality');

Then(/^I should see dashboard page loaded$/, async () => {
  await console.log('Then I should see dashboard page loaded');
  await dashboardFunc.validate();
});

Given(/^I open the profile dropdown$/, async () => {
  await console.log('Given I open the profile dropdown');
  await dashboardFunc.openProfileDropdown();
});

When(/^I select personal information$/, async () => {
  await console.log('When I select personal information');
  await dashboardFunc.selectPersonalInformation();
  expect(await personalInfoFunc.profileInfoPageLaunched()).to.be.true;
});
