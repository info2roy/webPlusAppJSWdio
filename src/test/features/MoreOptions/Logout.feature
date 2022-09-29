Feature: Scripbox Logout Page

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "ANDROMEDA" for "test_email+9108fa0821@scripbox.io"

  Scenario: As a logged in user, I can Logout
    Given I am on the dashboard page
    When I open the more options
    When I navigate to "Logout" Page from More Options Page

    