const { When, Then } = require('@wdio/cucumber-framework');
const GovtSchemesFunctionality = require('../../../main/Functionalities/GovtSchemes/GovtSchemesFunctionality');
const { expect } = require('chai');
const CommonFunctionality = require('../../../main/Functionalities/Common/CommonFunctionality');

When(/^I select Govt Scheme "(National Pension Scheme Tier1|National Pension Scheme Tier2|Employee Provident Fund|Public Provident Fund|General Provident Fund|Sukanya Samridhi Yojna|National Saving Certificate|Senior Citizen Saving Scheme)" for family member "([^"]*)?"$/,
  async (schemeName, familyMember) => {
    await console.log(`When I select Govt Scheme "${schemeName}" for family member "${familyMember}"`);
    this.familyMemberName = familyMember;

    if(await GovtSchemesFunctionality.govtSchemesInitialPageLaunched()) {
      console.log('No preexisting Government schemes present');
      this.govtSchemesTotalInvestedAmount = 0;
      this.singleGovtSchemePercentAndAmount = [0, 0];
      this.singleGovtSchemeAbsoluteAmount = 0;
      this.govtSchemesTotalInvestedAmountForMember = 0;
      this.singleGovtSchemePercentAndAmountForMember = [0, 0];
      this.singleGovtSchemeAbsoluteAmountForMember = 0;

      expect(await GovtSchemesFunctionality.addGovtScheme()).to.be.true;
      if(await CommonFunctionality.selectASchemePageLaunched()) {
        expect(await GovtSchemesFunctionality.selectGovtScheme(schemeName)).to.be.true;
      } else {
        expect(await GovtSchemesFunctionality.selectFamilyMember(familyMember)).to.be.true;
        expect(await GovtSchemesFunctionality.selectGovtScheme(schemeName)).to.be.true;
      }
    } else {
      // if (await CommonFunctionality.familyMemberNameIsDisplayed('All family members')) {
      //   expect(await GovtSchemesFunctionality.selectFamilyMember('All family members')).to.be.true;
      //   this.govtSchemesTotalInvestedAmount = await GovtSchemesFunctionality.getTotalInvestedAmount();
      //   this.singleGovtSchemePercentAndAmount = await GovtSchemesFunctionality.getSchemePercentAndAmount(schemeName);
      //   this.singleGovtSchemeAbsoluteAmount = await GovtSchemesFunctionality.getSchemeAbsoluteAmount(schemeName);
      //   console.log(`MYWEALTH govtSchemesTotalInvestedAmount ${this.govtSchemesTotalInvestedAmount} singleGovtSchemePercentAndAmount ${this.singleGovtSchemePercentAndAmount}`);
      //   console.log(`MYWEALTH singleGovtSchemeAbsoluteAmount ${this.singleGovtSchemeAbsoluteAmount}`);
      // }

      expect(await GovtSchemesFunctionality.selectFamilyMember(familyMember)).to.be.true;
      this.govtSchemesTotalInvestedAmountForMember = await GovtSchemesFunctionality.getTotalInvestedAmount();
      this.singleGovtSchemePercentAndAmountForMember = await GovtSchemesFunctionality.getSchemePercentAndAmount(schemeName);
      this.singleGovtSchemeAbsoluteAmountForMember = await GovtSchemesFunctionality.getSchemeAbsoluteAmount(schemeName);
      console.log(`MYWEALTH govtSchemesTotalInvestedAmountForMember ${this.govtSchemesTotalInvestedAmountForMember} singleGovtSchemePercentAndAmountForMember ${this.singleGovtSchemePercentAndAmountForMember}`);
      console.log(`MYWEALTH singleGovtSchemeAbsoluteAmountForMember ${this.singleGovtSchemeAbsoluteAmountForMember}`);
      expect(await GovtSchemesFunctionality.addGovtScheme()).to.be.true;
      expect(await GovtSchemesFunctionality.selectGovtScheme(schemeName)).to.be.true;
    }
  }
);

When(/^I set amount as (\d+) for Govt Scheme "(Employee Provident Fund|Public Provident Fund|General Provident Fund|Sukanya Samridhi Yojna|Senior Citizen Saving Scheme)"$/,
  async(amount, schemeName) => {
    this.amount = amount;
    this.schemeName = schemeName;
    console.log(`When I add amount as ${amount} for Govt Scheme "${schemeName}"`);
    expect(await GovtSchemesFunctionality.setAmountForGovtScheme(amount, schemeName)).to.be.true;
  }
);

Then(/^Total invested amount should get updated$/, async () => {
  console.log('Total invested amount should get updated');
  //First do validations for member level, total amount for all schemes and single scheme
  await GovtSchemesFunctionality.doGovtSchemeValidations(this.schemeName, this.familyMemberName, this.amount,
    this.govtSchemesTotalInvestedAmountForMember, this.singleGovtSchemeAbsoluteAmountForMember,
    this.singleGovtSchemePercentAndAmountForMember[1]);

  //Now do validations for all members, total amount for all schemes and single scheme
  // if(await GovtSchemesFunctionality.selectFamilyMember('All family members')) {
  //   await GovtSchemesFunctionality.doGovtSchemeValidations(this.schemeName, 'All family members', this.amount,
  //     this.govtSchemesTotalInvestedAmount, this.singleGovtSchemeAbsoluteAmount,
  //     this.singleGovtSchemePercentAndAmount[1]);
  // }
});

When(/^I select Govt Scheme "(National Pension Scheme Tier1|National Pension Scheme Tier2|Employee Provident Fund|Public Provident Fund|General Provident Fund|Sukanya Samridhi Yojna|National Saving Certificate|Senior Citizen Saving Scheme)" tile$/, async (schemeName) => {
  console.log(`I select Govt Scheme "${schemeName}" tile`);
  await GovtSchemesFunctionality.selectGovtSchemeTile(schemeName);
});

When(/^I delete Govt Scheme$/, async() => {
  console.log('When I delete Govt Scheme');
  await GovtSchemesFunctionality.deleteGovtScheme();
});

When(/^I fill form with (.+), (\d+), (\d+), (\d+), (\d+) for Govt Scheme "(National Pension Scheme Tier1|National Pension Scheme Tier2)"$/,
  async(npsFundName, npsEquityAmount, npsGovtSecurityAmount, npsCorpDebtAmount, npsAltInvestmentFundsAmount, npsType) => {
    console.log(`I fill form with ${npsFundName}, ${npsEquityAmount}, ${npsGovtSecurityAmount}, ${npsCorpDebtAmount}, ${npsAltInvestmentFundsAmount} for Govt Scheme "${npsType}"`);
    await GovtSchemesFunctionality.fillNPSForm(npsFundName, npsEquityAmount, npsGovtSecurityAmount, npsCorpDebtAmount, npsAltInvestmentFundsAmount, npsType);
  }
);
