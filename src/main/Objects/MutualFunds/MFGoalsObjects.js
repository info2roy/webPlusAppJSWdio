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
}
module.exports = new MFGoalsObjects();

