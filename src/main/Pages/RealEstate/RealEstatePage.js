const Device = require('../../../support/libraries/Device');
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
    return Utils.numberAbbriviationToAbsoluteValue(await Utils.getText(RealEstateObjects.estimatedCurrentValue));
  }

  async getInvestedAmount() {
    return parseInt((await Utils.getText(RealEstateObjects.investedAmount)).replace(/,/g, ''));
  }

  async getGainLossAmount() {
    return parseInt((await Utils.getText(RealEstateObjects.gainLossAmount)).replace(/,/g, ''));
  }

  async enterPropertyName(propertyName) {
    await Utils.setInputField(propertyName, RealEstateObjects.propertyNameField);
  }

  async getPropertyName() {
    if (Device.isWeb()) {
      return (await Utils.getValue(RealEstateObjects.propertyNameField));
    } else if (Device.isAndroidApp()) {
      return (await Utils.getText(RealEstateObjects.propertyNameField));
    }
    return '';
  }

  async enterPropertyPrice(propertyPrice) {
    await Utils.setInputField(propertyPrice, RealEstateObjects.propertyPriceField);
  }

  async getPropertyPrice() {
    if (Device.isWeb()) {
      return (await Utils.getValue(RealEstateObjects.propertyPriceField));
    } else if (Device.isAndroidApp()) {
      return (await Utils.getText(RealEstateObjects.propertyPriceField));
    }
    return '';
  }

  async enterPurchaseYear(purchaseYear) {
    await Utils.setInputField(purchaseYear, RealEstateObjects.purchaseYearField);
  }

  async getPurchaseYear() {
    if (Device.isWeb()) {
      return (await Utils.getValue(RealEstateObjects.purchaseYearField));
    } else if (Device.isAndroidApp()) {
      return (await Utils.getText(RealEstateObjects.purchaseYearField));
    }
    return '';
  }

  async enterCurrentValue(currentValue) {
    await Utils.setInputField(currentValue, RealEstateObjects.currentValueField);
  }

  async getCurrentValue() {
    if (Device.isWeb()) {
      return (await Utils.getValue(RealEstateObjects.currentValueField));
    } else if (Device.isAndroidApp()) {
      return (await Utils.getText(RealEstateObjects.currentValueField));
    }
    return '';
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
