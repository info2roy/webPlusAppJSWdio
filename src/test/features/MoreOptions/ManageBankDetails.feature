Feature: As customer I wish to update my account details

  Scenario: As a Scripbox user I login  and try to update my user name
    Given I login to Scripbox in "STAGING" for "user189182"

  Scenario: As a logged in user I wish to update my Bank details
    When I open the more options
    And I select option "Account and Family Information"
    Then I edit "bank"
    And I update changes
    And I click on return to home
    And I should see dashboard page loaded

  Scenario: As a logged in user I wish to update my nominee
    When I open the more options
    And I select option "Account and Family Information"
    Then I edit "nominee"
    And I update changes
    And I click on return to home
    And I should see dashboard page loaded