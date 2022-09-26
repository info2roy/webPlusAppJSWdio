Feature: Scripbox Dashboard -> Invest footer button -> Add new plan

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "ANDROMEDA" for "automation+1@sb.io"

  Scenario Outline: As a logged in user, I am able to add new mutual fund plan using "1-Click Invest"
    When I navigate to "Invest" from Dashboard
    And I click on "Mutual Funds"
    And I click on "Add new plan"
    And I validate header "Add new plan"
    And I validate header "Mutual funds"
    And I click on "Emergency Fund"
    And I validate header "Emergency Fund"
    And I click on "Invest more"
    And I validate header "I want to invest"
    And I select invest option <SIPFrequency> funds withdrawl
    And I enter SIP details <SIPAmount>
    And I see Investment calculator container
    And I click on "See Recommended Funds"
    And I validate header "Recommended Funds and Amounts"
    And I validate funds present    //*[@class="section"]
    And I validate funds total to be equal to <SIPAmount>   //*[@class="section"]//span//..//div
    And I click on "Next"
    And I validate investment header "I would like to invest" containing <SIPAmount>
    And I validate header "Automated transfer from bank account"
    And I validate header "Pay now using Net Banking or UPI"
    And I validate button "1-Click Invest"
    And I validate button "Make Payment Now"
    And I click on "1-Click Invest"
    Then I validate investment header "I would like to invest" containing <SIPAmount> and <SIPDuration>
    And I enter SIP details <SIPDuration>
    And I select start date <SIPStartDate>
    And I click on "Confirm"
    And I should see message "Investment scheduled successfully"
    Examples:
      | SIPFrequency   | SIPAmount | SIPDuration | SIPStartDate |
      | Emergency Fund | 2000      | 50          | Nov, 2022    |

  Scenario Outline: As a logged in user, I am able to add new mutual fund plan using "Netbanking or UPI"
    When I navigate to "Invest" from Dashboard
    When I click on "Mutual Funds"
    When I click on "Add new plan"
    When I validate header "Add new plan"
    When I validate header "Mutual funds"
    When I click on "Emergency Fund"
    When I validate header "Emergency Fund"
    When I click on "Invest more"
    When I validate header "I want to invest"
    When I select invest option <SIPFrequency> funds withdrawl
    When I enter SIP details <SIPAmount>
    When I see Investment calculator container
    When I click on "See Recommended Funds"
    When I validate header "Recommended Funds and Amounts"
    When I validate funds present
    When I validate funds total to be equal to <SIPAmount>
    When I click on "Next"
    When I validate investment header "I would like to invest" containing <SIPAmount>
    When I validate header "Automated transfer from bank account"
    When I validate header "Pay now using Net Banking or UPI"
    When I validate button "1-Click Invest"
    When I validate button "Make Payment Now"
    When I click on "Make Payment Now"
    When I validate investment header "I would like to invest" containing <SIPAmount> and <SIPDuration>
    When I enter SIP details <SIPDuration>
    When I click on "Next"
    Then I validate header "I would like to invest using"
    Then I validate header "Net Banking"
    Then I validate header "UPI"
    Examples:
      | SIPFrequency   | SIPAmount | SIPDuration | SIPStartDate |
      | Emergency Fund | 2000      | 50          | Nov, 2022    |