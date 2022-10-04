Feature: Scripbox Dashboard -> Invest tab -> Mutual Funds -> Go To the Bottom -> Invest more in a fund

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "ANDROMEDA" for "mahesh.bale@scripbox.com"

  Scenario Outline: As a logged in user, I am able to schedule SIP into already invested fund
    When I navigate to "Invest" from Dashboard
    When I click on "Mutual Funds"
    When I validate header "Choose your plan"
    When I validate header "Explore funds"
    When I scroll until <FundName> is visible
    When I validate header "Your investments"
    When I click on "Invest more" for <FundName>
    When I validate header "Set up investment"
    When I validate header "How would you like to invest?"
    When I validate header <FundName>
    When I select radio option <SIPFrequency>
    When I enter data for SIP Amount with value <SIPAmount>
    # When I select start date <SIPStartDate>
    When I enter data for duration with value <SIPDuration>
    When I click on button containing "Confirm SIP of " and <SIPAmount>
    When I validate header "Nominee verification required"
    When I enter data for verify-otp with value 111111
    When I click on "Verify"
    Then I validate header "Investment scheduled successfully"
    Then I go back to the dashboard page 
    Examples:
      | FundName | SIPFrequency | SIPAmount | SIPStartDate | SIPDuration |
      # | HDFC Floating Rate Debt Wholesale Plan (G) | Monthly SIP  | 5000      | Default | Default          |
      # | HDFC Floating Rate Debt Wholesale Plan (G) | Monthly SIP  | 1      | Default | Default          |
      # | HDFC Floating Rate Debt Wholesale Plan (G) | Monthly SIP  | 10000      | Default | 0          |
      # | HDFC Floating Rate Debt Wholesale Plan (G) | Monthly SIP  | 1000      | Default | -1          |
      # | HDFC Floating Rate Debt Wholesale Plan (G) | Monthly SIP  | 2000      | T+2 | 1          |
      # | HDFC Floating Rate Debt Wholesale Plan (G) | Monthly SIP  | 15000      | T+5 | 12          |
      # | HDFC Floating Rate Debt Wholesale Plan (G) | Monthly SIP  | 20000      | T+7 | 24          |
      # | HDFC Floating Rate Debt Wholesale Plan (G) | Monthly SIP  | 25000      | 1stOfNextMonth | 36          |
      | HDFC Floating Rate Debt Wholesale Plan (G) | Monthly SIP  | 30000      | 5thOfNextMonth | 72          |

  Scenario Outline: As a logged in user, I am able to schedule SIP into already invested fund with first payment today
    When I go back to the dashboard page
    And I navigate to "Invest" from Dashboard
    And I click on "Mutual Funds"
    And I scroll until "Your investments" is visible
    And I validate already invested funds present
    And I click on "Invest more" for first visible Fund
    And I validate header "Set up investment"
    And I validate header "How would you like to invest?"
    And I validate header "Enter monthly SIP amount"
    And I validate fund name present before amount field
    And I select radio option <SIPFrequency>
    And I enter SIP amount <SIPAmount>
    And I select start date <SIPStartDate>
    And I enter SIP duration <SIPDuration>
    And I select checkbox "Make your first payment today"
    And I click on "Pay "
    Then I validate header "I would like to invest using"
    Then I validate header "Net Banking"
    Then I validate header "UPI"
    Then I go back to the dashboard page 
    Examples:
      | SIPFrequency | SIPAmount | SIPStartDate | SIPDuration |
      | Monthly SIP  | 5000      | Default | Default          |

  Scenario Outline: As a logged in user, I am able to do immediate one time investment into already invested fund
    When I go back to the dashboard page
    And I navigate to "Invest" from Dashboard
    And I click on "Mutual Funds"
    And I scroll until "Your investments" is visible
    And I validate already invested funds present
    And I click on "Invest more" for first visible Fund
    And I validate header "Set up investment"
    And I validate header "How would you like to invest?"
    And I validate header "Enter One Time amount"
    And I validate fund name present before amount field
    And I select radio option <SIPFrequency>
    And I enter SIP amount <SIPAmount>
    Then I should see error message "Amount must be greater than or equal to 1000" if amount is less than 1000
    When I click on "Pay "
    Then I validate header "I would like to invest using"
    Then I validate header "Net Banking"
    Then I validate header "UPI"
    Then I go back to the dashboard page 
    Examples:
      | SIPFrequency | SIPAmount |
      | One time  | 5000   |
      # | One time  | 1      |
      | One time  | 900    |

  Scenario Outline: As a logged in user, I am able to do sheduled one time investment into already invested fund
    When I go back to the dashboard page
    And I navigate to "Invest" from Dashboard
    And I click on "Mutual Funds"
    And I scroll until "Your investments" is visible
    And I validate already invested funds present
    And I click on "Invest more" for first visible Fund
    And I validate header "Set up investment"
    And I validate header "How would you like to invest?"
    And I validate header "Enter One Time amount"
    And I validate fund name present before amount field
    And I select radio option <SIPFrequency>
    And I enter SIP amount <SIPAmount>
    And I select checkbox "Make your first payment today"
    And I click on "Confirm investment of "
    Then I should see message "Investment scheduled successfully"
    Then I go back to the dashboard page 
    Examples:
      | SIPFrequency | SIPAmount |
      | One time  | 5000      |