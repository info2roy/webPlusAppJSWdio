Feature: Feature to check basic functionalities of Dashboard page

    Scenario: As a user, I can log into the scripbox via home page
        Given I login to Scripbox in "ANDROMEDA" for "user189182"
        When I am on the dashboard page

    Scenario: I navigate to Investment Calender page
        Then I navigate to "Investment Calender" from Dashboard
        And I navigate back to Dashboard

    Scenario: I navigate to Wealth Calender page
        Then I navigate to "Wealth Calender" from Dashboard
        And I navigate back to Dashboard

    Scenario: I navigate to Withdraw page
        Then I navigate to "Withdraw" from Dashboard
        And I navigate back to Dashboard

    Scenario: I navigate to Invest now page
        Then I navigate to "Invest Now" from Dashboard
        And I navigate back to Dashboard

    Scenario: I navigate to Notifications page
        Then I navigate to "Notifications" from Dashboard 
        And I navigate back to Dashboard 