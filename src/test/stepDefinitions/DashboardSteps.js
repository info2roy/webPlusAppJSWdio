const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const DashboardFunctionality = require('../../main/Functionalities/DashboardFunctionality');
const PersonalInfoFunctionality = require('../../main/Functionalities/PersonalInfoFunctionality');

Then(/^I should see dashboard page loaded$/, async () => {
  await console.log('Then I should see dashboard page loaded');
  await DashboardFunctionality.validate();
});

Given(/^I open the profile dropdown$/, async () => {
  await console.log('Given I open the profile dropdown');
  await DashboardFunctionality.openProfileDropdown();
});

When(/^I select personal information$/, async () => {
  await console.log('When I select personal information');
  await DashboardFunctionality.selectPersonalInformation();
  expect(await PersonalInfoFunctionality.profileInfoPageLaunched()).to.be.true;
});
