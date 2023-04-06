class LoginObjects {

  loginPageBanner = { web: '//*[@data-testid="img-login"]' };

  loginForm = { web: '//*[@data-testid="login-form"]' };

  loginEmailField = { web: '#outlined-adornment-email' };

  loginPasswordField = { web: '#outlined-adornment-password' };

  showPasswordCheckBox = { web: '//p[text()="Show Password"]//preceding-sibling::span//*[@data-testid="CheckBoxOutlineBlankIcon"]' };

  logInButton = { web: '//*[text()="Log In"]' };
}

module.exports = new LoginObjects();
