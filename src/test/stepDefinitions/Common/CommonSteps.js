const { When } = require('@wdio/cucumber-framework');
const CommonFunctionality = require('../../../main/Functionalities/Common/CommonFunctionality');
const Utils = require('../../../support/Utils/Utils');

When(/^I refresh the current page$/, async () => {
  await console.log('When I refresh the current page');
  await browser.refresh();
});

When(/^I go back to previous page$/, async () => {
  await console.log('When I go back to previous page');
  await CommonFunctionality.goBackToPreviousPage();
});

When(/^I click on "([^"]*)?"$/, async (button) => {
  await console.log(`I click on ${button}`);
  await Utils.clickElementByText(button);
});

When(/^I select first date of next month$/, async () => {
});