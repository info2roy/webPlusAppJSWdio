Feature: Scripbox Dashboard -> Invest tab -> Mutual Funds -> Go To the Bottom -> Invest more in a fund

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "ANDROMEDA" for "automation+1@sb.io"

  Scenario Outline: As a logged in user, I am able to schedule SIP into already invested fund
    When I navigate to "Invest" from Dashboard
    And I click on "Mutual Funds"
    And I scroll until "Your investments" is visible
    And I validate already invested funds present
    And I click on "Invest more" for first visible Fund
    And I validate header "Set up investment"
    And I validate header "How would you like to invest?"
    And I validate header "Enter monthly SIP amount"
    And I validate fund name present before amount field
    And I select invest option <SIPFrequency>
    And I enter SIP amount <SIPAmount>
    Then I should see error message "Amount must be greater than or equal to 1000" if amount is less than 1000
    When I select start date <SIPStartDate>
    And I enter SIP duration <SIPDuration>
    Then I should see error message "Duration can't be blank" if duration is blank
    Then I should see error message "Duration must be greater than or equal to 1" if duration is less than 1
    When I click on "Confirm SIP of "
    Then I should see message "Investment scheduled successfully"
    Then I go back to the dashboard page 
    Examples:
      | SIPFrequency | SIPAmount | SIPStartDate | SIPDuration |
      # | Monthly SIP  | 5000      | Default | Default          |
      # | Monthly SIP  | 1      | Default | Default          |
      | Monthly SIP  | 900      | Default | Default          |
      # | Monthly SIP  | 10000      | Default | 0          |
      # | Monthly SIP  | 1000      | Default | -1          |
      # | Monthly SIP  | 2000      | T+2 | 1          |
      # | Monthly SIP  | 15000      | T+5 | 12          |
      # | Monthly SIP  | 20000      | T+7 | 24          |
      # | Monthly SIP  | 25000      | 1stOfNextMonth | 36          |
      | Monthly SIP  | 30000      | 5thOfNextMonth | 72          |

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
    And I select invest option <SIPFrequency>
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
    And I select invest option <SIPFrequency>
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
    And I select invest option <SIPFrequency>
    And I enter SIP amount <SIPAmount>
    And I select checkbox "Make your first payment today"
    And I click on "Confirm investment of "
    Then I should see message "Investment scheduled successfully"
    Then I go back to the dashboard page 
    Examples:
      | SIPFrequency | SIPAmount |
      | One time  | 5000      |