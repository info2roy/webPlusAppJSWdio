const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const CommonFunctionality = require('../../../main/Functionalities/Common/CommonFunctionality');
const FixedDepositFunctionality = require('../../../main/Functionalities/FixedDeposit/FixedDepositFunctionality');

When(/^I click on "Add existing Fixed Deposit" for family member "([^"]*)?"$/,
  async (familyMember) => {
    await console.log(`When I click on "Add existing Fixed Deposit" for family member "${familyMember}"`);
    this.familyMemberName = familyMember;

    if(await CommonFunctionality.fixedDepositInitialPageLaunched()) {
      console.log('No preexisting Fixed Deposit present');
      this.fixedDepositTotalInvestedAmountForMember = 0;
      expect(await FixedDepositFunctionality.addExistingFixedDepositInitialState()).to.be.true;
      expect(await FixedDepositFunctionality.selectFamilyMember(familyMember)).to.be.true;

    } else {
      expect(await FixedDepositFunctionality.selectFamilyMemberViaExpandMore(familyMember)).to.be.true;
      this.fixedDepositTotalInvestedAmountForMember = await FixedDepositFunctionality.getTotalInvestedAmount();
      console.log(`MYWEALTH fixedDepositTotalInvestedAmountForMember ${this.fixedDepositTotalInvestedAmountForMember}`);
      expect(await FixedDepositFunctionality.addExistingFixedDepositInitializedState()).to.be.true;
    }
  }
);

When(/^I fill "Fixed Deposit" form with (.+); (\d+); (.+); (.+); (.+)$/,
  async (firmName, investedAmount, interestRate, startMonth, maturityMonth) => {
    console.log(`When I fill "Fixed Deposit" form with ${firmName}, ${investedAmount}, ${interestRate}, ${startMonth}, ${maturityMonth}`);
    this.fixedDepositFirmName = firmName;
    this.fixedDepositInvestedAmount = investedAmount;
    this.fixedDepositInterestRate = interestRate;
    this.fixedDepositStartMonth = startMonth;
    this.fixedDepositMaturityMonth = maturityMonth;
    expect(await FixedDepositFunctionality.fillAddFDForm(firmName, investedAmount, interestRate, startMonth, maturityMonth)).to.be.true;
  }
);

Then(/^Fixed Deposit details are shown correctly$/, async() => {
  console.log('Fixed Deposit details are shown correctly');
  await FixedDepositFunctionality.validateFixedDepositDetails(this.fixedDepositFirmName, this.fixedDepositInvestedAmount,
    this.fixedDepositInterestRate, this.fixedDepositStartMonth, this.fixedDepositMaturityMonth);
});

When(/^I edit the "Fixed Deposit" of (\d+) with (.+); (\d+); (.+); (.+); (.+)$/,
  async (investedAmount, firmName, newInvestedAmount, interestRate, startMonth, maturityMonth) => {
    console.log(`When I edit the "Fixed Deposit" of ${investedAmount} with ${firmName}, ${newInvestedAmount}, ${interestRate}, ${startMonth}, ${maturityMonth}`);
    this.fixedDepositFirmName = firmName;
    this.fixedDepositInvestedAmount = newInvestedAmount;
    this.fixedDepositInterestRate = interestRate;
    this.fixedDepositStartMonth = startMonth;
    this.fixedDepositMaturityMonth = maturityMonth;
    expect(await FixedDepositFunctionality.editFixedDeposit(investedAmount, newInvestedAmount, interestRate, startMonth, maturityMonth)).to.be.true;
  }
);

When(/^I delete the "Fixed Deposit" of (\d+)$/, async(investedAmount) => {
  console.log(`When I delete the "Fixed Deposit" of ${investedAmount}`);
  expect(await FixedDepositFunctionality.deleteFixedDeposit(investedAmount)).to.be.true;
});

