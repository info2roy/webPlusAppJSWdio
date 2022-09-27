Feature: Scripbox MyWealth: Add a Government Scheme "National Saving Certificate"

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "ANDROMEDA" for "user180756"

  Scenario Outline: As a logged in user, I am able to add and update a Government Scheme "National Saving Certificate" to "My Wealth"
    Given I navigate to the MyWealth "Investments" type "Govt. Schemes"
    When I select Govt Scheme "National Saving Certificate" for family member "Mahesh Rajesham Bale"
    When I fill form with <nscInvestedAmount>; <nscInterestPercent>; <nscStartMonth>; <nscMaturityMonth> for Govt Scheme "National Saving Certificate"
    When I go back to previous page
    Then Total invested amount should get updated
    Then I select Govt Scheme "National Saving Certificate" tile for family member "Mahesh Rajesham Bale"
    Then NSC Scheme details are shown correctly for Govt Scheme "National Saving Certificate"
    Examples:
      | nscInvestedAmount | nscInterestPercent | nscStartMonth | nscMaturityMonth |
      | 123453            | 7                  | Jan, 2020     | Jan, 2025        |

  Scenario Outline: I am able update the NSC Investment created in previous step
    When I edit the "National Saving Certificate" of <nscInvestedAmount> with <newInvestedAmount>; <nscInterestPercent>; <nscStartMonth>; <nscMaturityMonth>
    When I go back to previous page
    Then Total invested amount should get updated
    Then I select Govt Scheme "National Saving Certificate" tile for family member "Mahesh Rajesham Bale"
    Then NSC Scheme details are shown correctly for Govt Scheme "National Saving Certificate"
    Examples:
      | nscInvestedAmount | newInvestedAmount | nscInterestPercent | nscStartMonth | nscMaturityMonth |
      | 123453            | 150000            | 7.5                | Mar, 2018     | Mar, 2023        |

  Scenario Outline: I delete the investment and logout
    When I delete Govt Scheme "National Saving Certificate"
    Then I go back to the dashboard page
    Then I logout of Scripbox