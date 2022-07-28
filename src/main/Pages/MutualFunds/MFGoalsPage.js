const Device = require('../../../support/libraries/Device');
const Utils = require('../../../support/Utils/Utils');
const MFGoalsObjects = require('../../Objects/MutualFunds/MFGoalsObjects');
const { expect } = require('chai');

class MFGoalsPage {
  async clickOnLifeGoal(lifeGoal) {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid(lifeGoal);
    } else if(Device.isWeb()) {
      await Utils.scrollAndMoveToElement(MFGoalsObjects.lifeGoalElement(lifeGoal));
    }
    await Utils.clickElement(MFGoalsObjects.lifeGoalElement(lifeGoal));
  }

  async validateNavigationToLifeGoalPage(lifeGoal) {
    switch(lifeGoal) {
      case 'Retire Confident':
        return Utils.elementIsDisplayed(MFGoalsObjects.retireConfidentGoalPageHeader);
      case 'Premier Education':
        return Utils.elementIsDisplayed(MFGoalsObjects.premierEducationGoalPageHeader);
      default:
        console.log(`Unsupported life goal ${lifeGoal}`);
        return false;
    }
  }

  async clickOnShowMeHowButton() {
    await Utils.clickElement(MFGoalsObjects.showMeHowButton);
  }

  async validateNavigationToLifeGoalSection(lifeGoal) {
    switch(lifeGoal) {
      case 'Retire Confident':
        return Utils.elementIsDisplayed(MFGoalsObjects.retireConfidentGoalSectionHeader);
      case 'Premier Education':
        return Utils.elementIsDisplayed(MFGoalsObjects.premierEducationGoalSectionHeader);
      default:
        console.log(`Unsupported life goal ${lifeGoal}`);
        return false;
    }
  }

  async enterAge(currentAge) {
    await Utils.setInputField(currentAge, MFGoalsObjects.myAgeField);
  }

  async enterCurrentMonthlyExpenses(monthlyExpensesAmount) {
    const selector = MFGoalsObjects.monthlyExpensesOption(monthlyExpensesAmount);
    if (selector == undefined) {
      await Utils.setInputField(monthlyExpensesAmount, MFGoalsObjects.currentMonthlyExpensesField);
    } else {
      await Utils.clickElement(selector);
    }
  }

  async enterRetireAtAge(retireAtAge) {
    await Utils.setInputField(retireAtAge, MFGoalsObjects.retireAtAgeField);
  }

  async enterRetirementEndAge(retirementEndAge) {
    await Utils.setInputField(retirementEndAge, MFGoalsObjects.retirementEndAgeField);
  }

  async clickOnCreateRetirementPlanButton() {
    await Utils.clickElement(MFGoalsObjects.createRetirementPlanButton);
  }

  async existingSavingsAndPlansPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.existingSavingsAndPlansPageHeader));
  }

  async clickAddExistingSavingsButton() {
    await Utils.clickElement(MFGoalsObjects.addAlreadySavedAmountButton);
    expect(await Utils.elementIsDisplayed(MFGoalsObjects.myExistingSavingsHeader)).to.be.true;
  }

  async enterExistingSavingsAmount(amount) {
    await Utils.setInputField(amount, MFGoalsObjects.existingSavingsAmountField);
  }

  async enterExistingSavingsAmountGrowthRate(rate) {
    await Utils.setInputField(rate, MFGoalsObjects.existingSavingsAmountGrowthRateField);
  }

  async clickSaveExistingSavingsDetailsButton() {
    await Utils.clickElement(MFGoalsObjects.saveExistingSavingsDetailsButton);
  }

  async enterFutureMonthlyIncomeFromOtherSources(amount) {
    await Utils.setInputField(amount, MFGoalsObjects.futureMonthlyIncomeFromOtherSourcesField);
  }

  async clickCalculateMyNeedsButton() {
    await Utils.clickElement(MFGoalsObjects.calculateMyNeedsButton);
  }

  async whatYouNeedToRetireHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.whatYouNeedToRetireHeader));
  }

  async selectInflationPercent(inflationPercent) {
    await Utils.chooseSelectOptionByAttribute(MFGoalsObjects.inflationPercentSelectOption, 'value', inflationPercent.toString());
  }

  async clickShowDetailedPlanButton() {
    await Utils.clickElement(MFGoalsObjects.showDetailedPlanButton);
  }

  async yourRetirementPlanPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.yourRetirementPlanPageHeader));
  }

  async clickContinueWithRetirementPlanButton() {
    if (Device.isWeb()) {
      Utils.scrollAndMoveToElement(MFGoalsObjects.continueWithRetirementPlanButton);
    } else if(Device.isAndroidApp()) {
      Utils.scrollVerticalUntilTextIntoViewForAndroid(MFGoalsObjects.continueWithRetirementPlanButtonText);
    }
    await Utils.clickElement(MFGoalsObjects.continueWithRetirementPlanButton);
  }

  async congratulationsPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.congratulationsPageHeader));
  }

  async clickCreateRetirementPlanFinalButton() {
    await Utils.clickElement(MFGoalsObjects.createRetirementPlanFinalButton);
  }

  async activateRetirementPlanHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.activateRetirementPlanHeader));
  }

  async enterClassOfChild(classOfChild) {
    if(classOfChild === 0) {
      await Utils.setCheckBox(MFGoalsObjects.childInPreschoolOrNotInSchoolCheckbox, true);
    } else if (classOfChild > 0) {
      await Utils.setInputField(classOfChild, MFGoalsObjects.classOfChildField);
    } else {
      console.log(`Invalid child class ${classOfChild}`);
    }
  }

  async childLikelyToStartCollegeInYearHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.childLikelyToStartCollegeInYearHeader));
  }

  async childLikelyToStartCollegeInYearIsDisplayed(classOfChild) {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.childLikelyToStartCollegeInYear(classOfChild)));
  }

  async clickPersonaliseThisPlanForCollegeType(collegeType) {
    if (Device.isWeb()) {
      Utils.scrollAndMoveToElement(MFGoalsObjects.personaliseThisPlanButtonForCollegeType(collegeType));
    }
    await Utils.clickElement(MFGoalsObjects.personaliseThisPlanButtonForCollegeType(collegeType));
  }

  async premierEducationPlanPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.premierEducationPlanPageHeader));
  }

  async clickContinueButtonForPremierEducationPlan(index) {
    if (Device.isWeb()) {
      Utils.scrollAndMoveToElement(MFGoalsObjects.continueButtonForPremierEducationPlan(index));
    }
    await Utils.clickElement(MFGoalsObjects.continueButtonForPremierEducationPlan(index));
  }

  async premierEducationFormHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.premierEducationFormHeader));
  }

  async enterChildName(childname) {
    await Utils.setInputField(childname, MFGoalsObjects.childNameField);
  }

  async enterYearlyFees(yearlyFees) {
    await Utils.setInputField(yearlyFees, MFGoalsObjects.yearlyFeesField);
  }

  async clickSeeYearlyBreakupButton() {
    await Utils.clickElement(MFGoalsObjects.seeYearlyBreakupButton);
  }

  async yearlyBreakupGoalPageIsDisplayed(classOfChild) {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.yearlyBreakupPageGoal)) &&
      (await Utils.elementIsDisplayed(MFGoalsObjects.yearlyBreakupPageGoalHeader)) &&
      (await Utils.elementIsDisplayed(MFGoalsObjects.childLikelyToStartCollegeInYear(classOfChild)));
  }

  async yearlyBreakupPlanPageIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.yearlyBreakupPagePlan)) &&
      (await Utils.elementIsDisplayed(MFGoalsObjects.yearlyBreakupPagePlanHeader));
  }

  async clickYearlyBreakupPageShowPlanButton() {
    await Utils.clickElement(MFGoalsObjects.yearlyBreakupPageShowPlanButton);
  }

  async premierEducationWorkingPlanPageIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.premierEducationWorkingPlanHeader1)) &&
      (await Utils.elementIsDisplayed(MFGoalsObjects.premierEducationWorkingPlanHeader2));
  }

  async clickPremierEducationWorkingPlanStartWithButton() {
    await Utils.clickElement(MFGoalsObjects.premierEducationWorkingPlanStartWithButton);
  }

  async premierEducationPlanInvestPageIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.premierEducationInvestPageHeader));
  }

  async signupOrLoginButtonIsDisplayed() {
    return (await Utils.elementIsDisplayedNow(MFGoalsObjects.signupOrLoginButton));
  }

  async clickSignupOrLoginButton() {
    await Utils.clickElement(MFGoalsObjects.signupOrLoginButton);
  }

  async createPlanButtonIsDisplayed() {
    return (await Utils.elementIsDisplayedNow(MFGoalsObjects.createPlanButton));
  }

  async clickCreatePlanButton() {
    await Utils.clickElement(MFGoalsObjects.createPlanButton);
  }

  async clickInvestEveryMonthButton() {
    await Utils.clickElement(MFGoalsObjects.investEveryMonthButton);
  }

  async amountPlannedWithScripboxHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.amountPlannedWithScripboxHeader));
  }

  async clickContinueWithRetireConfidentInvestmentButton() {
    await Utils.clickElement(MFGoalsObjects.continueWithRetireConfidentInvestmentButton);
  }
}
module.exports = new MFGoalsPage();
