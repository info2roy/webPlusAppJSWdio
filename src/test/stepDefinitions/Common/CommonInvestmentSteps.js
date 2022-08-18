const { Given, When } = require('@wdio/cucumber-framework');
const CommonInvestmentFunctionality = require('../../../main/Functionalities/Common/CommonInvestmentFunctionality');
const DashboardFunctionality = require('../../../main/Functionalities/DashboardFunctionality');
const { expect } = require('chai');

Given(/^I am on the Investment Page$/, async () => {
  await console.log('Given I am on the Investment Page');
  await DashboardFunctionality.invest();
  expect(await CommonInvestmentFunctionality.investmentPageLaunched()).to.be.true;
});

When(/^I navigate to the investment tab "([^"]*)?"$/, async (investmentInstrument) => {
  await console.log(`Given I navigate to the investment tab  ${investmentInstrument}`);
  expect(await CommonInvestmentFunctionality.selectInvestmentTab(investmentInstrument)).to.be.true;
});
