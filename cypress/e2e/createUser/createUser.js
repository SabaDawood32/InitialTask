import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

let userData;

Given('I have the following station data to post:', (dataTable) => {
  userData = dataTable.hashes()[0];
});

When('I post the user data request body to the Create user', () => {
  cy.request({
    method: 'POST',
    url: 'https://reqres.in/api/users',
    body: userData
  }).as('createUser');
});

Then('I receive a response status code {int}', (statusCode) => {
  cy.get('@createUser').its('status').should('eq', statusCode);
});

Then('Verify below response for the user', () => {
  cy.get('@createUser').then((response) => {
    expect(response.status).to.equal(201);
    expect(response.body).to.deep.include(userData);
  });
});
