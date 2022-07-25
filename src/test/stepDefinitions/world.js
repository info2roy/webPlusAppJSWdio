const { setWorldConstructor } = require('@wdio/cucumber-framework');

class CustomWorld {
  constructor() {
    this.mutualFundPortfolio = ''; //Core Mutual Fund Portfolio|Emergency Fund|Tax Saver Plan
    this.investmentType = ''; // Every month (SIP)|One time|STP
    this.paymentType = ''; //Immediate|Scheduled
    this.paymentInstrumentType = ''; //Net Banking|UPI
    this.amount = 0; //a value greater than zero
    this.sipDurationInMonths = 0; //no of months for SIP duration
    this.withdrawalAmount = 0; //amount to be withdrawn
  }
}
setWorldConstructor(CustomWorld);
