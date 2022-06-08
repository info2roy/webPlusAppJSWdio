Feature: Scripbox Login and update of profile picture

    Background: As a Scripbox user, I am logged in

        Given I am on the scripbox home page
        When I click on login tab
        When I login with username
        When I login to scripbox with username and password
        Then I should see dashboard page loaded

    Scenario: As a logged in user I am able to open Personal Information Page

        Given I open the profile dropdown
        When I select personal information
        When I click on the Update Picture button
        When I select a picture file to update
        Then The picture is uploaded successfully
