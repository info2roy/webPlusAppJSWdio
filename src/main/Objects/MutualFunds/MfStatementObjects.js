class MfStatementObjects {

  investmentHistoryTab = { web: '//*[text()="Investment history"]', app: '//*[@text="Investment history"]' };

  investmentHistoryTabText = 'Investment history';

  fundHoldingsTab = { web: '//*[text()="Fund holdings"]', app: '//*[@text="Fund holdings"]' };

  fundHoldingsTabText = 'Fund holdings';

  taxStatementsTab = { web: '//*[text()="Tax statements"]', app: '//*[@text="Tax statements"]' };

  taxStatementsTabText = 'Tax statements';

  capitalGainsTab = { web: '//*[text()="Capital gains"]', app: '//*[@text="Capital gains"]' };

  capitalGainsTabText = 'Capital gains';

  investmentHistoryFundFoundHeader = {
    web: '//*[contains(text(),"funds found") or contains(text(),"fund found")]',
    app: '//*[@text="Start investing" or @text="No investments to show"]'
  };

  fundHoldingsCheckbox = { web: '//*[text()="With empty holdings"]' };

  emailIcon = { web: '//img[contains(@src,"/email-grey.svg")]' };

  downloadAsPdf = { web: '//img[contains(@src,"/pdf.svg")]' };

  downloadIcon = { web: '(//div[@data-testid="financial-year-tile"]//div)[7]' };

  fundsCurrentvalue = { web: '(//*[text()="Current value"])[1]' };

  fundsSortingOption = { web: '//img[contains(@src,"/sort.svg")]' };

  investmentHistoryEmailMe = { web: '//*[text()="Email me"]' };

  investmentHistoryDownload = { web: '//*[text()="Download"]' };

  statementsAndTaxReportsHeader = {
    web: '//div[contains(@class,"heading-sub-container")]//div[text()="Statements"]',
    app: '//*[@text="Tax statements"]'
  };
}
module.exports = new MfStatementObjects();
