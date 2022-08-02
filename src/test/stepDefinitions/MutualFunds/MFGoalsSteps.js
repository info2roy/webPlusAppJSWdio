const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const MFGoalsFunctionality = require('../../../main/Functionalities/MutualFunds/MFGoalsFunctionality');

When(/^I select mutual funds life goal as "([^"]*)?"$/, async (lifeGoal) => {
  await console.log(`I select mutual funds life goal as ${lifeGoal}`);
  this.lifeGoal = lifeGoal;
  expect(await MFGoalsFunctionality.selectLifeGoal(lifeGoal)).to.be.true;
});

When(/^I select existing plan for mutual funds life goal "([^"]*)?"$/, async (lifeGoal) => {
  await console.log(`I select existing plan for mutual funds life goal ${lifeGoal}`);
  this.lifeGoal = lifeGoal;
  expect(await MFGoalsFunctionality.selectExistingPlanForLifeGoal(lifeGoal)).to.be.true;
});

When(/^I click on "SHOW ME HOW" for life goal$/, async () => {
  await console.log(`I click on "SHOW ME HOW" for life goal`);
  expect(await MFGoalsFunctionality.selectShowMeHow(this.lifeGoal)).to.be.true;
});

When(/^I fill "Retire Confident" form with (\d+), (\d+), (\d+), (\d+)$/,
  async(age, monthlyExpenses, retireAtAge, retirementEndAge) => {
    await console.log(`I fill "Retire Confident" form with ${age}, ${monthlyExpenses}, ${retireAtAge}, ${retirementEndAge}`);
    expect(await MFGoalsFunctionality.fillRetireConfidentForm(age,
      monthlyExpenses, retireAtAge, retirementEndAge)).to.be.true;
  }
);

When(/^I fill Existing Savings form with (\d+), (\d+), (\d+)+$/,
  async(existingSavingsAmount, existingSavingsGrowthRate, futureMonthlyIncomeFromOtherSources) => {
    await console.log(`I fill Existing Savings form with ${existingSavingsAmount}, ${existingSavingsGrowthRate}, ${futureMonthlyIncomeFromOtherSources}`);
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

When(/^I click on CONTINUE with retirement plan$/, async () => {
  await console.log('When I click on CONTINUE with retirement plan');
  expect(await MFGoalsFunctionality.continueWithRetirementPlan()).to.be.true;
});

When(/^I invest more for the existing plan for life goal "Retire Confident"$/, async () => {
  await console.log('I invest more for the existing plan for life goal "Retire Confident"');
  expect(await MFGoalsFunctionality.investMoreForGoalPlan()).to.be.true;
});

When(/^I click on "Other actions" for the existing plan for life goal "Retire Confident"$/, async () => {
  await console.log('I click on "Other actions" for the existing plan for life goal "Retire Confident"');
  expect(await MFGoalsFunctionality.otherActionsForGoalPlan()).to.be.true;
});

When(/^I click on "Other actions" -> "(Start a new SIP|Invest one-time)" for life goal "Retire Confident"$/, async(actionType) => {
  await console.log(`I click on "Other actions" -> "${actionType}" for life goal "Retire Confident"`);
  expect(await MFGoalsFunctionality.doOtherActionForGoalPlan(actionType)).to.be.true;
});

Then(/^I should see extra "Retire Confident SIP" for (\d+) to be present in the investments list$/, async(amount) => {
  await console.log(`I should see extra "Retire Confident SIP" for ${amount} to be present in the investments list`);
  expect(await MFGoalsFunctionality.validateRetireConfidentSIP(amount)).to.be.true;
});

Then(/^I should see extra "Retire Confident OneTime" for (\d+) to be present in the investments list$/, async(amount) => {
  await console.log(`I should see extra "Retire Confident OneTime" for ${amount} to be present in the investments list`);
  expect(await MFGoalsFunctionality.validateRetireConfidentOneTime(amount)).to.be.true;
});

When(/^I fill "Premier Education" form with (\d+)$/, async (classOfChild) => {
  await console.log(`I fill "Premier Education" form with ${classOfChild}`);
  this.classOfChild = classOfChild;
  expect(await MFGoalsFunctionality.selectClassOfChild(classOfChild)).to.be.true;
});

When(/^I select "Premier Education" plan for college type (Government Colleges|Private Colleges|Premier Private Colleges)$/,
  async(collegeType) => {
    await console.log(`I select "Premier Education" plan for college type ${collegeType}`);
    expect(await MFGoalsFunctionality.selectPremierEducationCollegeType(collegeType)).to.be.true;
  }
);

When(/^I click "CONTINUE" to explore plan for "Premier Education"$/, async() => {
  await console.log('I click "CONTINUE" to explore plan for "Premier Education"');
  expect(await MFGoalsFunctionality.continueWithPremierEducationPlan()).to.be.true;
});

When(/^I fill "Premier Education" second form with (.+), (\d+)$/, async(childname, yearlyFees) => {
  await console.log(`I fill "Premier Education" second form with ${childname}, ${yearlyFees}`);
  this.childname = childname;
  expect(await MFGoalsFunctionality.fillPremierEducationForm(childname, yearlyFees, this.classOfChild)).to.be.true;
});

When(/^I click "CONTINUE" on the yearly fees breakup Goal page$/, async() => {
  await console.log('I click "CONTINUE" on the yearly fees breakup Goal page');
  expect(await MFGoalsFunctionality.continueOnYearlyFeesBreakupGoalPage()).to.be.true;
});

When(/^I click "SHOW PLAN FOR" on the yearly fees breakup Plan page$/, async() => {
  await console.log('I click "SHOW PLAN FOR" on the yearly fees breakup Plan page');
  expect(await MFGoalsFunctionality.showPlanForPremierEducation()).to.be.true;
});

When(/^I click "START WITH" for "Premier Education" working plan$/, async() => {
  await console.log('I click "START WITH" for "Premier Education" working plan');
  expect(await MFGoalsFunctionality.startWithWorkingPlanForPremierEducation()).to.be.true;
});

When(/^I click "CONTINUE" on the "Premier Education" suggested plan$/, async() => {
  await console.log('I click "CONTINUE" on the "Premier Education" suggested plan');
  await MFGoalsFunctionality.continueInvestForPremierEducation();
});

When(/^I click on "CREATE A PLAN OR SIGNUP OR LOGIN" for Mutual Fund Goal Plan$/, async() => {
  await console.log('I click on "CREATE A PLAN OR SIGNUP OR LOGIN" for Mutual Fund Goal Plan');
  expect(await MFGoalsFunctionality.createAPlanOrSignupOrLoginForMutualFundGoalPlan()).to.be.true;
});

When(/^I click on "INVEST EVERY MONTH" for life goal$/, async() => {
  await console.log('I click on "INVEST EVERY MONTH" for life goal');
  expect(await MFGoalsFunctionality.investEveryMonth()).to.be.true;
});

When(/^I click on "INVEST ONE TIME" for life goal$/, async() => {
  await console.log('I click on "INVEST ONE TIME" for life goal');
  expect(await MFGoalsFunctionality.investOneTime()).to.be.true;
});

When(/^I click "CONTINUE" for "INVEST EVERY MONTH" on the "Retire Confident" plan$/, async() => {
  await console.log('I click "CONTINUE" for "INVEST EVERY MONTH" on the "Retire Confident" plan');
  expect(await MFGoalsFunctionality.continueWithEveryMonthRetireConfidentInvestment()).to.be.true;
});

When(/^I click "CONTINUE" for "INVEST ONE TIME" on the "Retire Confident" plan$/, async() => {
  await console.log('I click "CONTINUE" for "INVEST ONE TIME" on the "Retire Confident" plan');
  expect(await MFGoalsFunctionality.continueWithOneTimeRetireConfidentInvestment()).to.be.true;
});

When(/^I click "CONTINUE TO INVEST" on the "Retire Confident" plan$/, async() => {
  await console.log('I click "CONTINUE TO INVEST" on the "Retire Confident" plan');
  expect(await MFGoalsFunctionality.continueToInvestWithRetireConfidentInvestment()).to.be.true;
});

When(/^I click "CONFIRM" on the "Retire Confident" investment$/, async() => {
  await console.log('I click "CONFIRM" on the "Retire Confident" investment');
  await MFGoalsFunctionality.confirmToInvestWithRetireConfidentInvestment();
});

When(/^I fill "INVEST ONE TIME" (\d+) and click "CONTINUE" on the "Retire Confident" plan$/, async(oneTimeAmount) => {
  await console.log(`I fill "INVEST ONE TIME" ${oneTimeAmount} and click "CONTINUE" on the "Retire Confident" plan`);
});

When(/^I click on ">" to see plan details for "Retire Confident" plan$/, async() => {
  await console.log('I click on ">" to see plan details for "Retire Confident" plan');
  expect(await MFGoalsFunctionality.seeRetireConfidentPlanDetails()).to.be.true;
});

When(/^I click on "OTHER ACTIONS" button for "Retire Confident" plan$/, async() => {
  await console.log('I click on "OTHER ACTIONS" button for "Retire Confident" plan');
  expect(await MFGoalsFunctionality.otherActions()).to.be.true;
});

When(/^I click on "(Move Money|Stop All Investments|Close Plan)" from "OTHER ACTIONS" for "Retire Confident" plan$/, async(otherAction) => {
  await console.log('I click on "Close Plan" among "OTHER ACTIONS" for "Retire Confident" plan');
  expect(await MFGoalsFunctionality.doOtherAction(otherAction)).to.be.true;
});

When(/^I click on "CONFIRM" to "Stop All Investments" for "Retire Confident" plan$/, async() => {
  await console.log('I click on "CONFIRM" to "Stop All Investments" for "Retire Confident" plan');
  expect(await MFGoalsFunctionality.confirmStopAllInvestments()).to.be.true;
});
