class MFGoalsObjects {

  lifeGoalElement(lifeGoal) {
    return {
      web: `(//div[text()="${lifeGoal}"])[1]`,
      app: `//android.widget.TextView[@text="${lifeGoal}"]`,
    };
  }

  createANewPlanHeader = {
    web: '//div[contains(text(),"Create a new plan")]',
    app: '//*[contains(text(),"Create a new plan")]'
  };

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
    web: '(//h1[contains(text(),"Are you investing enough for your child\'s college education?")])[last()]',
    app: '//*[contains(@text,"Are you investing enough for your child\'s college education?")]'
  };

  lifeGoalExistingPlanElement(lifeGoal) {
    return {
      web: `//div[text()="${lifeGoal}"]/following-sibling::div/following-sibling::div`,
      app: `//android.widget.TextView[@text="${lifeGoal}"]/following-sibling::android.widget.TextView[contains(@text,"1 · existing plans")]`
    };
  }

  yourExistingPlansHeader = {
    web: '//div[contains(text(),"Your existing plans")]',
    app: '//android.widget.TextView[@text="Your existing plans"]'
  };

  investmentCalendarHeader = {
    web: '//div[text()="Investment Calendar"]',
    app: '//android.widget.TextView[@text="Investment Calendar"]'
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

  myAgeIsLabel = {
    app: '//*[@text="My age is"]'
  };

  myCurrentMonthlyExpensesAreLabel = {
    app: '//*[@text="My current monthly expenses are"]'
  };

  iWantToRetireAtTheAgeOfLabel = {
    app: '//*[@text="I want to retire at the age of"]'
  };

  iWantToPlanForAgeLabel = {
    app: '//*[@text="I want to plan for age"]'
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
    web: 'input.ff-retirement-age-js',
    app: '(//android.widget.EditText)[3]'
  };

  retirementEndAgeField = {
    web: 'input.ff-retirment-end-age-js',
    app: '(//android.widget.EditText)[2]'
  };

  createAPlanLink = {
    web: '//a[contains(text(),"Create a plan")]',
    app: '//*[@text="CREATE A PLAN"]'
  };

  existingSavingsAndPlansPageHeader = {
    web: '//span[text()="Existing savings and plans"]',
    app: '//android.view.View[@text="Existing savings and plans"]'
  };

  addExistingSavingsLink = {
    web: '//a[text()="Add"]',
    app: '//android.view.View[@text="Add"]'
  };

  myExistingSavingsHeader = {
    web: '//div[text()="My existing savings"]',
    app: '//android.view.View[@text="My existing savings"]'
  };

  existingSavingsAmountField = {
    web: 'input.ff-savings-amount-input-js',
    app: '(//android.widget.EditText)[1]'
  };

  existingSavingsAmountGrowthRateField = {
    web: 'input.ff-savings-returns-input-js',
    app: '(//android.widget.EditText)[2]'
  };

  saveExistingSavingsDetailsButton = {
    web: '//button[text()="Save"]',
    app: '//android.widget.Button[@text="SAVE"]'
  };

  futureMonthlyIncomeFromOtherSourcesField = {
    web: 'input.ff-plan-savings-amount-custom-js',
    app: '(//android.widget.EditText)[1]'
  };

  calculateMyNeedLink = {
    web: '//a[contains(text(),"Calculate My Need")]',
    app: '//android.widget.TextView[@text="CALCULATE MY NEED"]'
  };

  whatYouNeedToRetireHeader = {
    web: '//span[text()="What you need to retire"]',
    app: '//android.view.View[@text="What you need to retire"]'
  };

  inflationPercentSelectOption = {
    web: 'select.ff-plan-inflation',
    app: '//android.view.View[@text="5%"]'
  };

  inflationPercentOption(inflationPercent) {
    return {
      app: `//android.widget.CheckedTextView[@text="${inflationPercent}%"]`
    };
  }

  showDetailedPlanLink = {
    web: '//a[contains(text(),"Show Detailed Plan")]',
    app: '//android.widget.TextView[@text="SHOW DETAILED PLAN"]'
  };

  yourRetirementPlanPageHeader = {
    web: '//span[text()="Your Retirement Plan"]',
    app: '//android.view.View[@text="Your Retirement Plan"]'
  };

  continueLink = {
    web: '//a[contains(text(),"Continue")]',
    app: '//android.widget.TextView[@text="CONTINUE"]'
  };

  continueLinkText = {
    app: 'CONTINUE'
  };

  congratulationsPageHeader = {
    web: '//span[text()="Congratulations!"]',
    app: '//android.view.View[@text="Congratulations!"]'
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

  myChildIsInClassLabel = {
    app: '//android.view.View[@text="My child is in class"]'
  };

  classOfChildField = {
    web: 'input.education-plan-age-input',
    app: '//android.widget.EditText[@resource-id="education-grade-input-js"]'
  };

  childInPreschoolOrNotInSchoolCheckbox = {
    web: '//input[@type="checkbox"]',
    app: '//android.widget.CheckBox[@resource-id="education-plan-input-preschool"]'
  };

  childLikelyToStartCollegeInYearHeader = {
    web: '//div[contains(text(),"Your child is likely to start college in")]',
    app: '//android.view.View[contains(@text,"Your child is likely to start college in")]'
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
      web: `//span[contains(text(),"${this.getStartCollegeYear(classOfChild)}")]`,
      app: `//android.view.View[contains(@text,"Your child is likely to start college in ${this.getStartCollegeYear(classOfChild)}")]`
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
      web: `(//a[contains(text(),"Personalise this plan")])[${index}]`,
      app: `(//android.view.View[@text="${collegeType}"]/following-sibling::android.view.View)[last()]`
    };
  }

  premierEducationPlanPageHeader = {
    web: '//p[contains(text(),"Quick plan for your child\'s")]',
    app: '//android.view.View[contains(@text,"Quick plan for your child\'s")]'
  };

  continueButtonForPremierEducationPlan(index) {
    return {
      web: `(//a[contains(text(),"Continue")])[${index}]`,
      app: '//android.widget.TextView[@text="CONTINUE"]'
    };
  }

  premierEducationFormHeader = {
    web: '//label[contains(text(),"This plan is for")]',
    app: '//android.view.View[@text="This plan is for"]'
  };

  childNameField = {
    web: 'input.gef-name-input',
    app: '(//android.view.View[@text="This plan is for"]/following-sibling::android.widget.EditText)[1]'
  };

  yearlyFeesField = {
    web: 'input.plan-goal-amount-input',
    app: '(//android.view.View[@text="Planning for a college with current yearly fees of"]/following-sibling::android.widget.EditText)[1]'
  };

  seeYearlyBreakupButton = {
    web: '//div[contains(text(),"See yearly breakup")]',
    app: '//android.view.View[@text="SEE YEARLY BREAKUP"]'
  };

  yearlyBreakupPageGoal = {
    web: '//div[contains(text(),"Goal")]',
    app: '//android.view.View[@text="Goal"]'
  };

  yearlyBreakupPageGoalHeader(classOfChild) {
    return {
      web: `//div[contains(text(),"Estimated yearly fees in")]`,
      app: `//android.view.View[@text="Estimated yearly fees in ${this.getStartCollegeYear(classOfChild)}"]`
    };
  }

  yearlyBreakupPagePlan = {
    web: '//div[contains(text(),"Plan")]',
    app: '//android.view.View[@text="Plan"]'
  };

  yearlyBreakupPagePlanChildName(childname) {
    return {
      web: `//span[contains(text(),"${childname}")]`
    };
  }

  yearlyBreakupPagePlanHeader = {
    web: '//div/span[contains(text(),"\'s college education plan")]',
    app: '//android.view.View[contains(@text,"\'s college education plan")]'
  };

  yearlyBreakupPageShowPlanButton = {
    web: '//a[contains(text(),"Show plan for")]',
    app: '//android.widget.TextView[contains(@text,"SHOW PLAN FOR")]'
  };

  premierEducationWorkingPlanHeader1 = {
    web: '//div[contains(text(),"Here is a working plan for")]',
    app: '//android.view.View[contains(@text,"Here is a working plan for")]'
  };

  premierEducationWorkingPlanHeader2 = {
    web: '//div/span[contains(text(),"\'s education")]',
    app: '//android.view.View[contains(@text,"\'s education")]'
  };

  premierEducationWorkingPlanStartWithButton = {
    web: '//a[contains(text(),"Start With")]',
    app: '//android.widget.TextView[contains(@text,"START WITH")]'
  };

  premierEducationInvestPageHeader = {
    web: '//p[contains(text(),"\'s College Education Plan")]',
    app: '//android.view.View[contains(@text,"\'s College Education Plan")]'
  };

  signupOrLoginButton = {
    web: '//a[contains(text(),"Signup / Login")]',
    app: '//android.widget.TextView[@text="SIGNUP / LOGIN"]'
  };

  createPlanButton = {
    web: '//a[contains(text(),"Create Plan")]'
  };

  investEveryMonthButton = {
    web: '//button[text()="INVEST EVERY MONTH"]',
    app: '//android.widget.TextView[@text="INVEST EVERY MONTH"]'
  };

  investOneTimeButton = {
    web: '//button[text()="INVEST ONE TIME"]'
  };

  amountPlannedWithScripboxHeader = {
    web: '//p[text()="Amount Planned With Scripbox:"]',
    app: '//android.widget.TextView[@text="Amount Planned With Scripbox:"]'
  };

  howWouldYouLikeYourMoneyToGrowHeader = {
    web: '//div[text()="How would you like your money to grow?"]'
  };

  iWouldLikeToInvestOneTimeHeader = {
    web: '//div[text()="I would like to invest one time"]'
  };

  continueButton = {
    web: '//button[contains(text(),"Continue")]',
    app: '//android.widget.TextView[@text="CONTINUE"]'
  };

  fundListHeader = {
    web: '//div[text()="Fund list"]',
    app: '//android.widget.TextView[@text="Fund list"]'
  };

  continueToInvestButton = {
    web: '//button[contains(text(),"Continue to invest")]',
    app: '//android.widget.TextView[@text="CONTINUE TO INVEST"]'
  };

  paymentTypePageHeader = {
    web: '//div[contains(text(),"I would like to invest Rs")]',
    app: '//android.widget.TextView[contains(@text,"I would like to invest Rs")]'
  };

  noInvestmentsToCancelMessage = {
    web: '//p[text()="There are no investments to cancel in this plan."]'
  };

  confirmButton = {
    web: '//button[contains(text(),"Confirm")]',
    app: '//android.widget.TextView[@text="CONFIRM"]'
  };

  rightAngleBracketButton = {
    web: '//span[text()="chevron_right"]',
    app: '(//android.widget.TextView[contains(@text,"achieved")]/following-sibling::android.view.ViewGroup)[1]'
  };

  planDetailsHeader(lifeGoal, childname) {
    let title = lifeGoal;
    if (childname.length > 0) {
      title = `${title} for ${childname}`;
    }
    return {
      web: '//p[text()="PLAN DETAILS"]',
      app: `//android.widget.TextView[@text="${title}"]`
    };
  }

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
    web: '//div[contains(text(),"Additional investing needed for")]'
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

  editCurrentYearFeesLink = {
    web: `//div[text()="Planning with current year's fees of"]/parent::div/following-sibling::div/div[1]`
  };

  replanCurrentYearFeesLabel = {
    web: '//div[contains(text(),"Current year")]'
  };

  replanCurrentYearFeesField = {
    web: 'input#grade-input'
  };

  editAnnualFeesIncreasePercentLink = {
    web: `//div[text()="Annual increase in college fees"]/parent::div/following-sibling::div/div[1]`
  };

  replanAnnualFeesIncreasePercentLabel = {
    web: '//div[contains(text(),"Annual increase in")]'
  };

  replanAnnualFeesIncreasePercentField = {
    web: '//input'
  };

  editAnnualContributionWhileInCollegeLink = {
    web: `//div[text()="Annual contribution while in college"]/parent::div/following-sibling::div/div[1]`
  };

  replanAnnualContributionWhileInCollegeLabel = {
    web: '//div[contains(text(),"How much will you contribute annually during the course?")]'
  };

  replanAnnualContributionWhileInCollegeField = {
    web: 'input#annual-contribution-input'
  };
}
module.exports = new MFGoalsObjects();
