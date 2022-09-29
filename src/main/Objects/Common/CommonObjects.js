const Utils = require('../../../support/Utils/Utils');

class CommonObjects {

  selectFamilyMemberPageHeader = {
    web: '(//div[text()="Select family member" or text()="Select an account"])[last()]',
    app: '//*[@text="Select family member" or @text="Select an account"]'
  };

  familyMember(familyMemberName) {
    return {
      web: `(//div[contains(text(),"${familyMemberName}")])[last()]`,
      app: `//android.widget.TextView[contains(@text,"${familyMemberName}")]`
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
    web: '//i[text()="chevron_left"]',
    app: '(//android.widget.TextView)[1]'
  };

  expandMoreButton = {
    web: '//i[text()="expand_more"]',
    app: '//android.widget.TextView[@text="\uE313"]' //The expand more button has this unicode char \uE313 value
  };

  nextMonthButtonInCalander = { web: '(//*[contains(@class,"DayPickerNavigation_svg")])[2]' };

  calanderInput = {web: '(//input[contains(@class,"-amount-field__input")])[2]'};

  nextMonthFirstDayInCalander = { web: '//*[contains(@class,"CalendarMonth_table")]//td[text()="1"]' };

  otpField = {
    web: 'input#verify-otp',
    app: '.android.widget.EditText'
  };

  verifyOTPButton = {
    web: '//*[text()="Verify"]',
    app: '//*[@text="VERIFY"]'
  };

  saveOrUpdateButton = {
    web: '//button[text()="Save" or text()="Update"]',
    app: '//android.widget.TextView[@text="Save" or @text="Update"]'
  };

  editDetailsLink = {
    web: '//*[text()="Edit details"]',
    app: '//android.widget.TextView[@text="Edit details"]'
  };

  deleteLink = {
    web: '//*[text()="Delete"]',
    app: '//android.widget.TextView[@text="Delete"]'
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
    web: '//div[contains(text(),"Interest rates upto")]',
    app: '//android.widget.TextView[contains(@text,"You can now track all your Fixed Deposits in one place")]'
  };

  androidMonthPickerMonth = {
    app: '(//android.widget.EditText[@resource-id="android:id/numberpicker_input"])[1]'
  };

  androidMonthPickerYear = {
    app: '(//android.widget.EditText[@resource-id="android:id/numberpicker_input"])[2]'
  };

  androidMonthPickerDoneButton = {
    app: '//android.widget.Button[@resource-id="android:id/button1"]'
  };
}
module.exports = new CommonObjects();
