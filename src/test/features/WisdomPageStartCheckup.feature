Feature: As customer I wish to start checkup

  Scenario: As a Scripbox user I am logged in
    Given I am on the scripbox home page
    When I click on menu button
    When I click on start exploring
    When I click on menu button
    When I click on login option  
    When I login with username
    When I click on continue with password
    When I login with username and password
    Then I should see dashboard page loaded

  Scenario: As a logged in user I navigate to Wisdom page to start checkup
    Given I navigate to Wisdom page
    When I click on a BLOG
    When I scroll to see START CHECKPUP button
