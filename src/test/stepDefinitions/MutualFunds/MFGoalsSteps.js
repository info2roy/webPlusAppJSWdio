const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const MFGoalsFunctionality = require('../../../main/Functionalities/MutualFunds/MFGoalsFunctionality');

When(/^I select mutual funds life goal as "(Retire Confident|Premier Education)"$/, async (lifeGoal) => {
  await console.log(`When I select mutual funds life goal as ${lifeGoal}`);
  this.lifeGoal = lifeGoal;
  expect(await MFGoalsFunctionality.selectLifeGoal(lifeGoal)).to.be.true;
});

When(/^I select existing plan for mutual funds life goal "(Retire Confident|Premier Education)"$/, async (lifeGoal) => {
  await console.log(`When I select existing plan for mutual funds life goal ${lifeGoal}`);
  this.lifeGoal = lifeGoal;
  expect(await MFGoalsFunctionality.selectExistingPlanForLifeGoal(lifeGoal, true, this.childname)).to.be.true;
});

When(/^I select for closure the existing plan for mutual funds life goal "(Retire Confident|Premier Education)"$/, async (lifeGoal) => {
  await console.log(`When I select for closure the existing plan for mutual funds life goal ${lifeGoal}`);
  this.lifeGoal = lifeGoal;
  expect(await MFGoalsFunctionality.selectExistingPlanForLifeGoal(lifeGoal, false, this.childname)).to.be.true;
});

When(/^I click on "SHOW ME HOW" for Life Goal Plan$/, async () => {
  await console.log(`When I click on "SHOW ME HOW" for Life Goal Plan`);
  expect(await MFGoalsFunctionality.selectShowMeHow(this.lifeGoal)).to.be.true;
});

When(/^I fill "Retire Confident" form with (\d+), (\d+), (\d+), (\d+)$/,
  async(age, monthlyExpenses, retireAtAge, retirementEndAge) => {
    await console.log(`When I fill "Retire Confident" form with ${age}, ${monthlyExpenses}, ${retireAtAge}, ${retirementEndAge}`);
    expect(await MFGoalsFunctionality.fillRetireConfidentForm(age,
      monthlyExpenses, retireAtAge, retirementEndAge)).to.be.true;
  }
);

When(/^I fill Existing Savings form with (\d+), (\d+), (\d+)+$/,
  async(existingSavingsAmount, existingSavingsGrowthRate, futureMonthlyIncomeFromOtherSources) => {
    await console.log(`When I fill Existing Savings form with ${existingSavingsAmount}, ${existingSavingsGrowthRate}, ${futureMonthlyIncomeFromOtherSources}`);
    expect(await MFGoalsFunctionality.fillExistingSavingsForm(
      existingSavingsAmount, existingSavingsGrowthRate, futureMonthlyIncomeFromOtherSources
    )).to.be.true;
  }
);

When(/^I select inflation rate as (\d+)%$/,
  async(inflationPercent) => {
    await console.log(`When I select inflation rate as ${inflationPercent}%`);
    expect(await MFGoalsFunctionality.fillInflationPercent(inflationPercent)).to.be.true;
  }
);

When(/^I click on CONTINUE with retirement Plan$/, async () => {
  await console.log('When I click on CONTINUE with retirement plan');
  expect(await MFGoalsFunctionality.continueWithRetirementPlan()).to.be.true;
});

When(/^I click on "Invest More" for the existing plan for Life Goal "Retire Confident"$/, async () => {
  await console.log('When I click on "Invest More" for the existing plan for Life Goal "Retire Confident"');
  expect(await MFGoalsFunctionality.investMoreForGoalPlan()).to.be.true;
});

When(/^I click on "Other actions" for the existing plan for Life Goal "Retire Confident"$/, async () => {
  await console.log('When I click on "Other actions" for the existing plan for Life Goal "Retire Confident"');
  expect(await MFGoalsFunctionality.otherActionsForGoalPlan()).to.be.true;
});

When(/^I click on "Other actions" -> "(Start a new SIP|Invest one-time)" for Life Goal "Retire Confident"$/, async(actionType) => {
  await console.log(`When I click on "Other actions" -> "${actionType}" for Life Goal "Retire Confident"`);
  expect(await MFGoalsFunctionality.doOtherActionForGoalPlan(actionType)).to.be.true;
});

Then(/^I should see extra "Retire Confident SIP" for (\d+) to be present in the investments list$/, async(amount) => {
  await console.log(`Then I should see extra "Retire Confident SIP" for ${amount} to be present in the investments list`);
  expect(await MFGoalsFunctionality.validateRetireConfidentSIP(amount)).to.be.true;
});

Then(/^I should see extra "Retire Confident OneTime" for (\d+) to be present in the investments list$/, async(amount) => {
  await console.log(`Then I should see extra "Retire Confident OneTime" for ${amount} to be present in the investments list`);
  expect(await MFGoalsFunctionality.validateRetireConfidentOneTime(amount)).to.be.true;
});

When(/^I fill "Premier Education" form with (\d+)$/, async (classOfChild) => {
  await console.log(`When I fill "Premier Education" form with ${classOfChild}`);
  this.classOfChild = classOfChild;
  expect(await MFGoalsFunctionality.selectClassOfChild(classOfChild)).to.be.true;
});

When(/^I select "Premier Education" plan for college type (Government Colleges|Private Colleges|Premier Private Colleges)$/,
  async(collegeType) => {
    await console.log(`When I select "Premier Education" plan for college type ${collegeType}`);
    expect(await MFGoalsFunctionality.selectPremierEducationCollegeType(collegeType)).to.be.true;
  }
);

When(/^I click "CONTINUE" to explore plan for "Premier Education"$/, async() => {
  await console.log('When I click "CONTINUE" to explore plan for "Premier Education"');
  expect(await MFGoalsFunctionality.continueWithPremierEducationPlan()).to.be.true;
});

When(/^I fill "Premier Education" second form with (.+), (\d+)$/, async(childname, yearlyFees) => {
  await console.log(`When I fill "Premier Education" second form with ${childname}, ${yearlyFees}`);
  this.childname = childname;
  expect(await MFGoalsFunctionality.fillPremierEducationForm(childname, yearlyFees, this.classOfChild)).to.be.true;
});

When(/^I click "CONTINUE" on the Yearly Fees Breakup Goal Page$/, async() => {
  await console.log('When I click "CONTINUE" on the Yearly Fees Breakup Goal Page');
  expect(await MFGoalsFunctionality.continueOnYearlyFeesBreakupGoalPage()).to.be.true;
});

When(/^I click "SHOW PLAN FOR" on the Yearly Fees Breakup Plan Page$/, async() => {
  await console.log('When I click "SHOW PLAN FOR" on the Yearly Fees Breakup Plan Page');
  expect(await MFGoalsFunctionality.showPlanForPremierEducation()).to.be.true;
});

When(/^I click "START WITH" for "Premier Education" Working Plan$/, async() => {
  await console.log('When I click "START WITH" for "Premier Education" Working Plan');
  expect(await MFGoalsFunctionality.startWithWorkingPlanForPremierEducation()).to.be.true;
});

When(/^I click "CONTINUE" on the "Premier Education" Suggested Plan$/, async() => {
  await console.log('When I click "CONTINUE" on the "Premier Education" Suggested Plan');
  await MFGoalsFunctionality.continueInvestForPremierEducation();
});

When(/^I click on "CREATE A PLAN OR SIGNUP OR LOGIN" for Life Goal Plan$/, async() => {
  await console.log('When I click on "CREATE A PLAN OR SIGNUP OR LOGIN" for Life Goal Plan');
  expect(await MFGoalsFunctionality.createAPlanOrSignupOrLoginForLifeGoalPlan()).to.be.true;
});

When(/^I click on "INVEST EVERY MONTH" for Life Goal Plan$/, async() => {
  await console.log('When I click on "INVEST EVERY MONTH" for Life Goal Plan');
  expect(await MFGoalsFunctionality.investEveryMonth()).to.be.true;
});

When(/^I click on "INVEST ONE TIME" for Life Goal Plan$/, async() => {
  await console.log('When I click on "INVEST ONE TIME" for Life Goal Plan');
  expect(await MFGoalsFunctionality.investOneTime()).to.be.true;
});

When(/^I click "CONTINUE" for "INVEST EVERY MONTH" on the "(Retire Confident|Premier Education)" Plan$/, async(lifeGoal) => {
  await console.log(`When I click "CONTINUE" for "INVEST EVERY MONTH" on the "${lifeGoal}" Plan`);
  expect(await MFGoalsFunctionality.continueWithEveryMonthInvestment()).to.be.true;
});

When(/^I click "CONTINUE" for "INVEST ONE TIME" on the "Retire Confident" Plan$/, async() => {
  await console.log('When I click "CONTINUE" for "INVEST ONE TIME" on the "Retire Confident" Plan');
  expect(await MFGoalsFunctionality.continueWithOneTimeInvestment()).to.be.true;
});

When(/^I click "CONTINUE TO INVEST" on the "(Retire Confident|Premier Education)" Plan$/, async(lifeGoal) => {
  await console.log(`When I click "CONTINUE TO INVEST" on the "${lifeGoal}" Plan`);
  expect(await MFGoalsFunctionality.continueToInvest()).to.be.true;
});

When(/^I click "CONFIRM" on the "(Retire Confident|Premier Education)" investment$/, async(lifeGoal) => {
  await console.log(`When I click "CONFIRM" on the "${lifeGoal}" investment`);
  await MFGoalsFunctionality.confirmToInvest();
});

When(/^I fill "INVEST ONE TIME" (\d+) and click "CONTINUE" on the "(Retire Confident|Premier Education)" Plan$/, async(oneTimeAmount, lifeGoal) => {
  await console.log(`When I fill "INVEST ONE TIME" ${oneTimeAmount} and click "CONTINUE" on the "${lifeGoal}" Plan`);
  expect(await MFGoalsFunctionality.investOneTimeFillAmountAndContinue(oneTimeAmount)).to.be.true;
});

When(/^I click on ">" to see plan details for "(Retire Confident|Premier Education)" Plan$/, async(lifeGoal) => {
  await console.log(`When I click on ">" to see plan details for "${lifeGoal}" Plan`);
  expect(await MFGoalsFunctionality.seeLifeGoalPlanDetails()).to.be.true;
});

When(/^I click on "(OTHER ACTIONS|EDIT PLAN)" button for "(Retire Confident|Premier Education)" Plan$/, async(buttonText, lifeGoal) => {
  await console.log(`When I click on "${buttonText}" button for "${lifeGoal}" Plan`);
  expect(await MFGoalsFunctionality.otherActionsOrEditPlan(buttonText)).to.be.true;
});

When(/^I click on "(Move Money|Stop All Investments|Close Plan)" from "OTHER ACTIONS" for "(Retire Confident|Premier Education)" Plan$/, async(otherAction, lifeGoal) => {
  await console.log(`When I click on "${otherAction}" from "OTHER ACTIONS" for "${lifeGoal}" Plan`);
  expect(await MFGoalsFunctionality.doOtherAction(otherAction)).to.be.true;
});

When(/^I click on "CONFIRM" to "Stop All Investments" for "(Retire Confident|Premier Education)" Plan$/, async(lifeGoal) => {
  await console.log(`When I click on "CONFIRM" to "Stop All Investments" for "${lifeGoal}" Plan`);
  expect(await MFGoalsFunctionality.confirmStopAllInvestments()).to.be.true;
});

When(/^I click on "CLOSE THIS PLAN" button for "(Retire Confident|Premier Education)" Plan$/, async(lifeGoal) => {
  await console.log(`When I click on "CLOSE THIS PLAN" button for "${lifeGoal}" Plan`);
  expect(await MFGoalsFunctionality.closeThePlan()).to.be.true;
});

When(/^I update "(Retirement Age|Retirement End Age|Current Monthly Expenses|Inflation Percent|SIP Increase Percent)" to (\d+) for "Retire Confident" Plan$/, async(property, value) => {
  await console.log(`When I update "${property}" to ${value} for "Retire Confident" Plan`);
  await MFGoalsFunctionality.updateRetireConfidentGoalProperty(property, value);
});

When(/^I click "CONTINUE" to Replan for "Retire Confident" Plan$/, async() => {
  await console.log('When I click "CONFIRM" to Replan for "Retire Confident" Plan');
  expect(await MFGoalsFunctionality.continueReplanForRetireConfident()).to.be.true;
});

When(/^I update to Replan Existing Savings with (\d+), (\d+), (\d+)$/,
  async(newFutureMonthlyIncomeFromOtherSources, newExistingSavingsAmount, newExistingSavingsGrowthRate) => {
    await console.log(`When I update to Replan Existing Savings with ${newFutureMonthlyIncomeFromOtherSources}, ${newExistingSavingsAmount}, ${newExistingSavingsGrowthRate}`);
    expect(await MFGoalsFunctionality.fillReplanExistingSavingsForm(
      newFutureMonthlyIncomeFromOtherSources, newExistingSavingsAmount, newExistingSavingsGrowthRate
    )).to.be.true;
  }
);

When(/^I click "SHOW PLAN DETAILS" after step 3 of Replan for "Retire Confident" Plan$/, async() => {
  await console.log('When I click "SHOW PLAN DETAILS" after step 3 of Replan for "Retire Confident" Plan');
  expect(await MFGoalsFunctionality.showPlanDetails()).to.be.true;
});

When(/^I click "CONTINUE" with SIP amount for Replan for "Retire Confident" Plan$/, async() => {
  await console.log('When I click "CONTINUE" with SIP amount for Replan for "Retire Confident" Plan');
  expect(await MFGoalsFunctionality.continueReplanStep3()).to.be.true;
});

When(/^I click "CONTINUE" with Growth Strategy for Replan for "([^"]*)?" Plan$/, async(lifeGoal) => {
  await console.log('When I click "CONTINUE" with Growth Strategy for Replan for "Retire Confident" Plan');
  expect(await MFGoalsFunctionality.continueReplanFinalStep(lifeGoal)).to.be.true;
});

Then(/^I should see message "Replan completed successfully"$/, async() => {
  await console.log('Then I should see message "Replan completed successfully');
  expect(await MFGoalsFunctionality.replanCompletedSuccessfully()).to.be.true;
});
