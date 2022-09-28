const Constants = require('../../../config/data/structured/Constants');
const Utils = require('../../../support/Utils/Utils');
const RealEstateObjects = require('../../Objects/RealEstate/RealEstateObjects');
const CommonMyWealthPage = require('../../Pages/Common/CommonMyWealthPage');
const CommonPage = require('../../Pages/Common/CommonPage');
const RealEstatePage = require('../../Pages/RealEstate/RealEstatePage');
const CommonFunctionality = require('../Common/CommonFunctionality');
const { expect } = require('chai');

class RealEstateFunctionality {

  async realEstateInitialPageLaunched() {
    return (await RealEstatePage.realEstateInitialPageHeaderIsDisplayed());
  }

  async addRealEstate() {
    await RealEstatePage.clickAddRealEstateButton();
    return (await RealEstatePage.addRealEstatePageHeaderIsDisplayed());
  }

  async selectFamilyMember(familyMemberName) {
    return await CommonFunctionality.selectFamilyMember(familyMemberName,
      RealEstateObjects.addRealEstatePageHeader);
  }

  async selectFamilyMemberViaExpandMore(familyMemberName) {
    return await CommonFunctionality.selectFamilyMemberViaExpandMore(familyMemberName,
      RealEstateObjects.estimatedCurrentValueHeader);
  }

  async getEstimatedCurrentValue() {
    return (await RealEstatePage.getEstimatedCurrentValue());
  }

  async getTotalInvestedAmount() {
    return (await RealEstatePage.getInvestedAmount());
  }

  async getTotalGainLossAmount() {
    return (await RealEstatePage.getGainLossAmount());
  }

  async fillAddRealEstateForm(wealthType, propertyName, propertyPrice, purchaseYear, currentValue) {
    await RealEstatePage.enterPropertyName(propertyName);
    await RealEstatePage.enterPropertyPrice(propertyPrice);
    await RealEstatePage.enterPurchaseYear(purchaseYear);
    await RealEstatePage.enterCurrentValue(currentValue);
    await CommonPage.clickSaveOrUpdateButton();
    return (await CommonMyWealthPage.wealthUpdateSuccessMessageIsDisplayed(wealthType));
  }

  async validateRealEstatePropertyDetails(propertyName, propertyPrice, purchaseYear, currentValue, expectedYoYGrowthRate,
    prevTotalEstimatedCurrentValue, prevTotalInvestedAmount, prevTotalGainLossAmount) {
    expect(await RealEstatePage.realEstatePropertyGetStringAttribute(propertyName, 1, Constants.REAL_ESTATE_ATTR_PURCHASE_COST)
    ).to.equal(Utils.absoluteValueToNumberAbbriviation(propertyPrice));
    expect(await RealEstatePage.realEstatePropertyGetStringAttribute(propertyName, 2, Constants.REAL_ESTATE_ATTR_CURRENT_VALUE)
    ).to.equal(Utils.absoluteValueToNumberAbbriviation(currentValue));
    expect(await RealEstatePage.realEstatePropertyGetPurchaseYear(propertyName)).to.equal(purchaseYear);
    expect(await RealEstatePage.realEstatePropertyGetStringAttribute(propertyName, 3, Constants.REAL_ESTATE_ATTR_YOY_GROWTH)
    ).to.equal(`+ ${expectedYoYGrowthRate}%`);

    expect(await RealEstatePage.getEstimatedCurrentValue() - prevTotalEstimatedCurrentValue).to.equal(currentValue);
    expect(await RealEstatePage.getInvestedAmount() - prevTotalInvestedAmount).to.equal(propertyPrice);
    expect(await RealEstatePage.getGainLossAmount() - prevTotalGainLossAmount).to.equal(currentValue - propertyPrice);

    await RealEstatePage.clickOnRealEstatePropertyMoreOptionsButton(propertyName);
    await CommonPage.clickEditDetailsLink();
    expect(await RealEstatePage.getPropertyName()).to.equal(propertyName);
    expect(await RealEstatePage.getPropertyPrice()).to.equal(propertyPrice.toLocaleString('hi'));
    expect(await RealEstatePage.getPurchaseYear()).to.equal(purchaseYear.toString());
    expect(await RealEstatePage.getCurrentValue()).to.equal(currentValue.toLocaleString('hi'));
    await CommonPage.clickSaveOrUpdateButton();
  }

  async updateRealEstateProperty(wealthType, propertyName, newPropertyName, propertyPrice, purchaseYear, currentValue) {
    await RealEstatePage.clickOnRealEstatePropertyMoreOptionsButton(propertyName);
    await CommonPage.clickEditDetailsLink();
    await RealEstatePage.enterPropertyName(newPropertyName);
    await RealEstatePage.enterPropertyPrice(propertyPrice);
    await RealEstatePage.enterPurchaseYear(purchaseYear);
    await RealEstatePage.enterCurrentValue(currentValue);
    await CommonPage.clickSaveOrUpdateButton();
    return (await CommonMyWealthPage.wealthUpdateSuccessMessageIsDisplayed(wealthType));
  }

  async deleteRealEstate(propertyName) {
    await RealEstatePage.clickOnRealEstatePropertyMoreOptionsButton(propertyName);
    await CommonPage.clickDeleteLink();
    return (await CommonMyWealthPage.wealthDeleteSuccessMessageIsDisplayed('Real estate'));
  }
}
module.exports = new RealEstateFunctionality();
