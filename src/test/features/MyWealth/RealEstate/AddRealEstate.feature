Feature: Scripbox MyWealth: Add a Real Estate

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "MYSCRIPBOX" for "user180756"

  Scenario Outline: As a logged in user, I am able to add and update a Real Estate to "My Wealth"
    Given I navigate to the MyWealth "Investments" type "Real Estate"
    When I click on "Add Real Estate" for family member "Investor 156012"
    When I fill "Real Estate" form with <propertyName>, <propertyPrice>, <purchaseYear>, <currentValue>, <expectedYoyGrowthRate>
    Then Real Estate Property details are shown correctly
    Examples:
      | propertyName | propertyPrice | purchaseYear | currentValue | expectedYoyGrowthRate |
      | House1 | 4000000 | 2016 | 6000000 | 6.99 |
