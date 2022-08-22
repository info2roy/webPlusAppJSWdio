const { Given } = require('@wdio/cucumber-framework');
const CommonMyWealthFunctionality = require('../../../main/Functionalities/Common/CommonMyWealthFunctionality');
const DashboardFunctionality = require('../../../main/Functionalities/DashboardFunctionality');
const { expect } = require('chai');

Given(/^I navigate to the MyWealth "(Investments|Insurance)" type "(Mutual Funds|Stocks|US Stocks|Fixed Deposits|Real Estate|Govt. Schemes|Other Investments)"$/, async(wealthType, investmentType) => {
  await console.log(`I navigate to the MyWealth ${wealthType} type ${investmentType}`);
  await DashboardFunctionality.myWealth();
  expect(await CommonMyWealthFunctionality.myWealthPageLaunched()).to.be.true;
  expect(await CommonMyWealthFunctionality.selectMyWealthTab(wealthType)).to.be.true;
  if(wealthType === 'Investments') {
    expect(await CommonMyWealthFunctionality.selectMyWealthInvestmentType(investmentType)).to.be.true;
  }
});
