Feature: Scripbox MyWealth: Add a Real Estate

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "ANDROMEDA" for "mahesh.bale@scripbox.com"

  Scenario Outline: As a logged in user, I am able to add a Real Estate to "My Wealth"
    Given I navigate to the MyWealth "Investments" type "Real Estate"
    When I click on "Add Real Estate" for family member "Mahesh Rajesham Bale"
    When I fill "Real Estate" form with <propertyName>, <propertyPrice>, <purchaseYear>, <currentValue>, <expectedYoyGrowthRate>
    Then "Real Estate" Property details are shown correctly
    Examples:
      | propertyName | propertyPrice | purchaseYear | currentValue | expectedYoyGrowthRate |
      | 2 BHK In Bangalore | 4000000 | 2016 | 6000000 | 6.99 |

  Scenario Outline: I am able update the Real Estate property created in previous step
    When I edit the "Real Estate" property <propertyName> with <newPropertyName>, <propertyPrice>, <purchaseYear>, <currentValue>, <expectedYoyGrowthRate>
    Then "Real Estate" Property details are shown correctly
    Examples:
      | propertyName | newPropertyName | propertyPrice | purchaseYear | currentValue | expectedYoyGrowthRate |
      | 2 BHK In Bangalore | 3 BHK In Bangalore | 4500000 | 2015 | 7000000 | 6.52 |

  Scenario Outline: I am able to delete the Real Estate property created and updated till previous step
    When I delete the "Real Estate" property <propertyName>
    Then I go back to the dashboard page
    Then I logout of Scripbox
    Examples:
      | propertyName |
      | 3 BHK In Bangalore |