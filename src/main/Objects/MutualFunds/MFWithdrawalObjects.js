class MFWithdrawalObjects {

  selectMFPlanPageHeader = {
    web: '(//div[text()="Select plan"])[last()]',
    app: '//*[@text="Select Plan"]'
  };

  mutualFundPlan(planName) {
    return {
      web: `//div[text()="${planName}"]`,
      app: `//*[@text="${planName}"]`
    };
  }

  mutualFundPlanNameText(planName) {
    return {
      web: `${planName}`,
      app: `${planName}`
    };
  }

  confirmBankDetailsPageHeader = {
    web: '//div[text()="Confirm your bank details"]',
    app: '//*[@text="Confirm your bank details"]'
  };

  withdrawalBankOption(option) {
    return {
      web: `//button[text()="${option}"]`,
      app: `//*[@text="${option.toUpperCase()}"]`
    };
  }

  withdrawAmountPageHeader(portfolio) {
    return {
      web: `//div[text()="Withdraw - ${portfolio}"]`,
      app: `//*[@text="Withdraw from ${portfolio}"]`
    };
  }

  withdrawAmountField = {
    web: 'input#withdrawal-amount',
    app: '.android.widget.EditText'
  };

  withdrawAmountNextButton = {
    web: '//button[text()="Next"]',
    app: '//*[@text="NEXT"]'
  };

  withdrawAmountSelectFundsButton = {
    web: '//button[text()="Select funds"]',
    app: '//*[@text="SELECT FUNDS"]'
  };

  selectFundsPageHeader(portfolio) {
    return {
      web: `//div[text()="Withdraw from ${portfolio}"]`,
      app: `//*[@text="Withdraw from ${portfolio}"]`
    };
  }

  selectFundsPageSummary = {
    web: '//div[text()="You are withdrawing"]',
    app: '//*[@text="You are withdrawing"]'
  };

  selectFundsPageAmount(amount) {
    return {
      web: `//div[text()="${amount.toLocaleString('hi')}"]`,
      app: `//*[@text="${amount.toLocaleString('hi')}"]`
    };
  }

  selectFundsPageSelectFunds = {
    web: '//div[text()="Select funds and amounts"]',
    app: '//*[@text="Select funds"]'
  };

  mutualFundNameText(fundName) {
    return {
      web: `${fundName}`,
      app: `${fundName}`
    };
  }

  mutualFund(fundName) {
    return {
      web: `//div[text()="${fundName}"]`,
      app: `//*[@text="${fundName}"]`
    };
  }

  mutualFundAmountFields = {
    web: '//input',
    app: '//android.widget.EditText'
  };

  continueWithFundAllocationButton(amount) {
    return {
      web: '//button[contains(text(), "Continue")]',
      app: `//*[@text="CONTINUE WITH RS ${amount.toLocaleString('hi')}"]`
    };
  }

  confirmWithdrawalPageHeader = {
    web: '//div[text()="Confirm your withdrawal"]',
    app: '//*[@text="Confirm your withdrawal"]'
  };

  withdrawalFinalActionButton(buttonText) { //button for one of CONFIRM WITHDRAWAL|NO, STAY INVESTED|CANCEL
    return {
      web: `//button[text()="${buttonText}"]`,
      app: `//*[@text="${buttonText}"]`
    };
  }

  verifyWithOTPPageHeader = {
    web: '//div[text()="Verify with OTP"]',
    app: '//*[@text="Verify with OTP"]'
  };

  otpField = {
    web: 'input#verify-otp',
    app: '.android.widget.EditText'
  };

  verifyOTPButton = {
    web: '//div[text()="Verify"]',
    app: '//*[@text="VERIFY"]'
  };

  withdrawScheduledPageHeader = {
    web: '//div[text()="Withdrawal Scheduled"]',
    app: '//*[@text="Withdrawal Scheduled"]'
  };

  finalWithdrawlPageHeader = {
    web: '//div[text()="Enter the amount you want to withdraw from one or more of the following funds."]',
  };

  fundSelectButton = {
    web: '//div[text()="Select"][1]',
  };

  withdrawAmountValue = {
    web: '//input[contains(@class,"withdraw-custom-amount-input")]'
  };

  withdrawlCreditStatememnt = {
    web: '//p[contains(text(), "Money will be credited to your bank account by")]'
  };

  withdrawlAmount = {
    web: '//div[text()="Your withdrawal break-up"]//ancestor::p//following-sibling::div//span/div'
  };

  amountUserWillGet = {
    web: '//div[text()="You will get"]//ancestor::p//following-sibling::div//span/div'
  };

  confirmConfirmationButton = {
    web: '//button[text()="CONFIRM WITHDRAWAL"]'
  };

  withdrawlBreakupHeader = {
    web: '//div[text()="Your withdrawal break-up"]'
  };

  withdrawlGainHeader = {
    web: '//div[text()="Gains"]'
  };

  withdrawlYouWillGetHeader = {
    web: '//div[text()="You will get"]'
  };

  continueButtonForWithdrawl = {
    web: '//button[contains(text(), "Continue")]'
  };

  readTotalAmount() {
    return {
      web: '//div[text()="Total:"]//ancestor::span/span/div'
    };
  }

  PleaseEnterCodeBanner = {
    web: '//div[text()="Please enter the code you received"]'
  };

}
module.exports = new MFWithdrawalObjects();