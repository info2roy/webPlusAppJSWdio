const { When } = require('@wdio/cucumber-framework');
const GovtSchemesFunctionality = require('../../../main/Functionalities/GovtSchemes/GovtSchemesFunctionality');
const { expect } = require('chai');

When(/^I click on "Add Govt. Scheme" button$/, async () => {
  await console.log('When I click on "Add Govt. Scheme" button');
  expect(await GovtSchemesFunctionality.addGovtScheme()).to.be.true;
});
