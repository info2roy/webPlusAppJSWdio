Feature: Scripbox Investment in Mutual Fund Portfolio

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "ANDROMEDA" for "user180756"

  Scenario Outline: As a logged in user, I am able to schedule investment in mutual funds via Every month (SIP)
    Given I am on the Investment Page
    Given I am on the investment tab "Mutual Funds"
    When I select mutual fund portfolio <mutualFundPortfolio>
    When I click on Invest as per Scripbox Guided Path
    When I select <investmentType> and fill <amount> and click to see recommended funds
    When I accept the recommended mutual fund allocation and click NEXT
    When I select Payment type as <paymentType>
    When I select SIP duration in months as <sipInMonths> and click NEXT
    Then I should see investment scheduled successfully message
    Then I go back to the dashboard page
    Examples:
        | mutualFundPortfolio | investmentType | amount | sipInMonths | paymentType |
        | Tax Saver Plan | Every month (SIP)  | 30000 | 90 | Scheduled |

  Scenario Outline: As a logged in user, I am able to do immediate investment in mutual funds via Every month (SIP)
    Given I am on the Investment Page
    Given I am on the investment tab "Mutual Funds"
    When I select mutual fund portfolio <mutualFundPortfolio>
    When I click on Invest as per Scripbox Guided Path
    When I select <investmentType> and fill <amount> and click to see recommended funds
    When I accept the recommended mutual fund allocation and click NEXT
    When I select Payment type as <paymentType>
    When I select SIP duration in months as <sipInMonths> and click NEXT
    When I select Payment Instrument of type <paymentInstrumentType>
    When I go for Payment via selected Payment Instrument
    When I select mock payment status as <paymentStatus>
    Then I should see fund transfer success message and click on HOME
    Then I should see investment success message and click on HOME
    Then I go back to the dashboard page
    Examples:
      | mutualFundPortfolio | investmentType | amount | sipInMonths | paymentType | paymentInstrumentType | paymentStatus |
      | Tax Saver Plan | Every month (SIP)  | 20000 | 60 | Immediate | Net Banking | Success |
  
  Scenario Outline: As a logged in user, I am able to schedule investment in mutual funds via One Time Investment
    Given I am on the Investment Page
    Given I am on the investment tab "Mutual Funds"
    When I select mutual fund portfolio <mutualFundPortfolio>
    When I click on Invest as per Scripbox Guided Path
    When I select <investmentType> and fill <amount> and click to see recommended funds
    When I accept the recommended mutual fund allocation and click NEXT
    When I select Payment type as <paymentType>
    When I select scheduled investment date and click NEXT
    Then I should see investment scheduled successfully message
    Then I go back to the dashboard page
    Examples:
        | mutualFundPortfolio | investmentType | amount | paymentType |
        | Tax Saver Plan | One time  | 50000 | Scheduled |

  Scenario Outline: As a logged in user, I am able to do immediate investment in mutual funds via One Time Investment
    Given I am on the Investment Page
    Given I am on the investment tab "Mutual Funds"
    When I select mutual fund portfolio <mutualFundPortfolio>
    When I click on Invest as per Scripbox Guided Path
    When I select <investmentType> and fill <amount> and click to see recommended funds
    When I accept the recommended mutual fund allocation and click NEXT
    When I select Payment type as <paymentType>
    When I select Payment Instrument of type <paymentInstrumentType>
    When I go for Payment via selected Payment Instrument
    When I select mock payment status as <paymentStatus>
    Then I should see fund transfer success message and click on HOME
    Then I should see investment success message and click on HOME
    Then I go back to the dashboard page
    Examples:
        | mutualFundPortfolio | investmentType | amount | paymentType | paymentInstrumentType | paymentStatus |
        | Tax Saver Plan  | One time  | 40000 | Immediate | Net Banking | Success |