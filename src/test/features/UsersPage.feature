Feature: Creation of an Admin/Client account and Delete

  Scenario: As Admin, I want to create an account with HealthDay
    Given I launch HealthDay "HDAY_QA" environment
    And I login to "HDAY_QA" environment as "ADMIN_QA"

  Scenario: As a logged in user I see basic headers and components in create user modal
    When I click on add new button
    And I validate create user modal is opened
    Then I validate header "Create user"
    And I validate header "Basic details"
    And I validate header "User role:"
    And I validate button "Create"
    And I validate button "Cancel"
    And I validate header "Upload"
    And I click on "Cancel"

  Scenario: As a logged in user I want to create an Admin account
    When I click on add new button
    And I validate create user modal is opened
    And I enter field "name" with data "AutoTest1"
    And I enter field "username" with data "AutoTestUserName1"
    And I enter field "email" with data AutoTest1@gmail.com
    And I enter field "password" with data "AutoTest123"
    And I select user role Admin
    And I click on "Create"
    Then I validate header "Created user successfully"

Scenario: As a logged in user I want to delete a newly created Admin account
    When I validate creation on listing page "AutoTest1"
    And I validate delete button for "AutoTest1"
    Then I delete from list "AutoTest1"
    And I click on "Delete"
    Then I validate header "User deleted successfully"


  Scenario: As a logged in user I want to create an Client account
    When I click on add new button
    And I validate create user modal is opened
    And I enter field "name" with data "AutoTest2"
    And I enter field "username" with data "AutoTestUserName2"
    And I enter field "email" with data AutoTest2@gmail.com
    And I enter field "password" with data "AutoTest123"
    And I select user role Client
    And I enter field "contactName" with data "AutoTest123"
    And I enter field "contactEmail" with data AutoTest2@gmail.com
    And I enter field "contactPhone" with data 9876543210
    And I validate header "Services:"
    And I click on "regular"
    And I click on "Create"
    Then I validate header "Created user successfully"

  Scenario: As a logged in user I want to delete a newly created Client account
    When I validate creation on listing page "AutoTest2"
    And I validate delete button for "AutoTest2"
    Then I delete from list "AutoTest2"
    And I click on "Delete"
    Then I validate header "User deleted successfully"

