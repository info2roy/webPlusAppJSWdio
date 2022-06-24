class LoginPageObjects {
  loginCredentialsTextAndroid = '//*[@class="android.widget.EditText" and @package="com.scripbox.takecharge"]';

  userIdField = { web: '#test-email-input', app: this.loginCredentialsTextAndroid };

  continueOrNextButton = { web: '#test-login-next-button', app: '//*[@text="NEXT"]' };

  firstLoginPageHeader = { web: '//label[@class="signup-email-text"]',
    app: '//*[@text="Login / Signup"]' };

  emailField = { web: 'input#user_email', app: this.loginCredentialsTextAndroid };

  passwordField = { web: 'input#user_password', app: this.loginCredentialsTextAndroid };

  continueLoginButton = { web: 'button#test-signup-next-button', app: '//*[@text="CONTINUE"]' };

  startExploring = { app: '//*[@text="Start exploring"]' };

  scripBoxExclusiveBenifits = { app: '//*[@text="Scripbox exclusive benefits"]' };
}

module.exports = new LoginPageObjects();
