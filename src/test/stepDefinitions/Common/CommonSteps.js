const { When } = require('@wdio/cucumber-framework');
const CommonFunctionality = require('../../../main/Functionalities/Common/CommonFunctionality');
When(/^I refresh the current page$/, async () => {
  await console.log('When I refresh the current page');
  await browser.refresh();
});

When(/^I go back to previous page$/, async () => {
  await console.log('When I go back to previous page');
  await CommonFunctionality.goBackToPreviousPage();
});
