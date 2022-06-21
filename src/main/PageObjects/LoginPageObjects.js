class LoginPageObjects {

    scripboxLoginImage = '.desktop-logo';
    loginButton = '//button[text()="Login"]';
    userId = '#test-email-input'; //phone no or email
    email = 'input#user_email' //email for the login form
    password = 'input#user_password'; //password for the login form
    continueLoginButton = '#test-login-next-button'; //Continue login after filling the userId(phone no or email)
    continueSigninButton = 'button#test-signup-next-button'; //Continue signin after filling the username and password


    // Android Objects
    
    loginCredentialsText_android = '//*[@class="android.widget.EditText" and @package="com.scripbox.takecharge"]'
    loginSignupButton_android = "//*[@text='Login or Signup']"
    nextButtonLoginPage_android = "//*[@text='NEXT']"
    continueButton_android = "//*[@text='CONTINUE']"
    loginSignUpHeader_android = "//*[@text='Login / Signup']"

    //common object
    userId = {web: '#test-email-input', androidapp: '//*[@class="android.widget.EditText" and @package="com.scripbox.takecharge"]'};
    continueOrNextButton = {web: '#test-login-next-button', androidapp: "//*[@text='NEXT']"};
    firstLoginPageHeader = {web: '//label[@text=" Login or create a new account "]', androidapp: "//*[@text='Login / Signup']"}
    
    }

module.exports = new LoginPageObjects()