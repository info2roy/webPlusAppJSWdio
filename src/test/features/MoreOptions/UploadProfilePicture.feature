Feature: Scripbox Login and update of profile picture

  Background: As a Scripbox user, I am logged in
    Given I am on the scripbox home page
    When I click on menu button
    When I click on login option
    When I login with username
    When I click on continue with password
    When I login with username and password
    Then I should see dashboard page loaded

  Scenario: As a logged in user I am able to open Personal Information Page
    When I open the more options
    When I select personal information
    When I update the profile picture
    Then The picture is uploaded successfully
