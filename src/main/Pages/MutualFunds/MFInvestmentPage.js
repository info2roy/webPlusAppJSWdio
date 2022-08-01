const Device = require('../../../support/libraries/Device');
const Utils = require('../../../support/Utils/Utils');
const Constants = require('../../../config/data/structured/Constants');
const MFInvestmentObjects = require('../../Objects/MutualFunds/MFInvestmentObjects');

class MFInvestmentPage {
  async mutualFundsPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFInvestmentObjects.mutualFundsPageHeader));
  }

  async selectMutualFundPortfolio(portfolio) {
    await Utils.clickElement(MFInvestmentObjects.mutualFundPortfolioOption(portfolio));
  }

  async scripboxGuidedPathHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFInvestmentObjects.scripboxGuidedPathHeader));
  }

  async clickInvestAsPerScripboxGuidedPathButton() {
    await Utils.clickElement(MFInvestmentObjects.investAsPerScripboxGuidedPathButton);
  }

  async mutualFundPortfolioHeaderIsDisplayed(portfolio) {
    return (await Utils.elementIsDisplayed(MFInvestmentObjects.mutualFundPortfolioOption(portfolio)));
  }

  async scrollUntilAgegroupHeaderIsDisplayed() {
    await Utils.scrollVerticalUntilTextIntoViewForAndroid(MFInvestmentObjects.ageGroupHeaderText);
  }

  async selectAgeGroupTab(ageGroup) {
    await Utils.clickElement(MFInvestmentObjects.ageGroupTab(ageGroup));
  }

  async clickOnlyNextButton() {
    await Utils.clickElement(MFInvestmentObjects.nextButton);
  }

  async clickNextButtonForPayment(paymentType) {
    if (paymentType === Constants.PAYMENT_TYPE_IMMEDIATE) {
      await Utils.clickElement(MFInvestmentObjects.nextButton);
    } else if (paymentType === Constants.PAYMENT_TYPE_SCHEDULED) {
      await Utils.clickElement(MFInvestmentObjects.confirmButton);
    }
  }

  async investmentFormPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFInvestmentObjects.investmentFormPageHeader));
  }

  async selectInvestmentType(investmentType) {
    await Utils.clickElement(MFInvestmentObjects.investmentTypeOption(investmentType));
  }

  async enterInvestmentAmount(amount) {
    await Utils.setInputField(amount, MFInvestmentObjects.investmentAmountField);
  }

  async clickSeeRecommendedFundsButton() {
    await Utils.clickElement(MFInvestmentObjects.seeRecommendedFundsButton);
  }

  async recommendedFundPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFInvestmentObjects.recommendedFundsPageHeader));
  }

  async selectPaymentTypePageHeaderIsDisplayed(investmentType, amount) {
    if (investmentType == Constants.INVESTMENT_TYPE_SIP) {
      return (await Utils.elementIsDisplayed(MFInvestmentObjects.selectMFSipPaymentTypePageHeader(amount)));
    } else if (investmentType == Constants.INVESTMENT_TYPE_ONETIME) {
      return (await Utils.elementIsDisplayed(MFInvestmentObjects.selectMFOneTimePaymentTypePageHeader(amount)));
    }
    return false;
  }

  async scrollUntilInvestmentTypeTextIsDisplayed(paymentType) {
    if (Device.isAndroidApp()) {
      let investmentTypeText = MFInvestmentObjects.MAKE_PAYMENT_NOW_TEXT;
      if (paymentType === Constants.PAYMENT_TYPE_SCHEDULED) {
        investmentTypeText = MFInvestmentObjects.ONE_CLICK_INVEST_TEXT;
      }
      console.log(`scrollUntilInvestmentTypeTextIsDisplayed: investmentTypeText: ${JSON.stringify(investmentTypeText)}`);
      await Utils.scrollVerticalUntilTextIntoViewForAndroid(investmentTypeText);
    }
  }

  async clickMakePaymentButton(paymentType) {
    if (paymentType === Constants.PAYMENT_TYPE_IMMEDIATE) {
      await Utils.clickElement(MFInvestmentObjects.makePaymentNowButton);
    } else if (paymentType === Constants.PAYMENT_TYPE_SCHEDULED) {
      await Utils.clickElement(MFInvestmentObjects.oneClickInvestButton);
    }
  }

  async setupMFInvestmentPageHeaderIsDisplayed(investmentType, amount, months) {
    if (investmentType == Constants.INVESTMENT_TYPE_SIP) {
      return (await Utils.elementIsDisplayed(MFInvestmentObjects.setupMFSipInvestmentPageHeader(amount, months)));
    } else if (investmentType == Constants.INVESTMENT_TYPE_ONETIME) {
      return (await Utils.elementIsDisplayed(MFInvestmentObjects.setupMFOneTimeInvestmentPageHeader(amount)));
    }
    return false;
  }

  async enterSipDurationInMonths(months) {
    await Utils.setInputField(months, MFInvestmentObjects.sipDurationInMonthsField);
  }

  async paymentInstrumentPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFInvestmentObjects.paymentInstrumentPageHeader));
  }

  async investmentScheduledSuccessfulPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFInvestmentObjects.investmentScheduledSuccessfullyPageHeader));
  }

  async clickOnPaymentInstrument(paymentInstrumentType) {
    await Utils.clickElement(MFInvestmentObjects.paymentInstrument(paymentInstrumentType));
  }

  async transferFundsPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFInvestmentObjects.transferFundsPageHeader));
  }

  async clickGoToBankButton() {
    await Utils.clickElement(MFInvestmentObjects.goToBankForFundTransferButton);
  }

  async mockPaymentStatusPageHeaderIsDisplayed() {
    if (Device.isWeb()) {
      return (await Utils.elementIsDisplayed(MFInvestmentObjects.mockPaymentStatusPageHeader));
    }
    return true;
  }

  async clickMockPaymentStatus(paymentStatus) {
    if (Device.isWeb()) {
      await Utils.clickElement(MFInvestmentObjects.mockPaymentStatusButton(paymentStatus));
    }
  }

  async fundTransferSuccessMessageIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFInvestmentObjects.fundTransferSuccessMessage));
  }

  async clickHomeButton() {
    if (Device.isAndroidApp()) {
      await Utils.clickElement(MFInvestmentObjects.homeButton);
    }
  }

  async investmentSuccessMessageIsDisplayed() {
    if (Device.isAndroidApp()) {
      return (await Utils.elementIsDisplayed(MFInvestmentObjects.investmentSuccessMessage));
    }
    return true;
  }

  async clickGoToDashboardButton() {
    await Utils.clickElement(MFInvestmentObjects.goToDashboardButton);
  }

  async clickBackButton() {
    await console.log('clickBackButton : begin');
    const backButton = await Utils.getMatchingElementByIndex(MFInvestmentObjects.backButton, 0);
    await console.log(`backButton : ${JSON.stringify(backButton)}`);
    await Utils.clickWebElement(backButton);
    await console.log(`clicked backButton`);
    if (Device.isWeb()) {
      await Utils.clickWebElement(backButton);
    }
  }

  async navigateToMFStatementPage(mfOption) {
    switch (mfOption.toString()) {
      case 'Investment history':
        await Utils.clickElement(MFInvestmentObjects.investmentHistoryTab);
        break;
      case 'Fund holdings':
        await Utils.clickElement(MFInvestmentObjects.fundHoldingsTab);
        break;
      case 'Tax statements':
        await Utils.clickElement(MFInvestmentObjects.taxStatementsTab);
        break;
      case 'Capital gains':
        await Utils.clickElement(MFInvestmentObjects.capitalGainsTab);
        break;
      default:
        console.log('Mf option not available');
    }
  }

  async validateMFPageLoad(mfOption) {
    switch (mfOption.toString()) {
      case 'Investment history':
        return (
          await Utils.elementIsDisplayed(MFInvestmentObjects.investmentHistoryFundFoundHeader) &&
          await Utils.elementIsDisplayed(MFInvestmentObjects.investmentHistoryEmailMe) &&
          await Utils.elementIsDisplayed(MFInvestmentObjects.investmentHistoryDownload));
      case 'Fund holdings':
        return (
          await Utils.elementIsDisplayed(MFInvestmentObjects.fundHoldingsCheckbox) &&
          await Utils.elementIsDisplayed(MFInvestmentObjects.investmentHistoryEmailMe) &&
          await Utils.elementIsDisplayed(MFInvestmentObjects.fundsCurrentvalue) &&
          await Utils.elementIsDisplayed(MFInvestmentObjects.fundsSortingOption));
      case 'Tax statements':
        return (
          await Utils.elementIsDisplayed(MFInvestmentObjects.emailIcon) &&
          await Utils.elementIsDisplayed(MFInvestmentObjects.downloadAsPdf));
      case 'Capital gains':
        return (
          await Utils.elementIsDisplayed(MFInvestmentObjects.emailIcon) &&
          await Utils.elementIsDisplayed(MFInvestmentObjects.downloadIcon));
      default:
        console.log('Wrong type MF type to assert. -> ' + mfOption.toString());
    }
  }

  async clickOnAddNewPlan() {
    Utils.clickElement(MFInvestmentObjects.addNewPlan);
  }

  async addNewPlanPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFInvestmentObjects.addNewPlanPageHeader));
  }

  async addNewPlanPageInvestmentStrategiesHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFInvestmentObjects.addNewPlanPageInvestmentStrategiesHeader));
  }

  async addNewPlanPageAchieveLifeGoalsHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFInvestmentObjects.addNewPlanPageAchieveLifeGoalsHeader));
  }

  async clickOnViewInvestmentsButton() {
    Utils.clickElement(MFInvestmentObjects.viewInvestmentsButton);
  }

  async sipsAndStpsHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFInvestmentObjects.sipsAndStpsHeader));
  }

  async externalSipsHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFInvestmentObjects.externalSipsHeader));
  }

  async monthlySummaryHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFInvestmentObjects.monthlySummaryHeader));
  }
}
module.exports = new MFInvestmentPage();
