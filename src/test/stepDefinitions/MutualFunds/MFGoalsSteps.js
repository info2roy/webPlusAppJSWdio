const { When } = require('@wdio/cucumber-framework');
const { expect } = require('chai');
const MFGoalsFunctionality = require('../../../main/Functionalities/MutualFunds/MFGoalsFunctionality');

When(/^I select mutual funds life goal as "([^"]*)?"$/, async (lifeGoal) => {
  await console.log(`I select mutual funds life goal as ${lifeGoal}`);
  this.lifeGoal = lifeGoal;
  expect(await MFGoalsFunctionality.selectLifeGoal(lifeGoal)).to.be.true;
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

When(/^I click on "CREATE PLAN" for retirement$/, async () => {
  await console.log('I click on "CREATE PLAN" for retirement');
  expect(await MFGoalsFunctionality.createPlanForRetirement()).to.be.true;
});

