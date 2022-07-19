const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const DashboardFunctionality = require('../../main/Functionalities/DashboardFunctionality');
const PersonalInfoFunctionality = require('../../main/Functionalities/PersonalInfoFunctionality');
const mfStatementfunctionality = require('../../main/Functionalities/MutualFunds/MFStatementFunctionality');

Then(/^I should see dashboard page loaded$/, async () => {
  await console.log('Then I should see dashboard page loaded');
  await DashboardFunctionality.home();
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

When(/^I select option "([^"]*)?"$/, async (option) => {
  console.log('Navigating to page --> ' + option);
  switch (option.toString()) {
    case 'Statements and Tax Reports':
      await DashboardFunctionality.selectStatementsAndTaxReports();
      await browser.pause(2000);
      expect(await mfStatementfunctionality.MFPageLaunched()).to.be.true;
      break;
    case 'Account and Family Information':
      await DashboardFunctionality.selectAccountFamilyInformation();
      expect(await PersonalInfoFunctionality.profileInfoPageLaunched()).to.be.true;
      break;
    case 'personal information':
      await DashboardFunctionality.selectPersonalInformation();
      expect(await PersonalInfoFunctionality.profileInfoPageLaunched()).to.be.true;
      break;
    default:
      console.log(option + ' Option not available');
  }
});
