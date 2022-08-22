class CommonObjects {

  selectFamilyMemberPageHeader = {
    web: '(//div[text()="Select family member"])[last()]',
    app: '//*[@text="Select family member"]'
  };

  familyMember(familyMemberName) {
    return {
      web: `(//div[contains(text(),"${familyMemberName}")])[last()]`,
      app: `(//*[contains(@text,"${familyMemberName}")])[last()]`
    };
  }

  selectFinancialProductPageHeader = {
    web: '(//div[text()="Select financial product"])[last()]',
    app: '//*[@text="Select financial product"]'
  };

  financialProduct(productName) {
    return {
      web: `//div[text()="${productName}"]`,
      app: `//*[@text="${productName}"]`
    };
  }

  selectASchemePageHeader = {
    web: '//div[text()="Select a scheme"]',
    app: '//*[@text="Select a scheme"]'
  };

  backButton = {
    web: '//i[text()="chevron_left"]'
  };
}
module.exports = new CommonObjects();
