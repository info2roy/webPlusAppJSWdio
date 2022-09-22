const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const RealEstateFunctionality = require('../../../main/Functionalities/RealEstate/RealEstateFunctionality');

When(/^I click on "Add Real Estate" for family member "([^"]*)?"$/,
  async (familyMember) => {
    await console.log(`When I click on "Add Real Estate" for family member "${familyMember}"`);
    this.familyMemberName = familyMember;

    if(await RealEstateFunctionality.realEstateInitialPageLaunched()) {
      console.log('No preexisting Real Estate present');
      this.realEstateTotalEstimatedCurrentValue = 0;
      this.realEstateTotalInvestedAmount = 0;
      this.realEstateTotalGainLossAmount = 0;
      expect(await RealEstateFunctionality.addRealEstate()).to.be.true;
      //expect(await RealEstateFunctionality.selectFamilyMember(familyMember)).to.be.true;

    } else {
      expect(await RealEstateFunctionality.selectFamilyMemberViaExpandMore(familyMember)).to.be.true;
      this.realEstateTotalEstimatedCurrentValue = await RealEstateFunctionality.getEstimatedCurrentValue();
      this.realEstateTotalInvestedAmount = await RealEstateFunctionality.getTotalInvestedAmount();
      this.realEstateTotalGainLossAmount = await RealEstateFunctionality.getTotalGainLossAmount();
      console.log(`MYWEALTH realEstateTotalEstimatedCurrentValue ${this.realEstateTotalEstimatedCurrentValue}`);
      console.log(`MYWEALTH realEstateTotalInvestedAmount ${this.realEstateTotalInvestedAmount}`);
      console.log(`MYWEALTH realEstateTotalGainLossAmount ${this.realEstateTotalGainLossAmount}`);
      expect(await RealEstateFunctionality.addRealEstate()).to.be.true;
    }
  }
);

When(/^I fill (.+) form with (.+), (\d+), (\d+), (\d+), (.+)$/,
  async (wealthType, propertyName, propertyPrice, purchaseYear, currentValue, expectedYoyGrowthRate) => {
    console.log(`When I fill ${wealthType} form with ${propertyName}, ${propertyPrice}, ${purchaseYear}, ${currentValue}, ${expectedYoyGrowthRate}`);
    this.realEstatePropertyName = propertyName;
    this.realEstatePropertyPrice = propertyPrice;
    this.realEstatePurchaseYear = purchaseYear;
    this.realEstateCurrentValue = currentValue;
    this.realEstateYoYGrowthRate = expectedYoyGrowthRate;
    expect(await RealEstateFunctionality.fillAddRealEstateForm(wealthType, propertyName, propertyPrice, purchaseYear, currentValue)).to.be.true;
  }
);

Then(/^"Real Estate" Property details are shown correctly$/, async() => {
  console.log('"Real Estate" Property details are shown correctly');
  expect(await RealEstateFunctionality.selectFamilyMemberViaExpandMore(this.familyMemberName)).to.be.true;
  await RealEstateFunctionality.validateRealEstatePropertyDetails(this.realEstatePropertyName, this.realEstatePropertyPrice,
    this.realEstatePurchaseYear, this.realEstateCurrentValue, this.realEstateYoYGrowthRate, this.realEstateTotalEstimatedCurrentValue,
    this.realEstateTotalInvestedAmount, this.realEstateTotalGainLossAmount);
});

When(/^I edit the (.+) property (.+) with (.+), (\d+), (\d+), (\d+), (.+)$/,
  async(wealthType, propertyName, newPropertyName, propertyPrice, purchaseYear, currentValue, expectedYoyGrowthRate) => {
    console.log(`When I edit the ${wealthType} property ${propertyName} with ${newPropertyName}, ${propertyPrice}, ${purchaseYear}, ${currentValue}, ${expectedYoyGrowthRate}`);
    this.realEstatePropertyName = newPropertyName;
    this.realEstatePropertyPrice = propertyPrice;
    this.realEstatePurchaseYear = purchaseYear;
    this.realEstateCurrentValue = currentValue;
    this.realEstateYoYGrowthRate = expectedYoyGrowthRate;
    expect(await RealEstateFunctionality.updateRealEstateProperty(wealthType, propertyName, newPropertyName, propertyPrice, purchaseYear, currentValue)).to.be.true;
  }
);

When(/^I delete the (.+) property (.+)$/, async(wealthType, propertyName) => {
  console.log(`When I delete the ${wealthType} property ${propertyName}`);
  expect(await RealEstateFunctionality.deleteRealEstate(propertyName)).to.be.true;
});
