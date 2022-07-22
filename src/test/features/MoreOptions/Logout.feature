Feature: Scripbox Logout Page

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "STAGING" for "user189182"

  Scenario: As a logged in user, I can Logout
    Given I am on the dashboard page
    When I open the more options
    When I select Logout
    Then I should see MyScripbox login page loaded

    