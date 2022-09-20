Feature: Scripbox Refer a Friend Page

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "MOCKAPI" for "user189182"

  Scenario: As a logged in user, I can view Refer a friend Page
    Given I am on the dashboard page
    When I open the more options
    When I navigate to "Refer a Friend" Page from More Options Page

    