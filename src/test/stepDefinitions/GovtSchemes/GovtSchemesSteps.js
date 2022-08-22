const { When, Then } = require('@wdio/cucumber-framework');
const GovtSchemesFunctionality = require('../../../main/Functionalities/GovtSchemes/GovtSchemesFunctionality');
const { expect } = require('chai');

When(/^I select Govt Scheme "(National Pension Scheme Tier1|National Pension Scheme Tier2|Employee Provident Fund|Public Provident Fund|General Provident Fund|Sukanya Samridhi Yojna|National Saving Certificate|Senior Citizen Saving Scheme)" for family member "([^"]*)?"$/,
  async (schemeName, familyMember) => {
    await console.log(`When I select Govt Scheme "${schemeName}" for family member ${familyMember}`);
    this.govtSchemesInvestedAmount = await GovtSchemesFunctionality.getTotalInvestedAmount();
    this.govtSchemePercentAndAmount = await GovtSchemesFunctionality.getSchemePercentAndAmount(schemeName);
    expect(await GovtSchemesFunctionality.addGovtScheme(familyMember)).to.be.true;
    expect(await GovtSchemesFunctionality.selectFamilyMember(familyMember)).to.be.true;
    expect(await GovtSchemesFunctionality.selectGovtScheme(schemeName)).to.be.true;
  }
);

When(/^I set amount as (\d+) for Govt Scheme "(Employee Provident Fund|Public Provident Fund|General Provident Fund|Sukanya Samridhi Yojna|Senior Citizen Saving Scheme)"$/,
  async(amount, schemeName) => {
    this.amount = amount;
    await console.log(`When I add amount as ${amount} for Govt Scheme ${schemeName}`);
    expect(await GovtSchemesFunctionality.setAmountForGovtScheme(amount, schemeName)).to.be.true;
  }
);

Then(/^Total invested amount should get updated$/, async () => {
  const newInvestedAmount = await GovtSchemesFunctionality.getTotalInvestedAmount();
  const increment = newInvestedAmount - this.govtSchemesInvestedAmount;
  const expectedIncrement = this.amount - this.govtSchemePercentAndAmount[1];
  expect(increment).to.equal(expectedIncrement);
});
