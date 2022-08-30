const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const CommonFunctionality = require('../../../main/Functionalities/Common/CommonFunctionality');
const FixedDepositFunctionality = require('../../../main/Functionalities/FixedDeposit/FixedDepositFunctionality');

When(/^I click on "Add existing Fixed Deposit" for family member "([^"]*)?"$/,
  async (familyMember) => {
    await console.log(`When I click on "Add Real Estate" for family member "${familyMember}"`);
    this.familyMemberName = familyMember;

    if(await CommonFunctionality.fixedDepositInitialPageLaunched()) {
      console.log('No preexisting Fixed Deposit present');
      this.fixedDepositTotalInvestedAmountForMember = 0;
      expect(await FixedDepositFunctionality.addExistingFixedDepositInitialState()).to.be.true;
      expect(await FixedDepositFunctionality.selectFamilyMember(familyMember)).to.be.true;

    } else {
      expect(await FixedDepositFunctionality.selectFamilyMember(familyMember)).to.be.true;
      this.fixedDepositTotalInvestedAmountForMember = await FixedDepositFunctionality.getTotalInvestedAmount();
      console.log(`MYWEALTH realEstateTotalInvestedAmountForMember ${this.realEstateTotalInvestedAmountForMember}`);
      expect(await FixedDepositFunctionality.addRealEstate()).to.be.true;
    }
  }
);

When(/^I fill "Real Estate" form with (.+), (\d+), (\d+), (\d+), (.+)$/,
  async (propertyName, propertyPrice, purchaseYear, currentValue, expectedYoyGrowthRate) => {
    console.log(`When I fill "Real Estate" form with ${propertyName}, ${propertyPrice}, ${purchaseYear}, ${currentValue}, ${expectedYoyGrowthRate}`);
    this.realEstatePropertyName = propertyName;
    this.realEstatePropertyPrice = propertyPrice;
    this.realEstatePurchaseYear = purchaseYear;
    this.realEstateCurrentValue = currentValue;
    this.realEstateYoYGrowthRate = expectedYoyGrowthRate;
    expect(await FixedDepositFunctionality.fillAddRealEstateForm(propertyName, propertyPrice, purchaseYear, currentValue)).to.be.true;
  }
);