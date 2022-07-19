Feature: Scripbox Notification Preferences Page

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "STAGING" for "user189182"

  Scenario: As a logged in user, I can view More options page
    Given I am on the dashboard page
    When I open the more options
    When I select Notification Preferences
    Then I should see Notification Preferences Page loaded