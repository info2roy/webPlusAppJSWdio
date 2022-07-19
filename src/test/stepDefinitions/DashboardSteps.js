const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const DashboardFunctionality = require('../../main/Functionalities/DashboardFunctionality');
const PersonalInfoFunctionality = require('../../main/Functionalities/PersonalInfoFunctionality');
const MfStatementfunctionality = require('../../main/Functionalities/MutualFunds/MFStatementFunctionality');

Then(/^I should see dashboard page loaded$/, async () => {
  await console.log('Then I should see dashboard page loaded');
  await DashboardFunctionality.home();
  await DashboardFunctionality.validate();
});

When(/^I open the more options$/, async () => {
  await console.log('Given I open the more options');
  await DashboardFunctionality.openMoreOptions();
});

When(/^I select personal information$/, async () => {
  await console.log('When I select personal information');
  await DashboardFunctionality.selectPersonalInformation();
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
      expect(await MfStatementfunctionality.MFPageLaunched()).to.be.true;
      break;
    case 'Account and Family Information':
      await DashboardFunctionality.selectAccountFamilyInformation();
      expect(await PersonalInfoFunctionality.accountFamilyInfoPageLaunched()).to.be.true;
      break;
    case 'personal information':
      await DashboardFunctionality.selectPersonalInformation();
      expect(await PersonalInfoFunctionality.profileInfoPageLaunched()).to.be.true;
      break;
    default:
      console.log(option + ' Option not available');
  }
});

Given(/^I am on the dashboard page$/, async () => {
  await console.log('Given I am on the dashboard page');
  await DashboardFunctionality.validate();
});

When(/^I select the "(Withdraw|Invest more)" option on dashboard page$/, async (dashboardOption) => {
  await console.log(`When I select the ${dashboardOption} option on dashboard page`);
  await DashboardFunctionality.selectWithdrawOrInvestMoreOption(dashboardOption);
});

When(/^I navigate to "([^"]*)?" from Dashboard$/, async (page) => {
  await console.log('From dashboard, navigating to --> ' + page);
  expect(await DashboardFunctionality.navigateToPageFromDashboard(page)).to.be.true;
});

When(/^I navigate back to Dashboard$/, async () => {
  console.log('Navigating back to Dashboard page');
  await DashboardFunctionality.navigateToDashboard();
  await DashboardFunctionality.validate();
});