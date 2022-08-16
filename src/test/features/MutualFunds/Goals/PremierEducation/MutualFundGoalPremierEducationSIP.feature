Feature: Scripbox Investment in Mutual Fund Goal of Premier Education

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "MYSCRIPBOX38" for "user189182"

  Scenario Outline: As a logged in user, I am able to invest in mutual fund goal "Premier Education", then Replan the goal and finally close it
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
    When I click on "INVEST EVERY MONTH" for Life Goal Plan
    When I click "CONTINUE" for "INVEST EVERY MONTH" on the "Premier Education" Plan
    When I click "CONTINUE TO INVEST" on the "Premier Education" Plan
    When I select Payment type as <paymentType>
    When I click "CONFIRM" on the "Premier Education" investment
    Then I should see investment scheduled successfully message
    Then I click on "HOME" button
    Given I am on the Investment Page
    When I navigate to the investment tab "Mutual Funds"
    When I click on "Add new plan" for mutual funds
    When I select existing plan for mutual funds life goal "Premier Education" for child <childname>
    When I click on ">" to see plan details for "Premier Education" Plan
    When I click on "EDIT PLAN" button for "Premier Education" Plan
    When I update "College Start Year" to <newCollegeStartYear> for "Premier Education" Plan
    When I update "Current Year Fees" to <newCurrentYearFees> for "Premier Education" Plan
    When I update "Annual Fees Increase Percent" to <newAnnualFeesIncreasePercent> for "Premier Education" Plan
    When I click "CONTINUE" to Replan for "Premier Education" Plan
    When I update "Annual Contribution While In College" to <newAnnualContributionWhileInCollege> for "Premier Education" Plan
    When I fill External Savings form with <externalSavingsAmount>, <externalSavingsGrowthRate>
    When I click "SHOW PLAN DETAILS" after step 3 of Replan for "Premier Education" Plan
    When I click "CONTINUE" with SIP amount for Replan for "Premier Education" Plan
    When I click "CONTINUE" with Growth Strategy for Replan for "Premier Education" Plan
    When I click "CONTINUE TO INVEST" on the "Premier Education" Plan
    When I select Payment type as <paymentType>
    When I click "CONFIRM" on the "Premier Education" investment
    Then I should see message "Replan completed successfully"
    Then I click on "HOME" button
    Given I am on the Investment Page
    When I navigate to the investment tab "Mutual Funds"
    When I click on "Add new plan" for mutual funds
    When I select existing plan for mutual funds life goal "Premier Education"
    When I click on ">" to see plan details for "Premier Education" Plan
    When I click on "OTHER ACTIONS" button for "Premier Education" Plan
    When I click on "Stop All Investments" from "OTHER ACTIONS" for "Premier Education" Plan
    When I click on "CONFIRM" to "Stop All Investments" for "Premier Education" Plan
    When I click on "HOME" button
    Given I am on the Investment Page
    When I navigate to the investment tab "Mutual Funds"
    When I click on "Add new plan" for mutual funds
    When I select for closure the existing plan for mutual funds life goal "Premier Education"
    When I click on ">" to see plan details for "Premier Education" Plan
    When I click on "OTHER ACTIONS" button for "Premier Education" Plan
    When I click on "Close Plan" from "OTHER ACTIONS" for "Premier Education" Plan
    When I click on "CLOSE THIS PLAN" button for "Premier Education" Plan
    Then I click on "GO TO DASHBOARD" button
    Examples:
      | class | collegeType | childname | yearlyFees | paymentType | newCollegeStartYear | newCurrentYearFees | newAnnualFeesIncreasePercent | newAnnualContributionWhileInCollege | externalSavingsAmount | externalSavingsGrowthRate |
      #| 1  | Government Colleges  | child2 | 100000 | ScheduledOneClickInvest | 2035 | 150000 | 9 | 50000 | 70000 | 10 |
      | 2  | Private Colleges  | child1 | 200000 | ScheduledOneClickInvest | 2035 | 250000 | 8 | 100000 | 150000 | 8 |
      #| 3  | Premier Private Colleges  | child3 | 300000 | ScheduledOneClickInvest | 2035 | 350000 | 7 | 120000 | 120000 | 7 |