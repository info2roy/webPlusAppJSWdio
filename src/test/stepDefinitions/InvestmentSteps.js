const { Given, When } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const InvestmentFunctionality = require('../../main/Functionalities/InvestmentFunctionality');
//const Device = require('../../support/libraries/Device');
//const Utils = require('../../support/Utils/Utils');

Given(/^I am on the Investment Page$/, async () => {
  await console.log('Given I am on the Investment Page');
  await InvestmentFunctionality.invest();
  expect(await InvestmentFunctionality.investmentPageLaunched()).to.be.true;
});

Given(/^I am on the Mutual Funds Tab$/, async () => {
  await console.log('Given I am on the Mutual Funds Tab');
  await InvestmentFunctionality.selectMutualFunds();
  expect(await InvestmentFunctionality.mutualFundsPageLaunched()).to.be.true;
});

When(/^I select portfolio (.+)$/, async (mutualFundPortfolio) => {
  await console.log(`When I select <mutualFundPortfolio>:${mutualFundPortfolio}`);
  await InvestmentFunctionality.selectMutualFundPortfolio(mutualFundPortfolio);
  expect(await InvestmentFunctionality.scripBoxGuidedPathPageLaunched()).to.be.true;
});

When(/^I Invest as per Scripbox Guided Path for (.+)$/, async (mutualFundPortfolio) => {
  await console.log('When I select Invest as per Scripbox Guided Path');
  await InvestmentFunctionality.investAsPerScripboxGuidedPath();
  expect(await InvestmentFunctionality.mutualFundPortfolioPageLaunched(mutualFundPortfolio)).to.be.true;
});

When(/^I fill form with agegroup (\d+s) and click NEXT$/, async (ageGroup) => {
  await console.log(`When I select my <ageGroup>:${ageGroup} and click NEXT`);
  await InvestmentFunctionality.fillMutualFundPortfolioForm(ageGroup);
  expect(await InvestmentFunctionality.investmentFormPageLaunched()).to.be.true;

});

When(/^I select (Every month \(SIP\)|One time|STP) and fill (\d+) and click to see recommended funds$/,
  async (investmentType, amount) => {
    await console.log(`When I select <investmentType>:${investmentType} and <amount>:${amount} and 
    click to see recommended funds`);
    await InvestmentFunctionality.fillInvestmentForm(investmentType, amount);
    expect(await InvestmentFunctionality.recommendedFundsPageIsLaunched()).to.be.true;
  }
);

When(/^I accept the recommended mutual fund allocation and click NEXT$/, async () => {
  await console.log('When I select the recommended mutual fund allocation and click NEXT');
});

When(/^I Select to AUTOMATE NOW$/, async () => {
  await console.log('When I Select to AUTOMATE NOW');
});

