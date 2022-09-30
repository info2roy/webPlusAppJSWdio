Feature: Scripbox Whatsapp Notifications Page

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "ANDROMEDA" for "test_email+9108fa0821@scripbox.io"

  Scenario: As a logged in user, I can view Whatsapp Notifications Page
    Given I am on the dashboard page
    When I open the more options
    When I navigate to "Whatsapp Notifications" Page from More Options Page

  Scenario: On the Whatsapp Notifications page, I can update the controls one at a time
    Then I can update whatsapp notifications control