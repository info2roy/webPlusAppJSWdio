Feature: Scripbox MyWealth: Add a Government Scheme

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "MYSCRIPBOX38" for "user180756"

  Scenario Outline: As a logged in user, I am able to add a Government Scheme to "My Wealth"
  Given I am on the MyWealth Page
  When I navigate to the MyWealth tab "Investments"
  When I navigate to the MyWealth Investments type "Govt. Schemes"
  When I click on "Add Govt. Scheme" button
  When I select a family member "Investor 156012" for Govt Schemes