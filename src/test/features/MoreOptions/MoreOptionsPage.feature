Feature: Scripbox More options page

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "ANDROMEDA" for "test_email+9108fa0821@scripbox.io"

  Scenario: As a logged in user, I can view More options page
    Given I am on the dashboard page
    When I open the more options
    Then I should see all of the more options
