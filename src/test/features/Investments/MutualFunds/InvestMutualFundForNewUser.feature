Feature: Scripbox Investment in Mutual Fund Portfolio for New User

  Background: As a Scripbox user, I am logged in
    Given I am on the scripbox home page
    When I click on menu button
    When I click on login option
    When I login with username
    When I login with username and password
    Then I should see dashboard page loaded

  Scenario Outline: As a logged in user I am able to invest in mutual funds via SIP
    Given I am on the Investment Page
    Given I am on the Mutual Funds Tab
    When I select portfolio <mutualFundPortfolio>
    When I Invest as per Scripbox Guided Path for <mutualFundPortfolio>
    #When I fill form with agegroup <ageGroup> and click NEXT
    When I select <investmentType> and fill <amount> and click to see recommended funds
    When I accept the recommended mutual fund allocation and click NEXT
    When I select to MAKE PAYMENT NOW for amount <amount>
    When I select SIP duration in months as <sipInMonths> and click NEXT
    When I select Payment Instrument of type <paymentInstrumentType>
    When I go to Bank for Payment Instrument of type <paymentInstrumentType>
    When I select mock payment status as <paymentStatus>
    Then I should see fund transfer success message
    Examples:
        | mutualFundPortfolio | ageGroup | investmentType | amount | sipInMonths | paymentInstrumentType | paymentStatus |
        | Core Mutual | 30s  | Every month (SIP)  | 20000 | 60 | Net Banking | Success |
        #| Emergency Fund  | 40s  | Every month (SIP)  | 15000 | 120 | UPI | Success |
        #| Tax Saver Plan  | 50s  | One time  | 50000 | 180 | UPI | Success |

