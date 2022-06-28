class DashboardObjects {
  helloUser = { web: '//div[text()="HELLO"]', app: '//*[@text="HELLO"]' };

  moreButton = {
    web: '//div[text()="More"]',
    desktop: 'span.desktop-dropdown-icon',
    app: '//android.widget.TextView[@text="More"]',
  };

  personalInfoOption = {
    web: '//div[text()="Personal Information"]',
    desktop: 'span.test-personal-information',
    app: '//android.widget.TextView[@text="Personal information"]',
  };

  withdrawButton = { app: '//*[@text="Withdraw"]' };

  investMoreButton = { app: '//*[@text="Invest more"]' };
}

module.exports = new DashboardObjects();