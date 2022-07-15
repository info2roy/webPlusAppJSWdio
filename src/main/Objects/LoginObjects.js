class LoginObjects {
  loginCredentialsTextAndroid = '//*[@class="android.widget.EditText" and @package="com.scripbox.takecharge"]';

  stagingUserIdField = { web: '.login-email' };

  stagingPasswordField = { web: '#password'};

  stagingLoginButton = { web: '(//button[@type="submit"])[2]'}

  userIdField = { web: '#test-email-input', app: this.loginCredentialsTextAndroid };

  continueOrNextButton = { web: '#test-login-next-button', app: '//*[@text="NEXT"]' };

  continueWithPasswordButton = { web: '//button[contains(text(),"Continue with password")]' };

  firstLoginPageHeader = { web: '//label[@class="signup-email-text"]',
    app: '//*[@text="Login / Signup"]' };

  enterOTPPageHeader = {
    web: '//span[text()="Enter OTP"]'
  };

  secondLoginPageHeader = { web: '//span[text()="Enter Password"]', app: '//*[@text="Enter Password"]' };

  emailField = { web: 'input#user_email', app: this.loginCredentialsTextAndroid };

  passwordField = { web: 'input#user_password', app: this.loginCredentialsTextAndroid };

  continueLoginButton = { web: 'button#test-signup-next-button', app: '//*[@text="CONTINUE"]' };

  startExploring = { app: '//*[@text="Start exploring"]' };

  scripBoxExclusiveBenifits = { app: '//*[@text="Scripbox exclusive benefits"]' };
}

module.exports = new LoginObjects();
