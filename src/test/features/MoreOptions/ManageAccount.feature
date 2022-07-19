Feature: As customer I wish to update my account details

  Scenario: As a Scripbox user I login  and try to update my user name
    Given I am on the scripbox home page
    When I click on menu button
    And I click on login option
    And I login with username
    And I click on continue with password
    Then I login with username and password
    And I should see dashboard page loaded

  Scenario: As a logged in user I wish to update my User name
    When I open the more options
    And I select personal information
    Then I edit "user name"
    And I update changes

  Scenario: As a logged in user I wish to update my User email
    Then I edit "user email"
    And I update changes

  Scenario: As a logged in user I wish to update my User mobile number
    Then I edit "mobile number"
    And I update changes