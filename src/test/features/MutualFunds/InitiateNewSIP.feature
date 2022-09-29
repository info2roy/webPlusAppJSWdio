Feature: Scripbox Investment for monthly SIP

    @DoNotExecute
    Scenario: As a Scripbox user, I am logged in
        Given I login to Scripbox in "ANDROMEDA" for "user180756"

    # @DoNotExecute
    # Scenario Outline: As a logged in user, I want to search a new fund to initiate SIP
    #     When I click on "Invest"
    #     And I click on "Mutual Funds"
    #     And I search mutual fund <fundName>
    #     Then I perform pick fund for first available fund
    #     Examples:
    #         | fundName     |
    #         | Parag Parikh |

    # @DoNotExecute
    # Scenario Outline: As a logged in user, I want enter SIP details to initiate monthly SIP
    #     When I select radio option <SIPFrequency>
    #     And I enter SIP fund <SIPAmount> and <SIPDuration>
    #     When I select date <StartMonth>
    #     And I select first date of next month
    #     #     Then I click on "Confirm SIP of "
    #     Examples:
    #         | SIPFrequency | SIPAmount | SIPDuration | StartMonth |
    #         | Monthly SIP  | 2000      | 20          | Mar, 2018     |