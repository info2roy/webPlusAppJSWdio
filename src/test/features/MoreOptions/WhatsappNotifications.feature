Feature: Scripbox Whatsapp Notifications Page

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "STAGING" for "user189182"

  Scenario: As a logged in user, I can view Whatsapp Notifications Page
    Given I am on the dashboard page
    When I open the more options
    When I select option "Whatsapp Notifications"
    Then I should see Whatsapp Notifications Page loaded

  Scenario: On the Whatsapp Notifications page, I can update the controls one at a time
    Then I can update whatsapp notifications control