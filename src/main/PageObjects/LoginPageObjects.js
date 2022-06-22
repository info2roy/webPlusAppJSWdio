class LoginPageObjects {
  loginCredentialsTextAndroid = '//*[@class="android.widget.EditText" and @package="com.scripbox.takecharge"]';

  userIdField = { web: '#test-email-input', androidapp: this.loginCredentialsTextAndroid };

  continueOrNextButton = { web: '#test-login-next-button', androidapp: "//*[@text='NEXT']" };

  firstLoginPageHeader = { web: '//label[@text=" Login or create a new account "]', androidapp: "//*[@text='Login / Signup']" };

  emailField = { web: 'input#user_email', androidapp: this.loginCredentialsTextAndroid };

  passwordField = { web: 'input#user_password', androidapp: this.loginCredentialsTextAndroid };

  continueLoginButton = { web: 'button#test-signup-next-button', androidapp: "//*[@text='CONTINUE']" };

  startExploring = { androidapp: "//*[@text='Start exploring']" };

  scripBoxExclusiveBenifits = { androidapp: "//*[@text='Scripbox exclusive benefits']" };
}

module.exports = new LoginPageObjects();
