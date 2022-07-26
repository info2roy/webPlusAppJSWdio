Feature: Scripbox About Scripbox Page

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "STAGING" for "user189182"

  Scenario: As a logged in user, I can view About Scripbox Page
    Given I am on the dashboard page
    When I open the more options
    When I navigate to "About Scripbox" Page from More Options Page

  Scenario: From About Scripbox Page, I can navigate to Service Agreement Page
    When I navigate to "Service Agreement" Page from About Scripbox Page
    Then I go back to "About Scripbox" Page
  
  Scenario: From About Scripbox Page, I can navigate to Company Page
    When I navigate to "Company" Page from About Scripbox Page
    Then I logout of Scripbox
    