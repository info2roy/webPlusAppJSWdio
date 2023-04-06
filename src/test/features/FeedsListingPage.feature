Feature: Navigation to Feeds listing page

  Scenario: As Admin, I want to create an account with HealthDay
    Given I launch HealthDay "HDAY_QA" environment
    And I login to "HDAY_QA" environment as "ADMIN_QA"

  Scenario: As a logged in user I navigate to feeds listing page & verify basic headers
    When I click on "Feeds"
    Then I validate header "Name"
    And I validate header "Client"
    And I validate header "Type"

  # Scenario: As a logged in user I want to verify feed builder page #1 basic headers
  #   When I click on add new button
  #   And I validate create feed modal is opened
  #   Then I validate header "Create feed"
  #   And I validate header "Feed contents"
  #   And I validate header "Product type"
  #   And I validate header "Client username"
  #   And I validate header "Topics"
  #   And I validate header "Tags to include"
  #   And I validate header "Tags to exclude"
  #   And I validate header "Topics"
  #   And I validate button "Next"
  #   And I validate button "Cancel"
  #   And I validate button "Advanced Editor"

  # Scenario: As a logged in user I want to verify feed builder page #2 basic headers
  #   When I validate create feed modal is opened
  #   And I enter field "name" with data AutoFeed1
  #   And I select client for feed as "priyankar roy"
  #   And I select Product type for feed as "Consumer News"
  #   And I click on "Next"
  #   Then I validate header "Feed Metadata"
  #   And I validate header "Image size:"
  #   And I validate header "Video medium:"
  #   And I validate header "Feed Format:"
  #   And I validate header "Feed Type:"
  #   And I validate button "Advanced Editor"
  #   And I validate button "Cancel"
  #   And I validate button "Previous"
  #   And I validate button "Create"

  # Scenario: As a logged in user I want to create a Regular feed with minimum selection.
  #   When I click on "Create"
  #   Then I validate header "Feed created successfully"
  #   And I validate creation on listing page "AutoFeed1"

  # Scenario: As a logged in user I want to a newly created Client account
  #   When I validate creation on listing page "AutoFeed1"
  #   And I validate delete button for "AutoFeed1"
  #   Then I delete from list "AutoFeed1"
  #   And I click on "Delete"
  #   Then I validate header "Feed deleted successfully"

  # Scenario: As a logged in user I want to see user warnings for not proper selections of mandatory fields.
  #   When I click on "Feeds"
  #   And I click on add new button
  #   And I validate create feed modal is opened
  #   And I click on "Next"
  #   Then I validate header "Feed name is required*"
  #   Then I validate header "Client username is required*"
  #   Then I validate header "Product type is required*"


  Scenario: As a logged in user I want to create a Regular feed with all selections.
    When I click on "Feeds"
    And I click on add new button
    And I validate create feed modal is opened
    And I enter field "name" with data AutoFeed1
    And I select client for feed as "priyankar roy"
    And I select Product type for feed as "Consumer News"
    And I click on "Next"
    And I click on "raw-files"
    And I click on "JSON"
    And I click on "Regular"
    And I toggle feed encrypt button


