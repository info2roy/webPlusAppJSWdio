const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const MoreOptionsPageFunctionality = require('../../../main/Functionalities/MoreOptions/MoreOptionsPageFunctionality');
const PersonalInfoFunctionality = require('../../../main/Functionalities/MoreOptions/PersonalInfoFunctionality');

Then(/^I should see all of the more options$/, async () => {
  await console.log('Then I should see all of the more options');
  expect(await MoreOptionsPageFunctionality.moreOptionsPageLaunched()).to.be.true;
});

When(/^I select personal information$/, async () => {
  await console.log('When I select personal information');
  await MoreOptionsPageFunctionality.selectPersonalInformation();
  expect(await PersonalInfoFunctionality.profileInfoPageLaunched()).to.be.true;
});

When(/^I select Account and Family Information$/, async () => {
  await console.log('I select Account and Family Information');
  await MoreOptionsPageFunctionality.selectAccountFamilyInformation();
  expect(await PersonalInfoFunctionality.accountFamilyInfoPageLaunched()).to.be.true;
});
