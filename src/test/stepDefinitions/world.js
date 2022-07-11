const { setWorldConstructor } = require('@wdio/cucumber-framework');

class CustomWorld {
  constructor() {
    this.investmentType = ''; // Every month (SIP)|One time|STP
    this.paymentType = ''; //Immediate|Scheduled
    this.amount = 0;
  }
}
setWorldConstructor(CustomWorld);

