Feature: Scripbox MyWealth: Add a Fixed Deposit

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "ANDROMEDA" for "mahesh.bale@scripbox.com"

  Scenario Outline: As a logged in user, I am able to add a Fixed Deposit to "My Wealth"
    Given I navigate to the MyWealth "Investments" type "Fixed Deposits"
    When I click on "Add existing Fixed Deposit" for family member "Investor 156012"