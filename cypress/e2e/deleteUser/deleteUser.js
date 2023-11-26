import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

let deleteUserResponse;
let deleteUserId;

Given('I want to delete a user with ID {int}', (userId) => {
    deleteUserId = userId;
});

When('I make a DELETE request to the api users endpoint', () => {
  cy.request({
    method: 'DELETE',
    url: `https://reqres.in/api/users/${deleteUserId}`
  }).then((response) => {
    deleteUserResponse = response;
  });
});

Then('I receive a response status code {int}', (statusCode) => {
  expect(deleteUserResponse.status).to.equal(statusCode);
});