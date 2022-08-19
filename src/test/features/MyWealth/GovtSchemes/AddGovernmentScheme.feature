Feature: Scripbox MyWealth: Add a Government Scheme

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "UAT38" for "user180756"

  Scenario Outline: As a logged in user, I am able to add a Government Scheme to "My Wealth"
  Given I am on the Investment Page
  When I navigate to the investment tab "Mutual Funds"