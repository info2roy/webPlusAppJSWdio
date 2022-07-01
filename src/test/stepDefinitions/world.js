const { setWorldConstructor } = require('@wdio/cucumber-framework');

class CustomWorld {
  constructor() {
    this.paymentType = '';
  }
}
setWorldConstructor(CustomWorld);

