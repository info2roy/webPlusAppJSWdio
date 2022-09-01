const Utils = require("../../../support/Utils/Utils");

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

  editDetailsLink = {
    web: '//div[text()="Edit details"]',
    app: '//*[@text="Edit details"]'
  };

  deleteLink = {
    web: '//div[text()="Delete"]',
    app: '//*[@text="Delete"]'
  };

  previousYearButton = {
    web: 'button.react-datepicker__navigation--previous'
  };

  nextYearButton = {
    web: 'button.react-datepicker__navigation--next'
  };

  pickedYear = {
    web: 'div.react-datepicker-year-header'
  };

  monthPicker(month) {
    return {
      web: `//div[text()="${month}"]`
    };
  }

  currentMonth = {
    web: 'div.react-datepicker__current-month'
  };

  previousMonthLink = {
    web: 'button.react-datepicker__navigation--previous'
  };

  nextMonthLink = {
    web: 'button.react-datepicker__navigation--next'
  };

  dayPicker(day) {
    return {
      web: `//div[contains(@class,"react-datepicker__day--${Utils.zeroPad(day, 3)}") and not(contains(@class,"react-datepicker__day--outside-month"))]`
    };
  }

  fixedDepositPageHeader = {
    web: '//div[contains(text(),"Interest rates upto 7.50% on FDs")]',
    app: '//*[contains(@text,"Interest rates upto 7.50% on FDs")]'
  };
}
module.exports = new CommonObjects();
