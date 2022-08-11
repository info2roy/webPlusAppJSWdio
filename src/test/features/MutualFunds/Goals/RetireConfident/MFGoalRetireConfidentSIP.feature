Feature: Scripbox Investment in Mutual Fund Goals

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "MYSCRIPBOX2" for "user189182"

  Scenario Outline: As a logged in user, I am able to INVEST EVERY MONTH in mutual fund goal "Retire Confident"
    Given I am on the Investment Page
    When I navigate to the investment tab "Mutual Funds"
    When I click on "Add new plan" for mutual funds
    When I select mutual funds life goal as "Retire Confident"
    When I click on "SHOW ME HOW" for Life Goal Plan
    When I fill "Retire Confident" form with <age>, <monthlyExpenses>, <retireAtAge>, <retirementEndAge>
    When I fill Existing Savings form with <existingSavingsAmount>, <existingSavingsGrowthRate>, <futureMonthlyIncomeFromOtherSources>
    When I select inflation rate as <inflationPercent>%
    When I click on CONTINUE with retirement Plan
    When I click on "CREATE A PLAN OR SIGNUP OR LOGIN" for Life Goal Plan
    When I click on "INVEST EVERY MONTH" for Life Goal Plan
    When I click "CONTINUE" for "INVEST EVERY MONTH" on the "Retire Confident" Plan
    When I click "CONTINUE TO INVEST" on the "Retire Confident" Plan
    When I select Payment type as <paymentType>
    When I click "CONFIRM" on the "Retire Confident" investment
    Then I should see investment scheduled successfully message
    Then I click on "HOME" button
    Examples:
      | age | monthlyExpenses | retireAtAge | retirementEndAge | existingSavingsAmount | existingSavingsGrowthRate | futureMonthlyIncomeFromOtherSources | inflationPercent | paymentType | 
      | 30  | 25000  | 60 | 80 | 200000 | 8 | 10000 | 7 | ScheduledOneClickInvest |

  Scenario Outline: As a logged in user, I am able to add new SIPs (scheduled payment) to existing mutual fund goal "Retire Confident"
    Given I am on the Investment Page
    When I navigate to the investment tab "Mutual Funds"
    When I click on "Add new plan" for mutual funds
    When I refresh the current page
    When I select existing plan for mutual funds life goal "Retire Confident"
    When I click on "Invest More" for the existing plan for Life Goal "Retire Confident"
    When I select <investmentType> and fill <amount> and click to see recommended funds
    When I accept the recommended mutual fund allocation and click NEXT
    When I select Payment type as <paymentType>
    When I select SIP duration in months as <sipInMonths> and click NEXT
    Then I should see investment scheduled successfully message
    When I click on "VIEW INVESTMENTS" button
    Then I should see extra "Retire Confident SIP" for <amount> to be present in the investments list
    Then I go back to the dashboard page
    Examples:
      | investmentType | amount | paymentType | sipInMonths |
      | Every month (SIP) | 6000 | ScheduledOneClickInvest | 0 |
      | Every month (SIP) | 7000 | ScheduledOneClickInvest | 60 |

  Scenario Outline: As a logged in user, I am able to add new OneTime investments (scheduled payment) to existing mutual fund goal "Retire Confident"
    Given I am on the Investment Page
    When I navigate to the investment tab "Mutual Funds"
    When I click on "Add new plan" for mutual funds
    When I select existing plan for mutual funds life goal "Retire Confident"
    When I click on "Invest More" for the existing plan for Life Goal "Retire Confident"
    When I select <investmentType> and fill <amount> and click to see recommended funds
    When I accept the recommended mutual fund allocation and click NEXT
    When I select Payment type as <paymentType>
    When I select scheduled investment date and click NEXT
    Then I should see investment scheduled successfully message
    When I click on "VIEW INVESTMENTS" button
    Then I should see extra "Retire Confident OneTime" for <amount> to be present in the investments list
    Then I go back to the dashboard page
    Examples:
      | investmentType | amount | paymentType |
      | One time | 20000 | ScheduledOneClickInvest |

  Scenario Outline: As a logged in user, I am able to add new SIPs (Immediate payment) to existing mutual fund goal "Retire Confident"
    Given I am on the Investment Page
    When I navigate to the investment tab "Mutual Funds"
    When I click on "Add new plan" for mutual funds
    When I select existing plan for mutual funds life goal "Retire Confident"
    When I click on "Invest More" for the existing plan for Life Goal "Retire Confident"
    When I select <investmentType> and fill <amount> and click to see recommended funds
    When I accept the recommended mutual fund allocation and click NEXT
    When I select Payment type as <paymentType>
    When I select SIP duration in months as <sipInMonths> and click NEXT
    When I select Payment Instrument of type <paymentInstrumentType>
    When I go for Payment via selected Payment Instrument
    When I select mock payment status as <paymentStatus>
    Then I should see fund transfer success message and click on HOME
    Then I should see investment success message and click on HOME
    Then I click on "GO TO DASHBOARD" button
    When I navigate to "Investment Calender" from Dashboard
    Then I should see extra "Retire Confident SIP" for <amount> to be present in the investments list
    Then I go back to the dashboard page
    Examples:
      | investmentType | amount | paymentType | sipInMonths | paymentInstrumentType | paymentStatus |
      | Every month (SIP) | 6300 | Immediate | 0 | Net Banking | Success |
      | Every month (SIP) | 7300 | Immediate | 60 | Net Banking | Success |

  Scenario Outline: As a logged in user, I am able to add new OneTime investments (Immediate payment) to existing mutual fund goal "Retire Confident"
    Given I am on the Investment Page
    When I navigate to the investment tab "Mutual Funds"
    When I click on "Add new plan" for mutual funds
    When I select existing plan for mutual funds life goal "Retire Confident"
    When I click on "Invest More" for the existing plan for Life Goal "Retire Confident"
    When I select <investmentType> and fill <amount> and click to see recommended funds
    When I accept the recommended mutual fund allocation and click NEXT
    When I select Payment type as <paymentType>
    When I select Payment Instrument of type <paymentInstrumentType>
    When I go for Payment via selected Payment Instrument
    When I select mock payment status as <paymentStatus>
    Then I should see fund transfer success message and click on HOME
    Then I should see investment success message and click on HOME
    Then I click on "GO TO DASHBOARD" button
    When I navigate to "Investment Calender" from Dashboard
    Then I should see extra "Retire Confident OneTime" for <amount> to be present in the investments list
    Then I go back to the dashboard page
    Examples:
      | investmentType | amount | paymentType | paymentInstrumentType | paymentStatus |
      | One time | 62000 | Immediate | Net Banking | Success |

  Scenario Outline: As a logged in user, I am able to do "Other Actions -> Start a new SIP" (scheduled payment) to existing mutual fund goal "Retire Confident"
    Given I am on the Investment Page
    When I navigate to the investment tab "Mutual Funds"
    When I click on "Add new plan" for mutual funds
    When I select existing plan for mutual funds life goal "Retire Confident"
    When I click on "Other actions" for the existing plan for Life Goal "Retire Confident"
    When I click on "Other actions" -> "Start a new SIP" for Life Goal "Retire Confident"
    When I have already selected <investmentType> and fill <amount> and click to see recommended funds
    When I accept the recommended mutual fund allocation and click NEXT
    When I select Payment type as <paymentType>
    When I select SIP duration in months as <sipInMonths> and click NEXT
    Then I should see investment scheduled successfully message
    When I click on "VIEW INVESTMENTS" button
    Then I should see extra "Retire Confident SIP" for <amount> to be present in the investments list
    Then I go back to the dashboard page
    Examples:
      | investmentType | amount | paymentType | sipInMonths |
      | Every month (SIP) | 8000 | ScheduledOneClickInvest | 0 |
      | Every month (SIP) | 9000 | ScheduledOneClickInvest | 60 |

  Scenario Outline: As a logged in user, I am able to do "Other Actions -> Start a new SIP" (immediate payment) to existing mutual fund goal "Retire Confident"
    Given I am on the Investment Page
    When I navigate to the investment tab "Mutual Funds"
    When I click on "Add new plan" for mutual funds
    When I select existing plan for mutual funds life goal "Retire Confident"
    When I click on "Other actions" for the existing plan for Life Goal "Retire Confident"
    When I click on "Other actions" -> "Start a new SIP" for Life Goal "Retire Confident"
    When I have already selected <investmentType> and fill <amount> and click to see recommended funds
    When I accept the recommended mutual fund allocation and click NEXT
    When I select Payment type as <paymentType>
    When I select SIP duration in months as <sipInMonths> and click NEXT
    When I select Payment Instrument of type <paymentInstrumentType>
    When I go for Payment via selected Payment Instrument
    When I select mock payment status as <paymentStatus>
    Then I should see fund transfer success message and click on HOME
    Then I should see investment success message and click on HOME
    Then I go back to the dashboard page
    When I navigate to "Investment Calender" from Dashboard
    Then I should see extra "Retire Confident SIP" for <amount> to be present in the investments list
    Then I go back to the dashboard page
    Examples:
      | investmentType | amount | paymentType | sipInMonths | paymentInstrumentType | paymentStatus |
      | Every month (SIP) | 11000 | Immediate | 0 | Net Banking | Success |
      | Every month (SIP) | 12300 | Immediate | 60 | Net Banking | Success |

  Scenario Outline: As a logged in user, I am able to do "Other Actions -> Invest one-time" (scheduled payment) to existing mutual fund goal "Retire Confident"
    Given I am on the Investment Page
    When I navigate to the investment tab "Mutual Funds"
    When I click on "Add new plan" for mutual funds
    When I select existing plan for mutual funds life goal "Retire Confident"
    When I click on "Other actions" for the existing plan for Life Goal "Retire Confident"
    When I click on "Other actions" -> "Invest one-time" for Life Goal "Retire Confident"
    When I have already selected <investmentType> and fill <amount> and click to see recommended funds
    When I accept the recommended mutual fund allocation and click NEXT
    When I select Payment type as <paymentType>
    When I select scheduled investment date and click NEXT
    Then I should see investment scheduled successfully message
    When I click on "VIEW INVESTMENTS" button
    Then I should see extra "Retire Confident OneTime" for <amount> to be present in the investments list
    Then I go back to the dashboard page
    Examples:
      | investmentType | amount | paymentType |
      | One time | 28500 | ScheduledOneClickInvest |

  Scenario Outline: As a logged in user, I am able to do "Other Actions -> Invest one-time" (immediate payment) to existing mutual fund goal "Retire Confident"
    Given I am on the Investment Page
    When I navigate to the investment tab "Mutual Funds"
    When I click on "Add new plan" for mutual funds
    When I select existing plan for mutual funds life goal "Retire Confident"
    When I click on "Other actions" for the existing plan for Life Goal "Retire Confident"
    When I click on "Other actions" -> "Invest one-time" for Life Goal "Retire Confident"
    When I have already selected <investmentType> and fill <amount> and click to see recommended funds
    When I accept the recommended mutual fund allocation and click NEXT
    When I select Payment type as <paymentType>
    When I select Payment Instrument of type <paymentInstrumentType>
    When I go for Payment via selected Payment Instrument
    When I select mock payment status as <paymentStatus>
    Then I should see fund transfer success message and click on HOME
    Then I should see investment success message and click on HOME
    Then I click on "GO TO DASHBOARD" button
    When I navigate to "Investment Calender" from Dashboard
    Then I should see extra "Retire Confident OneTime" for <amount> to be present in the investments list
    Then I go back to the dashboard page
    Examples:
      | investmentType | amount | paymentType | paymentInstrumentType | paymentStatus |
      | One time | 32000 | Immediate | Net Banking | Success |


  Scenario Outline: As a logged in user, I am able to do Replan an existing mutual fund goal "Retire Confident"
    Given I am on the Investment Page
    When I navigate to the investment tab "Mutual Funds"
    When I click on "Add new plan" for mutual funds
    When I select existing plan for mutual funds life goal "Retire Confident"
    When I click on ">" to see plan details for "Retire Confident" Plan
    When I click on "EDIT PLAN" button for "Retire Confident" Plan
    When I update "Retirement Age" to <newRetireAtAge> for "Retire Confident" Plan
    When I update "Retirement End Age" to <newRetirementEndAge> for "Retire Confident" Plan
    When I update "Current Monthly Expenses" to <newMonthlyExpenses> for "Retire Confident" Plan
    When I update "Inflation Percent" to <newInflationPercent> for "Retire Confident" Plan
    When I click "CONTINUE" to Replan for "Retire Confident" Plan
    When I update to Replan Existing Savings with <newFutureMonthlyIncomeFromOtherSources>, <newExistingSavingsAmount>, <newExistingSavingsGrowthRate>
    When I update "SIP Increase Percent" to <sipIncreasePercent> for "Retire Confident" Plan
    When I click "SHOW PLAN DETAILS" after step 3 of Replan for "Retire Confident" Plan
    When I click "CONTINUE" with SIP amount for Replan for "Retire Confident" Plan
    When I click "CONTINUE" with Growth Strategy for Replan for "Retire Confident" Plan
    When I click "CONTINUE TO INVEST" on the "Retire Confident" Plan
    When I select Payment type as <paymentType>
    When I click "CONFIRM" on the "Retire Confident" investment
    Then I should see message "Replan completed successfully"
    Then I click on "HOME" button
    Examples:
      | newRetireAtAge | newRetirementEndAge | newMonthlyExpenses | newInflationPercent | newFutureMonthlyIncomeFromOtherSources | newExistingSavingsAmount | newExistingSavingsGrowthRate | sipIncreasePercent | paymentType |
      | 65 | 85 | 30000 | 5 | 20000 | 300000 | 10 | 7 | ScheduledOneClickInvest |

  Scenario Outline: As a logged in user, I am able close an existing mutual fund goal "Retire Confident"
    Given I am on the Investment Page
    When I navigate to the investment tab "Mutual Funds"
    When I click on "Add new plan" for mutual funds
    When I select existing plan for mutual funds life goal "Retire Confident"
    When I click on ">" to see plan details for "Retire Confident" Plan
    When I click on "OTHER ACTIONS" button for "Retire Confident" Plan
    When I click on "Stop All Investments" from "OTHER ACTIONS" for "Retire Confident" Plan
    When I click on "CONFIRM" to "Stop All Investments" for "Retire Confident" Plan
    When I click on "HOME" button
    Given I am on the Investment Page
    When I navigate to the investment tab "Mutual Funds"
    When I click on "Add new plan" for mutual funds
    When I select for closure the existing plan for mutual funds life goal "Retire Confident"
    When I click on ">" to see plan details for "Retire Confident" Plan
    When I click on "OTHER ACTIONS" button for "Retire Confident" Plan
    When I click on "Close Plan" from "OTHER ACTIONS" for "Retire Confident" Plan
    When I click on "CLOSE THIS PLAN" button for "Retire Confident" Plan
  