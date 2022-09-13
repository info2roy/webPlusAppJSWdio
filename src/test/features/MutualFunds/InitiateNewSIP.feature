Feature: Scripbox Investment for monthly SIP

    Scenario: As a Scripbox user, I am logged in
        Given I login to Scripbox in "ANDROMEDA" for "user180756"

    Scenario Outline: As a logged in user, I want to search a new fund and initiate SIP
        Given I click on "Invest"
        # When I navigate to the investment tab "Mutual Funds"
        # When I search mutual fund <fundName>
        Examples:
            | fundName     |
            | Parag Parikh |