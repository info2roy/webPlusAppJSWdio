Feature: Scripbox Dashboard -> Invest more -> Mutual Funds -> Long Term Wealth

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "ANDROMEDA" for "test_email+d98c92961d@scripbox.io"

  # Scenario Outline: As a logged in user, I am able to schedule "Long Term Wealth" investment in mutual funds via Every month (SIP)
  #   When I go back to the dashboard page
  #   When I click on "Invest more"
  #   When I validate header "Select financial product"
  #   When I click on "Mutual Funds"
  #   When I validate header "Add new plan"
  #   When I click on "Long Term Wealth"
  #   When I validate header "Scripbox Guided Path"
  #   When I click on "Invest"
  #   When I validate header "I want to invest"
  #   When I select radio option <SIPFrequency>
  #   When I enter field <AmountFieldId> with data <SIPAmount>
  #   # Then I should see error message "Amount must be greater than or equal to 1000" if amount is less than 1000
  #   When I click on "See Recommended Funds"
  #   When I validate funds present
  #   When I validate funds total to be equal to <SIPAmount>
  #   When I click on "Next"
  #   When I validate investment header "I would like to invest" containing <SIPAmount> and <SIPFrequency>
  #   When I validate header "Automated transfer from bank account"
  #   When I validate header "Pay now using Net Banking or UPI"
  #   When I validate button "1-Click Invest"
  #   When I validate button "Make Payment Now"
  #   When I click on "1-Click Invest"
  #   When I validate investment header "I would like to invest" containing <SIPAmount>, <SIPFrequency> and 84
  #   When I enter field duration with data <SIPDuration>
  #   When I validate investment header "I would like to invest" containing <SIPAmount>, <SIPFrequency> and <SIPDuration>
  #   # Then I should see error message "Duration can't be blank" if duration is blank
  #   # Then I should see error message "Duration must be greater than or equal to 1" if duration is less than 1
  #   # When I select start date <SIPStartDate>
  #   When I click on "Confirm"
  #   # # When I "Invest more" in <mutualFundPortfolio> with <SIPFrequency> for <SIPAmount> with <SIPDuration>; <SIPStartDate>; <SIPIncreasePercentPerYear>
  #   Then I should see message "Investment scheduled successfully"
  #   # Then I click on "View investments"
  #   # Then I validate section "SIP(s) and STP(s)" to contain <mutualFundPortfolio> SIP with <SIPAmount>
  #   # Then I validate section "Monthly Summary -> Upcoming" to contain <mutualFundPortfolio> "Investment - Every Month" with <SIPAmount>
  #   # Then I go back to the dashboard page
  #   Examples:
  #     | SIPFrequency | AmountFieldId | SIPAmount | SIPDuration | SIPStartDate | SIPIncreasePercentPerYear |
  #     # | Every month (SIP)  | investment-amount | 30000 | Default | Default | Default |
  #     # | Every month (SIP)  | investment-amount | 1000 | Default | Default | 11 |
  #     # | Every month (SIP)  | investment-amount | 3000 | Default | T+2 | 8 |
  #     # | Every month (SIP)  | investment-amount | 5000 | Default | 1stOfNextMonth | 9 |
  #     # | Every month (SIP)  | investment-amount | 9000 | 12 | T+3 | 15 |
  #     | Every month (SIP)  | investment-amount |  12000 | 60 | T+7 | 7 |
  #     # | Every month (SIP)  | investment-amount | 15000 | 24 | 5thOfNextMonth | 5 |
  #     # | Every month (SIP)  | investment-amount | 20000 | 36 | 10thOfNextMonth | 0 |
  #     # | Every month (SIP)  | investment-amount | 1 | Default | Default | Default |
  #     # | Every month (SIP)  | investment-amount | 900 | Default | Default | Default |
  #     # | Every month (SIP)  | investment-amount | 12000 |  | T+7 | 7 |
  #     # | Every month (SIP)  | investment-amount | 12000 | 0 | T+7 | 7 |
  #     # | Every month (SIP)  | investment-amount | 12000 | -1 | T+7 | 7 |

  Scenario Outline: As a logged in user, I am able to do immediate "Long Term Wealth" investment in mutual funds via Every month (SIP)
    When I go back to the dashboard page
    When I click on "Invest more"
    When I validate header "Select financial product"
    When I click on "Mutual Funds"
    When I validate header "Add new plan"
    When I click on "Long Term Wealth"
    When I validate header "Scripbox Guided Path"
    When I click on "Invest"
    When I validate header "I want to invest"
    When I select radio option <SIPFrequency>
    When I enter field investment-amount with data <SIPAmount>
    When I click on "See Recommended Funds"
    When I validate funds present
    When I validate funds total to be equal to <SIPAmount> 
    When I click on "Next"
    When I validate investment header "I would like to invest" containing <SIPAmount> and <SIPFrequency>
    When I validate header "Automated transfer from bank account"
    When I validate header "Pay now using Net Banking or UPI"
    When I validate button "1-Click Invest"
    When I validate button "Make Payment Now"
    When I click on "Make Payment Now"
    When I validate investment header "I would like to invest" containing <SIPAmount>, <SIPFrequency> and 84
    When I enter field duration with data <SIPDuration>
    When I validate investment header "I would like to invest" containing <SIPAmount>, <SIPFrequency> and <SIPDuration>
    #When I select start date <UpcomingSIPStartDate>
    When I click on "Next"
    Then I validate header "I would like to invest using"
    Then I validate header "Net Banking"
    #Then I validate header "UPI"
    Then I go back to the dashboard page
    Examples:
      | mutualFundPortfolio | SIPFrequency | SIPAmount | SIPDuration | UpcomingSIPStartDate | SIPIncreasePercentPerYear |
      # | Long Term Wealth | Every month (SIP)  | 30000 | Default | Default | Default |
      # | Long Term Wealth | Every month (SIP)  | 1000 | Default | Default | 11 |
      # | Long Term Wealth | Every month (SIP)  | 3000 | Default | T+2 | 8 |
      # | Long Term Wealth | Every month (SIP)  | 5000 | Default | 1stOfNextMonth | 9 |
      # | Long Term Wealth | Every month (SIP)  | 9000 | 60 | T+3 | 15 |
      # | Long Term Wealth | Every month (SIP)  | 12000 | 12 | T+7 | 7 |
      | Long Term Wealth | Every month (SIP)  | 15000 | 24 | 5thOfNextMonth | 5 |
      # | Long Term Wealth | Every month (SIP)  | 20000 | 36 | 10thOfNextMonth | 0 |

  # Scenario Outline: As a logged in user, I am able to schedule "Long Term Wealth" investment in mutual funds via One Time Investment
  #   When I go back to the dashboard page
  #   When I navigate to "Invest more" from Dashboard
  #   When I validate header "Select financial product"
  #   When I click on "Mutual Funds"
  #   When I validate header "Add new plan"
  #   When I select portfolio <mutualFundPortfolio>
  #   When I validate header "Scripbox Guided Path"
  #   When I click on "Invest"
  #   When I validate header "I want to invest"
  #   When I select radio option <SIPFrequency>
  #   When I enter SIP amount <oneTimeAmount>
  #   Then I should see error message "Amount must be greater than or equal to 1000" if amount is less than 1000
  #   When I click on "See Recommended Funds"
  #   When I validate funds present
  #   When I validate funds total to be equal to <oneTimeAmount> 
  #   When I click on "Next"
  #   When I validate investment header "I would like to make a one-time investment" containing <oneTimeAmount>
  #   When I validate header "Automated transfer from bank account"
  #   When I validate header "Pay now using Net Banking or UPI"
  #   When I validate button "1-Click Invest"
  #   When I validate button "Make Payment Now"
  #   When I click on "1-Click Invest"
  #   When I validate investment header "I would like to invest one time" containing <oneTimeAmount>
  #   When I select investment date <investmentDate>
  #   When I click on "Confirm"
  #   Then I should see message "Investment scheduled successfully"
  #   When I click on "View investments"
  #   Then I validate section "Monthly Summary -> Upcoming" to contain <mutualFundPortfolio> "Investment - One Time" with <oneTimeAmount>
  #   Then I go back to the dashboard page
  #   Examples:
  #     | mutualFundPortfolio | SIPFrequency | oneTimeAmount | investmentDate |
  #     # | Long Term Wealth | One time  | 30000 | Default |
  #     # | Long Term Wealth | One time  | 15000 | T+2 |
  #     | Long Term Wealth | One time  | 20000 | 1stOfNextMonth |
  #     # | Long Term Wealth | One time  | 1 | Default |
  #     # | Long Term Wealth | One time  | 999 | Default |

  # Scenario Outline: As a logged in user, I am able to do immediate "Long Term Wealth" investment in mutual funds via One Time Investment
  #   When I go back to the dashboard page
  #   When I navigate to "Invest more" from Dashboard
  #   When I validate header "Select financial product"
  #   When I click on "Mutual Funds"
  #   When I validate header "Add new plan"
  #   When I select portfolio <mutualFundPortfolio>
  #   When I validate header "Scripbox Guided Path"
  #   When I click on "Invest"
  #   When I validate header "I want to invest"
  #   When I select radio option <SIPFrequency>
  #   When I enter SIP amount <oneTimeAmount>
  #   When I click on "See Recommended Funds"
  #   When I validate funds present
  #   When I validate funds total to be equal to <oneTimeAmount> 
  #   When I click on "Next"
  #   When I validate investment header "I would like to make a one-time investment" containing <oneTimeAmount>
  #   When I validate header "Automated transfer from bank account"
  #   When I validate header "Pay now using Net Banking or UPI"
  #   When I validate button "1-Click Invest"
  #   When I validate button "Make Payment Now"
  #   When I click on "Make Payment Now"
  #   Then I validate header "I would like to invest using"
  #   Then I validate header "Net Banking"
  #   Then I validate header "UPI"
  #   Then I go back to the dashboard page
  #   Examples:
  #     | mutualFundPortfolio | SIPFrequency | oneTimeAmount |
  #     | Long Term Wealth | One time  | 30000 |