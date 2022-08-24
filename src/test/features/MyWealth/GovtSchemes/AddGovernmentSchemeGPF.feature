Feature: Scripbox MyWealth: Add a Government Scheme "General Provident Fund"

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "MYSCRIPBOX" for "user123473"

  Scenario Outline: As a logged in user, I am able to add a Government Scheme "General Provident Fund" to "My Wealth"
    Given I navigate to the MyWealth "Investments" type "Govt. Schemes"
    When I select Govt Scheme "General Provident Fund" for family member "Investor 122497"
    When I set amount as <amount> for Govt Scheme "General Provident Fund"
    When I go back to previous page
    Then Total invested amount should get updated
    Then I go back to the dashboard page
    Examples:
      | amount |
      | 20000 |
      | 30000 |
      | 15000 |

  Scenario Outline: I delete the investment and logout
    Given I navigate to the MyWealth "Investments" type "Govt. Schemes"
    When I select Govt Scheme "General Provident Fund" tile
    When I delete Govt Scheme 
    Then I go back to the dashboard page

  Scenario: As a logged in user, I can navigate to Government Schemes page
    Given I navigate to the MyWealth "Investments" type "Govt. Schemes"

  Scenario Outline: From the Government Schemes Page, I can invest in "General Provident Fund"
    When I select Govt Scheme "General Provident Fund" for family member "Investor 122497"
    When I set amount as <amount> for Govt Scheme "General Provident Fund"
    When I go back to previous page
    Then Total invested amount should get updated
    Examples:
      | amount |
      | 20000 |
      | 30000 |
      | 15000 |

  Scenario Outline: I delete the investment and logout
    When I select Govt Scheme "General Provident Fund" tile
    When I delete Govt Scheme 
    Then I go back to the dashboard page
    Then I logout of Scripbox