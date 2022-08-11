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

  async selectExistingPlanForLifeGoal(lifeGoal, investmentCalendarDisplayed = true, childname = '') {
    await MFGoalsPage.clickOnExistingPlanForLifeGoal(lifeGoal, childname);
    let status = (await MFGoalsPage.lifeGoalElementIsDisplayed(lifeGoal, childname));
    if (investmentCalendarDisplayed) {
      status = status && (await MFGoalsPage.investmentCalendarHeaderIsDisplayed());
    }
    return status;
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
    await MFGoalsPage.clickOnCreateAPlanLink();
    return (await MFGoalsPage.existingSavingsAndPlansPageHeaderIsDisplayed());
  }

  async fillExistingSavingsForm(existingSavingsAmount, existingSavingsGrowthRate, futureMonthlyIncomeFromOtherSources) {
    await MFGoalsPage.clickAddExistingSavingsLink();
    await MFGoalsPage.enterExistingSavingsAmount(existingSavingsAmount);
    await MFGoalsPage.enterExistingSavingsAmountGrowthRate(existingSavingsGrowthRate);
    await MFGoalsPage.clickSaveExistingSavingsDetailsButton();
    await MFGoalsPage.enterFutureMonthlyIncomeFromOtherSources(futureMonthlyIncomeFromOtherSources);
    await MFGoalsPage.clickCalculateMyNeedLink();
    return (await MFGoalsPage.whatYouNeedToRetireHeaderIsDisplayed());
  }

  async fillInflationPercent(inflationPercent) {
    await MFGoalsPage.selectInflationPercent(inflationPercent);
    await MFGoalsPage.clickShowDetailedPlanLink();
    return (await MFGoalsPage.yourRetirementPlanPageHeaderIsDisplayed());
  }

  async continueWithRetirementPlan() {
    await MFGoalsPage.clickContinueLink();
    return (await MFGoalsPage.congratulationsPageHeaderIsDisplayed());
  }

  async createPlanForRetirement() {
    await MFGoalsPage.clickCreatePlanFinalButton();
    return (await MFGoalsPage.activatePlanHeaderIsDisplayed());
  }

  async investMoreForGoalPlan() {
    await MFGoalsPage.clickInvestMoreButton();
    return (await MFGoalsPage.iWantToInvestHeaderIsDisplayed());
  }

  async otherActionsForGoalPlan() {
    await MFGoalsPage.clickOtherActionsOrEditPlanButton('OTHER ACTIONS');
    return (await MFGoalsPage.startANewSIPHeaderIsDisplayed()) &&
      (await MFGoalsPage.investOneTimeHeaderIsDisplayed());
  }

  async doOtherActionForGoalPlan(actionType) {
    await MFGoalsPage.clickOnOtherActionForGoalPlan(actionType);
    return (await MFGoalsPage.validateNavigationToOtherActionForGoalPlan(actionType));
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

  async createAPlanOrSignupOrLoginForLifeGoalPlan() {
    if(await MFGoalsPage.signupOrLoginButtonIsDisplayed()) {
      await MFGoalsPage.clickSignupOrLoginButton();
      expect(await LoginPage.loginYourAccountToContinueHeaderIsDisplayed()).to.be.true;
      await LoginFunctionality.loginWithUsername(LoginData.username);
      await LoginFunctionality.loginWithPassword(LoginData.password);
      return true;
    } else if(await MFGoalsPage.createPlanButtonIsDisplayed()) {
      await MFGoalsPage.clickCreatePlanButton();
      const loginViaOTP = await LoginFunctionality.loginViaOTPPageLaunched();
      const continueWithPassword = await LoginFunctionality.continueWithPasswordButtonIsDisplayed();
      if (loginViaOTP) {
        if(continueWithPassword) {
          await LoginFunctionality.continueWithPassword();
          await LoginFunctionality.loginWithPassword(LoginData.password);
        } else {
          await LoginFunctionality.enterOTP([1, 1, 1, 1, 1, 1]);
        }
      } else {
        await LoginFunctionality.loginWithPassword(LoginData.password);
      }
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

  async continueWithOneTimeInvestment() {
    await MFGoalsPage.clickContinueButton();
    return (await MFGoalsPage.iWouldLikeToInvestOneTimeHeaderIsDisplayed());
  }

  async investOneTimeFillAmountAndContinue(amount) {
    await MFGoalsPage.enterInvestOneTimeAmount(amount);
    await MFGoalsPage.clickContinueLink();
    return (await MFGoalsPage.fundListHeaderIsDisplayed());
  }

  async continueWithEveryMonthInvestment() {
    await MFGoalsPage.clickContinueButton();
    return (await MFGoalsPage.fundListHeaderIsDisplayed());
  }

  async continueToInvest() {
    await MFGoalsPage.clickContinueToInvestButton();
    return (await MFGoalsPage.paymentTypePageHeaderIsDisplayed());
  }

  async confirmToInvest() {
    await MFGoalsPage.clickConfirmButton();
  }

  async seeLifeGoalPlanDetails() {
    await MFGoalsPage.clickToSeeLifeGoalPlanDetails();
    return (await MFGoalsPage.planDetailsHeaderIsDisplayed());
  }

  async otherActionsOrEditPlan(buttonText) {
    await MFGoalsPage.clickOtherActionsOrEditPlanButton(buttonText);
    return (await MFGoalsPage.validateNavigationToOtherActionsOrEditPlanButton(buttonText));
  }

  async doOtherAction(otherAction) {
    await MFGoalsPage.clickOnOtherAction(otherAction);
    return (await MFGoalsPage.validateNavigateToOtherAction(otherAction));
  }

  async confirmStopAllInvestments() {
    if(!(await MFGoalsPage.noInvestmentsToCancelMessageIsDisplayed())) {
      await MFGoalsPage.clickConfirmButton();
      return (await MFGoalsPage.planCancelMessageIsDisplayed());
    }
  }

  async closeThePlan() {
    await MFGoalsPage.clickCloseThisPlanButton();
    return (await MFGoalsPage.planClosedMessageIsDisplayed());
  }

  async updateRetireConfidentGoalProperty(property, value) {
    await MFGoalsPage.updateRetireConfidentGoalProperty(property, value);
  }

  async continueReplanForRetireConfident() {
    await MFGoalsPage.clickContinueReplanButton();
    return (await MFGoalsPage.replanStep2HeaderIsDisplayed());
  }

  async fillReplanExistingSavingsForm(newFutureMonthlyIncomeFromOtherSources, newExistingSavingsAmount, newExistingSavingsGrowthRate) {
    await MFGoalsPage.clickEditFutureMonthlyIncomeFromOtherSourcesLink();
    expect(await MFGoalsPage.replanFutureMonthlyIncomeFromOtherSourcesLabelIsDisplayed()).to.be.true;
    await MFGoalsPage.enterReplanFutureMonthlyIncomeFromOtherSources(newFutureMonthlyIncomeFromOtherSources);
    await MFGoalsPage.clickOkayButton();
    await MFGoalsPage.clickEditExternalSavingsForGoalLink();
    expect(await MFGoalsPage.replanExternalSavingsForGoalLabelIsDisplayed()).to.be.true;
    await MFGoalsPage.enterReplanExternalSavingsForGoal(newExistingSavingsAmount);
    await MFGoalsPage.enterReplanExternalSavingForGoalGrowthRate(newExistingSavingsGrowthRate);
    await MFGoalsPage.clickOkayButton();
    await MFGoalsPage.clickContinueReplanButton();
    return (await MFGoalsPage.replanStep3HeaderIsDisplayed());
  }

  async showPlanDetails() {
    await MFGoalsPage.clickShowPlanDetailsButton();
    return (await MFGoalsPage.replanSummaryHeaderIsDisplayed());
  }

  async continueReplanStep3() {
    await MFGoalsPage.clickContinueReplanButton();
    return (await MFGoalsPage.additionalInvestingNeededForHeaderIsDisplayed());
  }

  async continueReplanFinalStep(lifeGoal) {
    await MFGoalsPage.clickContinueReplanButton();
    return (await MFGoalsPage.replanSummaryLifeGoalElementIsDisplayed(lifeGoal));
  }

  async replanCompletedSuccessfully() {
    return (await MFGoalsPage.replanCompletedSuccessfullyHeaderIsDisplayed());
  }

  async updatePremierEducationGoalProperty(property, value) {
    await MFGoalsPage.updatePremierEducationGoalProperty(property, value);
  }

}
module.exports = new MFGoalsFunctionality();
