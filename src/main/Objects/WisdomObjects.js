class WisdomObjects {
  // Web locators

  // Android locators
  wisdomButton = { app: '//*[@text="Wisdom"]' };

  startCheckup = { app: '//*[@text="START CHECKUP" or @text="RESUME CHECKUP"]' };

  newsThatMatters = { app: '//*[@text="News that matters"]' };

  wisdomPageBlogSection = { app: '//*[@text="Blogs"]' };

  wisdomPageFirstBlog = { app: '//*[@text="BLOG"]' };

  wisdomPageBlogSubscriptionMessage = { app: '//*[@text="Practical wealth creation insights for you."]' };

  wisdomPageBlogInvestmentStrategy = { app: '//*[@text="Investment Strategy"]' };
}

module.exports = new WisdomObjects();
