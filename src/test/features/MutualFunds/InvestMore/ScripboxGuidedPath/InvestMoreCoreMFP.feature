Feature: Scripbox Dashboard -> Invest more -> Mutual Funds -> Long Term Wealth

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "ANDROMEDA" for "test_email+d98c92961d@scripbox.io"

  Scenario Outline: As a logged in user, I am able to schedule "Long Term Wealth" investment in mutual funds via Every month (SIP)
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
    Then I validate header "Investment scheduled successfully"
    # Then I click on "View investments"
    # Then I validate section "SIP(s) and STP(s)" to contain <mutualFundPortfolio> SIP with <SIPAmount>
    # Then I validate section "Monthly Summary -> Upcoming" to contain <mutualFundPortfolio> "Investment - Every Month" with <SIPAmount>
    Then I go back to the dashboard page
    Examples:
      | SIPFrequency | SIPAmount | SIPDuration | SIPStartDate | SIPIncreasePercentPerYear |
      # | Every month (SIP)  | 30000 | Default | Default | Default |
      # | Every month (SIP)  | 1000 | Default | Default | 11 |
      | Every month (SIP)  | 3000 | Default | T+2 | 8 |
      # | Every month (SIP)  | 5000 | Default | 1stOfNextMonth | 9 |
      # | Every month (SIP)  | 9000 | 12 | T+3 | 15 |
      # | Every month (SIP)  |  12000 | 60 | T+7 | 7 |
      # | Every month (SIP)  | 15000 | 24 | 5thOfNextMonth | 5 |
      # | Every month (SIP)  | 20000 | 36 | 10thOfNextMonth | 0 |

  Scenario Outline: As a logged in user, I am able to schedule "Long Term Wealth" investment in mutual funds via Every month (SIP)
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
    When I enter data for investment-amount with value <SIPAmount>
    Then I see message <UiError> for <SIPAmount>
    # Then I should see error message "Amount must be greater than or equal to 1000" if amount is less than 1000
    Then I go back to the dashboard page
    Examples:
      | SIPFrequency | SIPAmount | UiError |
      | Every month (SIP)  | 1 | Amount must be greater than or equal to 1000 |
      | Every month (SIP)  | 900 | Amount must be greater than or equal to 1000 |

  Scenario Outline: As a logged in user, I am able to schedule "Long Term Wealth" investment in mutual funds via Every month (SIP)
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
    Then I see data-error <UiError> for <SIPAmount>
    Then I go back to the dashboard page
    Examples:
      | SIPFrequency | SIPAmount | SIPDuration | UiError |
      | Every month (SIP)  | 12000 | Blank | Duration can't be blank |
      | Every month (SIP)  | 10000 | 0 | Duration must be greater than or equal to 12 |
      | Every month (SIP)  | 11000 | -1 | Duration must be greater than or equal to 12 |
  
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
      # | Every month (SIP)  | 30000 | Default | Default | Default |
      # | Every month (SIP)  | 1000 | Default | Default | 11 |
      # | Every month (SIP)  | 3000 | Default | T+2 | 8 |
      # | Every month (SIP)  | 5000 | Default | 1stOfNextMonth | 9 |
      # | Every month (SIP)  | 9000 | 60 | T+3 | 15 |
      # | Every month (SIP)  | 12000 | 12 | T+7 | 7 |
      | Every month (SIP)  | 15000 | 24 | 5thOfNextMonth | 5 |
      # | Every month (SIP)  | 20000 | 36 | 10thOfNextMonth | 0 |

  Scenario Outline: As a logged in user, I am able to schedule "Long Term Wealth" investment in mutual funds via One Time Investment
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
    Then I validate header "Investment scheduled successfully"
    # When I click on "View investments"
    # Then I validate section "Monthly Summary -> Upcoming" to contain <mutualFundPortfolio> "Investment - One Time" with <oneTimeAmount>
    Then I go back to the dashboard page
    Examples:
      | SIPFrequency | oneTimeAmount | investmentDate |
      # | One time  | 30000 | Default |
      # | One time  | 15000 | T+2 |
      | One time  | 20000 | 1stOfNextMonth |
  
  Scenario Outline: As a logged in user, I am able to schedule "Long Term Wealth" investment in mutual funds via One Time Investment
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
    When I enter data for investment-amount with value <oneTimeAmount>
    Then I see message <UiError> for <oneTimeAmount>
    Then I go back to the dashboard page
    Examples:
      | SIPFrequency | oneTimeAmount | UiError |
      | One time  | 1 | Amount must be greater than or equal to 5000 |
      | One time  | 4999 | Amount must be greater than or equal to 5000 |


  Scenario Outline: As a logged in user, I am able to do immediate "Long Term Wealth" investment in mutual funds via One Time Investment
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