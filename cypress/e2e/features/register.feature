Feature: This feature ensures that the registeration functionalities on the liveet app works as it is expected

    As a user i want to login successfully so i can perform some purchase functionality

    Scenario: Verify that user can register on the app successfully
    Given the user is on the landing page
    When the user clicks on register, fills the registeration form and follows the prompt
    Then the user should be successfully signed in 
    