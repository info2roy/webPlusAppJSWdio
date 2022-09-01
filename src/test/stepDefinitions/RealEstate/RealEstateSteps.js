const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const RealEstateFunctionality = require('../../../main/Functionalities/RealEstate/RealEstateFunctionality');

When(/^I click on "Add Real Estate" for family member "([^"]*)?"$/,
  async (familyMember) => {
    await console.log(`When I click on "Add Real Estate" for family member "${familyMember}"`);
    this.familyMemberName = familyMember;

    if(await RealEstateFunctionality.realEstateInitialPageLaunched()) {
      console.log('No preexisting Real Estate present');
      this.realEstateTotalInvestedAmountForMember = 0;
      expect(await RealEstateFunctionality.addRealEstate()).to.be.true;
      expect(await RealEstateFunctionality.selectFamilyMember(familyMember)).to.be.true;

    } else {
      expect(await RealEstateFunctionality.selectFamilyMemberViaExpandMore(familyMember)).to.be.true;
      this.realEstateTotalInvestedAmountForMember = await RealEstateFunctionality.getTotalInvestedAmount();
      console.log(`MYWEALTH realEstateTotalInvestedAmountForMember ${this.realEstateTotalInvestedAmountForMember}`);
      expect(await RealEstateFunctionality.addRealEstate()).to.be.true;
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
    expect(await RealEstateFunctionality.fillAddRealEstateForm(propertyName, propertyPrice, purchaseYear, currentValue)).to.be.true;
  }
);

Then(/^Real Estate Property details are shown correctly$/, async() => {
  console.log('Real Estate Property details are shown correctly');
  expect(await RealEstateFunctionality.selectFamilyMemberViaExpandMore(this.familyMemberName)).to.be.true;
  await RealEstateFunctionality.validateRealEstatePropertyDetails(this.realEstatePropertyName, this.realEstatePropertyPrice,
    this.realEstatePurchaseYear, this.realEstateCurrentValue, this.realEstateYoYGrowthRate);
});

When(/^I edit the Real Estate property (.+) with (.+), (\d+), (\d+), (\d+), (.+)$/,
  async(propertyName, newPropertyName, propertyPrice, purchaseYear, currentValue, expectedYoyGrowthRate) => {
    console.log(`When I edit the Real Estate property ${propertyName} with ${newPropertyName}, ${propertyPrice}, ${purchaseYear}, ${currentValue}, ${expectedYoyGrowthRate}`);
    this.realEstatePropertyName = newPropertyName;
    this.realEstatePropertyPrice = propertyPrice;
    this.realEstatePurchaseYear = purchaseYear;
    this.realEstateCurrentValue = currentValue;
    this.realEstateYoYGrowthRate = expectedYoyGrowthRate;
    expect(await RealEstateFunctionality.updateRealEstateProperty(propertyName, newPropertyName, propertyPrice, purchaseYear, currentValue)).to.be.true;
  }
);
