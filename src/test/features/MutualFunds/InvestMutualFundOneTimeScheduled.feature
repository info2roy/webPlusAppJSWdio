Feature: Scripbox Investment in Mutual Fund Portfolio for New User

  Scenario: As a Scripbox user, I am logged in
    Given I am on the scripbox home page
    When I click on menu button
    When I click on login option
    When I login with username
    When I continue with password
    When I login with username and password
    Then I should see dashboard page loaded

  Scenario Outline: As a logged in user, I am able to schedule investment in mutual funds via One Time Investment
    Given I am on the Investment Page
    Given I am on the Mutual Funds Tab
    When I select portfolio <mutualFundPortfolio>
    When I Invest as per Scripbox Guided Path for <mutualFundPortfolio>
    When I select <investmentType> and fill <amount> and click to see recommended funds
    When I accept the recommended mutual fund allocation and click NEXT
    When I select Payment type as <paymentType> for amount <amount>
    When I select scheduled investment date and click NEXT
    Then I should see investment scheduled successfully message
    Then I go back to the dashboard page
    Examples:
        | mutualFundPortfolio | investmentType | amount | paymentType | paymentStatus |
        | Core Mutual | One time  | 50000 | Scheduled | Success |

