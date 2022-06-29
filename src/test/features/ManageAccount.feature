Feature: As customer I wish to update my account details

  Scenario: As a Scripbox user I login  and try to update my user name
    Given I am on the scripbox home page
    When I click on login option
    When I login with username
    When I login with username and password
    Then I should see dashboard page loaded

  Scenario: As a logged in user I wish to update my User name
    When I open the profile dropdown
    And I select personal information
    Then I edit "user name"
    And I update changes

  Scenario: As a logged in user I wish to update my User email
    When I open the profile dropdown
    And I select personal information
    Then I edit "user email"
    And I update changes

  Scenario: As a logged in user I wish to update my User mobile number
    When I open the profile dropdown
    And I select personal information
    Then I edit "mobile number"
    And I update changes