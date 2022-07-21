class MfStatementObjects {

  investmentHistoryTab = { web: '//*[text()="Investment history"]' };

  fundHoldingsTab = { web: '//*[text()="Fund holdings"]' };

  taxStatementsTab = { web: '//*[text()="Tax statements"]' };

  capitalGainsTab = { web: '//*[text()="Capital gains"]' };

  investmentHistoryFundFoundHeader = { web: '//*[contains(text(),"funds found") or contains(text(),"fund found")]' };

  fundHoldingsCheckbox = { web: '//*[text()="With empty holdings"]' };

  emailIcon = { web: '//img[contains(@src,"/email-grey.svg")]' };

  downloadAsPdf = { web: '//img[contains(@src,"/pdf.svg")]' };

  downloadIcon = { web: '(//div[@data-testid="financial-year-tile"]//div)[7]' };

  fundsCurrentvalue = { web: '(//*[text()="Current value"])[1]' };

  fundsSortingOption = { web: '//img[contains(@src,"/sort.svg")]' };

  investmentHistoryEmailMe = { web: '//*[text()="Email me"]' };

  investmentHistoryDownload = { web: '//*[text()="Download"]' };

  statementsAndTaxReportsHeader = { web: '//div[contains(@class,"heading-sub-container")]//div[text()="Statements"]' };
}
module.exports = new MfStatementObjects();
