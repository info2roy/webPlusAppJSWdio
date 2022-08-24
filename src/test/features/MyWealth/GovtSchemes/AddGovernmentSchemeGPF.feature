Feature: Scripbox MyWealth: Add a Government Scheme

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "MYSCRIPBOX" for "user123473"

  Scenario: As a logged in user, I can navigate to Government Schemes page
    Given I navigate to the MyWealth "Investments" type "Govt. Schemes"

  Scenario Outline: From the Government Schemes Page, I can invest in "General Provident Fund"
    When I select Govt Scheme <govtScheme> for family member "Investor 122497"
    When I set amount as <amount> for Govt Scheme <govtScheme>
    When I go back to previous page
    Then Total invested amount should get updated
    Examples:
      | govtScheme | amount |
      | General Provident Fund | 20000 |
      | General Provident Fund | 30000 |
      | General Provident Fund | 15000 |

  Scenario Outline: I delete the investment and logout
    When I select Govt Scheme <govtScheme> tile
    When I delete Govt Scheme 
    Then I go back to the dashboard page
    Then I logout of Scripbox
    Examples:
      | govtScheme |
      | General Provident Fund |