Feature: This feature ensures that the login functionalities on the liveet app works as it is expected

    As a user i want to login successfully so i can perform some purchase functionality

    Scenario: Verify that user can login on the app successfully
    Given the user is on the landing page
    When the user clicks on login and follows the prompt
    Then the user should be successfully logged in 
    