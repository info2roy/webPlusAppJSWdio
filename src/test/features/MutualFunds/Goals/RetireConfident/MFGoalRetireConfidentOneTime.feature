Feature: Scripbox Investment in Mutual Fund Goals

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "MYSCRIPBOX38" for "user189182"

  Scenario Outline: As a logged in user, I am able to INVEST ONE TIME in mutual fund goal "Retire Confident"
    Given I am on the Investment Page
    When I navigate to the investment tab "Mutual Funds"
    When I click on "Add new plan" for mutual funds
    When I select mutual funds life goal as "Retire Confident"
    When I click on "SHOW ME HOW" for life goal
    When I fill "Retire Confident" form with <age>, <monthlyExpenses>, <retireAtAge>, <retirementEndAge>
    When I fill Existing Savings form with <existingSavingsAmount>, <existingSavingsGrowthRate>, <futureMonthlyIncomeFromOtherSources>
    When I select inflation rate as <inflationPercent>%
    When I click on CONTINUE with retirement plan
    When I click on "CREATE A PLAN OR SIGNUP OR LOGIN" for Mutual Fund Goal Plan
    When I click on "INVEST ONE TIME" for life goal
    When I click "CONTINUE" for "INVEST ONE TIME" on the "Retire Confident" plan
    When I fill "INVEST ONE TIME" <oneTimeAmount> and click "CONTINUE" on the "Retire Confident" plan
    When I click "CONTINUE TO INVEST" on the "Retire Confident" plan
    When I select Payment type as <paymentType>
    When I click "CONFIRM" on the "Retire Confident" investment
    Then I should see investment scheduled successfully message
    Then I click on "HOME" button
    Examples:
      | age | monthlyExpenses | retireAtAge | retirementEndAge | existingSavingsAmount | existingSavingsGrowthRate | futureMonthlyIncomeFromOtherSources | inflationPercent | oneTimeAmount | paymentType | 
      | 30  | 25000  | 60 | 80 | 200000 | 8 | 10000 | 7 | 50000 | ScheduledOneClickInvest |
      #| 35  | 50K  | 50 | 70 | 100000 | 8 | 10000 | 4 | 100000 | ScheduledOneClickInvest |
      #| 41  | 40000  | 65 | 90 | 100000 | 8 | 10000 | 5 | 100000 | ScheduledOneClickInvest |