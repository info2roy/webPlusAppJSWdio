Feature: Scripbox Dashboard -> My Wealth -> Mutual Funds -> Long Term Wealth -> Invest more

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "ANDROMEDA" for "test_email+d98c92961d@scripbox.io"

  Scenario Outline: As a logged in user, I am able to schedule "Long Term Wealth" investment in mutual funds via Every month (SIP) for My Wealth -> Mutual Funds -> Long Term Wealth -> Invest more
    When I navigate to "My Wealth" from Dashboard
    When I click on "Mutual Funds"
    When I validate header "Insights"
    When I validate header "Plans"
    When I validate header "Funds"
    When I click on "Plans"
    When I click on "Long Term Wealth"
    When I validate header "Investment Growth"
    When I click on "Invest more"
    When I validate header "I want to invest"
    When I select radio option <SIPFrequency>
    When I enter data for investment-amount with value <SIPAmount>
    When I click on "See Recommended Funds"
    When I validate funds present
    When I validate funds total to be equal to <SIPAmount>
    When I click on "Next"
    When I validate investment header "I would like to invest" containing <SIPAmount>, <SIPFrequency> and Blank
    When I validate header "Automated transfer from bank account"
    When I validate header "Pay now using Net Banking or UPI"
    When I validate button "1-Click Invest"
    When I validate button "Make Payment Now"
    When I click on "1-Click Invest"
    When I validate investment header "I would like to invest" containing <SIPAmount>, <SIPFrequency> and 84
    When I enter data for duration with value <SIPDuration>
    When I validate investment header "I would like to invest" containing <SIPAmount>, <SIPFrequency> and <SIPDuration>
    # When I select start date <SIPStartDate>
    When I set yearly sip increase percent to <SIPIncreasePercentPerYear>
    When I click on "Confirm"
    # Then I validate header "Investment scheduled successfully"
    # Then I click on "View investments"
    # Then I validate section "SIP(s) and STP(s)" to contain <mutualFundPortfolio> SIP with <SIPAmount>
    # Then I validate section "Monthly Summary -> Upcoming" to contain <mutualFundPortfolio> "Investment - Every Month" with <SIPAmount>
    Then I go back to the dashboard page
    Examples:
      | SIPFrequency | SIPAmount | SIPDuration | SIPStartDate | SIPIncreasePercentPerYear |
      | Every month (SIP)  |  12000 | 60 | T+7 | 7 |

  Scenario Outline: As a logged in user, I am able to do immediate "Long Term Wealth" investment in mutual funds via Every month (SIP) for My Wealth -> Mutual Funds -> Long Term Wealth -> Invest more
    When I go back to the dashboard page
    When I navigate to "My Wealth" from Dashboard
    When I click on "Mutual Funds"
    When I validate header "Insights"
    When I validate header "Plans"
    When I validate header "Funds"
    When I click on "Plans"
    When I click on "Long Term Wealth"
    When I validate header "Investment Growth"
    When I click on "Invest more"
    When I validate header "I want to invest"
    When I select radio option <SIPFrequency>
    When I enter data for investment-amount with value <SIPAmount>
    When I click on "See Recommended Funds"
    When I validate funds present
    When I validate funds total to be equal to <SIPAmount> 
    When I click on "Next"
    When I validate investment header "I would like to invest" containing <SIPAmount>, <SIPFrequency> and Blank
    When I validate header "Automated transfer from bank account"
    When I validate header "Pay now using Net Banking or UPI"
    When I validate button "1-Click Invest"
    When I validate button "Make Payment Now"
    When I click on "Make Payment Now"
    When I validate investment header "I would like to invest" containing <SIPAmount>, <SIPFrequency> and 84
    When I enter data for duration with value <SIPDuration>
    When I validate investment header "I would like to invest" containing <SIPAmount>, <SIPFrequency> and <SIPDuration>
    #When I select start date <UpcomingSIPStartDate>
    When I set yearly sip increase percent to <SIPIncreasePercentPerYear>
    When I click on "Next"
    Then I validate header "I would like to invest using"
    Then I validate header "Net Banking"
    #Then I validate header "UPI"
    Then I go back to the dashboard page
    Examples:
      | SIPFrequency | SIPAmount | SIPDuration | UpcomingSIPStartDate | SIPIncreasePercentPerYear |
      | Every month (SIP)  | 15000 | 24 | 5thOfNextMonth | 5 |

  Scenario Outline: As a logged in user, I am able to schedule "Long Term Wealth" investment in mutual funds via One Time Investment for My Wealth -> Mutual Funds -> Long Term Wealth -> Invest more
    When I go back to the dashboard page
    When I navigate to "My Wealth" from Dashboard
    When I click on "Mutual Funds"
    When I validate header "Insights"
    When I validate header "Plans"
    When I validate header "Funds"
    When I click on "Plans"
    When I click on "Long Term Wealth"
    When I validate header "Investment Growth"
    When I click on "Invest more"
    When I validate header "I want to invest"
    When I select radio option <SIPFrequency>
    When I enter data for investment-amount with value <oneTimeAmount>
    When I click on "See Recommended Funds"
    When I validate funds present
    When I validate funds total to be equal to <oneTimeAmount> 
    When I click on "Next"
    When I validate investment header "I would like to make a one-time investment" containing <oneTimeAmount>
    When I validate header "Automated transfer from bank account"
    When I validate header "Pay now using Net Banking or UPI"
    When I validate button "1-Click Invest"
    When I validate button "Make Payment Now"
    When I click on "1-Click Invest"
    When I validate investment header "I would like to invest" containing <oneTimeAmount>, <SIPFrequency> and Blank
    #When I select investment date <investmentDate>
    When I click on "Confirm"
    # Then I validate header "Investment scheduled successfully"
    # When I click on "View investments"
    # Then I validate section "Monthly Summary -> Upcoming" to contain <mutualFundPortfolio> "Investment - One Time" with <oneTimeAmount>
    Then I go back to the dashboard page
    Examples:
      | SIPFrequency | oneTimeAmount | investmentDate |
      | One time  | 20000 | 1stOfNextMonth |

  Scenario Outline: As a logged in user, I am able to do immediate "Long Term Wealth" investment in mutual funds via One Time Investment for My Wealth -> Mutual Funds -> Long Term Wealth -> Invest more
    When I go back to the dashboard page
    When I navigate to "My Wealth" from Dashboard
    When I click on "Mutual Funds"
    When I validate header "Insights"
    When I validate header "Plans"
    When I validate header "Funds"
    When I click on "Plans"
    When I click on "Long Term Wealth"
    When I validate header "Investment Growth"
    When I click on "Invest more"
    When I validate header "I want to invest"
    When I select radio option <SIPFrequency>
    When I enter data for investment-amount with value <oneTimeAmount>
    When I click on "See Recommended Funds"
    When I validate funds present
    When I validate funds total to be equal to <oneTimeAmount> 
    When I click on "Next"
    When I validate investment header "I would like to make a one-time investment" containing <oneTimeAmount>
    When I validate header "Automated transfer from bank account"
    When I validate header "Pay now using Net Banking or UPI"
    When I validate button "1-Click Invest"
    When I validate button "Make Payment Now"
    When I click on "Make Payment Now"
    Then I validate header "I would like to invest using"
    Then I validate header "Net Banking"
    #Then I validate header "UPI"
    Then I go back to the dashboard page
    Examples:
      | SIPFrequency | oneTimeAmount |
      | One time  | 30000 |