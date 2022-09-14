Feature: Scripbox Investment for monthly SIP

    @smoke
    Scenario: As a Scripbox user, I am logged in
        Given I login to Scripbox in "ANDROMEDA" for "user180756"

    @smoke
    Scenario Outline: As a logged in user, I want to search a new fund and initiate SIP
        Given I click on "Invest"
        When I click on "Mutual Funds"
        When I search mutual fund <fundName>
        When I perform pick fund for first available fund
        Examples:
            | fundName     |
            | Parag Parikh |