Feature: Scripbox Investment in Mutual Fund Portfolio for New User

  Scenario: As a Scripbox user, I am logged in
    Given I am on the scripbox home page
    When I click on menu button
    When I click on login option
    When I login with username
    When I continue with password
    When I login with username and password
    Then I should see dashboard page loaded

  Scenario Outline: As a logged in user I am able to invest in mutual funds via One time investment
    Given I am on the Investment Page
    Given I am on the Mutual Funds Tab
    When I select portfolio <mutualFundPortfolio>
    When I Invest as per Scripbox Guided Path for <mutualFundPortfolio>
    When I select <investmentType> and fill <amount> and click to see recommended funds
    When I accept the recommended mutual fund allocation and click NEXT
    When I select to MAKE PAYMENT NOW for amount <amount>
    When I select Payment Instrument of type <paymentInstrumentType>
    When I go to Bank for Payment Instrument of type <paymentInstrumentType>
    When I select mock payment status as <paymentStatus>
    Then I should see fund transfer success message
    Then I go back to the dashboard page
    Examples:
        | mutualFundPortfolio | investmentType | amount | paymentInstrumentType | paymentStatus |
        | Core Mutual  | One time  | 40000 | Net Banking | Success |
        #| Tax Saver Plan  | One time  | 50000 | UPI | Success |

