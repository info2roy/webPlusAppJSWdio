Feature: Scripbox Withdraw for Mutual Fund

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "STAGING" for "user189182"

  Scenario Outline: As a logged in user, I am able to withdraw from mutual fund using Custom fund based withdrawal
    Given I am on the dashboard page
    When I navigate to "Withdraw" from Dashboard
    When I select a family member "User 161276" for withdrawal
    When I select "Mutual Funds" as financial product for withdrawal
    When I select for withdrawal the mutual fund portfolio <mutualFundPortfolio>
    When I select withdrawal bank option as "Continue with same bank"
    When I select option I want to withdraw by fund in Available to withdraw page for <mutualFundPortfolio>
    When I select fund <mutualFundPortfolio> for withdraw
    Then I should see withdrawl confirmation page
    Then I click on confirm withdrawl for OTP
    Examples:
      | mutualFundPortfolio | fundName |
      | Tax Saver Plan | Name  |