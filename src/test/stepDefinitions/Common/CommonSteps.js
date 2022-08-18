const { When } = require('@wdio/cucumber-framework');
When(/^I refresh the current page$/, async () => {
  await console.log('When I refresh the current page');
  await browser.refresh();
});
