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
    this.familyMemberName = ''; //name of the family member
    this.govtSchemesTotalInvestedAmount = 0; //the total invested amount for Govt Schemes
    this.singleGovtSchemePercentAndAmount = [0, 0]; //array containing two values [percent, amount] for all family member for Single Govt Scheme
    this.singleGovtSchemeAbsoluteAmount = 0; //the abosolute amount for all family members, for a Single Govt Scheme
    this.govtSchemesTotalInvestedAmountForMember = 0; //the total invested amount for a given single Family Member for Single Govt Scheme
    this.singleGovtSchemePercentAndAmountForMember = [0, 0]; //array containing two values [percent, amount] for a given single family member for Single Govt Scheme
    this.singleGovtSchemeAbsoluteAmountForMember = 0; //the abosolute amount for a given single family member, for a Single Govt Scheme
    this.npsFundName = ''; //the NPS fund name
    this.npsEquityAmount = 0; //the NPS equity Investment amount
    this.npsGovtSecurityAmount = 0; //the NPS Govt Securities Investment amount
    this.npsCorpDebtAmount = 0; //the NPS Corp. Debt Investment amount
    this.npsAltInvestmentFundsAmount = 0; //this NPS Alternate Investment Funds amount
  }
}
setWorldConstructor(CustomWorld);

