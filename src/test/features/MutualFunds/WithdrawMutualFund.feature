Feature: Scripbox Withdraw for Mutual Fund

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "STAGING" for "user189182"

  Scenario Outline: As a logged in user, I am able to withdraw from mutual fund using Custom fund based withdrawal
    Given I am on the dashboard page
    When I select the "Withdraw" option on dashboard page
    When I select a family member "User 161276" for withdrawal
    When I select "Mutual Funds" as financial product for withdrawal
    When I select for withdrawal the portfolio <mutualFundPortfolio>
    When I select withdrawal bank option as "Continue with same bank"
    When I enter withdrawal amount as <withdrawalAmount>
    When I select "CUSTOM_FUND_BASED_WITHDRAWAL" as strategy
    When I select to withdraw half amount from fund "Axis Liquid Fund (G)" at index 1
    When I select to withdraw half amount from fund "ICICI Prudential Savings Fund (G)" at index 2
    When I click on "CONTINUE" button for withdrawal
    When I click on button "CONFIRM WITHDRAWAL" for withdrawal
    When I enter OTP as 111111 for withdrawal
    Then I should see Withdrawal Scheduled success message
    Then I go back to the dashboard page
    Examples:
      | mutualFundPortfolio | withdrawalAmount |
      | Short Term Money | 1000  |

  Scenario Outline: As a logged in user, I am able to withdraw from mutual fund using Tax optimised withdrawal
    Given I am on the dashboard page
    When I select the "Withdraw" option on dashboard page
    When I select a family member "User 161276" for withdrawal
    When I select "Mutual Funds" as financial product for withdrawal
    When I select for withdrawal the portfolio <mutualFundPortfolio>
    When I select withdrawal bank option as "Continue with same bank"
    When I enter withdrawal amount as <withdrawalAmount>
    When I select "TAX_OPTIMIZED_WITHDRAWAL" as strategy
    When I click on "CONTINUE" button for withdrawal
    When I click on button "CONFIRM WITHDRAWAL" for withdrawal
    When I enter OTP as 111111 for withdrawal
    Then I should see Withdrawal Scheduled success message
    Then I go back to the dashboard page
    Examples:
      | mutualFundPortfolio | withdrawalAmount |
      | Short Term Money | 1000  |