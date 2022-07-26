Feature: Scripbox Notification Preferences Page

  Scenario: As a Scripbox user, I am logged in
    Given I login to Scripbox in "STAGING" for "user189182"

  Scenario: As a logged in user, I can view Notifications Preferences Page
    Given I am on the dashboard page
    When I open the more options
    When I navigate to "Notification Preferences" Page from More Options Page

  Scenario Outline: On the Notifications Preferences page, I can update the controls one at a time
    Then I can update notifications preference control <controlName> for channel <channel> 
    Examples:
        | controlName | channel |
        | Scheduled investment reminder (3 days prior) | email  |
        | Scheduled investment reminder (3 days prior) | sms  |
        | Investment/ Withdrawal Instruction Received | email  |
        | Investment/ Withdrawal Instruction Received | sms  |
        | Investment/ Withdrawal Cancelled | email  |
        | Investment/ Withdrawal Cancelled | sms  |
        | Investment/ Withdrawal Successful | email  |
        | Investment/ Withdrawal Successful | sms  |
        | Investment/ Withdrawal Failed | email  |
        | Investment/ Withdrawal Failed | sms  |
        | Problem with payment (insufficient balance, etc.) | email  |
        | Problem with payment (insufficient balance, etc.) | sms  |
        | Monthly Statement | email  |
        | Monthly Statement | sms  |
        | End of Month Balance | email  |
        | End of Month Balance | sms  |
        | Quaterly Rebalance trigger | email  |
        | Quaterly Rebalance trigger | sms  |
  
  Scenario: Scenario: On the Notifications Preferences page, I can update the random group of controls
    Then I can update random group of notifications preference controls