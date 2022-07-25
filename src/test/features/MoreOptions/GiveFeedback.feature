Feature: Scripbox Give Feedback Page

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "STAGING" for "user189182"

  Scenario: As a logged in user, I can view Give Feedbank Page
    Given I am on the dashboard page
    When I open the more options
    When I select option "Give Feedback"
    Then I should see "Give Feedback" Page loaded

    