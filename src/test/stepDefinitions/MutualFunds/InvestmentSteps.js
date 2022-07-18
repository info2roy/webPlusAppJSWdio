const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const InvestmentFunctionality = require('../../../main/Functionalities/MutualFunds/InvestmentFunctionality');
const CommonInvestmentFunctionality = require('../../../main/Functionalities/Common/CommonInvestmentFunctionality');
const DashboardFunctionality = require('../../../main/Functionalities/DashboardFunctionality');
const PersonalInfoFunctionality = require('../../../main/Functionalities/PersonalInfoFunctionality');
const Constants = require('../../../support/Constants/Constants');

Given(/^I am on the Investment Page$/, async () => {
  await console.log('Given I am on the Investment Page');
  await DashboardFunctionality.invest();
  expect(await CommonInvestmentFunctionality.investmentPageLaunched()).to.be.true;
});

Given(/^I am on the Mutual Funds Tab$/, async () => {
  await console.log('Given I am on the Mutual Funds Tab');
  await CommonInvestmentFunctionality.selectInvestmentTab(Constants.INVESTMENT_INSTRUMENT_MUTUAL_FUND);
  expect(await InvestmentFunctionality.mutualFundsPageLaunched()).to.be.true;
});

When(/^I select portfolio (.+)$/, async (mutualFundPortfolio) => {
  await console.log(`When I select portfolio ${mutualFundPortfolio}`);
  this.mutualFundPortfolio = mutualFundPortfolio;
  await InvestmentFunctionality.selectMutualFundPortfolio(mutualFundPortfolio);
  expect(await InvestmentFunctionality.scripBoxGuidedPathPageLaunched()).to.be.true;
});

When(/^I click on Invest as per Scripbox Guided Path$/, async () => {
  await console.log(`When I click on Invest as per Scripbox Guided Path for ${this.mutualFundPortfolio}`);
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
    await console.log(`When I select <investmentType>:${investmentType} and <amount>:${amount} and 
    click to see recommended funds`);
    this.amount = amount;
    this.investmentType = investmentType;
    await InvestmentFunctionality.fillInvestmentForm(investmentType, amount);
    expect(await InvestmentFunctionality.recommendedFundsPageIsLaunched()).to.be.true;
  }
);

When(/^I accept the recommended mutual fund allocation and click NEXT$/, async () => {
  await console.log('When I accept the recommended mutual fund allocation and click NEXT');
  await InvestmentFunctionality.acceptRecommendedFunds();
});

When(/^I select Payment type as (Immediate|Scheduled)$/, async (paymentType) => {
  await console.log(`When I select Payment type as ${paymentType}`);
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
  this.paymentInstrumentType = paymentInstrumentType;
  expect(await InvestmentFunctionality.paymentInstrumentPageLaunched(this.paymentType)).to.be.true;
  await InvestmentFunctionality.selectPaymentInstrument(paymentInstrumentType);
  expect(await InvestmentFunctionality.transferFundsPageLaunched()).to.be.true;
});

When(/^I go for Payment via selected Payment Instrument$/, async () => {
  await console.log(`I go for Payment via selected Payment Instrument ${this.paymentInstrumentType}`);
  await InvestmentFunctionality.goToBankForFundTransfer();
  expect(await InvestmentFunctionality.mockPaymentStatusPageLaunched()).to.be.true;
});

When(/^I select mock payment status as (Success|Failure)$/, async (paymentStatus) => {
  await console.log(`When I select mock payment status as ${paymentStatus}`);
  await InvestmentFunctionality.selectMockPaymentStatus(paymentStatus);
});

Then(/^I should see fund transfer success message and click on HOME/, async () => {
  await console.log('Then I should see fund transfer success message and click on HOME');
  expect(await InvestmentFunctionality.fundTransferIsSuccessful()).to.be.true;
});

Then(/^I should see investment success message and click on HOME$/, async () => {
  await console.log('Then I should see investment success message and click on HOME');
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

When(/^I select option "([^"]*)?"$/, async (option) => {
  console.log("Navigating to page --> " + option.toString())
  switch (option.toString()) {
    case 'Statements and Tax Reports':
      await DashboardFunctionality.selectStatementsAndTaxReports();
      expect(await PersonalInfoFunctionality.MFPageLaunched()).to.be.true;
      break;
    case 'Account and Family Information':
      await DashboardFunctionality.selectAccountFamilyInformation();
      expect(await PersonalInfoFunctionality.profileInfoPageLaunched()).to.be.true;
      break;
    case 'personal information':
      await DashboardFunctionality.selectPersonalInformation();
      expect(await PersonalInfoFunctionality.profileInfoPageLaunched()).to.be.true;
      break;
    default:
      console.log(option + ' Option not available');
  }
});

When(/^I navigate to "([^"]*)?" page$/, async (option) => {
  console.log("Navigating to MF page --> " + option.toString())
  switch (option.toString()) {
    case 'Investment history':
      expect(await InvestmentFunctionality.navigateToMFPage('Investment history')).to.be.true;
      break;
    case 'Fund holdings':
      expect(await InvestmentFunctionality.navigateToMFPage('Fund holdings')).to.be.true;
      break;
    case 'Tax statements':
      expect(await InvestmentFunctionality.navigateToMFPage('Tax statements')).to.be.true;
      break;
    case 'Capital gains':
      expect(await InvestmentFunctionality.navigateToMFPage('Capital gains')).to.be.true;
      break;
    default:
      console.log(option + ' Option not available');
      expect(false).to.be.true;
  }
});



