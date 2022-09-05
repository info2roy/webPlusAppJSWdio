class LoginObjects {
  loginCredentialsTextAndroid = '//*[@class="android.widget.EditText" and @package="com.scripbox.takecharge"]';

  loginPageBanner = { app: '//*[@text="All things good for your wealth, under one roof."]' };

  passwordPageBanner = { app: '//*[@text="Enter Password"] | //*[@text="Welcome back"]' };

  stagingUserIdField = { web: '.login-email' };

  stagingPasswordField = { web: '#password' };

  stagingLoginButton = { web: '(//button[@type="submit"])[2]' };

  userIdField = { web: '#test-email-input', app: this.loginCredentialsTextAndroid };

  continueOrNextButton = { web: '#test-login-next-button', app: '//*[@text="Login"]' };

  continueWithPasswordButton = { web: '//button[contains(text(),"Continue with password")]', app: '//*[@text="Continue with Password"]' };

  firstLoginPageHeader = { web: '//label[@class="signup-email-text"]',
    app: '//*[@text="Login / Signup"]' };

  enterOTPPageHeader = {
    web: '//span[text()="Enter OTP"]', app: '//*[@text="Enter OTP"]'
  };

  secondLoginPageHeader = { web: '//span[text()="Enter Password"]', app: '//*[@text="Enter Password"]' };

  emailField = { web: 'input#user_email', app: this.loginCredentialsTextAndroid };

  passwordField = { web: 'input#user_password', app: this.loginCredentialsTextAndroid };

  continueLoginButton = { web: 'button#test-signup-next-button', app: '//*[@text="Continue"]' };

  startExploring = { app: '//*[@text="Start exploring"]' };

  scripBoxExclusiveBenifits = { app: '//*[@text="Scripbox exclusive benefits"]' };

  loginYourAccountToContinueHeader = {
    web: '//label[contains(text(),"Login your account to continue")]'
  };

  otpField(index) {
    return {
      web: `//input[@id="user_otp${index + 1}"]`,
      app: `(//android.widget.EditText)[${index + 1}]`
    };
  }
}

module.exports = new LoginObjects();
