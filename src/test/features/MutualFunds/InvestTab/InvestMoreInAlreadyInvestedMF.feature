Feature: Scripbox Dashboard -> Invest tab -> Mutual Funds -> Go To "Your Investments" -> Invest more in a fund

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "ANDROMEDA" for "mahesh.bale@scripbox.com"

  Scenario Outline: As a logged in user, I am able to schedule SIP into already invested fund for Invest tab -> Mutual Funds -> Go To "Your Investments" -> Invest more in a fund
    When I navigate to "Invest" from Dashboard
    When I click on "Mutual Funds"
    When I validate header "Choose your plan"
    When I validate header "Explore funds"
    When I scroll until "Your investments" is visible
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
    # Then I validate header "Investment scheduled successfully"
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
  
  Scenario Outline: As a logged in user, I am able to see error messages when SIP amount is less than 1000 when scheduling SIP into already invested fund for Invest tab -> Mutual Funds -> Go To "Your Investments" -> Invest more in a fund
    When I navigate to "Invest" from Dashboard
    When I click on "Mutual Funds"
    When I validate header "Choose your plan"
    When I validate header "Explore funds"
    When I scroll until "Your investments" is visible
    When I validate header "Your investments"
    When I click on "Invest more" for <FundName>
    When I validate header "Set up investment"
    When I validate header "How would you like to invest?"
    When I validate header <FundName>
    When I select radio option <SIPFrequency>
    When I enter data for SIP Amount with value <SIPAmount>
    Then I see message <UiError> for <SIPAmount>
    Then I go back to the dashboard page 
    Examples:
      | FundName | SIPFrequency | SIPAmount | UiError |
      | HDFC Floating Rate Debt Wholesale Plan (G) | Monthly SIP  | 1 | Amount must be greater than or equal to 1000 |
      | HDFC Floating Rate Debt Wholesale Plan (G) | Monthly SIP  | 999 | Amount must be greater than or equal to 1000 |

  Scenario Outline: As a logged in user, I am able to see error messages when SIP duration is invalid when scheduling SIP into already invested fund for Invest tab -> Mutual Funds -> Go To "Your Investments" -> Invest more in a fund
    When I navigate to "Invest" from Dashboard
    When I click on "Mutual Funds"
    When I validate header "Choose your plan"
    When I validate header "Explore funds"
    When I scroll until "Your investments" is visible
    When I validate header "Your investments"
    When I click on "Invest more" for <FundName>
    When I validate header "Set up investment"
    When I validate header "How would you like to invest?"
    When I validate header <FundName>
    When I select radio option <SIPFrequency>
    When I enter data for SIP Amount with value <SIPAmount>
    # When I select start date <SIPStartDate>
    When I enter data for duration with value <SIPDuration>
    Then I see data-error <UiError> for <SIPDuration>
    Then I go back to the dashboard page 
    Examples:
      | FundName | SIPFrequency | SIPAmount | SIPStartDate | SIPDuration | UiError |
      | HDFC Floating Rate Debt Wholesale Plan (G) | Monthly SIP  | 30000 | 5thOfNextMonth | Blank | Duration can't be blank |
      | HDFC Floating Rate Debt Wholesale Plan (G) | Monthly SIP  | 30000 | 5thOfNextMonth | 0 | Duration must be greater than or equal to 1 |
      | HDFC Floating Rate Debt Wholesale Plan (G) | Monthly SIP  | 30000 | 5thOfNextMonth | -1 | Duration must be greater than or equal to 1 |

  Scenario Outline: As a logged in user, I am able to schedule SIP into already invested fund with first payment today for Invest tab -> Mutual Funds -> Go To "Your Investments" -> Invest more in a fund
    When I go back to the dashboard page
    When I navigate to "Invest" from Dashboard
    When I click on "Mutual Funds"
    When I validate header "Choose your plan"
    When I validate header "Explore funds"
    When I scroll until "Your investments" is visible
    When I validate header "Your investments"
    When I click on "Invest more" for <FundName>
    When I validate header "Set up investment"
    When I validate header "How would you like to invest?"
    When I validate header <FundName>
    When I select radio option <SIPFrequency>
    When I enter data for SIP Amount with value <SIPAmount>
    # When I select start date <SIPStartDate>
    When I enter data for duration with value <SIPDuration>
    When I scroll until "Make your first payment today" is visible
    When I select checkbox makeFirstPaymentNow
    When I click on button containing "Pay " and <SIPAmount>
    Then I validate header "I would like to invest using"
    Then I validate header "Net Banking"
    Then I validate header "UPI"
    Then I go back to the dashboard page 
    Examples:
      | FundName | SIPFrequency | SIPAmount | SIPStartDate | SIPDuration |
      | HDFC Floating Rate Debt Wholesale Plan (G) | Monthly SIP  | 5000      | Default | 24          |

  Scenario Outline: As a logged in user, I am able to do immediate one time investment into already invested fund for Invest tab -> Mutual Funds -> Go To "Your Investments" -> Invest more in a fund
    When I go back to the dashboard page
    When I navigate to "Invest" from Dashboard
    When I click on "Mutual Funds"
    When I validate header "Choose your plan"
    When I validate header "Explore funds"
    When I scroll until "Your investments" is visible
    When I validate header "Your investments"
    When I click on "Invest more" for <FundName>
    When I validate header "Set up investment"
    When I validate header "How would you like to invest?"
    When I validate header <FundName>
    When I select radio option <SIPFrequency>
    When I enter data for One Time Amount with value <OneTimeAmount>
    When I click on button containing "Pay " and <OneTimeAmount>
    Then I validate header "I would like to invest using"
    Then I validate header "Net Banking"
    Then I validate header "UPI"
    Then I go back to the dashboard page 
    Examples:
      | FundName | SIPFrequency | OneTimeAmount |
      | HDFC Floating Rate Debt Wholesale Plan (G) | One time  | 5000   |

  Scenario Outline: As a logged in user, when I do immediate one time investment into already invested fund, I see error messages when One Time Amount is invalid for Invest tab -> Mutual Funds -> Go To "Your Investments" -> Invest more in a fund
    When I go back to the dashboard page
    When I navigate to "Invest" from Dashboard
    When I click on "Mutual Funds"
    When I validate header "Choose your plan"
    When I validate header "Explore funds"
    When I scroll until "Your investments" is visible
    When I validate header "Your investments"
    When I click on "Invest more" for <FundName>
    When I validate header "Set up investment"
    When I validate header "How would you like to invest?"
    When I validate header <FundName>
    When I select radio option <SIPFrequency>
    When I enter data for One Time Amount with value <OneTimeAmount>
    Then I see message <UiError> for <SIPAmount>
    Then I go back to the dashboard page 
    Examples:
      | FundName | SIPFrequency | OneTimeAmount | UiError |
      | HDFC Floating Rate Debt Wholesale Plan (G) | One time  | Blank   | Amount must be greater than or equal to 1000 |
      | HDFC Floating Rate Debt Wholesale Plan (G) | One time  | 1   | Amount must be greater than or equal to 1000 |
      | HDFC Floating Rate Debt Wholesale Plan (G) | One time  | 999   | Amount must be greater than or equal to 1000 |
  
  Scenario Outline: As a logged in user, I am able to do sheduled one time investment into already invested fund for Invest tab -> Mutual Funds -> Go To "Your Investments" -> Invest more in a fund
    When I go back to the dashboard page
    When I navigate to "Invest" from Dashboard
    When I click on "Mutual Funds"
    When I validate header "Choose your plan"
    When I validate header "Explore funds"
    When I scroll until "Your investments" is visible
    When I validate header "Your investments"
    When I click on "Invest more" for <FundName>
    When I validate header "Set up investment"
    When I validate header "How would you like to invest?"
    When I validate header <FundName>
    When I select radio option <SIPFrequency>
    When I enter data for One Time Amount with value <OneTimeAmount>
    When I select checkbox scheduleForLater
    When I click on button containing "Confirm investment of " and <OneTimeAmount>
    When I validate header "Nominee verification required"
    When I enter data for verify-otp with value 111111
    When I click on "Verify"
    # Then I validate header "Investment scheduled successfully"
    Then I go back to the dashboard page 
    Examples:
      | FundName | SIPFrequency | OneTimeAmount |
      | HDFC Floating Rate Debt Wholesale Plan (G) | One time  | 5000      |