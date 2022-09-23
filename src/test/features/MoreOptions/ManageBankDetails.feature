Feature: As customer I wish to update my account details

  Scenario: As a Scripbox user I login  and try to update my user name
    Given I login to Scripbox in "MOCKAPI" for "user189182"

  Scenario: As a logged in user I wish to update my Bank details
    When I open the more options
    When I navigate to "Account and Family Information" Page from More Options Page
    Then I edit "bank"
    And I update changes
    And I should see "Bank Account change has been submitted" success message
    And I go back to the dashboard page

  Scenario: As a logged in user I wish to update my nominee
    When I open the more options
    When I navigate to "Account and Family Information" Page from More Options Page
    Then I edit "nominee"
    And I update changes
    And I should see "Nominee change has been submitted" success message
    And I go back to the dashboard page