Feature: Scripbox MyWealth: Add a Government Scheme

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "MYSCRIPBOX38" for "user180756"

  Scenario Outline: As a logged in user, I am able to add a Government Scheme "Senior Citizen Saving Scheme" to "My Wealth"
    Given I navigate to the MyWealth "Investments" type "Govt. Schemes"
    When I select Govt Scheme <govtScheme> for family member "Investor 156012"
    When I set amount as <amount> for Govt Scheme <govtScheme>
    When I go back to previous page
    Then Total invested amount should get updated
    Then I go back to the dashboard page
    Examples:
      | govtScheme | amount |
      | Senior Citizen Saving Scheme | 20000 |
      | Senior Citizen Saving Scheme | 30000 |
      | Senior Citizen Saving Scheme | 15000 |