Feature: Feature to check basic navigations on MF statements screen

    Scenario: As a user, I can log into the scripbox via home page
    Given I login to Scripbox in "MOCKAPI" for "user189182"

    Scenario: I navigate to MF statement section
        When I open the more options
        When I navigate to "Statements and Tax Reports" Page from More Options Page

    Scenario: I navigate to Investment history page
        Then I navigate to "Investment history" page

    Scenario: I navigate to Fund holdings page
        Then I navigate to "Fund holdings" page

    Scenario: I navigate to Tax Statements page
        Then I navigate to "Tax statements" page

    Scenario: I navigate to Capital Gains page
        Then I navigate to "Capital gains" page