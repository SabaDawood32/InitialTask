Feature: User Updation API Testing

Scenario: Updating a user with specific details
    Given I have the following user data to update:
        | name  | job          |
        | saba  | QA Engineer  |
    When I make a PUT request to the api users endpoint
    Then I receive a response status code 200
    And the response includes the created user details