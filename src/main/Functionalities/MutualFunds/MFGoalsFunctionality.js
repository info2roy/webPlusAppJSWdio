const MFGoalsPage = require('../../Pages/MutualFunds/MFGoalsPage');

class MFGoalsFunctionality {
  async selectLifeGoal(lifeGoal) {
    await MFGoalsPage.clickOnLifeGoal(lifeGoal);
    return (await MFGoalsPage.validateNavigationToLifeGoalPage(lifeGoal));
  }

  async selectShowMeHow(lifeGoal) {
    await MFGoalsPage.clickOnShowMeHowButton();
    return (await MFGoalsPage.validateNavigationToLifeGoalSection(lifeGoal));
  }

  async fillRetireConfidentForm(currentAge, monthlyExpenses, retireAtAge, retirementEndAge) {
    await MFGoalsPage.enterAge(currentAge);
    await MFGoalsPage.enterCurrentMonthlyExpenses(monthlyExpenses);
    await MFGoalsPage.enterRetireAtAge(retireAtAge);
    await MFGoalsPage.enterRetirementEndAge(retirementEndAge);
    await MFGoalsPage.clickOnCreateRetirementPlanButton();
    return (await MFGoalsPage.existingSavingsAndPlansPageHeaderIsDisplayed());
  }

  async fillExistingSavingsForm(existingSavingsAmount, existingSavingsGrowthRate, futureMonthlyIncomeFromOtherSources) {
    await MFGoalsPage.clickAddExistingSavingsButton();
    await MFGoalsPage.enterExistingSavingsAmount(existingSavingsAmount);
    await MFGoalsPage.enterExistingSavingsAmountGrowthRate(existingSavingsGrowthRate);
    await MFGoalsPage.clickSaveExistingSavingsDetailsButton();
    await MFGoalsPage.enterFutureMonthlyIncomeFromOtherSources(futureMonthlyIncomeFromOtherSources);
    await MFGoalsPage.clickCalculateMyNeedsButton();
    return (await MFGoalsPage.whatYouNeedToRetireHeaderIsDisplayed());
  }

  async fillInflationPercent(inflationPercent) {
    await MFGoalsPage.selectInflationPercent(inflationPercent);
    await MFGoalsPage.clickShowDetailedPlanButton();
    return (await MFGoalsPage.yourRetirementPlanPageHeaderIsDisplayed());
  }

  async continueWithRetirementPlan() {
    await MFGoalsPage.clickContinueWithRetirementPlanButton();
    return (await MFGoalsPage.congratulationsPageHeaderIsDisplayed());
  }

  async createPlanForRetirement() {
    await MFGoalsPage.clickCreateRetirementPlanFinalButton();
    return (await MFGoalsPage.activateRetirementPlanHeaderIsDisplayed());
  }
}
module.exports = new MFGoalsFunctionality();
