class InvestmentCalendarObjects {
  investmentCalendarPageHeader = { web: '(//*[text()="Investment Calendar"])[2]' };

  monthlySummaryHeader = { web: '//div[text()="Monthly Summary"]' };

  upcomingInvestmentCalendarHeader = { web: '//div[text()="Upcoming"]' };

  completedInvestmentCalendarHeader = { web: '//div[text()="Completed"]' };
}
module.exports = new InvestmentCalendarObjects();
