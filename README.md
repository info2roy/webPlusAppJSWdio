# 1 Introduction
This is test framework for QA automation written in Javascript using webdriver.io and cucumber framework.

# 2 Setup Steps
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

# 3 How To Run Tests
## 3.1 Run test for Responsive Web
./node_modules/.bin/wdio wdio.resposive.conf.js
## 3.2 Run test for Android App
./node_modules/.bin/wdio wdio.android.conf.js

# How to Contribute?
This section explain how is this test framework structured. The same approach as below should be followed for adding new test features and scenarios.

## *.feature
The cucumber feature file which has list of scenarios and list of steps for each scenario.
For reference see https://cucumber.io/docs/cucumber/  
This is more of english like description of test using Gherkin keywords Given, When, Then, And, But, Scenario, Scenario outline, Feature etc.

For example, look src/test/features/LoginViaHomepage.feature.

## *Steps.js
Each step in *.feature file needs to have corresponding step definitions. Each such file has pattern *Steps.js. 
For example, the filename for Login feature should be LoginSteps.js. Refer src/test/stepDefinitions/LoginSteps.js for more information.

## *Functionality.js
The high level functionalities for the step definitions are defined in files with pattern *Functionality.js.
For example, the filename for Login feature should be LoginFunctionality,js. Refer src/main/Functionalities/LoginFunctionality.js for more information.
An example for high level functionality is loginWithUsernameAndPassword. This is high level functionality for the filling login form on the second login page. It involves three steps like below  
1) Enter username  
2) Enter password  
3) Click Continue button  
Each of these atomic steps are defined in *Page.js as explained in next subsection.

## *Page.js
The atomic level operations on different page elements are defined in *Page.js. 
Examples of atomic level operations are given below  
1) Enter value in TextField or PasswordField  
2) Click a button or any element  
3) Select a radio button or Select element  
4) Submit form  
5) Any other UI element operations  

For example, in the case of login flow, the filename should be LoginPage.js. For reference see the file at
src/main/Pages/LoginPage.js.

This file do the atomic level operations using functions inside Utils.js file (explain next) like setInputField, click
element, elementIsDisplayed etc.

## Utils.js
This file is the utilities file for doing basic atomic operations on the UI elements on the pages and also other utilities.
Examples of Utils functions are given below.
1) setInputField => Used to set an input text box or password box  
2) clickElement => Used to click an element or button  
3) elementIsDisplayed => Wait until an element is displayed  
4) uploadFile => Upload using an input filebox  
5) scrollUntilTextIntoView => Scroll the page until a specific text comes into the view  

## *Objects.js

This file contains low level selectors for each of the UI element inside the pages.

