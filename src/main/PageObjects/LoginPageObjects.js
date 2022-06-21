class LoginPageObjects {
    loginCredentialsText_android = '//*[@class="android.widget.EditText" and @package="com.scripbox.takecharge"]'    

    //common object
    userIdField = {web: '#test-email-input', androidapp: this.loginCredentialsText_android};
    continueOrNextButton = {web: '#test-login-next-button', androidapp: "//*[@text='NEXT']"};
    firstLoginPageHeader = {web: '//label[@text=" Login or create a new account "]', androidapp: "//*[@text='Login / Signup']"};
    emailField = {web: "input#user_email", androidapp: this.loginCredentialsText_android};
    passwordField = {web: "input#user_password", androidapp: this.loginCredentialsText_android};
    continueLoginButton = {web: "button#test-signup-next-button", androidapp: "//*[@text='CONTINUE']"}
}

module.exports = new LoginPageObjects()