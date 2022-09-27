Feature: Scripbox Dashboard -> Invest more -> Mutual Funds -> Tax Saver Plan

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "ANDROMEDA" for "automation+1@sb.io"

  Scenario Outline: As a logged in user, I am able to schedule "Tax Saver Plan" investment in mutual funds via Every month (SIP)
    When I navigate to "Invest more" from Dashboard
    When I validate header "Select financial product"
    When I click on "Mutual Funds"
    When I validate header "Add new plan"
    When I select portfolio <mutualFundPortfolio>
    When I validate header "Scripbox Guided Path"
    When I click on "Invest"
    When I validate header "I want to invest"
    When I select invest option <SIPFrequency>
    When I enter SIP details <SIPAmount>
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
    When I enter SIP details <SIPDuration>
    When I select start date <SIPStartDate>
    When I click on "Confirm"
    # When I "Invest more" in <mutualFundPortfolio> with <SIPFrequency> for <SIPAmount> with <SIPDuration>; <SIPStartDate>; <sipIncreasePercentPerYear>
    Then I should see message "Investment scheduled successfully"
    Then I click on "View investments"
    Then I validate section "SIP(s) and STP(s)" to contain <mutualFundPortfolio> SIP with <SIPAmount>
    Then I validate section "Monthly Summary -> Upcoming" to contain <mutualFundPortfolio> "Investment - Every Month" with <SIPAmount>
    Examples:
      | mutualFundPortfolio | SIPFrequency | SIPAmount | SIPDuration | SIPStartDate | sipIncreasePercentPerYear |
      | Tax Saver Plan | Every month (SIP)  | 30000 | Default | Default | Default |
      | Tax Saver Plan | Every month (SIP)  | 1000 | Default | Default | 11 |
      | Tax Saver Plan | Every month (SIP)  | 3000 | Default | +2 | 8 |
      | Tax Saver Plan | Every month (SIP)  | 5000 | Default | 1stOfNextMonth | 9 |
      | Tax Saver Plan | Every month (SIP)  | 9000 | 60 | Default | Default |
      | Tax Saver Plan | Every month (SIP)  | 12000 | 60 | Default | 11 |
      | Tax Saver Plan | Every month (SIP)  | 15000 | 60 | +2 | 8 |
      | Tax Saver Plan | Every month (SIP)  | 20000 | 60 | 1stOfNextMonth | 9 |

  Scenario Outline: As a logged in user, I am able to do immediate "Tax Saver Plan" investment in mutual funds via Every month (SIP)
    When I navigate to "Invest more" from Dashboard
    When I validate header "Select financial product"
    When I click on "Mutual Funds"
    When I validate header "Add new plan"
    When I select portfolio <mutualFundPortfolio>
    When I validate header "Scripbox Guided Path"
    When I click on "Invest"
    When I validate header "I want to invest"
    When I select invest option <SIPFrequency>
    When I enter SIP details <SIPAmount>
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
    When I enter SIP details <SIPDuration>
    When I select start date <UpcomingSIPStartDate>
    When I click on "Next"
    Then I validate header "I would like to invest using"
    Then I validate header "Net Banking"
    Then I validate header "UPI"
    Examples:
      | mutualFundPortfolio | SIPFrequency | SIPAmount | SIPDuration | UpcomingSIPStartDate | sipIncreasePercentPerYear |
      | Tax Saver Plan | Every month (SIP)  | 30000 | Default | Default | Default |
      | Tax Saver Plan | Every month (SIP)  | 1000 | Default | Default | 11 |
      | Tax Saver Plan | Every month (SIP)  | 3000 | Default | 1stOfNextMonth | 8 |
      | Tax Saver Plan | Every month (SIP)  | 5000 | Default | 5thOfNextToNextMonth | 9 |
      | Tax Saver Plan | Every month (SIP)  | 9000 | 60 | Default | Default |
      | Tax Saver Plan | Every month (SIP)  | 12000 | 60 | Default | 11 |
      | Tax Saver Plan | Every month (SIP)  | 15000 | 60 | 1stOfNextMonth | 8 |
      | Tax Saver Plan | Every month (SIP)  | 20000 | 60 | 5thOfNextToNextMonth | 9 |


  Scenario Outline: As a logged in user, I am able to schedule "Tax Saver Plan" investment in mutual funds via One Time Investment
    When I navigate to "Invest more" from Dashboard
    When I validate header "Select financial product"
    When I click on "Mutual Funds"
    When I validate header "Add new plan"
    When I select portfolio <mutualFundPortfolio>
    When I validate header "Scripbox Guided Path"
    When I click on "Invest"
    When I validate header "I want to invest"
    When I select invest option <SIPFrequency>
    When I enter OneTime details <oneTimeAmount>
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
    Examples:
      | mutualFundPortfolio | SIPFrequency | oneTimeAmount | investmentDate |
      | Tax Saver Plan | One time  | 30000 | Default |
      | Tax Saver Plan | One time  | 15000 | +2 |
      | Tax Saver Plan | One time  | 20000 | 1stOfNextMonth |

  Scenario Outline: As a logged in user, I am able to do immediate "Tax Saver Plan" investment in mutual funds via One Time Investment
    When I navigate to "Invest more" from Dashboard
    When I validate header "Select financial product"
    When I click on "Mutual Funds"
    When I validate header "Add new plan"
    When I select portfolio <mutualFundPortfolio>
    When I validate header "Scripbox Guided Path"
    When I click on "Invest"
    When I validate header "I want to invest"
    When I select invest option <SIPFrequency>
    When I enter OneTime details <oneTimeAmount>
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
    Examples:
      | mutualFundPortfolio | SIPFrequency | oneTimeAmount |
      | Tax Saver Plan | One time  | 30000 |