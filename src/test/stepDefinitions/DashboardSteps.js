const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const DashboardFunctionality = require('../../main/Functionalities/DashboardFunctionality');
const PersonalInfoFunctionality = require('../../main/Functionalities/PersonalInfoFunctionality');

Then(/^I should see dashboard page loaded$/, async () => {
  await console.log('Then I should see dashboard page loaded');
  a;
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

When(/^I select Account and Family Information$/, async () => {
  await console.log('I select Account and Family Information');
  await DashboardFunctionality.selectAccountFamilyInformation();
  expect(await PersonalInfoFunctionality.profileInfoPageLaunched()).to.be.true;
});

When(/^I click on return to home$/, async () => {
  await console.log('I click on return to home');
  await DashboardFunctionality.selectReturnToHome();
  expect(await PersonalInfoFunctionality.profileInfoPageLaunched()).to.be.true;
});
