Feature: Scripbox Investment in Mutual Fund Goal for Premier Education

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "MYSCRIPBOX" for "user189182"

  Scenario Outline: As a logged in user, I am able to invest in mutual fund goal "Premier Education" for two children and then close the goal
    Given I am on the Investment Page
    When I navigate to the investment tab "Mutual Funds"
    When I click on "Add new plan" for mutual funds
    When I select mutual funds life goal as "Premier Education"
    When I click on "SHOW ME HOW" for Life Goal Plan
    When I fill "Premier Education" form with <child1Class>
    When I select "Premier Education" plan for college type <child1CollegeType>
    When I click "CONTINUE" to explore plan for "Premier Education"
    When I fill "Premier Education" second form with <child1Name>, <child1YearlyFees>
    When I click "CONTINUE" on the Yearly Fees Breakup Goal Page
    When I click "SHOW PLAN FOR" on the Yearly Fees Breakup Plan Page
    When I click "START WITH" for "Premier Education" Working Plan
    When I click "CONTINUE" on the "Premier Education" Suggested Plan
    When I click on "CREATE A PLAN OR SIGNUP OR LOGIN" for Life Goal Plan for user "user189182"
    When I click on "INVEST EVERY MONTH" for Life Goal Plan
    When I click "CONTINUE" for "INVEST EVERY MONTH" on the "Premier Education" Plan
    When I click "CONTINUE TO INVEST" on the "Premier Education" Plan
    When I select Payment type as <child1PaymentType>
    When I click "CONFIRM" on the "Premier Education" investment
    Then I should see investment scheduled successfully message
    Then I click on "HOME" button
    Given I am on the Investment Page
    When I navigate to the investment tab "Mutual Funds"
    When I click on "Add new plan" for mutual funds
    Then I can add another mutual funds life goal as "Premier Education"
    Then I go back to the dashboard page
    Given I am on the Investment Page
    When I navigate to the investment tab "Mutual Funds"
    When I click on "Add new plan" for mutual funds
    When I select existing plan for mutual funds life goal "Premier Education" for child <child1Name>
    When I click on ">" to see plan details for "Premier Education" Plan
    When I click on "OTHER ACTIONS" button for "Premier Education" Plan
    When I click on "Stop All Investments" from "OTHER ACTIONS" for "Premier Education" Plan
    When I click on "CONFIRM" to "Stop All Investments" for "Premier Education" Plan
    When I click on "HOME" button
    Given I am on the Investment Page
    When I navigate to the investment tab "Mutual Funds"
    When I click on "Add new plan" for mutual funds
    When I select for closure the existing plan for mutual funds life goal "Premier Education" for child <child1Name>
    When I click on ">" to see plan details for "Premier Education" Plan
    When I click on "OTHER ACTIONS" button for "Premier Education" Plan
    When I click on "Close Plan" from "OTHER ACTIONS" for "Premier Education" Plan
    When I click on "CLOSE THIS PLAN" button for "Premier Education" Plan
    Then I click on "GO TO DASHBOARD" button
    Examples:
      | child1Class | child1CollegeType | child1Name | child1YearlyFees | child1PaymentType |
      | 1  | Government Colleges  | child1 | 100000 | Scheduled |
      