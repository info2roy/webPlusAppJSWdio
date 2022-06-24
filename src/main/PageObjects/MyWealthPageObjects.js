class MyWealthPageObjects {
  // Web locators

  // Android locators
  wisdomPageFirstBlog = { app: '//*[@text=\'BLOG\']' };

  myWealthButton = { app: '//*[@text=\'My Wealth\']' };

  investmentTabMyWealth = { app: '//*[@text=\'Investments\']' };

  insuranceTabMyWealth = { app: '//*[@text=\'Insurance\']' };

  investmentStrategyTabInBlogs = { app: '//*[@text=\'Investment Strategy\']' };

  investmentPageBlogSubscribe = { app: '//*[@text=\'Subscribe\']' };
}

module.exports = new MyWealthPageObjects();
