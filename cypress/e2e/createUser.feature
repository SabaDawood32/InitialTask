Feature: Creation of User using reqres.in
    Scenario: To access reqres.in and perform basic API test to fetch users
        Given I have the following station data to post:
        | name | job |
        | saba | leader |
        When I post the user data request body to the Create user
        Then I receive a response status code 201
        Then Verify below response for the user
        | name | job | 
        | saba | leader |