Feature: Scripbox Give Feedback Page

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "MOCKAPI" for "user189182"

  Scenario: As a logged in user, I can view Give Feedbank Page
    Given I am on the dashboard page
    When I open the more options
    When I navigate to "Give Feedback" Page from More Options Page
    