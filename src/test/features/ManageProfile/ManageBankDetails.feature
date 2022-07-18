Feature: As customer I wish to update my account details

  Scenario: As a Scripbox user I login  and try to update my user name
    Given I am on the scripbox home page
    When I click on menu button
    And I click on login option
    And I login with username
    And I click on continue with password
    Then I login with username and password
    And I should see dashboard page loaded

  Scenario: As a logged in user I wish to update my Bank details
    When I open the profile dropdown
    And I select Account and Family Information
    Then I edit "bank"
    And I update changes
    And I click on return to home
    And I should see dashboard page loaded

  Scenario: As a logged in user I wish to update my nominee
    When I open the profile dropdown
    And I select Account and Family Information
    Then I edit "nominee"
    And I update changes
    And I click on return to home
    And I should see dashboard page loaded