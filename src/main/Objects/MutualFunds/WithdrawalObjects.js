class WithdrawalObjects {

  selectFamilyMemberPageHeader = {
    web: '//div[text()="Select family member"]',
    app: '//*[@text="Select family member"]'
  };

  familyMember(familyMemberName) {
    return {
      web: `//div[contains(text(),"${familyMemberName}")]`,
      app: `//*[contains(@text,"${familyMemberName}")]`
    };
  }

  selectFinancialProductPageHeader = {
    web: '//div[text()="Select financial product"]',
    app: '//*[@text="Select financial product"]'
  };

  financialProduct(productName) {
    return {
      web: `//div[text()="${productName}"]`,
      app: `//*[@text="${productName}"]`
    };
  }

  selectMFPlanPageHeader = {
    web: '//div[text()="Select plan"]',
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
      web: `//div[text()="${option}"]`,
      app: `//*[@text="${option}"]`
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
    app: '.android.widget.EditText'
  };

}
module.exports = new WithdrawalObjects();
