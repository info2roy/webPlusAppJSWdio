Feature: As customer I wish to update my account details

  Scenario: As a Scripbox user I login  and try to update my user name
    Given I login to Scripbox in "MYSCRIPBOX" for "user189182"

  # Scenario Outline: As a logged in user I wish to update my Bank details
  #   When I open the more options
  #   When I navigate to "Account and Family Information" Page from More Options Page
  #   And I click edit "bank"
  #   And I enter data for <Option> with value <Value>
  #   And I update changes
  #   And I see message <UiMessage> for <Value>
  #   Examples:
  #     | Option | Value          | UiMessage                              |
  #     | bank   | No data needed | Bank Account change has been submitted |

  # Scenario Outline: As a logged in user I wish to enter empty Bank details to see UI message
  #   When I go back to the dashboard page
  #   When I open the more options
  #   When I navigate to "Account and Family Information" Page from More Options Page
  #   Then I click edit "bank"
  #   And I enter data for <Option> with value <Value>
  #   And I update changes
  #   And I see message <UiMessage> for <Value>
  #   Examples:
  #     | Option         | Value | UiMessage                           |
  #     | account number | Blank | Account number cannot be blank      |
  #     | account holder | Blank | Account holder name cannot be blank |
  #     | IFSC           | Blank | IFSC code cannot be blank           |

  # Scenario Outline: As a logged in user I wish to enter wrong bank details to see UI message
  #   When I go back to the dashboard page
  #   When I open the more options
  #   When I navigate to "Account and Family Information" Page from More Options Page
  #   Then I click edit "bank"
  #   And I enter data for <Option> with value <Value>
  #   And I update changes
  #   And I see message <UiMessage> for <Value>
  #   Examples:
  #     | Option         | Value | UiMessage                                     |
  #     | account number | @@@   | Account number cannot be blank                |
  #     | account holder | 123   | Please enter a valid name                     |
  #     | IFSC           | 11    | Ifsc code must be at least 11 characters long |

  # Scenario: As a logged in user I wish to update my nominee
  #   When I go back to the dashboard page
  #   When I open the more options
  #   When I navigate to "Account and Family Information" Page from More Options Page
  #   And I click edit "nominee"
  #   And I enter data for <Option> with value <Value>
  #   And I update changes
  #   And I should see "Nominee change has been submitted" success message
  #   Examples:
  #     | Option  | Value          | UiMessage                         |
  #     | nominee | No data needed | Nominee change has been submitted |

# Scenario: As a logged in user I wish to enter blank nominee details for UI message
#   When I go back to the dashboard page
#   When I open the more options
#   When I navigate to "Account and Family Information" Page from More Options Page
#   And I click edit "nominee"
#   And I enter data for <Option> with value <Value>
#   And I update changes
#   And I should see "Nominee change has been submitted" success message
#   Examples:
#     | Option  | Value          | UiMessage                         |
#     | nominee name | Blank | Name cannot be blank,Please enter a valid name |