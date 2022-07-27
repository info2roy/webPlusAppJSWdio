Feature: As customer I wish to read articles related to My Wealth

  Scenario: As a Scripbox user I am logged in
    Given I am on the scripbox home page
    When I click on login option
    When I login with username
    When I click on continue with password
    When I login with password
    Then I should see dashboard page loaded

  Scenario Outline: As a logged in user I navigate to Wisdom page to start checkup
    Given I navigate to My Wealth page
    When I click on a BLOG
    When I want to navigate to Investment strategy tab
