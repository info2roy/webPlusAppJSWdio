class RealEstateObjects {
  realEstateInitialPageHeader = {
    web: '//div[text()="One place to track all of your real estate investments"]',
    app: '//*[@text="One place to track all of your real estate investments"]'
  };

  addRealEstateButton = {
    web: '//button[text()="Add Real Estate"] | //div[text()="Add Real Estate"]',
    app: '//*[@text="Add Real Estate"]'
  };

  addRealEstatePageHeader = {
    web: '(//div[text()="Add Real Estate"])[last()]',
    app: '(//*[@text="Add Real Estate"])[last()]'
  };

  estimatedCurrentValueHeader = {
    web: '//div[text()="ESTIMATED CURRENT VALUE"]',
    app: '//*[@text="ESTIMATED CURRENT VALUE"]'
  };

  totalInvestedAmount = {
    web: '//div[text()="ESTIMATED CURRENT VALUE"]/following-sibling::div/div'
  };

  propertyNameField = {
    web: 'input#property_name'
  };

  propertyPriceField = {
    web: 'input#property_price'
  };

  purchaseYearField = {
    web: 'input#purchase_year'
  };

  currentValueField = {
    web: 'input#current_value'
  };

  //For Real Estate details attributes Purchase Cost, Current Value, YoY Growth
  realEstatePropertyDetailsAttribute(propertyName, index, attribute) {
    return {
      web: `//div[text()="${propertyName}"]/parent::div/parent::div/following-sibling::div/following-sibling::div/div[${index}]/div[text()="${attribute}"]/following-sibling::div`
    };
  }

  //Purchase Year for a real estate property with given name
  realEstatePropertyPurchaseYear(propertyName) {
    return {
      web: `//div[text()="${propertyName}"]/parent::div/parent::div/following-sibling::div/div`
    };
  }

  realEstatePropertyMoreOptionsButton(propertyName) {
    return {
      web: `//div[text()="${propertyName}"]/parent::div/following-sibling::div/i[text()="more_horiz"]`
    };
  }
}

module.exports = new RealEstateObjects();
