class MFGoalsObjects {

  lifeGoalElement(lifeGoal) {
    return {
      web: `//div[text()="${lifeGoal}"]`,
      app: `//*[@text="${lifeGoal}"]`,
    };
  }

  replanSummaryLifeGoalElement(lifeGoal) {
    return {
      web: `//p[text()="${lifeGoal}"]`,
      app: `//*[@text="${lifeGoal}"]`
    };
  }

  retireConfidentGoalPageHeader = {
    web: '//h1[contains(text(),"Will you be able to maintain your lifestyle in retirement?")]',
    app: '//*[contains(@text,"Will you be able to maintain your lifestyle in retirement?")]'
  };

  premierEducationGoalPageHeader = {
    web: '//h1[contains(text(),"Are you investing enough for your child\'s college education?")]',
    app: '//*[contains(@text,"Are you investing enough for your child\'s college education?")]'
  };

  lifeGoalExistingPlanElement(lifeGoal) {
    return {
      web: `//div[text()="${lifeGoal}"]/following-sibling::div/following-sibling::div`
    };
  }

  yourExistingPlansHeader = {
    web: '//div[contains(text(),"Your existing plans")]'
  };

  investmentCalendarHeader = {
    web: '//div[text()="Investment Calendar"]'
  };

  showMeHowText = {
    app: 'SHOW ME HOW'
  };

  showMeHowButton = {
    web: '//button[contains(text(),"Show me how")]',
    app: '//android.widget.Button[@text="SHOW ME HOW"]'
  };

  retireConfidentGoalSectionHeader = {
    web: '//p[contains(text(),"Scripbox Retire Confident")]',
    app: '//*[@text="Scripbox Retire Confident"]'
  };

  premierEducationGoalSectionHeader = {
    web: '//p[contains(text(),"My child\'s education fund")]',
    app: '//*[@text="My child\'s education fund"]'
  };

  myAgeField = {
    web: 'input.my-age-js',
    app: '(//android.widget.EditText)[1]'
  };

  monthlyExpensesOption(value) {
    const amountToShortCode = {
      25000: '25K',
      50000: '50k',
      75000: '75k',
      100000: '1L'
    };
    const amountCode = amountToShortCode[value];
    if (amountCode == undefined) {
      return undefined;
    }
    return {
      web: `//span[contains(text(),"${amountCode}")]`,
      app: `//android.widget.RadioButton[@text="${amountCode.toUpperCase()}"]`
    };
  }

  currentMonthlyExpensesField = {
    web: 'input.ff-current-monthly-expenses-js',
    app: '(//android.widget.EditText)[2]'
  };

  retireAtAgeOption(value) {
    const ageToShortCode = {
      60: '60',
      65: '65',
      70: '70',
      75: '75'
    };
    const ageCode = ageToShortCode[value];
    if (ageCode == undefined) {
      return undefined;
    }
    return {
      web: `//input[@type="radio" and @name="ff-retirment-age" and @value="${ageCode}"]/parent::label`,
      app: `//android.widget.RadioButton[@text="${ageCode.toUpperCase()}"]`
    };
  }

  retireAtAgeField = {
    web: 'input.ff-retirement-age-js'
  };

  retirementEndAgeField = {
    web: 'input.ff-retirment-end-age-js'
  };

  createAPlanLink = {
    web: '//a[contains(text(),"Create a plan")]'
  };

  existingSavingsAndPlansPageHeader = {
    web: '//span[text()="Existing savings and plans"]'
  };

  addExistingSavingsLink = {
    web: '//a[text()="Add"]'
  };

  myExistingSavingsHeader = {
    web: '//div[text()="My existing savings"]'
  };

  existingSavingsAmountField = {
    web: 'input.ff-savings-amount-input-js'
  };

  existingSavingsAmountGrowthRateField = {
    web: 'input.ff-savings-returns-input-js'
  };

  saveExistingSavingsDetailsButton = {
    web: '//button[text()="Save"]'
  };

  futureMonthlyIncomeFromOtherSourcesField = {
    web: 'input.ff-plan-savings-amount-custom-js'
  };

  calculateMyNeedLink = {
    web: '//a[contains(text(),"Calculate My Need")]'
  };

  whatYouNeedToRetireHeader = {
    web: '//span[text()="What you need to retire"]'
  };

  inflationPercentSelectOption = {
    web: 'select.ff-plan-inflation'
  };

  showDetailedPlanLink = {
    web: '//a[contains(text(),"Show Detailed Plan")]'
  };

  yourRetirementPlanPageHeader = {
    web: '//span[text()="Your Retirement Plan"]'
  };

  continueLink = {
    web: '//a[contains(text(),"Continue")]'
  };

  continueLinkText = {
    app: 'CONTINUE'
  };

  congratulationsPageHeader = {
    web: '//span[text()="Congratulations!"]'
  };

  createPlanFinalButton = {
    web: '//a[contains(text(),"Create Plan")]'
  };

  activatePlanHeader = {
    web: '//span[text()="Activate Plan"]'
  };

  investMoreButton = {
    web: '//button[text()="Invest more"]'
  };

  otherActionsButton = {
    web: '//button[text()="Other actions"] | //button[text()="Other Actions"]'
  };

  otherActionForGoalPlan(actionType) {
    return {
      web: `//div[text()="${actionType}"]`
    };
  }

  iWantToInvestHeader = {
    web: '//div[text()="I want to invest"]'
  };

  startANewSIPHeader = {
    web: '//div[text()="Start a new SIP"]'
  };

  investOneTimeHeader = {
    web: '//div[text()="Invest one-time"]'
  };

  retireConfidentSIP(amount) {
    return {
      web: `//div[text()="Retire Confident SIP"]/parent::div/following-sibling::div[text()="${amount.toLocaleString('hi')}"]`
    };
  }

  retireConfidentOneTime(amount) {
    return {
      web: `//div[text()="Retire Confident"]/parent::div/following-sibling::div/div[text()="${amount.toLocaleString('hi')}"]`
    };
  }

  //Premier Education
  classOfChildField = {
    web: 'input.education-plan-age-input'
  };

  childInPreschoolOrNotInSchoolCheckbox = {
    web: '//input[@type="checkbox"]'
  };

  childLikelyToStartCollegeInYearHeader = {
    web: '//div[contains(text(),"Your child is likely to start college in")]'
  };

  getStartCollegeYear(classOfChild) {
    if (classOfChild === 0) {
      return (new Date().getFullYear() + 13);
    } else if (classOfChild > 0) {
      return (new Date().getFullYear() + 13 - classOfChild);
    }
    return undefined;
  }

  childLikelyToStartCollegeInYear(classOfChild) {
    return {
      web: `//span[contains(text(),"${this.getStartCollegeYear(classOfChild)}")]`
    };
  }

  premierEducationCollegeTypeToIndex = {
    'Government Colleges': 1,
    'Private Colleges': 2,
    'Premier Private Colleges': 3
  };

  personaliseThisPlanLinkForCollegeType(collegeType) {
    const index = this.premierEducationCollegeTypeToIndex[collegeType];
    return {
      web: `(//a[contains(text(),"Personalise this plan")])[${index}]`
    };
  }

  premierEducationPlanPageHeader = {
    web: '//p[contains(text(),"Quick plan for your child\'s")]'
  };

  continueButtonForPremierEducationPlan(index) {
    return {
      web: `(//a[contains(text(),"Continue")])[${index}]`
    };
  }

  premierEducationFormHeader = {
    web: '//label[contains(text(),"This plan is for")]'
  };

  childNameField = {
    web: 'input.gef-name-input'
  };

  yearlyFeesField = {
    web: 'input.plan-goal-amount-input'
  };

  seeYearlyBreakupButton = {
    web: '//div[contains(text(),"See yearly breakup")]'
  };

  yearlyBreakupPageGoal = {
    web: '//div[contains(text(),"Goal")]'
  };

  yearlyBreakupPageGoalHeader = {
    web: `//div[contains(text(),"Estimated yearly fees in")]`
  };

  yearlyBreakupPagePlan = {
    web: '//div[contains(text(),"Plan")]'
  };

  yearlyBreakupPagePlanChildName(childname) {
    return {
      web: `//span[contains(text(),"${childname}")]`
    };
  }

  yearlyBreakupPagePlanHeader = {
    web: '//div/span[contains(text(),"\'s college education plan")]'
  };

  yearlyBreakupPageShowPlanButton = {
    web: '//a[contains(text(),"Show plan for")]'
  };

  premierEducationWorkingPlanHeader1 = {
    web: '//div[contains(text(),"Here is a working plan for")]'
  };

  premierEducationWorkingPlanHeader2 = {
    web: '//div/span[contains(text(),"\'s education")]'
  };

  premierEducationWorkingPlanStartWithButton = {
    web: '//a[contains(text(),"Start With")]'
  };

  premierEducationInvestPageHeader = {
    web: '//p[contains(text(),"\'s College Education Plan")]'
  };

  signupOrLoginButton = {
    web: '//a[contains(text(),"Signup / Login")]'
  };

  createPlanButton = {
    web: '//a[contains(text(),"Create Plan")]'
  };

  investEveryMonthButton = {
    web: '//button[text()="INVEST EVERY MONTH"]'
  };

  investOneTimeButton = {
    web: '//button[text()="INVEST ONE TIME"]'
  };

  amountPlannedWithScripboxHeader = {
    web: '//p[text()="Amount Planned With Scripbox:"]'
  };

  howWouldYouLikeYourMoneyToGrowHeader = {
    web: '//div[text()="How would you like your money to grow?"]'
  };

  iWouldLikeToInvestOneTimeHeader = {
    web: '//div[text()="I would like to invest one time"]'
  };

  continueButton = {
    web: '//button[contains(text(),"Continue")]'
  };

  fundListHeader = {
    web: '//div[text()="Fund list"]'
  };

  continueToInvestButton = {
    web: '//button[contains(text(),"Continue to invest")]'
  };

  paymentTypePageHeader = {
    web: '//div[contains(text(),"I would like to invest Rs")]'
  };

  noInvestmentsToCancelMessage = {
    web: '//p[text()="There are no investments to cancel in this plan."]'
  };

  confirmButton = {
    web: '//button[contains(text(),"Confirm")]'
  };

  rightAngleBracketButton = {
    web: '//span[text()="chevron_right"]'
  };

  planDetailsHeader = {
    web: '//p[text()="PLAN DETAILS"]'
  };

  moveMoneyHeader = {
    web: '//div[text()="Move Money"]'
  };

  stopAllInvestmentsHeader = {
    web: '//div[text()="Stop All Investments"]'
  };

  closePlanHeader = {
    web: '//div[text()="Close Plan"]'
  };

  closeThisPlanButton = {
    web: '//button[text()="CLOSE THIS PLAN"]'
  };

  planClosedMessage = {
    web: '//p[text()="Your plan has been closed"]'
  };

  replanStep1Header = {
    web: '//div[text()="REPLAN - STEP 1 OF 3"]'
  };

  editPlanButton = {
    web: '//button[text()="Edit Plan"]'
  };

  moveMoneyWarningMessage = {
    web: '//div[text()="Oops. You currently do not have any investments to re-allocate."]'
  };

  stopAllInvestmentsMessage = {
    web: '//p[text()="Cancelling this plan will cancel all running SIPs."]'
  };

  closePlanMessage = {
    web: '//div[text()="If you think you have reached your goal, or if this is no longer needed, you can close the plan by following these steps."]'
  };

  planCancelledMessage = {
    web: '//p[text()="Your plan has been cancelled"]'
  };

  editRetirementAgeLink = {
    web: '//div[text()="I want to retire at the age of"]/parent::div/following-sibling::div/div'
  };

  replanRetirementAgeLabel = {
    web: '//div[text()="What is your retirement age?"]'
  };

  replanRetirementAgeField = {
    web: 'input#retirement-age-input'
  };

  okayButton = {
    web: '//button[text()="Okay"]'
  };

  editRetirementEndAgeLink = {
    web: '//div[text()="Retirement planned until the age of"]/parent::div/following-sibling::div/div'
  };

  replanRetirementEndAgeLabel = {
    web: '//div[text()="Retirement planned until the age of"]'
  };

  replanRetirementEndAgeField = {
    web: 'input#retirement-planned-till-input'
  };

  editCurrentMonthlyExpensesLink = {
    web: '//div[text()="My current monthly expenses are"]/parent::div/following-sibling::div/div'
  };

  replanCurrentMonthlyExpensesLabel = {
    web: '//div[text()="How much is your current monthly expenses?"]'
  };

  replanCurrentMonthlyExpensesField = {
    web: 'input#goal-amount-input'
  };

  editExpensesIncreaseRateLink = {
    web: '//div[text()="Your expenses will increase every year by"]/parent::div/following-sibling::div/div'
  };

  replanExpensesIncreaseRateLabel = {
    web: '//div[text()="Annual increase in expenses?"]'
  };

  replanExpensesIncreaseRateField = {
    web: '//div[text()="Annual increase in expenses?"]/following-sibling::div/div/input'
  };

  replanStep2Header = {
    web: '//div[text()="REPLAN - STEP 2 OF 3"]'
  };

  investOneTimeAmountField = {
    web: 'input#investment-amount'
  };

  editFutureMonthlyIncomeFromOtherSourcesLink = {
    web: '//div[text()="Monthly contribution during the course of your retirement"]/parent::div/following-sibling::div/div'
  };

  replanFutureMonthlyIncomeFromOtherSourcesLabel = {
    web: '//div[text()="How much can you contribute every month during the course of your retirement?"]'
  };

  replanFutureMonthlyIncomeFromOtherSourcesField = {
    web: 'input#annual-contribution-input'
  };

  editExternalSavingsForGoalLink = {
    web: '//div[text()="External savings for this goal"]/parent::div/following-sibling::div/div'
  };

  replanExternalSavingsForGoalLabel = {
    web: '//div[text()="How much have you saved for this goal?"]'
  };

  replanExternalSavingsForGoalField = {
    web: 'input#total-savings-input'
  };

  replanExternalSavingForGoalGrowthRateField = {
    web: 'input#growth-rate-input'
  };

  continueReplanButton = {
    web: '//button[text()="Continue"]'
  };

  replanStep3Header = {
    web: '//div[text()="REPLAN - STEP 3 OF 3"]'
  };

  editSipIncreasePercentLink = {
    web: '//div[text()="Increase SIP every year by"]/parent::div/following-sibling::div/div'
  };

  replanSipIncreasePercentLabel = {
    web: '//div[text()="SIP Assumptions"]'
  };

  replanSipIncreasePercentField = {
    web: 'input#grade-input'
  };

  showPlanDetailsButton = {
    web: '//button[text()="SHOW PLAN DETAILS"]'
  };

  replanSummaryHeader = {
    web: '//div[contains(text(),"Total need by")]'
  };

  additionalInvestingNeededForHeader = {
    web: '//p[text()="Additional investing needed for"]'
  };

  replanCompletedSuccessfullyHeader = {
    web: '//div[text()="Replan completed successfully"]'
  };

  editCollegeStartYearLink = {
    web: '//div[text()="College will begin in"]/parent::div/following-sibling::div/div'
  };

  replanCollegeStartYearLabel = {
    web: '//div[contains(text(),"When will") and contains(text(),"go to") and contains(text(),"college")]'
  };

  replanCollegeStartYearField = {
    web: 'input#grade-input'
  };

  editCurrentYearFeesLink(collegeType) {
    return {
      web: `//div[text()="Planning for a '${collegeType}' with current year's fees of"]/parent::div/following-sibling::div/div[1]`
    };
  }

  replanCurrentYearFeesLabel = {
    web: '//div[contains(text(),"Current year college fees?")]'
  };

  replanCurrentYearFeesField = {
    web: 'input#grade-input'
  };

  editAnnualFeesIncreasePercentLink = {
    web: `//div[text()="Annual increase in college fees"]/parent::div/following-sibling::div/div[1]`
  };

  replanAnnualFeesIncreasePercentLabel = {
    web: '//div[contains(text(),"Annual increase in college fees")]'
  };

  replanAnnualFeesIncreasePercentField = {
    web: '//input'
  };
}
module.exports = new MFGoalsObjects();
