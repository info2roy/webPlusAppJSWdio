const { When } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const mfStatementFunctionality = require('../../../main/Functionalities/MutualFunds/MFStatementFunctionality');

When(/^I navigate to "([^"]*)?" page$/, async (option) => {
  console.log('Navigating to MF page --> ' + option.toString());
  expect(await mfStatementFunctionality.navigateToMFPage(option.toString())).to.be.true;
});