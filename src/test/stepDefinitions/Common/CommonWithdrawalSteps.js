const { When } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const CommonWithdrawalFunctionality = require('../../../main/Functionalities/Common/CommonWithdrawalFunctionality');

When(/^I select "([^"]*)?" as financial product for withdrawal$/, async (financialProduct) => {
  await console.log(`When I select "${financialProduct}" as financial product for withdrawal`);
  expect(await CommonWithdrawalFunctionality.selectFinancialProduct(financialProduct)).to.be.true;
});
