Feature: Scripbox Withdraw for Mutual Fund

  Scenario: As a Scripbox user, I am logged in
    Given I am on the scripbox home page
    When I click on menu button
    When I click on login option
    When I login with username
    When I click on continue with password
    When I login with username and password
    Then I should see dashboard page loaded

  Scenario Outline: As a logged in user, I am able to withdraw from mutual fund using Custom fund based withdrawal
    Given I am on the dashboard page
    When I select the "Withdraw" option on dashboard page
    When I select a family member "Investor 947112 Upwardly" for withdrawal
    When I select "Mutual Funds" as financial product for withdrawal
    When I select for withdrawal the portfolio <mutualFundPortfolio>
    When I select withdrawal bank option as "CONTINUE WITH SAME BANK"
    When I enter withdrawal amount as <withdrawalAmount>
    When I select to withdraw half amount from fund "ICICI Prudential Bluechip Fund (G)" at index 1
    When I select to withdraw half amount from fund "Franklin India Feeder Franklin U S Opportunities Fund (G)" at index 2
    When I click on "CONTINUE" button for withdrawal
    When I click on "CONFIRM WITHDRAWAL" button for withdrawal
    When I click on Get OTP to verify with OTP
    When I enter OTP as 111111 for withdrawal
    Then I should see Withdrawal Scheduled success message
    Examples:
      | mutualFundPortfolio | withdrawalAmount |
      | Core Mutual Fund Portfolio | 1000  |