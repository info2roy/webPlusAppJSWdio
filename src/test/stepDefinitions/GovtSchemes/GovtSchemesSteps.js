const { When } = require('@wdio/cucumber-framework');
const GovtSchemesFunctionality = require('../../../main/Functionalities/GovtSchemes/GovtSchemesFunctionality');
const { expect } = require('chai');

When(/^I click on "Add Govt. Scheme" button$/, async () => {
  await console.log('When I click on "Add Govt. Scheme" button');
  expect(await GovtSchemesFunctionality.addGovtScheme()).to.be.true;
});

When(/^I select a family member "([^"]*)?" for Govt Schemes$/, async (familyMember) => {
  await console.log(`When I select a family member "${familyMember}" for Govt Schemes`);
  expect(await GovtSchemesFunctionality.selectFamilyMember(familyMember)).to.be.true;
});