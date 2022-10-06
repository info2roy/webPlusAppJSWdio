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
    web: '//button[text()="Invest"]',
    app: '//*[@text="Invest"]'
  };

  ageGroupHeaderText = '30s';

  ageGroupHeader = {
    web: `//div[text()="${this.ageGroupHeaderText}"]`,
    app: `//*[@text="${this.ageGroupHeaderText}"]`
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

  MAKE_PAYMENT_NOW_TEXT = 'MAKE PAYMENT NOW';

  ONE_CLICK_INVEST_TEXT = '1-CLICK INVEST';

  AUTOMATE_NOW_TEXT = 'AUTOMATE NOW';

  makePaymentNowButton = {
    web: `//button[text()="Make Payment Now"]`,
    app: `//*[@text="${this.MAKE_PAYMENT_NOW_TEXT}"]`
  };

  oneClickInvestButton = {
    web: `//button[text()="1-Click Invest"] | //button[text()="Schedule Now"] | //button[text()="Automate Now"]`,
    app: `//*[@text="${this.ONE_CLICK_INVEST_TEXT}"]`
  };

  automateNowButton = {
    web: `//button[text()="Automate Now"]`,
    app: `//*[@text="${this.AUTOMATE_NOW_TEXT}"]`
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
    app: '//*[@text="Investment scheduled successfully" or @text="Investment Scheduled"]'
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

  addNewPlanText = {
    app: 'Add new plan'
  };

  exploreOtherPlansText = {
    app: 'Explore other plans'
  };

  addNewPlanOrExploreOtherPlans = {
    web: '//div[text()="Add new plan"] | //div[text()="Explore other plans"]',
    app: '//*[@text="Add new plan" or @text="Explore other plans"]'
  };

  addNewPlanPageHeader = {
    web: '//div[text()="Add new plan"]', app: '//*[@text="Add new plan"]'
  };

  addNewPlanPageInvestmentStrategiesHeader = {
    web: '//div[text()="Investment Strategies"]'
  };

  addNewPlanPageAchieveLifeGoalsHeader = {
    web: '//div[text()="Achieve life goals"]'
  };

  viewInvestmentsButton = {
    web: '//button[text()="View investments"]'
  };

  sipsAndStpsHeader = {
    web: '//div[text()="SIP(s) and STP(s)"]'
  };

  externalSipsHeader = {
    web: '//div[text()="External SIPs"]'
  };

  monthlySummaryHeader = {
    web: '//div[text()="Monthly Summary"]'
  };

  exploreFundsSearchBox = {
    web: '(//div[contains(text(),"Explore funds")]//ancestor::div[1]//img)[1]'
  };

  chooseYourFundHeader = {
    web: '(//div[text()="Choose your fund"])[3]'
  };

  searchResultsFoundText = {
    web: '//p[@class="link-title"]'
  };

  enterFundNameTextBox = {
    web: '//input[@placeholder="Search for mutual funds"]'
  };

  firstPickFundButton = {
    web: '(//div[text()="Pick fund"])[1]'
  };

  setUpInvestmentHeader = {
    web: '(//div[text()="Set up investment"])[3]'
  };

  SIPAmountTextBox = {
    web: '//input[@placeholder="SIP Amount"]'
  };

  SIPDurationTextBox = {
    web: '//input[@id="duration"]'
  };

  setMonthField = {
    web: '//input[contains(@class,"cursor-pointer ycof-amount-field")]'
  };

  currentMonth = {
    web: 'div.CalendarMonth_caption div div'
  };

  previousMonthNavigation = {
    web: '//*[@class="DayPickerNavigation_svg__horizontal DayPickerNavigation_svg__horizontal_1"]'
  };

  nextMonthNavigation = {
    web: '(//*[@class="DayPickerNavigation_svg__horizontal DayPickerNavigation_svg__horizontal_1"])[2]'
  };

  recommendedFunds = {
    web: '//*[@class="section"]'
  };

  recommendedFundAmounts = {
    web: '//*[@class="section"]//span//..//div'
  };

  chooseYourPlanHeader = {
    web: '//div[text()="Choose your plan"]'
  };

  sipIncreasePercentSlider = {
    web: 'div.rangeslider__handle'
  };

  investMoreLinkForExistingFund(fundName) {
    return {
      web: `//div[text()="${fundName}"]/parent::div/parent::div/parent::div/parent::div/following-sibling::div/div/div[2]/div[2]/div[text()="Invest more"]`
    };
  }

}
module.exports = new MFInvestmentObjects();
