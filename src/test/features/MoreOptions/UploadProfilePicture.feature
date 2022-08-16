Feature: Scripbox Login and update of profile picture

  Background: As a Scripbox user, I am logged in
    Given I login to Scripbox in "STAGING" for "user189182"

  Scenario: As a logged in user I am able to open Personal Information Page
    When I open the more options
    When I navigate to "Personal Information" Page from More Options Page
    When I update the profile picture
    Then The picture is uploaded successfully
