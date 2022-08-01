const MFGoalsPage = require('../../Pages/MutualFunds/MFGoalsPage');
const LoginPage = require('../../Pages/LoginPage');
const LoginFunctionality = require('../../Functionalities/LoginFunctionality');
const { expect } = require('chai');
const LoginData = require('../../../config/data/structured/LoginData');

class MFGoalsFunctionality {
  async selectLifeGoal(lifeGoal) {
    await MFGoalsPage.clickOnLifeGoal(lifeGoal);
    return (await MFGoalsPage.validateNavigationToLifeGoalPage(lifeGoal));
  }

  async selectExistingPlanForLifeGoal(lifeGoal) {
    await MFGoalsPage.clickOnExistingPlanForLifeGoal(lifeGoal);
    return MFGoalsPage.lifeGoalElementIsDisplayed(lifeGoal) &&
      MFGoalsPage.investmentCalendarHeaderIsDisplayed();
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

  async investMoreForGoalPlan() {
    await MFGoalsPage.clickInvestMoreButtonForGoalPlan();
    return (await MFGoalsPage.investMorePageHeaderIsDisplayed());
  }

  async doOtherActionForGoalPlan(actionType) {
    console.log(`actionType: ${actionType}`);
  }

  async otherActionsForGoalPlan() {
    await MFGoalsPage.clickInvestMoreButtonForGoalPlan();
    return (await MFGoalsPage.startANewSIPHeaderIsDisplayed()) &&
      (await MFGoalsPage.investOneTimeHeaderIsDisplayed());
  }

  async validateRetireConfidentSIP(amount) {
    return (await MFGoalsPage.retireConfidentSIPIsDisplayed(amount));
  }

  async validateRetireConfidentOneTime(amount) {
    return (await MFGoalsPage.retireConfidentOneTimeIsDisplayed(amount));
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
  }

  async createAPlanOrSignupOrLoginForMutualFundGoalPlan() {
    const signupOrLoginButtonIsDisplayed = await MFGoalsPage.signupOrLoginButtonIsDisplayed();
    const createPlanButtonIsDisplayed = await MFGoalsPage.createPlanButtonIsDisplayed();
    if(signupOrLoginButtonIsDisplayed) {
      await MFGoalsPage.clickSignupOrLoginButton();
      expect(await LoginPage.loginYourAccountToContinueHeaderIsDisplayed()).to.be.true;
      await LoginFunctionality.loginWithUsername(LoginData.username);
      await LoginFunctionality.continueWithPassword();
      await LoginFunctionality.loginWithPassword(LoginData.password);
      return true;
    } else if(createPlanButtonIsDisplayed) {
      await MFGoalsPage.clickCreatePlanButton();
      await LoginFunctionality.continueWithPassword();
      await LoginFunctionality.loginWithPassword(LoginData.password);
      return true;
    }
    console.log('None of CREATE A PLAN OR SIGNUP OR LOGIN button are displayed');
    return false;
  }

  async investEveryMonth() {
    await MFGoalsPage.clickInvestEveryMonthButton();
    return (await MFGoalsPage.amountPlannedWithScripboxHeaderIsDisplayed());
  }

  async investOneTime() {
    await MFGoalsPage.clickInvestOneTimeButton();
    return (await MFGoalsPage.howWouldYouLikeYourMoneyToGrowHeaderIsDisplayed());
  }

  async continueWithRetireConfidentInvestment() {
    await MFGoalsPage.clickContinueWithRetireConfidentInvestmentButton();
    return (await MFGoalsPage.fundListHeaderIsDisplayed());
  }

  async continueToInvestWithRetireConfidentInvestment() {
    await MFGoalsPage.clickContinueToInvestWithRetireConfidentInvestmentButton();
    return (await MFGoalsPage.paymentTypePageForRetireConfidentHeaderIsDisplayed());
  }

  async confirmToInvestWithRetireConfidentInvestment() {
    await MFGoalsPage.clickConfirmToInvestWithRetireConfidentInvestmentButton();
  }
}
module.exports = new MFGoalsFunctionality();
