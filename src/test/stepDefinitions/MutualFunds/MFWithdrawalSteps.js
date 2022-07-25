const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const Constants = require('../../../config/data/structured/Constants');
const MFWithdrawalFunctionality = require('../../../main/Functionalities/MutualFunds/MFWithdrawalFunctionality');

When(/^I select for withdrawal the portfolio (.+)$/, async (mutualFundPortfolio) => {
  await console.log(`When I select for withdrawal the portfolio ${mutualFundPortfolio}`);
  this.mutualFundPortfolio = mutualFundPortfolio;
  expect(await MFWithdrawalFunctionality.selectMFPlanPageLaunched()).to.be.true;
  await MFWithdrawalFunctionality.selectMFPlan(mutualFundPortfolio);
});

When(/^I select withdrawal bank option as "(Continue with same bank|NO, STAY INVESTED)"$/, async (withdrawalBankOption) => {
  await console.log(`When I select withdrawal bank option as ${withdrawalBankOption}`);
  expect(await MFWithdrawalFunctionality.confirmBankDetailsPageLaunched()).to.be.true;
  await MFWithdrawalFunctionality.selectWithdrawalBankOption(withdrawalBankOption);
});

When(/^I enter withdrawal amount as (\d+)$/, async (withdrawalAmount) => {
  await console.log(`When I enter withdrawal amount as ${withdrawalAmount}`);
  this.withdrawalAmount = withdrawalAmount;
  expect(await MFWithdrawalFunctionality.withdrawAmountPageLaunched(this.mutualFundPortfolio)).to.be.true;
  await MFWithdrawalFunctionality.fillWithdrawalAmount(withdrawalAmount);
});

When(/^I select "(CUSTOM_FUND_BASED_WITHDRAWAL|TAX_OPTIMIZED_WITHDRAWAL)" as strategy$/, async (withdrawalStrategy) => {
  await console.log(`When I select ${withdrawalStrategy} as strategy`);
  await MFWithdrawalFunctionality.selectWithdrawalStrategy(withdrawalStrategy);
  if (withdrawalStrategy === Constants.WITHDRAW_CUSTOM_FUND_BASED_WITHDRAWAL) {
    expect(await MFWithdrawalFunctionality.selectCustomFundsPageLaunched(
      this.mutualFundPortfolio,
      this.withdrawalAmount)
    ).to.be.true;
  } else {
    expect(await MFWithdrawalFunctionality.taxOptimizedSelectedFundsPageLaunched(
      this.mutualFundPortfolio,
      this.withdrawalAmount)
    ).to.be.true;
  }
});

When(/^I select to withdraw half amount from fund "([^"]*)?" at index (\d+)$/, async (mutualFundName, index) => {
  await console.log(`When I select to withdraw half amount from fund ${mutualFundName} at index ${index}`);
  await MFWithdrawalFunctionality.selectFund(mutualFundName, this.withdrawalAmount / 2, index);
});

When(/^I click on "CONTINUE" button for withdrawal$/, async () => {
  await console.log(`When I click on "CONTINUE" button for withdrawal`);
  await MFWithdrawalFunctionality.continueWithFundAllocation(this.withdrawalAmount);
});

When(/^I click on button "(CONFIRM WITHDRAWAL|NO, STAY INVESTED|CANCEL)" for withdrawal$/, async (action) => {
  await console.log(`When I click on "${action}" button for withdrawal`);
  expect(await MFWithdrawalFunctionality.confirmWithdrawalPageLaunched()).to.be.true;
  await MFWithdrawalFunctionality.takeFinalAction(action);
});

When(/^I enter OTP as (\d+) for withdrawal$/, async (otp) => {
  await console.log(`When I enter OTP as ${otp} for withdrawal`);
  expect(await MFWithdrawalFunctionality.verifyOTPPageLaunched()).to.be.true;
  await MFWithdrawalFunctionality.verifyWithOTP(otp);
});

Then(/^I should see Withdrawal Scheduled success message$/, async () => {
  await console.log('Then I should see Withdrawal Scheduled success message');
  expect(await MFWithdrawalFunctionality.withdrawalScheduledPageLaunched()).to.be.true;
});
