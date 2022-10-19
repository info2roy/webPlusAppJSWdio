Feature: Scripbox Dashboard -> Invest button -> Add new plan

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "MYSCRIPBOX" for "test_email+6d7d2ed4c9@scripbox.io"

  Scenario: As a logged in user, I am able to schedule investment instruction via Dashboard Invest
    When I navigate to "Invest" from Dashboard
    And I click on "Mutual Funds"
    And I validate header "Choose your plan"
    And I click on "Add new plan"
    And I validate header "Add new plan"
    And I click on "Long Term Wealth"
    And I validate header "Long Term Wealth"
    And I validate header "Scripbox Guided Path"
    And I click on "Invest"
    And I validate header "I want to invest"
    And I select radio option <SIPFrequency>
    And I validate header "Can I skip, stop or modify monthly SIPs?"
    And I validate header "Note: Assuming returns of"
    And I enter data for investment-amount with value <SIPAmount>
    And I click on "See Recommended Funds"
    And I validate header "Building the right portfolio"
    And I validate header "Analyzing the plan"
    And I validate header "Optimizing for growth and stability"
    And I validate header "Selecting the best funds in each asset class"
    And I validate header "Recommended Funds and Amounts"
    And I validate funds present     
    # //*[@class="section"]
    And I validate funds total to be equal to <SIPAmount>   
    # //*[@class="section"]//span//..//div
    And I click on "Next"
    And I validate investment header "I would like to invest" containing <SIPAmount>
    And I validate header "Automated transfer from bank account"
    And I validate header "Pay now using Net Banking or UPI"
    # And I validate button "1-Click Invest"
    # And I validate button "Make Payment Now"
    # And I click on "1-Click Invest"
    # Then I validate investment header "I would like to invest" containing <SIPAmount> and <SIPDuration>
    # And I enter SIP details <SIPDuration>
    # And I select start date <SIPStartDate>
    # And I click on "Confirm"
    # And I should see message "Investment scheduled successfully"
    Examples:
      | SIPFrequency      | Option            | SIPAmount | SIPDuration | SIPStartDate |
      | Every month (SIP) | investment-amount | 85000     | 50          | Nov, 2022    |

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
  When I select radio option <SIPFrequency>
  When I enter SIP details <SIPAmount>
  When I see Investment calculator container
  When I click on "See Recommended Funds"
  When I validate header "Recommended Funds and Amounts"
  When I validate funds present
  When I validate funds total to be equal to <SIPAmount>
  When I click on "Next"
#   When I validate investment header "I would like to invest" containing <SIPAmount>
#   When I validate header "Automated transfer from bank account"
#   When I validate header "Pay now using Net Banking or UPI"
#   When I validate button "1-Click Invest"
#   When I validate button "Make Payment Now"
#   When I click on "Make Payment Now"
  When I validate investment header "I would like to invest" containing <SIPAmount> and <SIPDuration>
  When I enter SIP details <SIPDuration>
  When I click on "Next"
  Then I validate header "I would like to invest using"
  Then I validate header "Net Banking"
  Then I validate header "UPI"
  Examples:
    | SIPFrequency   | SIPAmount | SIPDuration | SIPStartDate |
    | Emergency Fund | 2000      | 50          | Nov, 2022    |