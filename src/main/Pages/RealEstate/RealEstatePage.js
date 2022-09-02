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

  async getEstimatedCurrentValue() {
    return (await Utils.getText(RealEstateObjects.estimatedCurrentValue)).replace(' ', '');
  }

  async getInvestedAmount() {
    return (await Utils.getText(RealEstateObjects.investedAmount));
  }

  async getGainLossAmount() {
    return (await Utils.getText(RealEstateObjects.gainLossAmount));
  }

  async enterPropertyName(propertyName) {
    await Utils.setInputField(propertyName, RealEstateObjects.propertyNameField);
  }

  async getPropertyName() {
    return (await Utils.getValue(RealEstateObjects.propertyNameField));
  }

  async enterPropertyPrice(propertyPrice) {
    await Utils.setInputField(propertyPrice, RealEstateObjects.propertyPriceField);
  }

  async getPropertyPrice() {
    return (await Utils.getValue(RealEstateObjects.propertyPriceField));
  }

  async enterPurchaseYear(purchaseYear) {
    await Utils.setInputField(purchaseYear, RealEstateObjects.purchaseYearField);
  }

  async getPurchaseYear() {
    return (await Utils.getValue(RealEstateObjects.purchaseYearField));
  }

  async enterCurrentValue(currentValue) {
    await Utils.setInputField(currentValue, RealEstateObjects.currentValueField);
  }

  async getCurrentValue() {
    return (await Utils.getValue(RealEstateObjects.currentValueField));
  }

  async realEstatePropertyGetStringAttribute(propertyName, index, attrName) {
    return (await Utils.getText(RealEstateObjects.realEstatePropertyDetailsAttribute(propertyName, index, attrName))).trim();
  }

  async realEstatePropertyGetPurchaseYear(propertyName) {
    return parseInt((await Utils.getText(RealEstateObjects.realEstatePropertyPurchaseYear(propertyName))).trim());
  }

  async clickOnRealEstatePropertyMoreOptionsButton(propertyName) {
    await Utils.clickElement(RealEstateObjects.realEstatePropertyMoreOptionsButton(propertyName));
  }

}
module.exports = new RealEstatePage();
