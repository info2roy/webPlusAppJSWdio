Feature: Scripbox Investment in Mutual Fund Goals

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "MYSCRIPBOX38" for "user189182"

  Scenario Outline: As a logged in user, I am able to invest in mutual fund goal "Premier Education"
    Given I am on the Investment Page
    When I navigate to the investment tab "Mutual Funds"
    When I click on "Add new plan" for mutual funds
    When I select mutual funds life goal as "Premier Education"
    When I click on "SHOW ME HOW" for Life Goal Plan
    When I fill "Premier Education" form with <class>
    When I select "Premier Education" plan for college type <collegeType>
    When I click "CONTINUE" to explore plan for "Premier Education"
    When I fill "Premier Education" second form with <childname>, <yearlyFees>
    When I click "CONTINUE" on the Yearly Fees Breakup Goal Page
    When I click "SHOW PLAN FOR" on the Yearly Fees Breakup Plan Page
    When I click "START WITH" for "Premier Education" Working Plan
    When I click "CONTINUE" on the "Premier Education" Suggested Plan
    When I click on "CREATE A PLAN OR SIGNUP OR LOGIN" for Life Goal Plan
    Examples:
      | class | collegeType | childname | yearlyFees |
      #| 1  | Government Colleges  | child1 | 100000 |
      #| 2  | Private Colleges  | child2 | 200000 |
      | 3  | Premier Private Colleges  | child3 | 300000 |