const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const MFInvestmentFunctionality = require('../../../main/Functionalities/MutualFunds/MFInvestmentFunctionality');
const DashboardFunctionality = require('../../../main/Functionalities/DashboardFunctionality');

When(/^I select mutual fund portfolio (.+)$/, async (mutualFundPortfolio) => {
  await console.log(`When I select mutual fund portfolio ${mutualFundPortfolio}`);
  this.mutualFundPortfolio = mutualFundPortfolio;
  expect(await MFInvestmentFunctionality.selectMutualFundPortfolio(mutualFundPortfolio)).to.be.true;
});

When(/^I click on Invest as per Scripbox Guided Path$/, async () => {
  await console.log(`When I click on Invest as per Scripbox Guided Path for ${this.mutualFundPortfolio}`);
  await MFInvestmentFunctionality.investAsPerScripboxGuidedPath();
  expect(await MFInvestmentFunctionality.investmentFormPageLaunched()).to.be.true;
});

When(/^I fill form with agegroup (\d+s) and click NEXT$/, async (ageGroup) => {
  await console.log(`When I select my <ageGroup>:${ageGroup} and click NEXT`);
  await MFInvestmentFunctionality.fillMutualFundPortfolioForm(ageGroup);
  expect(await MFInvestmentFunctionality.investmentFormPageLaunched()).to.be.true;

});

When(/^I select (Every month \(SIP\)|One time|STP) and fill (\d+) and click to see recommended funds$/,
  async (investmentType, amount) => {
    await console.log(`When I select <investmentType>:${investmentType} and <amount>:${amount} and 
    click to see recommended funds`);
    this.amount = amount;
    this.investmentType = investmentType;
    await MFInvestmentFunctionality.fillInvestmentForm(investmentType, amount);
    expect(await MFInvestmentFunctionality.recommendedFundsPageIsLaunched()).to.be.true;
  }
);

When(/^I accept the recommended mutual fund allocation and click NEXT$/, async () => {
  await console.log('When I accept the recommended mutual fund allocation and click NEXT');
  await MFInvestmentFunctionality.acceptRecommendedFunds();
});

When(/^I select Payment type as (Immediate|Scheduled)$/, async (paymentType) => {
  await console.log(`When I select Payment type as ${paymentType}`);
  this.paymentType = paymentType;
  await MFInvestmentFunctionality.makePayment(paymentType);
});

When(/^I select SIP duration in months as (\d+) and click NEXT$/, async (sipDurationInMonths) => {
  await console.log(`When I select SIP duration in months as ${sipDurationInMonths} and click NEXT paymentType:${this.paymentType}`);
  expect(await MFInvestmentFunctionality.setupMFInvestmentPageLaunched(this.investmentType, this.amount, 180)).to.be.true;
  await MFInvestmentFunctionality.setupInvestment(sipDurationInMonths, this.paymentType, this.investmentType);
});

When(/^I select scheduled investment date and click NEXT*/, async () => {
  expect(await MFInvestmentFunctionality.setupMFInvestmentPageLaunched(this.investmentType, this.amount, 0)).to.be.true;
  await MFInvestmentFunctionality.setupInvestment(0, this.paymentType, this.investmentType);
});

When(/^I select Payment Instrument of type (.+)$/, async (paymentInstrumentType) => {
  await console.log(`When I select Payment Instrument of type ${paymentInstrumentType}`);
  this.paymentInstrumentType = paymentInstrumentType;
  expect(await MFInvestmentFunctionality.paymentInstrumentPageLaunched(this.paymentType)).to.be.true;
  await MFInvestmentFunctionality.selectPaymentInstrument(paymentInstrumentType);
  expect(await MFInvestmentFunctionality.transferFundsPageLaunched()).to.be.true;
});

When(/^I go for Payment via selected Payment Instrument$/, async () => {
  await console.log(`I go for Payment via selected Payment Instrument ${this.paymentInstrumentType}`);
  await MFInvestmentFunctionality.goToBankForFundTransfer();
  expect(await MFInvestmentFunctionality.mockPaymentStatusPageLaunched()).to.be.true;
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

Then(/^I go back to the dashboard page$/, async () => {
  await console.log('Then I go back to the dashboard page');
  await DashboardFunctionality.open();
  await DashboardFunctionality.validate();
});