import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

let userData;
let userUpdateResponse;

Given('I have the following user data to update:', (dataTable) => {
  userData = dataTable.hashes()[0];
});

When('I make a PUT request to the api users endpoint', () => {
  cy.request({
    method: 'PUT',
    url: 'https://reqres.in/api/users/2',
    body: userData
  }).then((response) => {
    userUpdateResponse = response;
  });
});

Then('I receive a response status code {int}', (statusCode) => {
  expect(userUpdateResponse.status).to.equal(statusCode);
});

Then('the response includes the created user details', () => {
    const { name, job } = userData;
    const expectedData = { name, job };
  
    // Remove the 'updatedAt' field from the response body, if present
    const responseBodyWithoutUpdatedAt = Cypress._.omit(
      userUpdateResponse.body,
      'updatedAt'
    );
  
    // Assert that the response body matches the expected data (excluding 'updatedAt')
    expect(responseBodyWithoutUpdatedAt).to.deep.equal(expectedData);
  });