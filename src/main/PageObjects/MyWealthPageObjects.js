class MyWealthPageObjects {
  // Web locators

  // Android locators
  wisdomPageFirstBlog = { androidapp: "//*[@text='BLOG']" };

  myWealthButton = { androidapp: "//*[@text='My Wealth']" };

  investmentTabMyWealth = { androidapp: "//*[@text='Investments']" };

  insuranceTabMyWealth = { androidapp: "//*[@text='Insurance']" };

  investmentStrategyTabInBlogs = { androidapp: "//*[@text='Investment Strategy']" };

  investmentPageBlogSubscribe = { androidapp: "//*[@text='Subscribe']" };
}

module.exports = new MyWealthPageObjects();
