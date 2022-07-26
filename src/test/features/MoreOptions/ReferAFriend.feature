Feature: Scripbox Refer a Friend Page

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "STAGING" for "user189182"

  Scenario: As a logged in user, I can view Refer a friend Page
    Given I am on the dashboard page
    When I open the more options
    When I select option "Refer a Friend"
    Then I should see "Refer a Friend" Page loaded

    