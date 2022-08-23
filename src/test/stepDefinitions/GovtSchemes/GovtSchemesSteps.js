const { When, Then } = require('@wdio/cucumber-framework');
const GovtSchemesFunctionality = require('../../../main/Functionalities/GovtSchemes/GovtSchemesFunctionality');
const { expect } = require('chai');

When(/^I select Govt Scheme (National Pension Scheme Tier1|National Pension Scheme Tier2|Employee Provident Fund|Public Provident Fund|General Provident Fund|Sukanya Samridhi Yojna|National Saving Certificate|Senior Citizen Saving Scheme) for family member "([^"]*)?"$/,
  async (schemeName, familyMember) => {
    await console.log(`When I select Govt Scheme "${schemeName}" for family member "${familyMember}"`);
    this.familyMemberName = familyMember;
    expect(await GovtSchemesFunctionality.selectFamilyMember('All family members')).to.be.true;
    this.govtSchemesTotalInvestedAmount = await GovtSchemesFunctionality.getTotalInvestedAmount();
    this.singleGovtSchemePercentAndAmount = await GovtSchemesFunctionality.getSchemePercentAndAmount(schemeName);
    console.log(`govtSchemesTotalInvestedAmount ${this.govtSchemesTotalInvestedAmount} singleGovtSchemePercentAndAmount ${this.singleGovtSchemePercentAndAmount}`);
    expect(await GovtSchemesFunctionality.selectFamilyMember(familyMember)).to.be.true;
    this.govtSchemesTotalInvestedAmountForMember = await GovtSchemesFunctionality.getTotalInvestedAmount();
    this.singleGovtSchemePercentAndAmountForMember = await GovtSchemesFunctionality.getSchemePercentAndAmount(schemeName);
    console.log(`govtSchemesTotalInvestedAmountForMember ${this.govtSchemesTotalInvestedAmountForMember} singleGovtSchemePercentAndAmountForMember ${this.singleGovtSchemePercentAndAmountForMember}`);
    expect(await GovtSchemesFunctionality.addGovtScheme()).to.be.true;
    expect(await GovtSchemesFunctionality.selectGovtScheme(schemeName)).to.be.true;
  }
);

When(/^I set amount as (\d+) for Govt Scheme (Employee Provident Fund|Public Provident Fund|General Provident Fund|Sukanya Samridhi Yojna|Senior Citizen Saving Scheme)$/,
  async(amount, schemeName) => {
    this.amount = amount;
    this.schemeName = schemeName;
    await console.log(`When I add amount as ${amount} for Govt Scheme ${schemeName}`);
    expect(await GovtSchemesFunctionality.setAmountForGovtScheme(amount, schemeName)).to.be.true;
  }
);

Then(/^Total invested amount should get updated$/, async () => {

  //First do validations for member level total amount for all schemes and single scheme

  const newInvestedAmountForMember = await GovtSchemesFunctionality.getTotalInvestedAmount();
  const newSingleGovtSchemePercentAndAmountForMember = await GovtSchemesFunctionality.getSchemePercentAndAmount(this.schemeName);
  const incrementInTotalAmountForMember = newInvestedAmountForMember - this.govtSchemesTotalInvestedAmountForMember;
  const expectedIncrementInTotalAmountForMember = this.amount - this.singleGovtSchemePercentAndAmountForMember[1];
  console.log(`newInvestedAmountForMember ${newInvestedAmountForMember} newSingleGovtSchemePercentAndAmountForMember ${newSingleGovtSchemePercentAndAmountForMember}`);
  console.log(`incrementInTotalAmountForMember ${incrementInTotalAmountForMember} expectedIncrementInTotalAmountForMember ${expectedIncrementInTotalAmountForMember}`);
  expect(incrementInTotalAmountForMember).to.equal(expectedIncrementInTotalAmountForMember);
  const incrementInSchemeWiseTotalAmountForMember = newSingleGovtSchemePercentAndAmountForMember[1] - this.singleGovtSchemePercentAndAmountForMember[1];
  console.log(`incrementInSchemeWiseTotalAmountForMember ${incrementInSchemeWiseTotalAmountForMember}`);
  expect(incrementInSchemeWiseTotalAmountForMember).to.equal(expectedIncrementInTotalAmountForMember);

  //Now do validations for all members total amount for all schemes and single scheme
  expect(await GovtSchemesFunctionality.selectFamilyMember('All family members')).to.be.true;

  const newInvestedAmountForAllMembers = await GovtSchemesFunctionality.getTotalInvestedAmount();
  const newSingleGovtSchemePercentAndAmountForAllMembers = await GovtSchemesFunctionality.getSchemePercentAndAmount(this.schemeName);
  const incrementInTotalAmountForAllMembers = newInvestedAmountForAllMembers - this.govtSchemesTotalInvestedAmount;
  const expectedIncrementInTotalAmountForAllMembers = this.amount - this.singleGovtSchemePercentAndAmount[1];
  console.log(`newInvestedAmountForAllMembers ${newInvestedAmountForAllMembers} newSingleGovtSchemePercentAndAmountForAllMembers ${newSingleGovtSchemePercentAndAmountForAllMembers}`);
  console.log(`incrementInTotalAmountForMember ${incrementInTotalAmountForMember} expectedIncrementInTotalAmountForMember ${expectedIncrementInTotalAmountForMember}`);
  expect(incrementInTotalAmountForAllMembers).to.equal(expectedIncrementInTotalAmountForAllMembers);
  const incrementInSchemeWiseTotalAmountForAllMembers = newSingleGovtSchemePercentAndAmountForAllMembers[1] - this.singleGovtSchemePercentAndAmount[1];
  console.log(`incrementInSchemeWiseTotalAmountForAllMembers ${incrementInSchemeWiseTotalAmountForAllMembers}`);
  expect(incrementInSchemeWiseTotalAmountForAllMembers).to.equal(expectedIncrementInTotalAmountForAllMembers);
});
