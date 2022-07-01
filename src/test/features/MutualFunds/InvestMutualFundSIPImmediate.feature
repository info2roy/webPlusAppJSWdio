Feature: Scripbox Investment in Mutual Fund Portfolio for New User

  Scenario: As a Scripbox user, I am logged in
    Given I am on the scripbox home page
    When I click on menu button
    When I click on login option
    When I login with username
    When I login with username and password
    Then I should see dashboard page loaded

  Scenario Outline: As a logged in user I am able to invest in mutual funds via Every month (SIP) and Immediate investment
    Given I am on the Investment Page
    Given I am on the Mutual Funds Tab
    When I select portfolio <mutualFundPortfolio>
    When I Invest as per Scripbox Guided Path for <mutualFundPortfolio>
    When I select <investmentType> and fill <amount> and click to see recommended funds
    When I accept the recommended mutual fund allocation and click NEXT
    When I select Payment type as <paymentType> for amount <amount>
    When I select SIP duration in months as <sipInMonths> and click NEXT
    When I select Payment Instrument of type <paymentInstrumentType>
    When I go to Bank for Payment Instrument of type <paymentInstrumentType>
    When I select mock payment status as <paymentStatus>
    Then I should see fund transfer success message
    Then I should see investment success message
    Then I go back to the dashboard page
    Examples:
      | mutualFundPortfolio | investmentType | amount | sipInMonths | paymentType | paymentInstrumentType | paymentStatus |
      | Core Mutual | Every month (SIP)  | 20000 | 60 | Immediate | Net Banking | Success |
