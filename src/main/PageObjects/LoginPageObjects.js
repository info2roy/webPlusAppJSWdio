class LoginPageObjects {

    scripboxLoginImage = '.desktop-logo';
    email = '#email';
    password = '.form-input#password';
    loginButton = '//button[text()="Login"]';

    // Android Objects
    
    loginCredentialsText_android = '//*[@class="android.widget.EditText" and @package="com.scripbox.takecharge"]'
    loginSignupButton_android = "//*[@text='Login or Signup']"
    nextButtonLoginPage_android = "//*[@text='NEXT']"
    continueButton_android = "//*[@text='CONTINUE']"
    loginSignUpHeader_android = "//*[@text='Login / Signup']"




    
    }

module.exports = new LoginPageObjects()