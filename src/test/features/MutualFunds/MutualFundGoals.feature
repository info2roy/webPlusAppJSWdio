Feature: Scripbox Investment in Mutual Fund Goals

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "MYSCRIPBOX38" for "user189182"

  Scenario Outline: As a logged in user, I am able to invest in mutual fund goal "Retire Confident"
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
    When I click on "INVEST EVERY MONTH" for life goal
    When I click "CONTINUE" on the "Retire Confident" plan
    When I click "CONTINUE TO INVEST" on the "Retire Confident" plan
    When I select Payment type as <paymentType>
    When I click "CONFIRM" on the "Retire Confident" investment
    Then I should see investment scheduled successfully message
    Examples:
      | age | monthlyExpenses | retireAtAge | retirementEndAge | existingSavingsAmount | existingSavingsGrowthRate | futureMonthlyIncomeFromOtherSources | inflationPercent | paymentType | 
      | 30  | 25000  | 60 | 80 | 200000 | 8 | 10000 | 7 | Scheduled |
      #| 35  | 50K  | 50 | 70 | 100000 | 8 | 10000 | 4 | Scheduled |
      #| 41  | 40000  | 65 | 90 | 100000 | 8 | 10000 | 5 | Scheduled |

  # Scenario Outline: As a logged in user, I am able to invest in mutual fund goal "Premier Education"
  #   Given I am on the Investment Page
  #   When I navigate to the investment tab "Mutual Funds"
  #   When I click on "Add new plan" for mutual funds
  #   When I select mutual funds life goal as "Premier Education"
  #   When I click on "SHOW ME HOW" for life goal
  #   When I fill "Premier Education" form with <class>
  #   When I select "Premier Education" plan for college type <collegeType>
  #   When I click "CONTINUE" to explore plan for "Premier Education"
  #   When I fill "Premier Education" second form with <childname>, <yearlyFees>
  #   When I click "CONTINUE" on the yearly fees breakup Goal page
  #   When I click "SHOW PLAN FOR" on the yearly fees breakup Plan page
  #   When I click "START WITH" for "Premier Education" working plan
  #   When I click "CONTINUE" on the "Premier Education" suggested plan
  #   When I click on "CREATE A PLAN OR SIGNUP OR LOGIN" for Mutual Fund Goal Plan
  #   Examples:
  #     | class | collegeType | childname | yearlyFees |
  #     #| 1  | Government Colleges  | child1 | 100000 |
  #     #| 2  | Private Colleges  | child2 | 200000 |
  #     | 3  | Premier Private Colleges  | child3 | 300000 |