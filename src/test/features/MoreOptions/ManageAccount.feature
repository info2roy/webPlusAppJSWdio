Feature: As customer I wish to update my account details

  Scenario: As a Scripbox user I login  and try to update my user name
    Given I login to Scripbox in "STAGING" for "user189182"

  Scenario: As a logged in user I wish to update my User name
    When I open the more options
    When I navigate to "Personal Information" Page from More Options Page
    Then I edit "user name"
    And I update changes

  Scenario: As a logged in user I wish to update my User email
    Then I edit "user email"
    And I update changes

  Scenario: As a logged in user I wish to update my User mobile number
    Then I edit "mobile number"
    And I update changes