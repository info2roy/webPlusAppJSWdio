Feature: Scripbox MyWealth: Add a Government Scheme "National Pension Scheme Tier2"

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "MYSCRIPBOX" for "user180756"

  Scenario Outline: As a logged in user, I am able to add and update a Government Scheme "National Pension Scheme Tier2" to "My Wealth"
    Given I navigate to the MyWealth "Investments" type "Govt. Schemes"
    When I select Govt Scheme "National Pension Scheme Tier2" for family member "Investor 156012"
    When I fill form with <npsFundName>, <npsEquityAmount>, <npsGovtSecurityAmount>, <npsCorpDebtAmount>, <npsAltInvestmentFundsAmount> for Govt Scheme "National Pension Scheme Tier2"
    When I go back to previous page
    Then Total invested amount should get updated
    When I select Govt Scheme "National Pension Scheme Tier2" tile for family member "Investor 156012"
    Then NPS Scheme details are shown correctly for Govt Scheme "National Pension Scheme Tier2"
    Then I go back to the dashboard page
    Examples:
      | npsFundName | npsEquityAmount | npsGovtSecurityAmount | npsCorpDebtAmount | npsAltInvestmentFundsAmount |
      | Aditya Birla Sun Life Pension Management Fund | 13425 | 23452 | 100000 | 20000 |
      | Aditya Birla Sun Life Pension Management Fund | 14425 | 25452 | 200000 | 30000 |
      | HDFC Pension Management Company Limited | 14425 | 25452 | 200000 | 30000 | 

  Scenario Outline: I delete the investment and logout
    Given I navigate to the MyWealth "Investments" type "Govt. Schemes"
    When I select Govt Scheme "National Pension Scheme Tier2" tile for family member "Investor 156012"
    When I delete Govt Scheme 
    Then I go back to the dashboard page