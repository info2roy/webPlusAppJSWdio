Feature: Scripbox Login from home page

  Scenario: As a user, I can log into the scripbox via home page
    Given I am on the scripbox home page
    When I click on menu button
    When I click on login option
    When I login with username
    When I login with username and password
    Then I should see dashboard page loaded

