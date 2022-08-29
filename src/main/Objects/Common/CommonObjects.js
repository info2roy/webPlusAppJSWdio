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

  otpField = {
    web: 'input#verify-otp',
    app: '.android.widget.EditText'
  };

  verifyOTPButton = {
    web: '//div[text()="Verify"]',
    app: '//*[@text="VERIFY"]'
  };

  saveOrUpdateButton = {
    web: '//button[text()="Save" or text()="Update"]'
  };
}
module.exports = new CommonObjects();
