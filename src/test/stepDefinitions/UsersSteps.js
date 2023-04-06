const { When } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const UsersPage = require('../../main/Pages/UsersPage');
const Utils = require('../../support/Utils/Utils');
require('dotenv').config();

When(/^I click on add new button$/, async () => {
  await UsersPage.clickAddNewUser();
});

When(/^I validate create user modal is opened$/, async () => {
  expect(await UsersPage.createUserModalOpen()).to.be.true;
});

When(/^I select user role (.+)$/, async (role) => {
  console.log(`I select user role ${role}`);
  await UsersPage.selectUserRole(role);
});

When(/^I validate creation on listing page "([^"]*)?"$/, async (name) => {
  console.log(`I validate header "${name}"`);
  expect(await Utils.isTextDisplayed(name)).to.be.true;
});

When(/^I validate delete button for "([^"]*)?"$/, async (name) => {
  console.log(`I validate delete button for: "${name}"`);
  expect(await UsersPage.checkDeleteButtonForUser(name)).to.be.true;
});

When(/^I delete from list "([^"]*)?"$/, async (name) => {
  console.log(`I delete from list:> "${name}"`);
  await UsersPage.clickDeleteButtonForUser(name);
  expect(await UsersPage.checkDeleteDialog(name)).to.be.true;
});

