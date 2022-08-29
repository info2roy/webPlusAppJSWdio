Feature: Scripbox MyWealth: Add a Real Estate

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "MYSCRIPBOX" for "user180756"

  Scenario Outline: As a logged in user, I am able to add a Real Estate to "My Wealth"
    Given I navigate to the MyWealth "Investments" type "Real Estate"
    When I click on "Add Real Estate" for family member "Investor 156012"
    When I fill "Real Estate" form with <propertyName>, <propertyPrice>, <purchaseYear>, <currentValue>, <expectedYoyGrowthRate>
    Then Real Estate Property details are shown correctly
    Examples:
      | propertyName | propertyPrice | purchaseYear | currentValue | expectedYoyGrowthRate |
      | House1 | 4000000 | 2016 | 6000000 | 6.99 |

  Scenario Outline: I am able update the Real Estate property created in previous step
    When I edit the Real Estate property <propertyName> with <newPropertyName>, <propertyPrice>, <purchaseYear>, <currentValue>, <expectedYoyGrowthRate>
    Then Real Estate Property details are shown correctly
    Examples:
      | propertyName | newPropertyName | propertyPrice | purchaseYear | currentValue | expectedYoyGrowthRate |
      | House1 | House11 | 4500000 | 2015 | 7000000 | 6.52 |
