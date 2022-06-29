# 1 Introduction
This is test framework for QA automation written in Javascript using webdriver.io (https://webdriver.io/) and cucumber (https://cucumber.io) framework.

# 2 Setup Steps

The following are setup steps on Macbook Pro.

## 2.1 Install Java
Install Java version 11. The java version displayed should show java version 11 as below.

### java --version
openjdk 11.0.15 2022-04-19 LTS  
OpenJDK Runtime Environment Corretto-11.0.15.9.1 (build 11.0.15+9-LTS)  
OpenJDK 64-Bit Server VM Corretto-11.0.15.9.1 (build 11.0.15+9-LTS, mixed mode)

## 2.2 Install Node.js
Install Node.js LTS version v16.15.1 from https://nodejs.org/en/download/

## 2.3 Install Android Studio 
This is required for Android App automation testing.
Install Latest version of Android Studio from https://developer.android.com/studio

## 2.4 Set Environment variables

Put following lines to file ~/.bash_profile

export JAVA_HOME=$(/usr/libexec/java_home)  
export ANDROID_HOME=/Users/mahesh/Library/Android/sdk  
export PATH=$PATH:/usr/local/git/bin:/usr/local/bin:  
export PATH=$PATH:$ANDROID_HOME/platform-tools  
export PATH=$PATH:$ANDROID_HOME/tools  
export PATH=$PATH:$ANDROID_HOME/tools/bin  
export PATH=$PATH:$ANDROID_HOME/emulator  
export emulator=$ANDROID_HOME/emulator



# 3 Installation Steps

1) Run "source ~/.bash_profile"   
2) Run "npm install" from the project root directory.    

## 3.1 Verify Appium Installation
Appium is required for mobile app (Android and IOS) testing.

Verify appium installation for both android and ios by fixing errors for **necessary** dependencies in below command outputs.
1) appium-doctor --android  
2) appium-doctor --ios  

## 3.2 Install Appium Inspector
Appium Inspector is needed to inspect mobile app pages to find selectors for various UI elements.

Install latest version from https://github.com/appium/appium-inspector/releases.

# 3 How To Run Tests

Before running test follow below steps  
1) cd to the project root directory  
2) Run "source ~/.bash_profile"
3) Use the correct feature file(s) in file wdio.conf.js for key specs as given below  
  specs: [
    './src/test/features/LoginViaHomepage.feature'
  ],
4) Run the commands explained in below section for the specific platform

## 3.1 Run test for Responsive Web
./node_modules/.bin/wdio wdio.resposive.conf.js
## 3.2 Run test for Android App
./node_modules/.bin/wdio wdio.android.conf.js
## 3.3 Run test for Desktop Web
./node_modules/.bin/wdio wdio.desktop.conf.js


# 4 How to Contribute?
This section explain how is this test framework structured. The same approach as below should be followed for adding new test features and scenarios.

## 4.1 *.feature
The cucumber feature file which has list of scenarios and list of steps for each scenario.
For reference see https://cucumber.io/docs/cucumber/  
This is more of english like description of test using Gherkin keywords Given, When, Then, And, But, Scenario, Scenario outline, Feature etc.

For example, look src/test/features/LoginViaHomepage.feature.

## 4.2 *Steps.js
Each step in *.feature file needs to have corresponding step definitions. Each such file has pattern *Steps.js. 
For example, the filename for Login feature should be LoginSteps.js. Refer src/test/stepDefinitions/LoginSteps.js for more information.

## 4.3 *Functionality.js
The high level functionalities for the step definitions are defined in files with pattern *Functionality.js.
For example, the filename for Login feature should be LoginFunctionality.js. Refer src/main/Functionalities/LoginFunctionality.js for more information.  
An example for high level functionality is loginWithUsernameAndPassword. This is high level functionality for the filling login form on the second login page. It involves three steps like below  
1) Enter username  
2) Enter password  
3) Click Continue button  

Each of these atomic steps are defined in *Page.js as explained in next subsection.

## 4.4 *Page.js
The atomic level operations on different page elements are defined in *Page.js. 
Examples of atomic level operations are given below  
1) Enter value in TextField or PasswordField  
2) Click a button or any element  
3) Select a radio button or Select element  
4) Submit form  
5) Any other UI element operations  

For example, in the case of login flow, the filename should be LoginPage.js. For reference see the file at
src/main/Pages/LoginPage.js. The atomic operations defined for login flow are as follows  
1) enterEmail
2) enterPassword
3) clickContinueLoginButton  

This file does the atomic level operations using functions inside Utils.js file (explained next) like setInputField, click
element, elementIsDisplayed etc.

## 4.5 Utils.js
This file is the utilities file for doing basic atomic operations on the UI elements on the pages and also other utility functions.
Examples of Utils functions are given below.
1) setInputField => Used to set an input text box or password box  
2) clickElement => Used to click an element or button  
3) elementIsDisplayed => Wait until an element is displayed  
4) uploadFile => Upload using an input filebox  
5) scrollUntilTextIntoView => Scroll the page until a specific text comes into the view  

## 4.6 *Objects.js

This file contains low level selectors for each of the UI element inside the pages.
For example the file src/main/Objects/LoginObjects.js. The objects for login flow are given below.

1) emailField = { web: 'input#user_email', app: this.loginCredentialsTextAndroid };  
2) passwordField = { web: 'input#user_password', app: this.loginCredentialsTextAndroid };  
3) continueLoginButton = { web: 'button#test-signup-next-button', app: '//*[@text="CONTINUE"]' };  

The above objects are defined as javascript objects with following keys
1) web => The common key for both **mobileweb** and **desktop** platforms  
2) mobileweb => If key **mobileweb** is also present, then that will override value for **mobileweb** platform  
3) desktop => If key **desktop** is also present, then that will override value for **desktop** platform  
4) app => The common key for both **android** and **ios** app platforms  
5) android => If key **android** is also present, then that will override value for **android** platform  
6) ios => If key **ios** is also present, then that will override value for **ios** platform  

# 5 Learning
Udemy courses is a good start point learn about webdriver.io and appium. Some example udemy course are given below.
1) Selenium: https://www.udemy.com/course/webdriverio-e2e-test-framework-from-scratch/   
2) Selenium: https://www.udemy.com/course/webdriverio-tutorial-nodejs-javascript/  
3) Appium: https://www.udemy.com/course/appium-webdriverio-mobile-automation/  
4) Selenium: https://www.udemy.com/course/webdriverio-complete-beginner-course/  
