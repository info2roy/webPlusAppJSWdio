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

  async scrollUntilInvestmentTypeTextIsDisplayed(paymentType) {
    if (Device.isAndroidApp()) {
      if (paymentType === Constants.PAYMENT_TYPE_IMMEDIATE) {
        await Utils.scrollVerticalUntilTextIntoViewForAndroid(MFInvestmentObjects.MAKE_PAYMENT_NOW_TEXT);
      }
    }
  }

  async clickMakePaymentButton(paymentType) {
    if (paymentType === Constants.PAYMENT_TYPE_IMMEDIATE) {
      await Utils.clickElement(MFInvestmentObjects.makePaymentNowButton);
    } else {
      await Utils.clickElement(MFInvestmentObjects.oneClickInvestButton);
    }
  }

  async setupMFOneTimeInvestmentPageHeaderIsDisplayed(amount, paymentTypePage = true) {
    if(paymentTypePage) {
      return (await Utils.elementIsDisplayed(MFInvestmentObjects.selectMFOneTimePaymentTypePageHeader(amount)));
    }
    return (await Utils.elementIsDisplayed(MFInvestmentObjects.setupMFOneTimeInvestmentPageHeader(amount)));
  }

  async setupMFSIPInvestmentPageHeaderIsDisplayed(amount, months = 'Blank') {
    if (months === 'Blank') {
      return (await Utils.elementIsDisplayed(MFInvestmentObjects.selectMFSipPaymentTypePageHeader(amount)));
    }
    return (await Utils.elementIsDisplayed(MFInvestmentObjects.setupMFSipInvestmentPageHeader(amount, parseInt(months))));
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
        console.log(`Wrong type MF type to assert. -> ${mfOption.toString()}`);
    }
  }

  async clickOnAddNewPlanOrExploreOtherPlans() {
    if (Device.isAndroidApp()) {
      await Utils.scrollVerticalToEndForAndroid(1, 1);
    }
    await Utils.clickElement(MFInvestmentObjects.addNewPlanOrExploreOtherPlans);
  }

  async addNewPlanPageHeaderIsDisplayed() {
    return (await Utils.elementIsDisplayed(MFInvestmentObjects.addNewPlanPageHeader));
  }

  async addNewPlanPageInvestmentStrategiesHeaderIsDisplayed() {
    if (Device.isAndroidApp()) {
      return true;
    }
    return (await Utils.elementIsDisplayed(MFInvestmentObjects.addNewPlanPageInvestmentStrategiesHeader));
  }

  async addNewPlanPageAchieveLifeGoalsHeaderIsDisplayed() {
    if (Device.isAndroidApp()) {
      return true;
    }
    return (await Utils.elementIsDisplayed(MFInvestmentObjects.addNewPlanPageAchieveLifeGoalsHeader));
  }

  async clickOnViewInvestmentsButton() {
    await Utils.clickElement(MFInvestmentObjects.viewInvestmentsButton);
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

  async chooseYourFundPageAvailable() {
    return (await Utils.elementIsDisplayed(MFInvestmentObjects.chooseYourFundHeader) &&
      await Utils.elementIsDisplayed(MFInvestmentObjects.searchResultsFoundText));
  }

  async searchMutualFund(fundName) {
    await Utils.clickElement(MFInvestmentObjects.exploreFundsSearchBox);
    await Utils.setInputField(fundName, MFInvestmentObjects.enterFundNameTextBox);
  }

  async enterSIPValue(value) {
    await Utils.setInputField(value, MFInvestmentObjects.SIPAmountTextBox);
  }

  async enterSIPDuration(time) {
    await Utils.setInputField(time, MFInvestmentObjects.SIPDurationTextBox);
  }

  async clickPickFund() {
    await Utils.clickElement(MFInvestmentObjects.firstPickFundButton);
  }

  async confirmSetUpInvestmentHeaderDisplayed() {
    return (await Utils.elementIsDisplayed(MFInvestmentObjects.setUpInvestmentHeader));
  }

  async validateFundsPresent() {
    const funds = await Utils.getAllMatchingElements(MFInvestmentObjects.recommendedFunds);
    return funds.length > 0;
  }

  async validateFundSplit(totalAmount) {
    const splitAmounts = Utils.toInt(await Utils.getTexts(MFInvestmentObjects.recommendedFundAmounts));
    const sum = splitAmounts.reduce((partialSum, a) => partialSum + a, 0);
    console.log(`totalAmount ${totalAmount} sum ${sum}`);
    return sum === totalAmount;
  }

  async setYearlySIPIncreasePercent(percent) {
    await Utils.setHorizontalSlider(MFInvestmentObjects.sipIncreasePercentSlider, 10, percent);
  }

  async clickInvestMoreLinkForExistingFund(fundName) {
    await Utils.clickElement(MFInvestmentObjects.investMoreLinkForExistingFund(fundName));
  }

  async investmentSummaryAmountIsDisplayed(portfolio, investmentType, amount) {
    return (await Utils.elementIsDisplayed(MFInvestmentObjects.investmentSummaryAmount(
      portfolio, investmentType, amount)));
  }

  async investmentSummaryNumFundsIsDisplayed(portfolio, investmentType) {
    await browser.pause(15000);
    const numFundsStr = await Utils.getText(MFInvestmentObjects.investmentSummaryNumFunds(portfolio, investmentType));
    const numFunds = parseInt(numFundsStr);
    return (numFunds > 0);
  }

  async investmentSummaryInvestmentDateIsDisplayed(portfolio, investmentType, investmentDateCode) {
    const investmentDate = Utils.getInvestmentDate(new Date(), investmentDateCode).getDate();
    return (await Utils.elementIsDisplayed(MFInvestmentObjects.investmentSummaryInvestmentDate(
      portfolio, investmentType, investmentDate)));
  }

  async investmentSummaryStepUpIsDisplayed(portfolio, investmentType, stepUpPercent) {
    return (await Utils.elementIsDisplayed(MFInvestmentObjects.investmentSummaryStepUp(
      portfolio, investmentType, stepUpPercent)));
  }

  async upcomingInvestmentAmountIsDisplayed(portfolio, amount) {
    return (await Utils.elementIsDisplayed(MFInvestmentObjects.upcomingInvestmentAmount(
      portfolio, amount)));
  }

  async upcomingInvestmentTypeIsDisplayed(portfolio, investmentType) {
    return (await Utils.validateElementText(MFInvestmentObjects.upcomingInvestmentType(portfolio),
      investmentType));
  }
}
module.exports = new MFInvestmentPage();
