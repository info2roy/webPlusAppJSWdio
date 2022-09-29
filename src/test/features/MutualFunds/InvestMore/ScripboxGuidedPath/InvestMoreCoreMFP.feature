Feature: Scripbox Dashboard -> Invest more -> Mutual Funds -> Core Mutual Fund Portfolio

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "ANDROMEDA" for "automation+1@sb.io"

  Scenario Outline: As a logged in user, I am able to schedule "Core Mutual Fund Portfolio" investment in mutual funds via Every month (SIP)
    When I go back to the dashboard page
    When I navigate to "Invest more" from Dashboard
    When I validate header "Select financial product"
    When I click on "Mutual Funds"
    When I validate header "Add new plan"
    When I select portfolio <mutualFundPortfolio>
    When I validate header "Scripbox Guided Path"
    When I click on "Invest"
    When I validate header "I want to invest"
    When I select invest option <SIPFrequency>
    When I enter SIP amount <SIPAmount>
    Then I should see error message "Amount must be greater than or equal to 1000" if amount is less than 1000
    When I click on "See Recommended Funds"
    When I validate funds present
    When I validate funds total to be equal to <SIPAmount> 
    When I click on "Next"
    When I validate investment header "I would like to invest" containing <SIPAmount>
    When I validate header "Automated transfer from bank account"
    When I validate header "Pay now using Net Banking or UPI"
    When I validate button "1-Click Invest"
    When I validate button "Make Payment Now"
    When I click on "1-Click Invest"
    When I validate investment header "I would like to invest" containing <SIPAmount> and <SIPDuration>
    When I enter SIP duration <SIPDuration>
    Then I should see error message "Duration can't be blank" if duration is blank
    Then I should see error message "Duration must be greater than or equal to 1" if duration is less than 1
    When I select start date <SIPStartDate>
    When I click on "Confirm"
    # When I "Invest more" in <mutualFundPortfolio> with <SIPFrequency> for <SIPAmount> with <SIPDuration>; <SIPStartDate>; <sipIncreasePercentPerYear>
    Then I should see message "Investment scheduled successfully"
    Then I click on "View investments"
    Then I validate section "SIP(s) and STP(s)" to contain <mutualFundPortfolio> SIP with <SIPAmount>
    Then I validate section "Monthly Summary -> Upcoming" to contain <mutualFundPortfolio> "Investment - Every Month" with <SIPAmount>
    Then I go back to the dashboard page
    Examples:
      | mutualFundPortfolio | SIPFrequency | SIPAmount | SIPDuration | SIPStartDate | sipIncreasePercentPerYear |
      # | Core Mutual Fund Portfolio | Every month (SIP)  | 30000 | Default | Default | Default |
      # | Core Mutual Fund Portfolio | Every month (SIP)  | 1000 | Default | Default | 11 |
      # | Core Mutual Fund Portfolio | Every month (SIP)  | 3000 | Default | T+2 | 8 |
      # | Core Mutual Fund Portfolio | Every month (SIP)  | 5000 | Default | 1stOfNextMonth | 9 |
      # | Core Mutual Fund Portfolio | Every month (SIP)  | 9000 | 60 | T+3 | 15 |
      | Core Mutual Fund Portfolio | Every month (SIP)  | 12000 | 12 | T+7 | 7 |
      # | Core Mutual Fund Portfolio | Every month (SIP)  | 15000 | 24 | 5thOfNextMonth | 5 |
      # | Core Mutual Fund Portfolio | Every month (SIP)  | 20000 | 36 | 10thOfNextMonth | 0 |
      # | Core Mutual Fund Portfolio | Every month (SIP)  | 1 | Default | Default | Default |
      | Core Mutual Fund Portfolio | Every month (SIP)  | 900 | Default | Default | Default |
      # | Core Mutual Fund Portfolio | Every month (SIP)  | 12000 |  | T+7 | 7 |
      # | Core Mutual Fund Portfolio | Every month (SIP)  | 12000 | 0 | T+7 | 7 |
      # | Core Mutual Fund Portfolio | Every month (SIP)  | 12000 | -1 | T+7 | 7 |

  Scenario Outline: As a logged in user, I am able to do immediate "Core Mutual Fund Portfolio" investment in mutual funds via Every month (SIP)
    When I go back to the dashboard page
    When I navigate to "Invest more" from Dashboard
    When I validate header "Select financial product"
    When I click on "Mutual Funds"
    When I validate header "Add new plan"
    When I select portfolio <mutualFundPortfolio>
    When I validate header "Scripbox Guided Path"
    When I click on "Invest"
    When I validate header "I want to invest"
    When I select invest option <SIPFrequency>
    When I enter SIP amount <SIPAmount>
    When I click on "See Recommended Funds"
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
    When I enter SIP duration <SIPDuration>
    When I select start date <UpcomingSIPStartDate>
    When I click on "Next"
    Then I validate header "I would like to invest using"
    Then I validate header "Net Banking"
    Then I validate header "UPI"
    Then I go back to the dashboard page
    Examples:
      | mutualFundPortfolio | SIPFrequency | SIPAmount | SIPDuration | UpcomingSIPStartDate | sipIncreasePercentPerYear |
      # | Core Mutual Fund Portfolio | Every month (SIP)  | 30000 | Default | Default | Default |
      # | Core Mutual Fund Portfolio | Every month (SIP)  | 1000 | Default | Default | 11 |
      # | Core Mutual Fund Portfolio | Every month (SIP)  | 3000 | Default | T+2 | 8 |
      # | Core Mutual Fund Portfolio | Every month (SIP)  | 5000 | Default | 1stOfNextMonth | 9 |
      # | Core Mutual Fund Portfolio | Every month (SIP)  | 9000 | 60 | T+3 | 15 |
      # | Core Mutual Fund Portfolio | Every month (SIP)  | 12000 | 12 | T+7 | 7 |
      | Core Mutual Fund Portfolio | Every month (SIP)  | 15000 | 24 | 5thOfNextMonth | 5 |
      # | Core Mutual Fund Portfolio | Every month (SIP)  | 20000 | 36 | 10thOfNextMonth | 0 |

  Scenario Outline: As a logged in user, I am able to schedule "Core Mutual Fund Portfolio" investment in mutual funds via One Time Investment
    When I go back to the dashboard page
    When I navigate to "Invest more" from Dashboard
    When I validate header "Select financial product"
    When I click on "Mutual Funds"
    When I validate header "Add new plan"
    When I select portfolio <mutualFundPortfolio>
    When I validate header "Scripbox Guided Path"
    When I click on "Invest"
    When I validate header "I want to invest"
    When I select invest option <SIPFrequency>
    When I enter SIP amount <oneTimeAmount>
    Then I should see error message "Amount must be greater than or equal to 1000" if amount is less than 1000
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
    When I validate investment header "I would like to invest one time" containing <oneTimeAmount>
    When I select investment date <investmentDate>
    When I click on "Confirm"
    Then I should see message "Investment scheduled successfully"
    When I click on "View investments"
    Then I validate section "Monthly Summary -> Upcoming" to contain <mutualFundPortfolio> "Investment - One Time" with <oneTimeAmount>
    Then I go back to the dashboard page
    Examples:
      | mutualFundPortfolio | SIPFrequency | oneTimeAmount | investmentDate |
      # | Core Mutual Fund Portfolio | One time  | 30000 | Default |
      # | Core Mutual Fund Portfolio | One time  | 15000 | T+2 |
      | Core Mutual Fund Portfolio | One time  | 20000 | 1stOfNextMonth |
      # | Core Mutual Fund Portfolio | One time  | 1 | Default |
      # | Core Mutual Fund Portfolio | One time  | 999 | Default |

  Scenario Outline: As a logged in user, I am able to do immediate "Core Mutual Fund Portfolio" investment in mutual funds via One Time Investment
    When I go back to the dashboard page
    When I navigate to "Invest more" from Dashboard
    When I validate header "Select financial product"
    When I click on "Mutual Funds"
    When I validate header "Add new plan"
    When I select portfolio <mutualFundPortfolio>
    When I validate header "Scripbox Guided Path"
    When I click on "Invest"
    When I validate header "I want to invest"
    When I select invest option <SIPFrequency>
    When I enter SIP amount <oneTimeAmount>
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
    Then I validate header "UPI"
    Then I go back to the dashboard page
    Examples:
      | mutualFundPortfolio | SIPFrequency | oneTimeAmount |
      | Core Mutual Fund Portfolio | One time  | 30000 |