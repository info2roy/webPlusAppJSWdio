Feature: Scripbox Investment in Mutual Fund Goals

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "UAT38" for "user189182"

  Scenario Outline: As a logged in user, I am able to invest in goal "Retire Confident"
    Given I am on the Investment Page
    Given I navigate to the investment tab "Mutual Funds"