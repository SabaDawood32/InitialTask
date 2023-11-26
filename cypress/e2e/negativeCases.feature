Feature: Negative cases API Testing

Scenario: Fetching non-existing user data
    When I make a GET request to the non-existing user
    Then I receive a response status code 404
    And the response body should be an empty object

Scenario: Sending a registration request without a password
    When I make a POST request to the api register endpoint with email "sydney@fife"
    Then I receive a response status code 400
    And the response body includes an error message "Missing password"

Scenario: Sending a login request without a password
    When I make a POST request to the api login endpoint with email "peter@klaven"
    Then I receive a response status code 400
    And the response body includes an error message "Missing password"
