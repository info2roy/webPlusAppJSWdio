Feature: Scripbox Dashboard -> Invest more -> Mutual Funds

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "ANDROMEDA" for "automation+1@sb.io"

  Scenario Outline: As a logged in user, I am able to schedule "Emergency Fund" investment in mutual funds via Every month (SIP)
    When I navigate to "Invest more" from Dashboard
    When I click on "Mutual Funds"
    When I select portfolio <mutualFundPortfolio>
    When I click on "Invest" as per Scripbox Guided Path
    When I select <investmentType> with amount <sipAmount>
    When I click on "See Recommended Funds"
    Then I validate recommended funds and their amount split
    When I click on "Next"
    When I click on "1-Click Invest"
    When I fill SIP form with <durationInMonths>; <investmentDate>; <sipIncreasePercentPerYear>
    When I click on "CONFIRM"
    # When I "Invest more" in <mutualFundPortfolio> with <investmentType> for <sipAmount> with <durationInMonths>; <investmentDate>; <sipIncreasePercentPerYear>
    Then I should see message "Investment scheduled successfully"
    When I click on "View investments"
    Then I should see the investment reflected on Investment Calendar
    Examples:
      | mutualFundPortfolio | investmentType | sipAmount | durationInMonths | investmentDate | sipIncreasePercentPerYear |
      | Emergency Fund | Every month (SIP)  | 30000 | Default | Default | Default |
      | Emergency Fund | Every month (SIP)  | 1000 | Default | Default | 11 |
      | Emergency Fund | Every month (SIP)  | 3000 | Default | +2 | 8 |
      | Emergency Fund | Every month (SIP)  | 5000 | Default | 1stOfNextMonth | 9 |
      | Emergency Fund | Every month (SIP)  | 9000 | 60 | Default | Default |
      | Emergency Fund | Every month (SIP)  | 12000 | 60 | Default | 11 |
      | Emergency Fund | Every month (SIP)  | 15000 | 60 | +2 | 8 |
      | Emergency Fund | Every month (SIP)  | 20000 | 60 | 1stOfNextMonth | 9 |

  Scenario Outline: As a logged in user, I am able to do immediate "Emergency Fund" investment in mutual funds via Every month (SIP)
    When I navigate to "Invest more" from Dashboard
    When I click on "Mutual Funds"
    When I select portfolio <mutualFundPortfolio>
    When I click on "Invest" as per Scripbox Guided Path
    When I select <investmentType> with amount <sipAmount>
    When I click on "See Recommended Funds"
    Then I validate recommended funds and their amount split
    When I click on "Next"
    When I click on "Make Payment Now"
    When I fill SIP form with <durationInMonths>; <upcomingInvestmentDate>; <sipIncreasePercentPerYear>
    When I click on "NEXT"
    When I select Payment Instrument of type <paymentInstrumentType>
    When I go for Payment via selected Payment Instrument
    When I select mock payment status as <paymentStatus>
    Then I should see message "Investment successful"
    When I click on "Home"
    Then I should see message "Investment successful"
    When I click on "Home"
    When I click on "View investments"
    Then I should see the investment reflected on Investment Calendar
    Examples:
      | mutualFundPortfolio | investmentType | sipAmount | durationInMonths | upcomingInvestmentDate | sipIncreasePercentPerYear | paymentInstrumentType | paymentStatus | 
      | Emergency Fund | Every month (SIP)  | 30000 | Default | Default | Default |  Net Banking | Success |
      | Emergency Fund | Every month (SIP)  | 1000 | Default | Default | 11 | Net Banking | Success |
      | Emergency Fund | Every month (SIP)  | 3000 | Default | 1stOfNextMonth | 8 | Net Banking | Success |
      | Emergency Fund | Every month (SIP)  | 5000 | Default | 5thOfNextToNextMonth | 9 | Net Banking | Success |
      | Emergency Fund | Every month (SIP)  | 9000 | 60 | Default | Default | Net Banking | Success |
      | Emergency Fund | Every month (SIP)  | 12000 | 60 | Default | 11 | Net Banking | Success |
      | Emergency Fund | Every month (SIP)  | 15000 | 60 | 1stOfNextMonth | 8 | Net Banking | Success |
      | Emergency Fund | Every month (SIP)  | 20000 | 60 | 5thOfNextToNextMonth | 9 | Net Banking | Success |


  Scenario Outline: As a logged in user, I am able to schedule "Emergency Fund" investment in mutual funds via One Time Investment
    When I navigate to "Invest more" from Dashboard
    When I click on "Mutual Funds"
    When I select portfolio <mutualFundPortfolio>
    When I click on "Invest" as per Scripbox Guided Path
    When I select <investmentType> with amount <sipAmount>
    When I click on "See Recommended Funds"
    Then I validate recommended funds and their amount split  
    When I click on "Next"
    When I click on "1-Click Invest"
    When I select Investment date <investmentDate>
    When I click on "Confirm"
    Then I should see message "Investment scheduled successfully"
    When I click on "View investments"
    Then I should see the investment reflected on Investment Calendar
    Examples:
      | mutualFundPortfolio | investmentType | sipAmount | investmentDate |
      | Emergency Fund | One time  | 30000 | Default |
      | Emergency Fund | One time  | 1000 | Default |
      | Emergency Fund | One time  | 3000 | +2 |
      | Emergency Fund | One time  | 5000 | 1stOfNextMonth |
      | Emergency Fund | One time  | 9000 | Default |
      | Emergency Fund | One time  | 12000 | Default |
      | Emergency Fund | One time  | 15000 | +2 |
      | Emergency Fund | One time  | 20000 | 1stOfNextMonth |

  Scenario Outline: As a logged in user, I am able to do immediate "Emergency Fund" investment in mutual funds via One Time Investment
    When I navigate to "Invest more" from Dashboard
    When I click on "Mutual Funds"
    When I select portfolio <mutualFundPortfolio>
    When I click on "Invest" as per Scripbox Guided Path
    When I select <investmentType> with amount <sipAmount>
    When I click on "See Recommended Funds"
    Then I validate recommended funds and their amount split  
    When I click on "Next"
    When I click on "Make Payment Now"
    When I select Payment Instrument of type <paymentInstrumentType>
    When I go for Payment via selected Payment Instrument
    When I select mock payment status as <paymentStatus>
    Then I should see message "Investment successful"
    When I click on "Home"
    Then I should see message "Investment successful"
    When I click on "Home"
    When I click on "View investments"
    Then I should see the investment reflected on Investment Calendar
    Examples:
      | mutualFundPortfolio | investmentType | sipAmount | investmentDate | paymentInstrumentType | paymentStatus |
      | Emergency Fund | One time  | 30000 | Default | Net Banking | Success |
      | Emergency Fund | One time  | 1000 | Default | Net Banking | Success |
      | Emergency Fund | One time  | 3000 | +2 | Net Banking | Success |
      | Emergency Fund | One time  | 5000 | 1stOfNextMonth | Net Banking | Success |
      | Emergency Fund | One time  | 9000 | Default | Net Banking | Success |
      | Emergency Fund | One time  | 12000 | Default | Net Banking | Success |
      | Emergency Fund | One time  | 15000 | +2 | Net Banking | Success |
      | Emergency Fund | One time  | 20000 | 1stOfNextMonth | Net Banking | Success |