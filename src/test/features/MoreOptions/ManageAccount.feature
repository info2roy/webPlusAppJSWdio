Feature: As customer I wish to update my account details

  Scenario: As a Scripbox user I login  and try to update my user name
    Given I login to Scripbox in "MYSCRIPBOX" for "user189182"

  Scenario Outline: As a logged in user I wish to update my User name
    When I open the more options
    When I navigate to "Personal Information" Page from More Options Page
    Then I click edit "user name"
    And I enter data for <Option> with value <Value>
    And I update changes
    Examples:
      | Option    | Value       |
      | user name | TestNameABC |

  Scenario Outline: As a logged in user I wish to enter wrong User name to see UI errors
    When I go back to the dashboard page
    When I open the more options
    When I navigate to "Personal Information" Page from More Options Page
    Then I click edit "user name"
    And I enter data for <Option> with value <Value>
    And I update changes
    And I see error <UiError> for <Value>
    Examples:
      | Option    | Value | UiError                   |
      | user name | &*()  | Please enter a valid name |
      | user name | 787   | Please enter a valid name |
      | user name | Blank | Name can't be blank       |

  # Scenario Outline: As a logged in user I wish to update my User email -- commented out to avoid email update in environment
  #   When I go back to the dashboard page
  #   When I open the more options
  #   Then I click edit "user email"
  #   And I enter data for <Option> with value <Value>
  #   And I update changes
  #   And I enter OTP as 111111 for verification
  #   And I should see "Email change has been submitted" success message
  #   And I go back to the dashboard page
  #   Examples:
  #     | Option  | Value   |
  #     | user email | test_email+c1bc526b40@scripbox.io |

  Scenario Outline: As a logged in user I wish to enter wrong email to see UI errors
    When I go back to the dashboard page
    And I open the more options
    And I navigate to "Personal Information" Page from More Options Page
    And I click edit "mobile number"
    And I enter data for <Option> with value <Value>
    And I update changes
    And I see message <UiError> for <Value>
    Examples:
      | Option        | Value      | UiError                               |
      | mobile number | hello      | Phone number must be a valid number   |
      | mobile number | 99         | Please enter a 10-digit number        |
      | mobile number | Blank      | Mobile number can't be blank          |
      | mobile number | 8293630716 | Please enter a different phone number |

  Scenario Outline: As a logged in user I wish to update my User mobile number
    When I go back to the dashboard page
    And I open the more options
    And I navigate to "Personal Information" Page from More Options Page
    And I click edit "mobile number"
    And I enter data for <Option> with value <Value>
    And I update changes
    And I enter OTP as 111111 for verification
    And I see message <UiMessage> for <Value>
    Then I should see "Your Mobile Number has been updated to" success message
    Examples:
      | Option        | Value      | UiMessage                              |
      | mobile number | 8293630726 | Your Mobile Number has been updated to |