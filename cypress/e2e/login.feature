Feature: Login API Testing

Scenario: Login with valid credentials
    Given I have the following login credentials:
        | email              | password    |
        | eve.holt@reqres.in | cityslicka  |
    When I make a POST request to the api login endpoint
    Then I receive a response status code 200
    And the response includes a token