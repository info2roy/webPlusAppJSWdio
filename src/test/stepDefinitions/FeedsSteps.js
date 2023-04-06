const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const FeedsPage = require('../../main/Pages/FeedsPage');
require('dotenv').config();

When(/^I validate create feed modal is opened$/, async () => {
  expect(await FeedsPage.createFeedModalOpen()).to.be.true;
});

When(/^I select client for feed as "([^"]*)?"$/, async (clientName) => {
  await FeedsPage.selectClient(clientName);
});

When(/^I select Product type for feed as "([^"]*)?"$/, async (productName) => {
  await FeedsPage.selectProductType(productName);
});

When(/^I toggle feed encrypt button"$/, async () => {
  console.log(`I toggle feed encrypt button`);
  await FeedsPage.clickEncryptToggleButton();
});

