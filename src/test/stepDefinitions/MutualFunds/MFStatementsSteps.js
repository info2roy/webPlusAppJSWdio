const { When } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const MfStatementFunctionality = require('../../../main/Functionalities/MutualFunds/MFStatementFunctionality');

When(/^I navigate to "([^"]*)?" page$/, async (option) => {
  console.log('Navigating to MF page --> ' + option.toString());
  expect(await MfStatementFunctionality.navigateToMFPage(option.toString())).to.be.true;
});