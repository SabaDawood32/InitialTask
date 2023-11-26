Feature: Validate for all user

Scenario: To access reqres.in and perform basic API test to fetch users
    Given I access api request endpoint to get users
    Then Verify below response for the user
    | email                  | firstname | lastname | avatar |
    | george.bluth@reqres.in | George    | Bluth    | https://reqres.in/img/faces/1-image.jpg |
