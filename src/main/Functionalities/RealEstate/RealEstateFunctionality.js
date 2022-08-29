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
      RealEstateObjects.estimatedCurrentValueHeader, RealEstateObjects.addRealEstatePageHeader);
  }

  async getTotalInvestedAmount() {
    return (await RealEstatePage.getTotalInvestedAmount());
  }

  async fillAddRealEstateForm(propertyName, propertyPrice, purchaseYear, currentValue) {
    await RealEstatePage.enterPropertyName(propertyName);
    await RealEstatePage.enterPropertyPrice(propertyPrice);
    await RealEstatePage.enterPurchaseYear(purchaseYear);
    await RealEstatePage.enterCurrentValue(currentValue);
    await CommonPage.clickSaveOrUpdateButton();
    return (await CommonMyWealthPage.wealthUpdateSuccessMessageIsDisplayed('Real estate'));
  }

  async validateRealEstatePropertyDetails(propertyName, propertyPrice, purchaseYear, currentValue, expectedYoYGrowthRate) {
    expect(await RealEstatePage.realEstatePropertyGetStringAttribute(propertyName, 1, Constants.REAL_ESTATE_ATTR_PURCHASE_COST)
    ).to.equal(Utils.absoluteValueToNumberAbbriviation(propertyPrice));
    expect(await RealEstatePage.realEstatePropertyGetStringAttribute(propertyName, 2, Constants.REAL_ESTATE_ATTR_CURRENT_VALUE)
    ).to.equal(Utils.absoluteValueToNumberAbbriviation(currentValue));
    expect(await RealEstatePage.realEstatePropertyGetPurchaseYear(propertyName)).to.equal(purchaseYear);
    expect(await RealEstatePage.realEstatePropertyGetStringAttribute(propertyName, 3, Constants.REAL_ESTATE_ATTR_YOY_GROWTH)
    ).to.equal(`+ ${expectedYoYGrowthRate}%`);
  }
}
module.exports = new RealEstateFunctionality();
