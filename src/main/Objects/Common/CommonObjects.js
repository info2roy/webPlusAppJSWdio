class CommonObjects {

  selectFamilyMemberPageHeader = {
    web: '(//div[text()="Select family member" or text()="Select an account"])[last()]',
    app: '//*[@text="Select family member" or @text="Select an account"]'
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

  expandMoreButton = {
    web: '//i[text()="expand_more"]',
    app: '//*[@text="expand_more"]'
  };

  nextMonthButtonInCalander = { web: '(//*[contains(@class,"DayPickerNavigation_svg")])[2]' };

  calanderInput = {web: '(//input[contains(@class,"-amount-field__input")])[2]'};

  nextMonthFirstDayInCalander = { web: '//*[contains(@class,"CalendarMonth_table")]//td[text()="1"]' };
}
module.exports = new CommonObjects();
