Feature: Scripbox Investment in Mutual Fund Portfolio

  Scenario: As a Scripbox user, I am logged in
    Given I am on the scripbox home page
    When I click on menu button
    When I click on login option
    When I login with username
    When I click on continue with password
    When I login with username and password
    Then I should see dashboard page loaded

  Scenario Outline: As a logged in user, I am able to schedule investment in mutual funds via Every month (SIP)
    Given I am on the Investment Page
    Given I am on the Mutual Funds Tab
    When I select portfolio <mutualFundPortfolio>
    When I click on Invest as per Scripbox Guided Path
    When I select <investmentType> and fill <amount> and click to see recommended funds
    When I accept the recommended mutual fund allocation and click NEXT
    When I select Payment type as <paymentType>
    When I select SIP duration in months as <sipInMonths> and click NEXT
    Then I should see investment scheduled successfully message
    Then I go back to the dashboard page
    Examples:
        | mutualFundPortfolio | investmentType | amount | sipInMonths | paymentType |
        | Core Mutual | Every month (SIP)  | 30000 | 90 | Scheduled |

  Scenario Outline: As a logged in user, I am able to do immediate investment in mutual funds via Every month (SIP)
    Given I am on the Investment Page
    Given I am on the Mutual Funds Tab
    When I select portfolio <mutualFundPortfolio>
    When I click on Invest as per Scripbox Guided Path
    When I select <investmentType> and fill <amount> and click to see recommended funds
    When I accept the recommended mutual fund allocation and click NEXT
    When I select Payment type as <paymentType>
    When I select SIP duration in months as <sipInMonths> and click NEXT
    When I select Payment Instrument of type <paymentInstrumentType>
    When I go for Payment via selected Payment Instrument
    When I select mock payment status as <paymentStatus>
    Then I should see fund transfer success message and click on HOME
    Then I should see investment success message and click on HOME
    Then I go back to the dashboard page
    Examples:
      | mutualFundPortfolio | investmentType | amount | sipInMonths | paymentType | paymentInstrumentType | paymentStatus |
      | Core Mutual | Every month (SIP)  | 20000 | 60 | Immediate | Net Banking | Success |
  
  Scenario Outline: As a logged in user, I am able to schedule investment in mutual funds via One Time Investment
    Given I am on the Investment Page
    Given I am on the Mutual Funds Tab
    When I select portfolio <mutualFundPortfolio>
    When I click on Invest as per Scripbox Guided Path
    When I select <investmentType> and fill <amount> and click to see recommended funds
    When I accept the recommended mutual fund allocation and click NEXT
    When I select Payment type as <paymentType>
    When I select scheduled investment date and click NEXT
    Then I should see investment scheduled successfully message
    Then I go back to the dashboard page
    Examples:
        | mutualFundPortfolio | investmentType | amount | paymentType |
        | Core Mutual | One time  | 50000 | Scheduled |

  Scenario Outline: As a logged in user, I am able to do immediate investment in mutual funds via One Time Investment
    Given I am on the Investment Page
    Given I am on the Mutual Funds Tab
    When I select portfolio <mutualFundPortfolio>
    When I click on Invest as per Scripbox Guided Path
    When I select <investmentType> and fill <amount> and click to see recommended funds
    When I accept the recommended mutual fund allocation and click NEXT
    When I select Payment type as <paymentType>
    When I select Payment Instrument of type <paymentInstrumentType>
    When I go for Payment via selected Payment Instrument
    When I select mock payment status as <paymentStatus>
    Then I should see fund transfer success message and click on HOME
    Then I should see investment success message and click on HOME
    Then I go back to the dashboard page
    Examples:
        | mutualFundPortfolio | investmentType | amount | paymentType | paymentInstrumentType | paymentStatus |
        | Core Mutual  | One time  | 40000 | Immediate | Net Banking | Success |
        #| Tax Saver Plan  | One time  | 50000 | Immediate | UPI | Success |