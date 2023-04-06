Feature: Scripbox Login from home page

  Scenario: As a user, I can log into the HealthDay in specific environment
    Given I launch HealthDay "HDAY_QA" environment
    # And I login to "HDAY_QA" environment as "ADMIN_QA"

  Scenario: As a user, I want to assert all the login page components are present.
    When I see Healthday logo present in login page
    Then I validate login form present
    And I validate login email text box present
    And I validate login password text box present
    And I validate show password checkbox box present
    And I validate login button present

  Scenario: As a user, I want to assert login page errors for no credentials entered.
    When I click on "Log In"
    Then I validate header "Email address is required*"
    Then I validate header "Password is required*"
