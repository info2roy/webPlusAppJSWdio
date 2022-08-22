Feature: Scripbox MyWealth: Add a Government Scheme

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "MYSCRIPBOX38" for "user180756"

  Scenario Outline: As a logged in user, I am able to add a Government Scheme to "My Wealth"
    Given I navigate to the MyWealth "Investments" type "Govt. Schemes"
    When I select Govt Scheme "Employee Provident Fund" for family member "Investor 156012"
    When I add amount as 10000 for Govt Scheme "Employee Provident Fund"