Feature: Delete User API Testing

Scenario: Deleting a user with specific details
    Given I want to delete a user with ID 2
    When I make a DELETE request to the api users endpoint
    Then I receive a response status code 204
