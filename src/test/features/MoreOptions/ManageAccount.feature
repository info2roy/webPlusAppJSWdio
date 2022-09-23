Feature: As customer I wish to update my account details

  Scenario: As a Scripbox user I login  and try to update my user name
    Given I login to Scripbox in "MOCKAPI" for "user189182"

  Scenario: As a logged in user I wish to update my User name
    When I open the more options
    When I navigate to "Personal Information" Page from More Options Page
    Then I edit "user name"
    And I update changes

  Scenario: As a logged in user I wish to update my User email
    Then I edit "user email"
    And I update changes
    And I enter OTP as 111111 for verification
    And I should see "Email change has been submitted" success message
    And I go back to the dashboard page

  Scenario: As a logged in user I wish to update my User mobile number
    When I navigate to "Personal Information" Page from More Options Page
    Then I edit "mobile number"
    And I update changes
    And I enter OTP as 111111 for verification
    And I should see "Your Mobile Number has been updated to" success message