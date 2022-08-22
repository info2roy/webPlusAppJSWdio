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
    this.lifeGoal = ''; //life goal like Retire Confident|Premier Education
    this.classOfChild = 0; //the class of the child
    this.childname = ''; //the name of the child
    this.uat = 0; //the uat id , either 2 or 38
    this.govtSchemesInvestedAmount = 0; //the total invested amount for Govt Schemes
    this.govtSchemePercentAndAmount = []; //array containing two values [percent, amount]
  }
}
setWorldConstructor(CustomWorld);

