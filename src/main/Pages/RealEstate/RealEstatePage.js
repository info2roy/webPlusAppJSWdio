const Utils = require('../../../support/Utils/Utils');
const RealEstateObjects = require('../../Objects/RealEstate/RealEstateObjects');

class RealEstatePage {
  async realEstateInitialPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(RealEstateObjects.realEstateInitialPageHeader, 2000));
  }

  async clickAddRealEstateButton() {
    await Utils.clickElement(RealEstateObjects.addRealEstateButton);
  }

  async addRealEstatePageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(RealEstateObjects.addRealEstatePageHeader));
  }

  async getTotalInvestedAmount() {
    return Utils.numberAbbriviationToAbsoluteValue(await Utils.getText(RealEstateObjects.totalInvestedAmount));
  }

  async enterPropertyName(propertyName) {
    await Utils.setInputField(propertyName, RealEstateObjects.propertyNameField);
  }

  async enterPropertyPrice(propertyPrice) {
    await Utils.setInputField(propertyPrice, RealEstateObjects.propertyPriceField);
  }

  async enterPurchaseYear(purchaseYear) {
    await Utils.setInputField(purchaseYear, RealEstateObjects.purchaseYearField);
  }

  async enterCurrentValue(currentValue) {
    await Utils.setInputField(currentValue, RealEstateObjects.currentValueField);
  }

  async realEstatePropertyGetStringAttribute(propertyName, index, attrName) {
    return (await Utils.getText(RealEstateObjects.realEstatePropertyDetailsAttribute(propertyName, index, attrName))).trim();
  }

  async realEstatePropertyGetPurchaseYear(propertyName) {
    return parseInt((await Utils.getText(RealEstateObjects.realEstatePropertyPurchaseYear(propertyName))).trim());
  }

}
module.exports = new RealEstatePage();
