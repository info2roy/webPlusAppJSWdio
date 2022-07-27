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
}
module.exports = new MFGoalsPage();
