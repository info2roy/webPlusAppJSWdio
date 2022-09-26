class RealEstateObjects {
  realEstateInitialPageHeader = {
    web: '//*[text()="One place to track all of your real estate investments"]',
    app: '//android.widget.TextView[@text="One place to track all of your real estate investments"]'
  };

  addRealEstateButton = {
    web: '//button[text()="Add Real Estate"] | //div[text()="Add Real Estate"]',
    app: '//android.widget.TextView[@text="Add Real Estate"]'
  };

  addRealEstatePageHeader = {
    web: '(//div[text()="Add Real Estate"])[last()]',
    app: '//android.widget.TextView[@text="Add Real Estate"]'
  };

  estimatedCurrentValueHeader = {
    web: '//div[text()="ESTIMATED CURRENT VALUE"]',
    app: '//android.widget.TextView[@text="ESTIMATED CURRENT VALUE"]'
  };

  estimatedCurrentValue = {
    web: '//div[text()="ESTIMATED CURRENT VALUE"]/following-sibling::div/div',
    app: '//android.widget.TextView[@text="ESTIMATED CURRENT VALUE"]/following-sibling::android.widget.TextView[1]'
  };

  investedAmount = {
    web: '//div[text()="Invested"]/parent::div/following-sibling::div',
    app: '//android.widget.TextView[@text="Invested"]/following-sibling::android.widget.TextView[2]'
  };

  gainLossAmount = {
    web: '//div[text()="Gain / Loss"]/parent::div/following-sibling::div',
    app: '//android.widget.TextView[@text="Gain/Loss"]/following-sibling::android.widget.TextView[2]'
  };

  propertyNameField = {
    web: 'input#property_name',
    app: '//android.widget.TextView[@text="Property name"]/following-sibling::android.view.ViewGroup[1]/android.widget.EditText'
  };

  propertyPriceField = {
    web: 'input#property_price',
    app: '//android.widget.TextView[@text="Property price"]/following-sibling::android.view.ViewGroup[1]/android.widget.EditText'
  };

  purchaseYearField = {
    web: 'input#purchase_year',
    app: '//android.widget.TextView[@text="Purchase year"]/following-sibling::android.view.ViewGroup[1]/android.widget.EditText'
  };

  currentValueField = {
    web: 'input#current_value',
    app: '//android.widget.TextView[@text="Current value (approx.)"]/following-sibling::android.view.ViewGroup[1]/android.widget.EditText'
  };

  //For Real Estate details attributes Purchase Cost, Current Value, YoY Growth
  realEstatePropertyDetailsAttribute(propertyName, index, attribute) {
    return {
      web: `//div[text()="${propertyName}"]/parent::div/parent::div/following-sibling::div/following-sibling::div/div[${index}]/div[text()="${attribute}"]/following-sibling::div`,
      app: `//android.widget.TextView[@text="${propertyName}"]/following-sibling::android.widget.TextView[${index + 4}]`
    };
  }

  //Purchase Year for a real estate property with given name
  realEstatePropertyPurchaseYear(propertyName) {
    return {
      web: `//div[text()="${propertyName}"]/parent::div/parent::div/following-sibling::div/div`,
      app: `//android.widget.TextView[@text="${propertyName}"]/following-sibling::android.widget.TextView[1]`
    };
  }

  realEstatePropertyMoreOptionsButton(propertyName) {
    return {
      web: `//div[text()="${propertyName}"]/parent::div/following-sibling::div/i[text()="more_horiz"]`,
      app: `//android.widget.TextView[@text="${propertyName}"]/following-sibling::android.view.ViewGroup[1]/android.widget.TextView`
    };
  }
}

module.exports = new RealEstateObjects();
