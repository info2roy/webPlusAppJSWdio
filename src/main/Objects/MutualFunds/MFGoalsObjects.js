class MFGoalsObjects {

  lifeGoalElement(lifeGoal) {
    return {
      web: `//div[text()="${lifeGoal}"]`
    };
  }

  retireConfidentGoalPageHeader = {
    web: '//h1[contains(text(),"Will you be able to maintain your lifestyle in retirement?")]'
  };

  premierEducationGoalPageHeader = {
    web: '//h1[contains(text(),"Are you investing enough for your child\'s college education?")]'
  };

  showMeHowButton = {
    web: '//button[contains(text(),"Show me how")]'
  };

  retireConfidentGoalSectionHeader = {
    web: '//p[contains(text(),"Scripbox Retire Confident")]'
  };

  premierEducationGoalSectionHeader = {
    web: '//p[contains(text(),"My child\'s education fund")]'
  };

  myAgeField = {
    web: 'input.my-age-js'
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
      web: `//span[contains(text(),"${amountCode}")]`
    };
  }

  currentMonthlyExpensesField = {
    web: 'input.ff-current-monthly-expenses-js'
  };

  retireAtAgeField = {
    web: 'input.ff-retirement-age-js'
  };

  retirementEndAgeField = {
    web: 'input.ff-retirment-end-age-js'
  };

  createRetirementPlanButton = {
    web: '//a[contains(text(),"Create a plan")]'
  };

  existingSavingsAndPlansPageHeader = {
    web: '//span[text()="Existing savings and plans"]'
  };

  addAlreadySavedAmountButton = {
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

  calculateMyNeedsButton = {
    web: '//a[contains(text(),"Calculate My Need")]'
  };

  whatYouNeedToRetireHeader = {
    web: '//span[text()="What you need to retire"]'
  };

  inflationPercentSelectOption = {
    web: 'select.ff-plan-inflation'
  };

  showDetailedPlanButton = {
    web: '//a[contains(text(),"Show Detailed Plan")]'
  };

  yourRetirementPlanPageHeader = {
    web: '//span[text()="Your Retirement Plan"]'
  };

  continueWithRetirementPlanButton = {
    web: '//a[contains(text(),"Continue")]'
  };

  continueWithRetirementPlanButtonText = {
    app: 'CONTINUE'
  };

  congratulationsPageHeader = {
    web: '//span[text()="Congratulations!"]'
  };

  createRetirementPlanFinalButton = {
    web: '//a[contains(text(),"Create Plan")]'
  };

  activateRetirementPlanHeader = {
    web: '//span[text()="Activate Plan"]'
  };

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

  personaliseThisPlanButtonForCollegeType(collegeType) {
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

  amountPlannedWithScripboxHeader = {
    web: '//p[text()="Amount Planned With Scripbox:"]'
  };

  continueWithRetireConfidentInvestmentButton = {
    web: '//button[contains(text(),"Continue")]'
  };

  fundListHeader = {
    web: '//div[text()="Fund list"]'
  };

  continueToInvestWithRetireConfidentInvestmentButton = {
    web: '//button[contains(text(),"Continue to invest")]'
  };

  paymentTypePageForRetireConfidentHeader = {
    web: '//div[contains(text(),"I would like to invest Rs")]'
  };

  confirmToInvestWithRetireConfidentInvestmentButton = {
    web: '//button[contains(text(),"Confirm")]'
  };
}
module.exports = new MFGoalsObjects();

