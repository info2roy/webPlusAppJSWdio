const { Given, When } = require('@wdio/cucumber-framework');
const CommonMyWealthFunctionality = require('../../../main/Functionalities/Common/CommonMyWealthFunctionality');
const DashboardFunctionality = require('../../../main/Functionalities/DashboardFunctionality');
const { expect } = require('chai');

Given(/^I am on the MyWealth Page$/, async () => {
  await console.log('Given I am on the MyWealth Page');
  await DashboardFunctionality.myWealth();
  expect(await CommonMyWealthFunctionality.myWealthPageLaunched()).to.be.true;
});

When(/^I navigate to the MyWealth tab "(Investments|Insurance)"$/, async (wealthType) => {
  await console.log(`Given I navigate to the MyWealth tab ${wealthType}`);
  expect(await CommonMyWealthFunctionality.selectMyWealthTab(wealthType)).to.be.true;
});

When(/^I navigate to the MyWealth Investments type "(Mutual Funds|Stocks|US Stocks|Fixed Deposits|Real Estate|Govt. Schemes|Other Investments)"$/, async(investmentType) => {
  await console.log(`I navigate to the MyWealth Investments type ${investmentType}`);
  expect(await CommonMyWealthFunctionality(wealthType)).to.be.true;
});
