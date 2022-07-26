const { When } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const CommonWithdrawalFunctionality = require('../../../main/Functionalities/Common/CommonWithdrawalFunctionality');

When(/^I select a family member "([^"]*)?" for withdrawal$/, async (familyMember) => {
  await console.log(`When I select a family member "${familyMember}" for withdrawal`);
  expect(await CommonWithdrawalFunctionality.selectFamilyMember(familyMember)).to.be.true;
});

When(/^I select "([^"]*)?" as financial product for withdrawal$/, async (financialProduct) => {
  await console.log(`When I select "${financialProduct}" as financial product for withdrawal`);
  expect(await CommonWithdrawalFunctionality.selectFinancialProduct(financialProduct)).to.be.true;
});
