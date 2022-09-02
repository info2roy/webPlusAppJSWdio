Feature: Scripbox MyWealth: Add a Fixed Deposit

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "ANDROMEDA" for "mahesh.bale@scripbox.com"

  Scenario Outline: As a logged in user, I am able to add a Fixed Deposit to "My Wealth"
    Given I navigate to the MyWealth "Investments" type "Fixed Deposits"
    When I click on "Add existing Fixed Deposit" for family member "Mahesh Rajesham Bale"
    When I fill "Fixed Deposit" form with <firmName>; <investedAmount>; <interestRate>; <startMonth>; <maturityMonth>
    Then Fixed Deposit details are shown correctly
    Examples:
      | firmName | investedAmount | interestRate | startMonth | maturityMonth |
      | AU Small Finance Bank | 100000 | 5 | Jan, 2022 | Jan, 2024 |

  Scenario Outline: I am able update the Fixed Deposit created in previous step
    When I edit the "Fixed Deposit" of <investedAmount> with <firmName>; <newInvestedAmount>; <interestRate>; <startMonth>; <maturityMonth>
    Then Fixed Deposit details are shown correctly
    Examples:
      | firmName | investedAmount | newInvestedAmount | interestRate | startMonth | maturityMonth |
      | AU Small Finance Bank | 100000 | 110000 | 6.5 | Aug, 2022 | Aug, 2025 |

  Scenario Outline: I am able to delete the Fixed Deposit created and updated till previous step
    When I delete the "Fixed Deposit" of <investedAmount>
    Then I go back to the dashboard page
    Then I logout of Scripbox
    Examples:
      | investedAmount |
      | 110000 |