const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const WithdrawalFunctionality = require('../../../main/Functionalities/MutualFunds/WithdrawalFunctionality');

When(/^I select a family member "([^"]*)?" for withdrawal$/, async (familyMember) => {
  await console.log(`When I select a family member "${familyMember}" for withdrawal`);
  expect(await WithdrawalFunctionality.selectFamilyMemberPageLaunched()).to.be.true;
  await WithdrawalFunctionality.selectFamilyMember(familyMember);
});

When(/^I select "([^"]*)?" as financial product for withdrawal$/, async (financialProduct) => {
  await console.log(`When I select "${financialProduct}" as financial product for withdrawal`);
  expect(await WithdrawalFunctionality.selectFinancialProductPageLaunched()).to.be.true;
  await WithdrawalFunctionality.selectFinancialProduct(financialProduct);
  await browser.pause(5000);
});

When(/^I select for withdrawal the portfolio (.+)$/, async (mutualFundPortfolio) => {
  await console.log(`When I select for withdrawal the portfolio ${mutualFundPortfolio}`);
  this.mutualFundPortfolio = mutualFundPortfolio;
  expect(await WithdrawalFunctionality.selectMFPlanPageLaunched()).to.be.true;
  await WithdrawalFunctionality.selectMFPlan(mutualFundPortfolio);
});

When(/^I select withdrawal bank option as "(CONTINUE WITH SAME BANK|NO, STAY INVESTED)"$/, async (withdrawalBankOption) => {
  await console.log(`When I select withdrawal bank option as ${withdrawalBankOption}`);
  expect(await WithdrawalFunctionality.confirmBankDetailsPageLaunched()).to.be.true;
  await WithdrawalFunctionality.selectWithdrawalBankOption(withdrawalBankOption);
});

When(/^I enter withdrawal amount as (\d+) and click "(Next|NEXT|SELECT FUNDS)" button$/, async (withdrawalAmount, buttonText) => {
  await console.log(`When I enter withdrawal amount as ${withdrawalAmount}`);
  this.withdrawalAmount = withdrawalAmount;
  expect(await WithdrawalFunctionality.withdrawAmountPageLaunched(this.mutualFundPortfolio)).to.be.true;
  await WithdrawalFunctionality.fillWithdrawAmountForm(withdrawalAmount, buttonText);
  expect(await WithdrawalFunctionality.selectFundsPageLaunched(this.mutualFundPortfolio, this.withdrawalAmount)).to.be.true;
});

When(/^I select to withdraw half amount from fund "([^"]*)?" at index (\d+)$/, async (mutualFundName, index) => {
  await console.log(`When I select to withdraw half amount from fund ${mutualFundName} at index ${index}`);
  await WithdrawalFunctionality.selectFund(mutualFundName, this.withdrawalAmount / 2, index);
});

When(/^I click on "CONTINUE" button for withdrawal$/, async () => {
  await console.log(`When I click on "CONTINUE" button for withdrawal`);
  await WithdrawalFunctionality.continueWithFundAllocation(this.withdrawalAmount);
});

When(/^I click on button "(CONFIRM WITHDRAWAL|NO, STAY INVESTED|CANCEL)" for withdrawal$/, async (action) => {
  await console.log(`When I click on "${action}" button for withdrawal`);
  expect(await WithdrawalFunctionality.confirmWithdrawalPageLaunched()).to.be.true;
  await WithdrawalFunctionality.takeFinalAction(action);
});

When(/^I click on Get OTP to verify with OTP$/, async () => {
  await console.log('When I click on Get OTP to verify with OTP');
});

When(/^I enter OTP as (\d+) for withdrawal$/, async (otp) => {
  await console.log(`When I enter OTP as ${otp} for withdrawal`);
  expect(await WithdrawalFunctionality.verifyOTPPageLaunched()).to.be.true;
  await WithdrawalFunctionality.verifyWithOTP(otp);
});

Then(/^I should see Withdrawal Scheduled success message$/, async () => {
  await console.log('Then I should see Withdrawal Scheduled success message');
  expect(await WithdrawalFunctionality.withdrawalScheduledPageLaunched()).to.be.true;
});
