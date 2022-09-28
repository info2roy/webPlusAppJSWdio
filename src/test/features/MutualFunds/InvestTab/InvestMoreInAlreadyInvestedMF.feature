Feature: Scripbox Dashboard -> Invest tab -> Mutual Funds -> Go To the Bottom -> Invest more in a fund

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "ANDROMEDA" for "automation+1@sb.io"

  Scenario Outline: As a logged in user, I am able to schedule investment instruction via Dashboard Invest
    When I navigate to "Invest" from Dashboard
    And I click on "Mutual Funds"
    And I scroll to the end of the page
    And I click on "Invest more" for fund "Fund 1"