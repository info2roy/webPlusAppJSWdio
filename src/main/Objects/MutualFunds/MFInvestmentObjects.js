class MFInvestmentObjects {
  mutualFundsPageHeader = {
    web: '//div[text()="Choose your plan"]',
    app: '//*[@text="Choose your plan"]'
  };

  mutualFundPortfolioOption(portfolio) {
    return {
      web: `//div[contains(text(),"${portfolio}")]`,
      app: `//*[contains(@text,"${portfolio}")]`
    };
  }

  scripboxGuidedPathHeader = {
    web: '//div[text()="Scripbox Guided Path"]',
    app: '//*[@text="Scripbox Guided Path"]'
  };

  investAsPerScripboxGuidedPathButton = {
    web: '//button/div[text()="Invest"]',
    app: '//*[@text="Invest"]'
  };

  ageGroupHeaderText = {
    web: '30s',
    app: '30s'
  };

  ageGroupHeader = {
    web: `//div[text()="${this.ageGroupHeaderText.web}"]`,
    app: `//*[@text="${this.ageGroupHeaderText.app}"]`
  };

  ageGroupTab(ageGroup) {
    return {
      web: `//div[text()="${ageGroup}"]`,
      app: `//*[@text="${ageGroup}"]`
    };
  }

  nextButton = { web: '//button[text()="Next"]', app: '//*[@text="NEXT"]' };
  confirmButton = { web: '//button[text()="Confirm"]', app: '//*[@text="CONFIRM"]' };

  investmentFormPageHeader = {
    web: '//div[text()="I want to invest"]',
    app: '//*[@text="I want to invest"]'
  };

  investmentTypeOption(investmentType) { // one of <Every month (SIP)|One time|STP>
    return {
      web: `//label[text()="${investmentType}"]`,
      app: `//*[@text="${investmentType}"]`
    };
  }

  investmentAmountField = {
    web: '#investment-amount',
    app: '.android.widget.EditText'
  };

  seeRecommendedFundsButton = {
    web: '//button[text()="See Recommended Funds"]',
    app: '//*[@text="SEE RECOMMENDED FUNDS"]'
  };

  recommendedFundsPageHeader = {
    web: '//div[text()="Recommended Funds and Amounts"]',
    app: '//*[@text="Recommended Funds"]'
  };

  selectMFSipPaymentTypePageHeader(amount) {
    const amountStr = amount.toLocaleString('hi');
    return {
      web: `//div[text()="I would like to invest Rs ${amountStr} every month (SIP)"]`,
      app: `//*[@text="I would like to invest Rs ${amountStr} every month (SIP)"]`
    };
  }

  selectMFOneTimePaymentTypePageHeader(amount) {
    const amountStr = amount.toLocaleString('hi');
    return {
      web: `//div[text()="I would like to make a one-time investment of Rs ${amountStr}"]`,
      app: `//*[@text="I would like to make a one-time investment of Rs ${amountStr}"]`
    };
  }

  MAKE_PAYMENT_NOW_TEXT = { web: 'MAKE PAYMENT NOW', app: 'MAKE PAYMENT NOW' };

  ONE_CLICK_INVEST_TEXT = { web: '1-CLICK INVEST', app: '1-CLICK INVEST' };

  makePaymentNowButton = {
    web: `//button[text()="Make Payment Now"]`,
    app: `//*[@text="${this.MAKE_PAYMENT_NOW_TEXT.app}"]`
  };

  oneClickInvestButton = {
    web: `//button[text()="1-Click Invest"]`,
    app: `//*[@text="${this.ONE_CLICK_INVEST_TEXT.app}"]`
  };

  setupMFSipInvestmentPageHeader(amount, months) {
    const amountStr = amount.toLocaleString('hi');
    const monthsStr = months.toLocaleString('hi');
    return {
      web: `//div[text()="I would like to invest Rs ${amountStr} every month (SIP) for ${monthsStr} months"]`,
      app: `//*[@text="I would like to invest Rs ${amountStr} every month (SIP) for ${monthsStr} months"]`
    };
  }

  setupMFOneTimeInvestmentPageHeader(amount) {
    const amountStr = amount.toLocaleString('hi');
    return {
      web: `//div[contains(text(), "I would like to invest Rs ${amountStr} one time")]`,
      app: `//*[contains(@text, "I would like to invest Rs ${amountStr} one time")]`
    };
  }

  sipDurationInMonthsField = {
    web: 'input#duration',
    app: '.android.widget.EditText'
  };

  paymentInstrumentPageHeader = {
    web: '//div[text()="I would like to invest using"]',
    app: '//*[@text="I would like to invest using"]'
  };

  investmentScheduledSuccessfullyPageHeader = {
    web: '//div[text()="Investment scheduled successfully"]',
    app: '//*[@text="Investment scheduled successfully"]'
  };

  paymentInstrument(paymentInstrumentType) {
    return {
      web: `//div[text()="${paymentInstrumentType}"]`,
      app: `//*[@text="${paymentInstrumentType}"]`
    };
  }

  transferFundsPageHeader = {
    web: '//div[text()="Transfer Funds for your Investment With Net Banking"]',
    app: '//*[@text="Transfer Funds for your Investment With Net Banking"]'
  };

  goToBankForFundTransferButton = {
    web: '//button[text()="Go To Bank"]',
    app: '//*[@text="GO TO BANK"]'
  };

  mockPaymentStatusPageHeader = {
    web: '//h3[text()="Select the mock payment status"]'
  };

  mockPaymentStatusButton(status) {
    return {
      web: `//button[text()="${status}"]`
    };
  }

  fundTransferSuccessMessage = {
    web: '//div[text()="Investment successful"]',
    app: '//*[@text="Funds Transfer Successful"]'
  };

  homeButton = {
    app: '//*[@text="HOME"]'
  };

  investmentSuccessMessage = {
    web: '//div[text()="Investment successful"]',
    app: '//*[@text="Investment successful"]'
  };

  goToDashboardButton = {
    web: '//button[text()="Go to Dashboard"]',
    app: '//*[@text="HOME"]'
  };

  backButton = {
    web: 'div.app-container-heading-back-icon-container',
    app: '.android.widget.TextView'
  };

  addNewPlan = {
    web: '//div[text()="Add new plan"]'
  };

  addNewPlanPageHeader = {
    web: '//div[text()="Add new plan"]'
  };

  addNewPlanPageInvestmentStrategiesHeader = {
    web: '//div[text()="Investment Strategies"]'
  };

  addNewPlanPageAchieveLifeGoalsHeader = {
    web: '//div[text()="Achieve life goals"]'
  };
}
module.exports = new MFInvestmentObjects();
