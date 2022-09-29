const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const MFInvestmentFunctionality = require('../../../main/Functionalities/MutualFunds/MFInvestmentFunctionality');

When(/^I select mutual fund portfolio (.+)$/, async (mutualFundPortfolio) => {
  await console.log(`When I select mutual fund portfolio ${mutualFundPortfolio}`);
  this.mutualFundPortfolio = mutualFundPortfolio;
  expect(await MFInvestmentFunctionality.selectMutualFundPortfolio(mutualFundPortfolio)).to.be.true;
});

When(/^I click on Invest as per Scripbox Guided Path$/, async () => {
  await console.log(`When I click on Invest as per Scripbox Guided Path for ${this.mutualFundPortfolio}`);
  expect(await MFInvestmentFunctionality.investAsPerScripboxGuidedPath()).to.be.true;
});

When(/^I select (Every month \(SIP\)|One time|STP) and fill (\d+) and click to see recommended funds$/,
  async (investmentType, amount) => {
    await console.log(`When I select <investmentType>:${investmentType} and <amount>:${amount} and 
    click to see recommended funds`);
    this.amount = amount;
    this.investmentType = investmentType;
    expect(await MFInvestmentFunctionality.fillInvestmentForm(investmentType, amount, true)).to.be.true;
  }
);

When(/^I have already selected (Every month \(SIP\)|One time|STP) and fill (\d+) and click to see recommended funds$/,
  async (investmentType, amount) => {
    await console.log(`When I have already selected <investmentType>:${investmentType} and <amount>:${amount} and 
    click to see recommended funds`);
    this.amount = amount;
    this.investmentType = investmentType;
    expect(await MFInvestmentFunctionality.fillInvestmentForm(investmentType, amount, false)).to.be.true;
  }
);

When(/^I accept the recommended mutual fund allocation and click NEXT$/, async () => {
  await console.log('When I accept the recommended mutual fund allocation and click NEXT');
  expect(await MFInvestmentFunctionality.acceptRecommendedFunds(this.investmentType, this.amount)).to.be.true;
});

When(/^I select Payment type as (Immediate|Scheduled)$/, async (paymentType) => {
  await console.log(`When I select Payment type as ${paymentType}`);
  this.paymentType = paymentType;
  await MFInvestmentFunctionality.makePayment(paymentType);
});

When(/^I select SIP duration in months as (\d+) and click NEXT$/, async (sipDurationInMonths) => {
  await console.log(`When I select SIP duration in months as ${sipDurationInMonths} and click NEXT paymentType:${this.paymentType}`);
  await MFInvestmentFunctionality.setupInvestment(sipDurationInMonths, this.paymentType, this.investmentType);
  expect(await MFInvestmentFunctionality.paymentInstrumentPageLaunched(this.paymentType)).to.be.true;
});

When(/^I select scheduled investment date and click NEXT*/, async () => {
  expect(await MFInvestmentFunctionality.setupMFInvestmentPageLaunched(this.investmentType, this.amount, 0)).to.be.true;
  await MFInvestmentFunctionality.setupInvestment(0, this.paymentType, this.investmentType);
  expect(await MFInvestmentFunctionality.paymentInstrumentPageLaunched(this.paymentType)).to.be.true;
});

When(/^I select Payment Instrument of type (.+)$/, async (paymentInstrumentType) => {
  await console.log(`When I select Payment Instrument of type ${paymentInstrumentType}`);
  this.paymentInstrumentType = paymentInstrumentType;
  expect(await MFInvestmentFunctionality.selectPaymentInstrument(paymentInstrumentType)).to.be.true;
});

When(/^I go for Payment via selected Payment Instrument$/, async () => {
  await console.log(`I go for Payment via selected Payment Instrument ${this.paymentInstrumentType}`);
  expect(await MFInvestmentFunctionality.goToBankForFundTransfer()).to.be.true;
});

When(/^I select mock payment status as (Success|Failure)$/, async (paymentStatus) => {
  await console.log(`When I select mock payment status as ${paymentStatus}`);
  await MFInvestmentFunctionality.selectMockPaymentStatus(paymentStatus);
});

Then(/^I should see fund transfer success message and click on HOME/, async () => {
  await console.log('Then I should see fund transfer success message and click on HOME');
  expect(await MFInvestmentFunctionality.fundTransferIsSuccessful()).to.be.true;
});

Then(/^I should see investment success message and click on HOME$/, async () => {
  await console.log('Then I should see investment success message and click on HOME');
  await MFInvestmentFunctionality.goToHome();
  expect(await MFInvestmentFunctionality.investmentIsSuccessful()).to.be.true;
});

Then(/^I should see investment scheduled successfully message$/, async () => {
  await console.log('I should see investment scheduled successfully message');
  expect(await MFInvestmentFunctionality.investmentScheduledSuccessfully()).to.be.true;
});

When(/^I click on "Add new plan" for mutual funds$/, async () => {
  await console.log('When I click on "Add new plan" for mutual funds');
  await MFInvestmentFunctionality.addNewPlanOrExploreOtherPlans();
  expect(await MFInvestmentFunctionality.addNewPlanPageLaunched()).to.be.true;
});

When(/^I click on "VIEW INVESTMENTS" button$/, async () => {
  await console.log('When I click on "VIEW INVESTMENTS" button');
  expect(await MFInvestmentFunctionality.viewInvestments()).to.be.true;
});

When(/^I search mutual fund (.+)$/, async (mutualFund) => {
  await console.log(`I search mutual fund ${mutualFund}`);
  expect(await MFInvestmentFunctionality.searchMutualFund(mutualFund)).to.be.true;
});

When(/^I perform pick fund for first available fund$/, async () => {
  await console.log(`I perform pick fund for first available fund`);
  expect(await MFInvestmentFunctionality.pickFund()).to.be.true;
});

When(/^I enter SIP fund (.+) and (.+)$/, async (amount, duration) => {
  await console.log(`I enter SIP fund ${amount} and ${duration}`);
  await MFInvestmentFunctionality.enterSIPDetails(amount, duration);
});

When(/^I select date (.+)$/, async (date) => {
  await console.log(`I select date ${date}`);
  await MFInvestmentFunctionality.selectSIPFrequency(date);
});