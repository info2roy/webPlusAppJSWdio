const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const MFWithdrawalFunctionality = require('../../../main/Functionalities/MutualFunds/MFWithdrawalFunctionality');

When(/^I select for withdrawal the mutual fund portfolio (.+)$/, async (mutualFundPortfolio) => {
  await console.log(`When I select for withdrawal the mutual fund portfolio ${mutualFundPortfolio}`);
  this.mutualFundPortfolio = mutualFundPortfolio;
  expect(await MFWithdrawalFunctionality.selectMFPlan(mutualFundPortfolio)).to.be.true;
});

When(/^I select withdrawal bank option as "(Continue with same bank|NO, STAY INVESTED)"$/, async (withdrawalBankOption) => {
  await console.log(`When I select withdrawal bank option as ${withdrawalBankOption}`);
  expect(await MFWithdrawalFunctionality.selectWithdrawalBankOption(withdrawalBankOption,
    this.mutualFundPortfolio)).to.be.true;
});

When(/^I enter withdrawal amount as (\d+)$/, async (withdrawalAmount) => {
  await console.log(`When I enter withdrawal amount as ${withdrawalAmount}`);
  this.withdrawalAmount = withdrawalAmount;
  await MFWithdrawalFunctionality.fillWithdrawalAmount(withdrawalAmount);
});

When(/^I select "(CUSTOM_FUND_BASED_WITHDRAWAL|TAX_OPTIMIZED_WITHDRAWAL)" as strategy$/, async (withdrawalStrategy) => {
  await console.log(`When I select ${withdrawalStrategy} as strategy`);
  expect(await MFWithdrawalFunctionality.selectWithdrawalStrategy(withdrawalStrategy,
    this.mutualFundPortfolio, this.withdrawalAmount)).to.be.true;
});

When(/^I select to withdraw half amount from fund "([^"]*)?" at index (\d+)$/, async (mutualFundName, index) => {
  await console.log(`When I select to withdraw half amount from fund ${mutualFundName} at index ${index}`);
  await MFWithdrawalFunctionality.selectFund(mutualFundName, this.withdrawalAmount / 2, index);
});

When(/^I click on "CONTINUE" button for withdrawal$/, async () => {
  await console.log(`When I click on "CONTINUE" button for withdrawal`);
  expect(await MFWithdrawalFunctionality.continueWithFundAllocation(this.withdrawalAmount)).to.be.true;
});

When(/^I click on button "(CONFIRM WITHDRAWAL|NO, STAY INVESTED|CANCEL)" for withdrawal$/, async (action) => {
  await console.log(`When I click on "${action}" button for withdrawal`);
  expect(await MFWithdrawalFunctionality.takeFinalAction(action)).to.be.true;
});

When(/^I enter OTP as (\d+) for withdrawal$/, async (otp) => {
  await console.log(`When I enter OTP as ${otp} for withdrawal`);
  await MFWithdrawalFunctionality.verifyWithOTP(otp);
});

Then(/^I should see Withdrawal Scheduled success message$/, async () => {
  await console.log('Then I should see Withdrawal Scheduled success message');
  expect(await MFWithdrawalFunctionality.withdrawalScheduledPageLaunched()).to.be.true;
});

When(/^I select option I want to withdraw by fund in Available to withdraw page for (.+)$/, async (fundPortfolio) => {
  await console.log(`I select option I want to withdraw by fund in Available to withdraw page for ${fundPortfolio}`);
  expect(await MFWithdrawalFunctionality.verifyWithdrawlPageNavigate(fundPortfolio)).to.be.true;
});

When(/^I select fund for withdraw for (.+) funds withdrawl$/, async (option) => {
  await console.log(`I click on select fund button for withdraw ${option} funds withdrawl`);
  await MFWithdrawalFunctionality.selectFundForWithdrawlUnits(option);
});

Then(/^I should see withdrawl confirmation page for (.+) withdrawl$/, async (option) => {
  await console.log(`I should see withdrawl confirmation page for ${option} withdrawl`);
  expect(await MFWithdrawalFunctionality.withdrawlConfirmationPage(option)).to.be.true;
  await MFWithdrawalFunctionality.clickConfirmWithdrawl();
});

Then(/^I click on confirm withdrawl for OTP$/, async () => {
  await console.log('I click on confirm withdrawl for OTP');
  expect(await MFWithdrawalFunctionality.verifyOTPPageNavigate()).to.be.true;
});
