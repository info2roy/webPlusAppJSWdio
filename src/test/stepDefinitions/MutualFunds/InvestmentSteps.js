const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const InvestmentFunctionality = require('../../../main/Functionalities/MutualFunds/InvestmentFunctionality');
const CommonInvestmentFunctionality = require('../../../main/Functionalities/Common/CommonInvestmentFunctionality');
const DashboardFunctionality = require('../../../main/Functionalities/DashboardFunctionality');

Given(/^I am on the Investment Page$/, async () => {
  await console.log('Given I am on the Investment Page');
  await DashboardFunctionality.invest();
  expect(await CommonInvestmentFunctionality.investmentPageLaunched()).to.be.true;
});

Given(/^I am on the Mutual Funds Tab$/, async () => {
  await console.log('Given I am on the Mutual Funds Tab');
  await CommonInvestmentFunctionality.selectInvestmentTab('Mutual Funds');
  expect(await InvestmentFunctionality.mutualFundsPageLaunched()).to.be.true;
});

When(/^I select portfolio (.+)$/, async (mutualFundPortfolio) => {
  await console.log(`When I select <mutualFundPortfolio>:${mutualFundPortfolio}`);
  this.mutualFundPortfolio = mutualFundPortfolio;
  await InvestmentFunctionality.selectMutualFundPortfolio(mutualFundPortfolio);
  expect(await InvestmentFunctionality.scripBoxGuidedPathPageLaunched()).to.be.true;
});

When(/^I Invest as per Scripbox Guided Path$/, async () => {
  await console.log(`When I select Invest as per Scripbox Guided Path for ${this.mutualFundPortfolio}`);
  await InvestmentFunctionality.investAsPerScripboxGuidedPath();
  expect(await InvestmentFunctionality.investmentFormPageLaunched()).to.be.true;
});

When(/^I fill form with agegroup (\d+s) and click NEXT$/, async (ageGroup) => {
  await console.log(`When I select my <ageGroup>:${ageGroup} and click NEXT`);
  await InvestmentFunctionality.fillMutualFundPortfolioForm(ageGroup);
  expect(await InvestmentFunctionality.investmentFormPageLaunched()).to.be.true;

});

When(/^I select (Every month \(SIP\)|One time|STP) and fill (\d+) and click to see recommended funds$/,
  async (investmentType, amount) => {
    this.amount = amount;
    this.investmentType = investmentType;
    await console.log(`When I select <investmentType>:${investmentType} and <amount>:${amount} and 
    click to see recommended funds`);
    await InvestmentFunctionality.fillInvestmentForm(investmentType, amount);
    expect(await InvestmentFunctionality.recommendedFundsPageIsLaunched()).to.be.true;
  }
);

When(/^I accept the recommended mutual fund allocation and click NEXT$/, async () => {
  await console.log('When I accept the recommended mutual fund allocation and click NEXT');
  await InvestmentFunctionality.acceptRecommendedFunds();
});

When(/^I select Payment type as (Immediate|Scheduled)$/, async (paymentType) => {
  await console.log(`When I select Payment type as ${paymentType} for amount ${this.amount}`);
  this.paymentType = paymentType;
  await InvestmentFunctionality.makePayment(paymentType);
});

When(/^I select SIP duration in months as (\d+) and click NEXT$/, async (sipDurationInMonths) => {
  await console.log(`When I select SIP duration in months as ${sipDurationInMonths} and click NEXT paymentType:${this.paymentType}`);
  expect(await InvestmentFunctionality.setupMFInvestmentPageLaunched(this.investmentType, this.amount, 180)).to.be.true;
  await InvestmentFunctionality.setupInvestment(sipDurationInMonths, this.paymentType, this.investmentType);
});

When(/^I select scheduled investment date and click NEXT*/, async () => {
  expect(await InvestmentFunctionality.setupMFInvestmentPageLaunched(this.investmentType, this.amount, 0)).to.be.true;
  await InvestmentFunctionality.setupInvestment(0, this.paymentType, this.investmentType);
});

When(/^I select Payment Instrument of type (.+)$/, async (paymentInstrumentType) => {
  await console.log(`When I select Payment Instrument of type ${paymentInstrumentType}`);
  expect(await InvestmentFunctionality.paymentInstrumentPageLaunched(this.paymentType)).to.be.true;
  await InvestmentFunctionality.selectPaymentInstrument(paymentInstrumentType);
  expect(await InvestmentFunctionality.transferFundsPageLaunched()).to.be.true;
});

When(/^I go to Bank for Payment Instrument of type (.+)$/, async (paymentInstrumentType) => {
  await console.log(`When I go to Bank for Payment Instrument of type ${paymentInstrumentType}`);
  await InvestmentFunctionality.goToBankForFundTransfer();
  expect(await InvestmentFunctionality.mockPaymentStatusPageLaunched()).to.be.true;
});

When(/^I select mock payment status as (Success|Failure)$/, async(paymentStatus) => {
  await console.log(`When I select mock payment status as ${paymentStatus}`);
  await InvestmentFunctionality.selectMockPaymentStatus(paymentStatus);
});

Then(/^I should see fund transfer success message$/, async () => {
  await console.log('Then I should see fund transfer success message');
  expect(await InvestmentFunctionality.fundTransferIsSuccessful()).to.be.true;
});

Then(/^I should see investment success message$/, async () => {
  await console.log('Then I should see investment success message');
  await InvestmentFunctionality.goToHome();
  expect(await InvestmentFunctionality.investmentIsSuccessful()).to.be.true;
});

Then(/^I should see investment scheduled successfully message$/, async () => {
  await console.log('I should see investment scheduled successfully message');
  expect(await InvestmentFunctionality.investmentScheduledSuccessfully()).to.be.true;
});

Then(/^I go back to the dashboard page$/, async () => {
  await console.log('Then I go back to the dashboard page');
  await DashboardFunctionality.open();
  await DashboardFunctionality.validate();
});
