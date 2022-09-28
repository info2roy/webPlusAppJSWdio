Feature: Scripbox Dashboard -> Invest footer button -> Scripbox recomended

    Scenario: As a Scripbox user, I am logged in
        Given I login to Scripbox in "ANDROMEDA" for "automation+1@sb.io"

    Scenario Outline: As a logged in user, I am able to add scripbox recomended mutual fund for SIP
        When I navigate to "Invest" from Dashboard
        And I click on "Mutual Funds"
        And I click on "Add new plan"
        And I validate header "Explore funds"
        And I validate header "Mutual funds"
        And I click on "SCRIPBOX RECOMMENDED"
        And I validate header "Choose your fund"
        And I validate recomended funds present  //*[@id="alcFundContainer"]//div[contains(@class,"scard-container")]
        And I click on "Pick fund"
        And I validate header "Set up investment"
        And I select invest option <SIPFrequency>
        And I enter SIP details <SIPAmount>
        And I enter SIP details <SIPDuration>
        And I select start date <SIPStartDate>
        Then Then I click on "Confirm SIP of "
        And I should see message "Investment scheduled successfully"
        Examples:
            | SIPFrequency | SIPAmount | SIPDuration |
            | Monthly SIP  | 2000      | 20          |

    Scenario Outline: As a logged in user, I am able to add scripbox recomended mutual fund for One-time-investement
        When I navigate to "Invest" from Dashboard
        And I click on "Mutual Funds"
        And I click on "Add new plan"
        And I validate header "Explore funds"
        And I validate header "Mutual funds"
        And I click on "SCRIPBOX RECOMMENDED"
        And I validate header "Choose your fund"
        And I validate recomended funds present  //*[@id="alcFundContainer"]//div[contains(@class,"scard-container")]
        And I click on "Pick fund"
        And I validate header "Set up investment"
        And I select invest option <SIPFrequency>
        And I enter SIP details <SIPAmount>
        Then Then I click on "Pay "
        And I validate header "I would like to invest using"
        And I validate header "Net Banking"
        And I validate header "UPI"
        Examples:
            | SIPFrequency | SIPAmount | SIPDuration |
            | One time     | 2000      | 20          |

