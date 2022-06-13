class LoginPageObjects {

    scripboxLoginImage = '.desktop-logo';
    email = '#email';
    password = '.form-input#password';
    loginButton = '//button[text()="Login"]';

    // Android Objects
    moreOptions = '//*[contains(@content-desc,"More")]'
    loginEmailText = '//*[@class="android.widget.EditText" and @package="com.scripbox.takecharge"]'
    


    
    }

module.exports = new LoginPageObjects()