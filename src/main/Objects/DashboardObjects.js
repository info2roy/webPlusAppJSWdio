class DashboardObjects {
  helloUser = { web: '//div[text()="HELLO"]', app: '//*[@text="HELLO"]' };

  moreButton = {
    web: '//div[text()="More"]',
    desktop: 'span.desktop-dropdown-icon',
    app: '//android.widget.TextView[@text="More"]',
  };

  returnToHome = { web: '//*[contains(text(),"Return to Home")]' };

  homeButton = { web: '//button[contains(text(),"HOME")]' };

  withdrawButton = { web: '//div[contains(@class,"dashboard-invest-withdraw-btn")]//*[text()="Withdraw"]', app: '//*[@text="Withdraw"]' };

  investMoreButton = { web: '//button/div[text()="Invest more"]', app: '//*[@text="Invest more"]' };

  dashboardTab(tabName) { //Dashboard tabs like Invest, Home, My Wealth, Statements etc.
    return {
      web: `//div[text()="${tabName}"]`,
      app: `//*[@text="${tabName}"]`
    };
  }

  notifications = { web: '//img[contains(@src, "menu/notifications-unread")]' };

  wealthCalenderHeader = { web: '(//*[text()="Wealth Calendar"])[3]' };

  notificationsHeaders = { Web: '(//*[text()="Notifications"])[2]' };

  investNowHeader = { web: '(//*[text()="Select family member"])[2]' };

  withdrawHeader = { web: '(//*[text()="Withdraw" or contains(text(),"Select family member")])[2]' };

  viewInvestmentCalender = { web: '//div[@class="cursor-pointer"]//*[text()="View"]' };

  manageExternalSIPs = { web: '//div[@class="cursor-pointer"]//*[text()="Manage"]' };

  investNowButton = { web: '//div[contains(@class,"dashboard-invest-withdraw-btn")]//*[contains(text(),"Invest ")]' };

  wealthCalenderNavigationButton = { web: '//div[contains(@class, "wealth-calendar")]//span[text()="chevron_right"]' };

  backButton = { web: '//i[contains(@class,"back-button")]' };

}

module.exports = new DashboardObjects();
