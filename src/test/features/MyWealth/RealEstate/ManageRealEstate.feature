Feature: Scripbox MyWealth: Add a Real Estate

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "ANDROMEDA" for "user180756"

  Scenario Outline: As a logged in user, I am able to add a Real Estate to "My Wealth"
    Given I navigate to the MyWealth "Investments" type "Real Estate"
    When I click on "Add Real Estate" for family member "Investor 156012"
    When I fill <wealthType> form with <propertyName>, <propertyPrice>, <purchaseYear>, <currentValue>, <expectedYoyGrowthRate>
    Then "Real Estate" Property details are shown correctly
    Examples:
      | wealthType | propertyName | propertyPrice | purchaseYear | currentValue | expectedYoyGrowthRate |
      | Real estate | 2 BHK In Bangalore | 4000000 | 2016 | 6000000 | 6.99 |

  Scenario Outline: I am able update the Real Estate property created in previous step
    When I edit the <wealthType> property <propertyName> with <newPropertyName>, <propertyPrice>, <purchaseYear>, <currentValue>, <expectedYoyGrowthRate>
    Then "Real Estate" Property details are shown correctly
    Examples:
      | wealthType | propertyName | newPropertyName | propertyPrice | purchaseYear | currentValue | expectedYoyGrowthRate |
      | Real estate | 2 BHK In Bangalore | 3 BHK In Bangalore | 4500000 | 2015 | 7000000 | 6.52 |

  Scenario Outline: I am able to delete the Real Estate property created and updated till previous step
    When I delete the <wealthType> property <propertyName>
    Then I go back to the dashboard page
    Then I logout of Scripbox
    Examples:
      | wealthType | propertyName |
      | Real estate | 3 BHK In Bangalore |