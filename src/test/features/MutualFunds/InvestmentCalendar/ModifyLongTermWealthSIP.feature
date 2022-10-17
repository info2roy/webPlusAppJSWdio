Feature: Scripbox Dashboard -> View Investment Calendar ->  Long Term Wealth SIP -> Modify SIP

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "ANDROMEDA" for "test_email+d98c92961d@scripbox.io"

  Scenario Outline: As a logged in user, I am able to modify Long Term Wealth SIP
    When I go back to the dashboard page
    When I click on "View"
    When I validate header "SIP(s) and STP(s)"
    When I validate header "Monthly Summary"
    When I click on "Long Term Wealth SIP"
    When I validate header "Long Term Wealth SIP"
    When I validate header "SIP Tenure"
    When I validate header "Fund list"
    When I validate button "Cancel SIP"
    When I validate button "Modify SIP"
    When I click on "Modify SIP"
    When I validate header "Select your amount"
    When I modify SIP amount via Investment Calendar from <CurrentSIPAmount> to <UpdatedSIPAmount> 
    When I set yearly sip increase percent from 0 to <SIPIncreasePercentPerYear>
    When I click on "Save"
    When I validate header "Modify your investment"
    When I validate header "You are currently modifying your SIP in"
    When I validate header "Long Term Wealth"
    When I validate header "SIP Amount"
    When I validate amount <UpdatedSIPAmount>
    When I validate header "Step up"
    When I validate text at xpath as <SIPIncreasePercentPerYear>%
      | //div[text()="Step up"]/parent::div/parent::div/following-sibling::div/div[2]/div |  |
    #When I validate investment header "SIP amount will be increased by" containing <SIPIncreasePercentPerYear> and years +1 months +1
    When I validate header "SIP Tenure"
    When I validate header "84 months"
    When I validate header "Next Investment Date"
    When I validate investment date years 0 months +1 days -1
    When I click on button containing "Confirm with " and <UpdatedSIPAmount>
    When I validate header "Nominee verification required"
    When I enter data for verify-otp with value 111111
    When I click on "Verify"
    # Then I validate header "Investment scheduled successfully"
    Examples:
      | CurrentSIPAmount | UpdatedSIPAmount | SIPIncreasePercentPerYear |
      | 20000            | 21000            | 5                         |
