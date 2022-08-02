Feature: Scripbox Investment in Mutual Fund Goals

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "UAT38" for "user189182"

  Scenario Outline: As a logged in user, I am able to INVEST EVERY MONTH in mutual fund goal "Retire Confident"
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
    When I click "CONTINUE" for "INVEST EVERY MONTH" on the "Retire Confident" plan
    When I click "CONTINUE TO INVEST" on the "Retire Confident" plan
    When I select Payment type as <paymentType>
    When I click "CONFIRM" on the "Retire Confident" investment
    Then I should see investment scheduled successfully message
    Then I click on "HOME" button
    Examples:
      | age | monthlyExpenses | retireAtAge | retirementEndAge | existingSavingsAmount | existingSavingsGrowthRate | futureMonthlyIncomeFromOtherSources | inflationPercent | paymentType | 
      | 30  | 25000  | 60 | 80 | 200000 | 8 | 10000 | 7 | Scheduled |
      #| 35  | 50K  | 50 | 70 | 100000 | 8 | 10000 | 4 | Scheduled |
      #| 41  | 40000  | 65 | 90 | 100000 | 8 | 10000 | 5 | Scheduled |

  Scenario Outline: As a logged in user, I am able to add new SIPs (scheduled payment) to existing mutual fund goal "Retire Confident"
    Given I am on the Investment Page
    When I navigate to the investment tab "Mutual Funds"
    When I click on "Add new plan" for mutual funds
    When I refresh the current page
    When I select existing plan for mutual funds life goal "Retire Confident"
    When I invest more for the existing plan for life goal "Retire Confident"
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
      | Every month (SIP) | 6000 | Scheduled | 0 |
      | Every month (SIP) | 7000 | Scheduled | 60 |

  Scenario Outline: As a logged in user, I am able to add new OneTime investments (scheduled payment) to existing mutual fund goal "Retire Confident"
    Given I am on the Investment Page
    When I navigate to the investment tab "Mutual Funds"
    When I click on "Add new plan" for mutual funds
    When I select existing plan for mutual funds life goal "Retire Confident"
    When I invest more for the existing plan for life goal "Retire Confident"
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
      | One time | 20000 | Scheduled |

  Scenario Outline: As a logged in user, I am able to add new SIPs (Immediate payment) to existing mutual fund goal "Retire Confident"
    Given I am on the Investment Page
    When I navigate to the investment tab "Mutual Funds"
    When I click on "Add new plan" for mutual funds
    When I select existing plan for mutual funds life goal "Retire Confident"
    When I invest more for the existing plan for life goal "Retire Confident"
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
    When I invest more for the existing plan for life goal "Retire Confident"
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
    When I click on "Other actions" for the existing plan for life goal "Retire Confident"
    When I click on "Other actions" -> "Start a new SIP" for life goal "Retire Confident"
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
      | Every month (SIP) | 8000 | Scheduled | 0 |
      | Every month (SIP) | 9000 | Scheduled | 60 |

  Scenario Outline: As a logged in user, I am able to do "Other Actions -> Start a new SIP" (immediate payment) to existing mutual fund goal "Retire Confident"
    Given I am on the Investment Page
    When I navigate to the investment tab "Mutual Funds"
    When I click on "Add new plan" for mutual funds
    When I select existing plan for mutual funds life goal "Retire Confident"
    When I click on "Other actions" for the existing plan for life goal "Retire Confident"
    When I click on "Other actions" -> "Start a new SIP" for life goal "Retire Confident"
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
    When I click on "Other actions" for the existing plan for life goal "Retire Confident"
    When I click on "Other actions" -> "Invest one-time" for life goal "Retire Confident"
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
      | One time | 28500 | Scheduled |

  Scenario Outline: As a logged in user, I am able to do "Other Actions -> Invest one-time" (immediate payment) to existing mutual fund goal "Retire Confident"
    Given I am on the Investment Page
    When I navigate to the investment tab "Mutual Funds"
    When I click on "Add new plan" for mutual funds
    When I select existing plan for mutual funds life goal "Retire Confident"
    When I click on "Other actions" for the existing plan for life goal "Retire Confident"
    When I click on "Other actions" -> "Invest one-time" for life goal "Retire Confident"
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

  Scenario Outline: As a logged in user, I am able close an existing mutual fund goal "Retire Confident"
    Given I am on the Investment Page
    When I navigate to the investment tab "Mutual Funds"
    When I click on "Add new plan" for mutual funds
    When I select existing plan for mutual funds life goal "Retire Confident"
    When I click on ">" to see plan details for "Retire Confident" plan
    When I click on "OTHER ACTIONS" button for "Retire Confident" plan
    When I click on "Stop All Investments" from "OTHER ACTIONS" for "Retire Confident" plan
    When I click on "CONFIRM" to "Stop All Investments" for "Retire Confident" plan
    When I click on "HOME" button
    Given I am on the Investment Page
    When I navigate to the investment tab "Mutual Funds"
    When I click on "Add new plan" for mutual funds
    When I select existing plan for mutual funds life goal "Retire Confident"
    When I click on ">" to see plan details for "Retire Confident" plan
    When I click on "OTHER ACTIONS" button for "Retire Confident" plan
    When I click on "Close Plan" from "OTHER ACTIONS" for "Retire Confident" plan