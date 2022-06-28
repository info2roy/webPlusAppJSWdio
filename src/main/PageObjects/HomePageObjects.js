class HomePageObjects {
  menuButton = { web: '//button[@data-action="menu hamburger"]' };

  loginButton = { web: 'a[data-action="menu login"]', androidapp: '//*[@text="Login"]' };

  signupButton = { web: 'a[data-action="menu signup"]' };

  moreOptions = { androidapp: '//*[contains(@content-desc,"More")]' };
}

module.exports = new HomePageObjects();
