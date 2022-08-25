const { When, Then } = require('@wdio/cucumber-framework');
const GovtSchemesFunctionality = require('../../../main/Functionalities/GovtSchemes/GovtSchemesFunctionality');
const { expect } = require('chai');
const CommonFunctionality = require('../../../main/Functionalities/Common/CommonFunctionality');
const Constants = require('../../../config/data/structured/Constants');

When(/^I select Govt Scheme "(Employee Provident Fund|Public Provident Fund|General Provident Fund|Sukanya Samridhi Yojna|National Saving Certificate|Senior Citizen Saving Scheme)" for family member "([^"]*)?"$/,
  async (schemeName, familyMember) => {
    await console.log(`When I select Govt Scheme "${schemeName}" for family member "${familyMember}"`);
    this.familyMemberName = familyMember;
    this.schemeName = schemeName;
    if(await GovtSchemesFunctionality.govtSchemesInitialPageLaunched()) {
      console.log('No preexisting Government schemes present');
      // this.govtSchemesTotalInvestedAmount = 0;
      // this.singleGovtSchemePercentAndAmount = [0, 0];
      // this.singleGovtSchemeAbsoluteAmount = 0;
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

When(/^I select Govt Scheme "(National Pension Scheme Tier1|National Pension Scheme Tier2)" for family member "([^"]*)?"$/,
  async (schemeName, familyMember) => {
    await console.log(`When I select Govt Scheme "${schemeName}" for family member "${familyMember}"`);
    this.familyMemberName = familyMember;
    this.schemeName = schemeName;
    const npsTier = GovtSchemesFunctionality.getNPSTier(schemeName);

    if(await GovtSchemesFunctionality.govtSchemesInitialPageLaunched()) {
      console.log('No preexisting Government schemes present');
      this.govtSchemesTotalInvestedAmountForMember = 0;
      this.singleGovtSchemeAbsoluteAmountForMember = 0;
      this.singleGovtSchemePercentAndAmountForMember = [0, 0];

      expect(await GovtSchemesFunctionality.addGovtScheme()).to.be.true;
      if(await CommonFunctionality.selectASchemePageLaunched()) {
        expect(await GovtSchemesFunctionality.selectGovtScheme(schemeName)).to.be.true;
      } else {
        expect(await GovtSchemesFunctionality.selectFamilyMember(familyMember)).to.be.true;
        expect(await GovtSchemesFunctionality.selectGovtScheme(schemeName)).to.be.true;
      }
    } else {
      expect(await GovtSchemesFunctionality.selectFamilyMember(familyMember)).to.be.true;
      this.govtSchemesTotalInvestedAmountForMember = await GovtSchemesFunctionality.getTotalInvestedAmount();
      this.singleGovtSchemeAbsoluteAmountForMember = await GovtSchemesFunctionality.getNPSAbsoluteAmount(npsTier);
      this.singleGovtSchemePercentAndAmountForMember = [0, 0];
      console.log(`MYWEALTH govtSchemesTotalInvestedAmountForMember ${this.govtSchemesTotalInvestedAmountForMember}`);
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
  console.log('Then Total invested amount should get updated');
  //First do validations for member level, total amount for all schemes and single scheme
  expect(await GovtSchemesFunctionality.selectFamilyMember(this.familyMemberName)).to.be.true;
  let totalInvestedAmount = 0;
  if ([Constants.GOVT_SCHEME_NPS_TIER1, Constants.GOVT_SCHEME_NPS_TIER2].includes(this.schemeName)) {
    totalInvestedAmount = this.npsEquityAmount + this.npsGovtSecurityAmount + this.npsCorpDebtAmount + this.npsAltInvestmentFundsAmount;
  } else {
    totalInvestedAmount = this.amount;
  }
  await GovtSchemesFunctionality.doGovtSchemeValidations(this.schemeName, this.familyMemberName, totalInvestedAmount,
    this.govtSchemesTotalInvestedAmountForMember, this.singleGovtSchemeAbsoluteAmountForMember,
    this.singleGovtSchemePercentAndAmountForMember[1]);

  //Now do validations for all members, total amount for all schemes and single scheme
  // if(await GovtSchemesFunctionality.selectFamilyMember('All family members')) {
  //   await GovtSchemesFunctionality.doGovtSchemeValidations(this.schemeName, 'All family members', this.amount,
  //     this.govtSchemesTotalInvestedAmount, this.singleGovtSchemeAbsoluteAmount,
  //     this.singleGovtSchemePercentAndAmount[1]);
  // }
});

When(/^I select Govt Scheme "(National Pension Scheme Tier1|National Pension Scheme Tier2|Employee Provident Fund|Public Provident Fund|General Provident Fund|Sukanya Samridhi Yojna|National Saving Certificate|Senior Citizen Saving Scheme)" tile for family member "([^"]*)"?$/, async (schemeName, familyMemberName) => {
  console.log(`When I select Govt Scheme "${schemeName}" tile for family member "${familyMemberName}"`);
  expect(await GovtSchemesFunctionality.selectFamilyMember(this.familyMemberName)).to.be.true;
  await GovtSchemesFunctionality.selectGovtSchemeTile(schemeName);
});

Then(/^NPS Scheme details are shown correctly for Govt Scheme "(National Pension Scheme Tier1|National Pension Scheme Tier2)"$/, async(npsSchemeName) => {
  console.log(`Then NPS Scheme details are shown correctly for Govt Scheme "${npsSchemeName}"`);
  await GovtSchemesFunctionality.validateNPSSchemeDetails(this.npsFundName, this.npsEquityAmount,
    this.npsGovtSecurityAmount, this.npsCorpDebtAmount, this.npsAltInvestmentFundsAmount, npsSchemeName);
});

When(/^I delete Govt Scheme$/, async() => {
  console.log('When I delete Govt Scheme');
  await GovtSchemesFunctionality.deleteGovtScheme();
});

When(/^I fill form with (.+), (\d+), (\d+), (\d+), (\d+) for Govt Scheme "(National Pension Scheme Tier1|National Pension Scheme Tier2)"$/,
  async(npsFundName, npsEquityAmount, npsGovtSecurityAmount, npsCorpDebtAmount, npsAltInvestmentFundsAmount, npsType) => {
    console.log(`When I fill form with ${npsFundName}, ${npsEquityAmount}, ${npsGovtSecurityAmount}, ${npsCorpDebtAmount}, ${npsAltInvestmentFundsAmount} for Govt Scheme "${npsType}"`);
    this.npsFundName = npsFundName;
    this.npsEquityAmount = npsEquityAmount;
    this.npsGovtSecurityAmount = npsGovtSecurityAmount;
    this.npsCorpDebtAmount = npsCorpDebtAmount;
    this.npsAltInvestmentFundsAmount = npsAltInvestmentFundsAmount;
    await GovtSchemesFunctionality.fillNPSForm(npsFundName, npsEquityAmount, npsGovtSecurityAmount, npsCorpDebtAmount, npsAltInvestmentFundsAmount, npsType);
  }
);
