const { Given } = require('@wdio/cucumber-framework');
const CommonInvestmentFunctionality = require('../../../main/Functionalities/Common/CommonInvestmentFunctionality');
const { expect } = require('chai');

Given(/^I am on the investment tab "([^"]*)?"$/, async (investmentInstrument) => {
  await console.log(`Given I am on the investment tab  ${investmentInstrument}`);
  expect(await CommonInvestmentFunctionality.selectInvestmentTab(investmentInstrument)).to.be.true;
});