const MFGoalsPage = require('../../Pages/MutualFunds/MFGoalsPage');
const LoginPage = require('../../Pages/LoginPage');

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

  //Premier Education
  async selectClassOfChild(classOfChild) {
    await MFGoalsPage.enterClassOfChild(classOfChild);
    return (await MFGoalsPage.childLikelyToStartCollegeInYearHeaderIsDisplayed()) &&
      (await MFGoalsPage.childLikelyToStartCollegeInYearIsDisplayed(classOfChild));
  }

  async selectPremierEducationCollegeType(collegeType) {
    await MFGoalsPage.clickPersonaliseThisPlanForCollegeType(collegeType);
    return (await MFGoalsPage.premierEducationPlanPageHeaderIsDisplayed());
  }

  async continueWithPremierEducationPlan() {
    await MFGoalsPage.clickContinueButtonForPremierEducationPlan(1);
    return (await MFGoalsPage.premierEducationFormHeaderIsDisplayed());
  }

  async fillPremierEducationForm(childname, yearlyFees, classOfChild) {
    await MFGoalsPage.enterChildName(childname);
    await MFGoalsPage.enterYearlyFees(yearlyFees);
    await MFGoalsPage.clickSeeYearlyBreakupButton();
    return (await MFGoalsPage.yearlyBreakupGoalPageIsDisplayed(classOfChild));
  }

  async continueOnYearlyFeesBreakupGoalPage() {
    await MFGoalsPage.clickContinueButtonForPremierEducationPlan(1);
    return (await MFGoalsPage.yearlyBreakupPlanPageIsDisplayed());
  }

  async showPlanForPremierEducation() {
    await MFGoalsPage.clickYearlyBreakupPageShowPlanButton();
    return (await MFGoalsPage.premierEducationWorkingPlanPageIsDisplayed());
  }

  async startWithWorkingPlanForPremierEducation() {
    await MFGoalsPage.clickPremierEducationWorkingPlanStartWithButton();
    return (await MFGoalsPage.premierEducationPlanInvestPageIsDisplayed());
  }

  async continueInvestForPremierEducation() {
    await MFGoalsPage.clickContinueButtonForPremierEducationPlan(2);
    return (await MFGoalsPage.signupOrLoginButtonIsDisplayed());
  }

  async signupOrLoginForPremierEducationPlan() {
    await MFGoalsPage.clickSignupOrLoginButton();
    return (await LoginPage.loginYourAccountToContinueHeaderIsDisplayed());
  }
}
module.exports = new MFGoalsFunctionality();
