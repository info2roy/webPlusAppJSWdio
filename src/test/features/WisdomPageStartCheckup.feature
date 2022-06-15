Feature: Scripbox Login and update of profile picture

    Background: As a Scripbox user, I am logged in

        Given I am on the scripbox home page
        When I click on menu button
        When I click on login tab
        When I login with username
        When I login to scripbox with username and password
        Then I should see dashboard page loaded

    Scenario: As a logged in user I navigate to Wisdom page to start checkup

        Given I navigate to Wisdom page
        When I scroll to see "START CHECKPUP" button
        