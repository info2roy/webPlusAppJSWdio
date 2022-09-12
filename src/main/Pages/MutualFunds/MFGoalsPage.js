const Device = require('../../../support/libraries/Device');
const Utils = require('../../../support/Utils/Utils');
const MFGoalsObjects = require('../../Objects/MutualFunds/MFGoalsObjects');
const { expect } = require('chai');

class MFGoalsPage {
  async clickOnLifeGoal(lifeGoal) {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalToEndForAndroid(0, 5);
      await Utils.scrollHorizontalUntilTextIntoViewForAndroid({ app: lifeGoal }, 1);
    } else if(Device.isWeb()) {
      await Utils.scrollAndMoveToElement(MFGoalsObjects.lifeGoalElement(lifeGoal));
    }
    await Utils.clickElement(MFGoalsObjects.lifeGoalElement(lifeGoal));
  }

  async createANewPlanHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.createANewPlanHeader));
  }

  async lifeGoalElementIsDisplayed(lifeGoal, childname = '') {
    if (childname.length > 0) {
      lifeGoal = `${lifeGoal} for ${Utils.capitalizeFirstLetter(childname)}`;
    }
    return (await Utils.elementIsDisplayed(MFGoalsObjects.lifeGoalElement(lifeGoal)));
  }

  async replanSummaryLifeGoalElementIsDisplayed(lifeGoal) {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.replanSummaryLifeGoalElement(lifeGoal)));
  }

  async validateNavigationToLifeGoalPage(lifeGoal) {
    switch(lifeGoal) {
      case 'Retire Confident':
        return (await Utils.elementIsDisplayed(MFGoalsObjects.retireConfidentGoalPageHeader));
      case 'Premier Education':
        return (await Utils.elementIsDisplayed(MFGoalsObjects.premierEducationGoalPageHeader));
      default:
        console.log(`Unsupported life goal ${lifeGoal}`);
        return false;
    }
  }

  async clickOn1ExistingPlan(lifeGoal) {
    const existingPlanText = await Utils.getText(MFGoalsObjects.lifeGoalExistingPlanElement(lifeGoal));
    expect(existingPlanText).to.equal('1 · existing plan');
    if(Device.isWeb()) {
      await Utils.scrollAndMoveToElement(MFGoalsObjects.lifeGoalExistingPlanElement(lifeGoal));
    }
    await Utils.clickElement(MFGoalsObjects.lifeGoalExistingPlanElement(lifeGoal));
    expect(await Utils.elementIsDisplayed(MFGoalsObjects.yourExistingPlansHeader)).to.be.true;
  }

  async clickOnExistingPlanForLifeGoal(lifeGoal, childname = '') {
    if (childname.length > 0) {
      lifeGoal = `${lifeGoal} for ${Utils.capitalizeFirstLetter(childname)}`;
    }
    const lifeGoalExistingPlan = await Utils.getMatchingElementByIndex(MFGoalsObjects.lifeGoalElement(lifeGoal), 0);
    await Utils.clickWebElement(lifeGoalExistingPlan);
  }

  async investmentCalendarHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.investmentCalendarHeader));
  }

  async clickOnShowMeHowButton() {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid(MFGoalsObjects.showMeHowText);
    }
    await Utils.clickElement(MFGoalsObjects.showMeHowButton);
  }

  async validateNavigationToLifeGoalSection(lifeGoal) {
    switch(lifeGoal) {
      case 'Retire Confident':
        return (await Utils.elementIsDisplayed(MFGoalsObjects.retireConfidentGoalSectionHeader));
      case 'Premier Education':
        return (await Utils.elementIsDisplayed(MFGoalsObjects.premierEducationGoalSectionHeader));
      default:
        console.log(`Unsupported life goal ${lifeGoal}`);
        return false;
    }
  }

  async enterAge(currentAge) {
    await Utils.setInputField(currentAge, MFGoalsObjects.myAgeField, true);
    if (Device.isAndroidApp()) {
      await Utils.clickElement(MFGoalsObjects.myAgeIsLabel);
    }
  }

  async enterCurrentMonthlyExpenses(monthlyExpensesAmount) {
    const selector = MFGoalsObjects.monthlyExpensesOption(monthlyExpensesAmount);
    if (selector == undefined) {
      await Utils.setInputField(monthlyExpensesAmount, MFGoalsObjects.currentMonthlyExpensesField, true);
      if (Device.isAndroidApp()) {
        await Utils.clickElement(MFGoalsObjects.myCurrentMonthlyExpensesAreLabel);
      }
    } else {
      await Utils.clickElement(selector);
    }
  }

  async enterRetireAtAge(retireAtAge) {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid({ app: 'I want to retire at the age of' }, 0);
      await Utils.scrollVerticalUntilTextIntoViewForAndroid({ app: '70' }, 0);
    }
    const selector = MFGoalsObjects.retireAtAgeOption(retireAtAge);
    if (selector == undefined) {
      await Utils.setInputField(retireAtAge, MFGoalsObjects.retireAtAgeField, true);
      if (Device.isAndroidApp()) {
        await Utils.clickElement(MFGoalsObjects.iWantToRetireAtTheAgeOfLabel);
      }
    } else {
      await Utils.clickElement(selector);
    }
  }

  async enterRetirementEndAge(retirementEndAge) {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid({ app: 'I want to plan for age' }, 0);
    }
    await Utils.setInputField(retirementEndAge, MFGoalsObjects.retirementEndAgeField, true);
    if (Device.isAndroidApp()) {
      await Utils.clickElement(MFGoalsObjects.iWantToPlanForAgeLabel);
    }
  }

  async clickOnCreateAPlanLink() {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid({ app: 'CREATE A PLAN' }, 0);
    }
    await Utils.clickElement(MFGoalsObjects.createAPlanLink);
  }

  async existingSavingsAndPlansPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.existingSavingsAndPlansPageHeader));
  }

  async clickAddExistingSavingsLink() {
    await Utils.clickElement(MFGoalsObjects.addExistingSavingsLink);
    expect(await Utils.elementIsDisplayed(MFGoalsObjects.myExistingSavingsHeader)).to.be.true;
  }

  async enterExistingSavingsAmount(amount) {
    await Utils.setInputField(amount, MFGoalsObjects.existingSavingsAmountField);
  }

  async enterExistingSavingsAmountGrowthRate(rate) {
    await Utils.setInputField(rate, MFGoalsObjects.existingSavingsAmountGrowthRateField, true);
  }

  async clickSaveExistingSavingsDetailsButton() {
    await Utils.clickElement(MFGoalsObjects.saveExistingSavingsDetailsButton);
  }

  async enterFutureMonthlyIncomeFromOtherSources(amount) {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid({ app: '40K' }, 0);
    }
    await Utils.setInputField(amount, MFGoalsObjects.futureMonthlyIncomeFromOtherSourcesField, true);
  }

  async clickCalculateMyNeedLink() {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid({ app: 'CALCULATE MY NEED' }, 0);
    }
    await Utils.clickElement(MFGoalsObjects.calculateMyNeedLink);
  }

  async whatYouNeedToRetireHeaderIsDisplayed() {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid({ app: 'What you need to retire' }, 0);
    }
    return (await Utils.elementIsDisplayed(MFGoalsObjects.whatYouNeedToRetireHeader));
  }

  async selectInflationPercent(inflationPercent) {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid({ app: 'Your expenses will increase every year' }, 0);
      await Utils.clickElement(MFGoalsObjects.inflationPercentSelectOption);
      await Utils.clickElement(MFGoalsObjects.inflationPercentOption(inflationPercent));
    } else {
      await Utils.chooseSelectOptionByAttribute(MFGoalsObjects.inflationPercentSelectOption, 'value', inflationPercent.toString());
    }
  }

  async clickShowDetailedPlanLink() {
    if (Device.isWeb()) {
      await Utils.scrollAndMoveToElement(MFGoalsObjects.showDetailedPlanLink);
    } else if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid({ app: 'SHOW DETAILED PLAN' }, 0);
    }
    await Utils.clickElement(MFGoalsObjects.showDetailedPlanLink);
  }

  async yourRetirementPlanPageHeaderIsDisplayed() {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid({ app: 'Your Retirement Plan' }, 0);
    }
    return (await Utils.elementIsDisplayed(MFGoalsObjects.yourRetirementPlanPageHeader));
  }

  async clickContinueLink() {
    if (Device.isWeb()) {
      await Utils.scrollAndMoveToElement(MFGoalsObjects.continueLink);
    } else if(Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid(MFGoalsObjects.continueLinkText);
    }
    await Utils.clickElement(MFGoalsObjects.continueLink);
  }

  async congratulationsPageHeaderIsDisplayed() {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid({ app: 'Congratulations!' }, 0);
    }
    console.log('step1');
    await browser.pause(10000);
    return (await Utils.elementIsDisplayed(MFGoalsObjects.congratulationsPageHeader));
  }

  async clickCreatePlanFinalButton() {
    await Utils.clickElement(MFGoalsObjects.createPlanFinalButton);
  }

  async activatePlanHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.activatePlanHeader));
  }

  async clickInvestMoreButton() {
    await Utils.clickElement(MFGoalsObjects.investMoreButton);
  }

  async clickOnOtherActionForGoalPlan(actionType) {
    await Utils.clickElement(MFGoalsObjects.otherActionForGoalPlan(actionType));
  }

  async iWantToInvestHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.iWantToInvestHeader));
  }

  async validateNavigationToOtherActionForGoalPlan(actionType) {
    switch(actionType) {
      case 'Start a new SIP':
        return (await Utils.elementIsDisplayed(MFGoalsObjects.iWantToInvestHeader));
      case 'Invest one-time':
        return (await Utils.elementIsDisplayed(MFGoalsObjects.iWantToInvestHeader));
      default:
        console.log(`Unsupported other action ${actionType} for Goal Plan`);
        return false;
    }
  }

  async startANewSIPHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.startANewSIPHeader));
  }

  async investOneTimeHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.investOneTimeHeader));
  }

  async retireConfidentSIPIsDisplayed(amount) {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.retireConfidentSIP(amount)));
  }

  async retireConfidentOneTimeIsDisplayed(amount) {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.retireConfidentOneTime(amount)));
  }

  async enterClassOfChild(classOfChild) {
    if(classOfChild === 0) {
      await Utils.setCheckBox(MFGoalsObjects.childInPreschoolOrNotInSchoolCheckbox, true);
    } else if (classOfChild > 0) {
      await Utils.setInputField(classOfChild, MFGoalsObjects.classOfChildField, true);
      if (Device.isAndroidApp()) {
        await Utils.clickElement(MFGoalsObjects.myChildIsInClassLabel);
      }
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
      await Utils.scrollAndMoveToElement(MFGoalsObjects.personaliseThisPlanLinkForCollegeType(collegeType));
    } else if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid({ app: collegeType });
    }
    await Utils.clickElement(MFGoalsObjects.personaliseThisPlanLinkForCollegeType(collegeType));
  }

  async premierEducationPlanPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.premierEducationPlanPageHeader));
  }

  async clickContinueButtonForPremierEducationPlan(index) {
    if (Device.isWeb()) {
      await Utils.scrollAndMoveToElement(MFGoalsObjects.continueButtonForPremierEducationPlan(index));
    } else if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid({ app: 'CONTINUE' });
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
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalToEndForAndroid(0, 1);
    }
    await Utils.setInputField(yearlyFees, MFGoalsObjects.yearlyFeesField);
  }

  async clickSeeYearlyBreakupButton() {
    await Utils.clickElement(MFGoalsObjects.seeYearlyBreakupButton);
  }

  async yearlyBreakupGoalPageIsDisplayed(classOfChild) {
    let status = (await Utils.elementIsDisplayed(MFGoalsObjects.yearlyBreakupPageGoal)) &&
      (await Utils.elementIsDisplayed(MFGoalsObjects.yearlyBreakupPageGoalHeader(classOfChild)));
    if (Device.isWeb()) {
      status = status && (await Utils.elementIsDisplayed(MFGoalsObjects.childLikelyToStartCollegeInYear(classOfChild)));
    }
    return status;
  }

  async yearlyBreakupPlanPageIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.yearlyBreakupPagePlan)) &&
      (await Utils.elementIsDisplayed(MFGoalsObjects.yearlyBreakupPagePlanHeader));
  }

  async clickYearlyBreakupPageShowPlanButton() {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid({ app: 'SHOW PLAN FOR' });
    }
    await Utils.clickElement(MFGoalsObjects.yearlyBreakupPageShowPlanButton);
  }

  async premierEducationWorkingPlanPageIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.premierEducationWorkingPlanHeader1)) &&
      (await Utils.elementIsDisplayed(MFGoalsObjects.premierEducationWorkingPlanHeader2));
  }

  async clickPremierEducationWorkingPlanStartWithButton() {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid({ app: 'START WITH' });
    }
    await Utils.clickElement(MFGoalsObjects.premierEducationWorkingPlanStartWithButton);
  }

  async premierEducationPlanInvestPageIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.premierEducationInvestPageHeader));
  }

  async signupOrLoginButtonIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.signupOrLoginButton));
  }

  async clickSignupOrLoginButton() {
    await Utils.clickElement(MFGoalsObjects.signupOrLoginButton);
  }

  async createPlanButtonIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.createPlanButton));
  }

  async clickCreatePlanButton() {
    await Utils.clickElement(MFGoalsObjects.createPlanButton);
  }

  async clickInvestEveryMonthButton() {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalUntilTextIntoViewForAndroid({ app: 'INVEST EVERY MONTH' }, 0);
    }
    await Utils.clickElement(MFGoalsObjects.investEveryMonthButton);
  }

  async amountPlannedWithScripboxHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.amountPlannedWithScripboxHeader));
  }

  async clickInvestOneTimeButton() {
    await Utils.clickElement(MFGoalsObjects.investOneTimeButton);
  }

  async howWouldYouLikeYourMoneyToGrowHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.howWouldYouLikeYourMoneyToGrowHeader));
  }

  async iWouldLikeToInvestOneTimeHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.iWouldLikeToInvestOneTimeHeader));
  }

  async clickContinueButton() {
    await Utils.clickElement(MFGoalsObjects.continueButton);
  }

  async fundListHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.fundListHeader));
  }

  async clickContinueToInvestButton() {
    await Utils.clickElement(MFGoalsObjects.continueToInvestButton);
  }

  async paymentTypePageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.paymentTypePageHeader));
  }

  async noInvestmentsToCancelMessageIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.noInvestmentsToCancelMessage));
  }

  async clickConfirmButton() {
    await Utils.clickElement(MFGoalsObjects.confirmButton);
  }

  async clickToSeeLifeGoalPlanDetails() {
    await Utils.clickElement(MFGoalsObjects.rightAngleBracketButton);
  }

  async planDetailsHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.planDetailsHeader));
  }

  async clickOtherActionsOrEditPlanButton(buttonText) {
    switch(buttonText) {
      case 'OTHER ACTIONS':
        await Utils.clickElement(MFGoalsObjects.otherActionsButton);
        break;
      case 'EDIT PLAN':
        await Utils.clickElement(MFGoalsObjects.editPlanButton);
        break;
      default:
        console.log(`Unsupported action ${buttonText}`);
    }
  }

  async validateNavigationToOtherActionsOrEditPlanButton(buttonText) {
    switch(buttonText) {
      case 'OTHER ACTIONS':
        return (await Utils.elementIsDisplayed(MFGoalsObjects.moveMoneyHeader)) &&
          (await Utils.elementIsDisplayed(MFGoalsObjects.stopAllInvestmentsHeader)) &&
          (await Utils.elementIsDisplayed(MFGoalsObjects.closePlanHeader));
      case 'EDIT PLAN':
        return (await Utils.elementIsDisplayed(MFGoalsObjects.replanStep1Header));
      default:
        console.log(`Unsupported action ${buttonText}`);
        return false;
    }
  }

  async clickCloseThisPlanButton() {
    await Utils.clickElement(MFGoalsObjects.closeThisPlanButton);
  }

  async planClosedMessageIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.planClosedMessage));
  }

  async replanStep2HeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.replanStep2Header));
  }

  async replanStep3HeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.replanStep3Header));
  }

  async clickOnOtherAction(otherAction) {
    switch(otherAction) {
      case 'Move Money':
        await Utils.clickElement(MFGoalsObjects.moveMoneyHeader);
        break;
      case 'Stop All Investments':
        await Utils.clickElement(MFGoalsObjects.stopAllInvestmentsHeader);
        break;
      case 'Close Plan':
        await Utils.clickElement(MFGoalsObjects.closePlanHeader);
        break;
      default:
        console.log(`Unsupported Other Action ${otherAction}`);
    }
  }

  async validateNavigateToOtherAction(otherAction) {
    switch(otherAction) {
      case 'Move Money':
        return (await Utils.elementIsDisplayed(MFGoalsObjects.moveMoneyWarningMessage));
      case 'Stop All Investments':
        return (await Utils.elementIsDisplayed(MFGoalsObjects.stopAllInvestmentsMessage));
      case 'Close Plan':
        return (await Utils.elementIsDisplayed(MFGoalsObjects.closePlanHeader)) &&
          (await Utils.elementIsDisplayed(MFGoalsObjects.closePlanMessage));
      default:
        console.log(`Unsupported Other Action ${otherAction}`);
        return false;
    }
  }

  async planCancelMessageIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.planCancelledMessage));
  }

  async enterInvestOneTimeAmount(amount) {
    await Utils.setInputField(amount, MFGoalsObjects.investOneTimeAmountField);
  }

  async updateRetireConfidentGoalProperty(property, value) {
    switch(property) {
      case 'Retirement Age':
        await Utils.clickElement(MFGoalsObjects.editRetirementAgeLink);
        expect(await Utils.elementIsDisplayed(MFGoalsObjects.replanRetirementAgeLabel)).to.be.true;
        await Utils.setInputField(value, MFGoalsObjects.replanRetirementAgeField);
        await Utils.clickElement(MFGoalsObjects.okayButton);
        break;
      case 'Retirement End Age':
        await Utils.clickElement(MFGoalsObjects.editRetirementEndAgeLink);
        expect(await Utils.elementIsDisplayed(MFGoalsObjects.replanRetirementEndAgeLabel)).to.be.true;
        await Utils.setInputField(value, MFGoalsObjects.replanRetirementEndAgeField);
        await Utils.clickElement(MFGoalsObjects.okayButton);
        break;
      case 'Current Monthly Expenses':
        await Utils.clickElement(MFGoalsObjects.editCurrentMonthlyExpensesLink);
        expect(await Utils.elementIsDisplayed(MFGoalsObjects.replanCurrentMonthlyExpensesLabel)).to.be.true;
        await Utils.setInputField(value, MFGoalsObjects.replanCurrentMonthlyExpensesField);
        await Utils.clickElement(MFGoalsObjects.okayButton);
        break;
      case 'Inflation Percent':
        await Utils.clickElement(MFGoalsObjects.editExpensesIncreaseRateLink);
        expect(await Utils.elementIsDisplayed(MFGoalsObjects.replanExpensesIncreaseRateLabel)).to.be.true;
        await Utils.setInputField(value, MFGoalsObjects.replanExpensesIncreaseRateField);
        await Utils.clickElement(MFGoalsObjects.okayButton);
        break;
      case 'SIP Increase Percent':
        await Utils.clickElement(MFGoalsObjects.editSipIncreasePercentLink);
        expect(await Utils.elementIsDisplayed(MFGoalsObjects.replanSipIncreasePercentLabel)).to.be.true;
        await Utils.setInputField(value, MFGoalsObjects.replanSipIncreasePercentField);
        await Utils.clickElement(MFGoalsObjects.okayButton);
        break;
      default:
        console.log(`Unsupported Retire Confident property ${property}`);
    }
  }

  async clickOkayButton() {
    await Utils.clickElement(MFGoalsObjects.okayButton);
  }

  async clickContinueReplanButton() {
    await Utils.clickElement(MFGoalsObjects.continueReplanButton);
  }

  async clickShowPlanDetailsButton() {
    await Utils.clickElement(MFGoalsObjects.showPlanDetailsButton);
  }

  async clickEditFutureMonthlyIncomeFromOtherSourcesLink() {
    await Utils.clickElement(MFGoalsObjects.editFutureMonthlyIncomeFromOtherSourcesLink);
  }

  async replanFutureMonthlyIncomeFromOtherSourcesLabelIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.replanFutureMonthlyIncomeFromOtherSourcesLabel));
  }

  async enterReplanFutureMonthlyIncomeFromOtherSources(amount) {
    await Utils.setInputField(amount, MFGoalsObjects.replanFutureMonthlyIncomeFromOtherSourcesField);
  }

  async clickEditExternalSavingsForGoalLink() {
    await Utils.clickElement(MFGoalsObjects.editExternalSavingsForGoalLink);
  }

  async replanExternalSavingsForGoalLabelIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.replanExternalSavingsForGoalLabel));
  }

  async enterReplanExternalSavingsForGoal(amount) {
    await Utils.setInputField(amount, MFGoalsObjects.replanExternalSavingsForGoalField);
  }

  async enterReplanExternalSavingForGoalGrowthRate(rate) {
    await Utils.setInputField(rate, MFGoalsObjects.replanExternalSavingForGoalGrowthRateField);
  }

  async clickEditSipIncreasePercentLink() {
    await Utils.clickElement(MFGoalsObjects.editSipIncreasePercentLink);
  }

  async replanSipIncreasePercentLabelIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.replanSipIncreasePercentLabel));
  }

  async enterReplanSipIncreasePercent(percent) {
    await Utils.setInputField(percent, MFGoalsObjects.replanSipIncreasePercentField);
  }

  async replanSummaryHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.replanSummaryHeader));
  }

  async additionalInvestingNeededForHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.additionalInvestingNeededForHeader));
  }

  async replanCompletedSuccessfullyHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFGoalsObjects.replanCompletedSuccessfullyHeader));
  }

  async updatePremierEducationGoalProperty(property, value) {
    switch(property) {
      case 'College Start Year':
        await Utils.clickElement(MFGoalsObjects.editCollegeStartYearLink);
        expect(await Utils.elementIsDisplayed(MFGoalsObjects.replanCollegeStartYearField)).to.be.true;
        await Utils.setInputField(value, MFGoalsObjects.replanCollegeStartYearField);
        await Utils.clickElement(MFGoalsObjects.okayButton);
        break;
      case 'Current Year Fees':
        await Utils.clickElement(MFGoalsObjects.editCurrentYearFeesLink);
        expect(await Utils.elementIsDisplayed(MFGoalsObjects.replanCurrentYearFeesLabel)).to.be.true;
        await Utils.setInputField(value, MFGoalsObjects.replanCurrentYearFeesField);
        await Utils.clickElement(MFGoalsObjects.okayButton);
        break;
      case 'Annual Fees Increase Percent':
        await Utils.clickElement(MFGoalsObjects.editAnnualFeesIncreasePercentLink);
        expect(await Utils.elementIsDisplayed(MFGoalsObjects.replanAnnualFeesIncreasePercentLabel)).to.be.true;
        await Utils.setInputField(value, MFGoalsObjects.replanAnnualFeesIncreasePercentField);
        await Utils.clickElement(MFGoalsObjects.okayButton);
        break;
      case 'Annual Contribution While In College':
        await Utils.clickElement(MFGoalsObjects.editAnnualContributionWhileInCollegeLink);
        expect(await Utils.elementIsDisplayed(MFGoalsObjects.replanAnnualContributionWhileInCollegeLabel)).to.be.true;
        await Utils.setInputField(value, MFGoalsObjects.replanAnnualContributionWhileInCollegeField);
        await Utils.clickElement(MFGoalsObjects.okayButton);
        break;
      case 'SIP Increase Percent':
        await Utils.clickElement(MFGoalsObjects.editSipIncreasePercentLink);
        expect(await Utils.elementIsDisplayed(MFGoalsObjects.replanSipIncreasePercentLabel)).to.be.true;
        await Utils.setInputField(value, MFGoalsObjects.replanSipIncreasePercentField);
        await Utils.clickElement(MFGoalsObjects.okayButton);
        break;
      default:
        console.log(`Unsupported Premier Education property ${property}`);
    }
  }
}

module.exports = new MFGoalsPage();
