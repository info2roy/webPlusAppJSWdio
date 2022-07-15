class CommonWithdrawalObjects {

  selectFamilyMemberPageHeader = {
    web: '(//div[text()="Select family member"])[last()]',
    app: '//*[@text="Select family member"]'
  };

  familyMember(familyMemberName) {
    return {
      web: `//div[contains(text(),"${familyMemberName}")]`,
      app: `//*[contains(@text,"${familyMemberName}")]`
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
}

module.exports = new CommonWithdrawalObjects();
