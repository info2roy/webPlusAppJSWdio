class HomeObjects {
  menuButton = { web: '//button[@data-action="menu hamburger"]' };

  loginButton = { web: 'a[data-action="menu login"]', app: '//*[@text="Login"]' };

  signupButton = { web: 'a[data-action="menu signup"]' };

  moreOptions = { app: '//*[contains(@content-desc,"More")]' };

  customerBanner = { app: '//*[@text="Already a Scripbox customer? "]' };
}

module.exports = new HomeObjects();
