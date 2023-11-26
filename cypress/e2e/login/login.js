import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

let loginData;
let loginResponse;

Given('I have the following login credentials:', (dataTable) => {
  loginData = dataTable.hashes()[0];
});

When('I make a POST request to the api login endpoint', () => {
  cy.request({
    method: 'POST',
    url: 'https://reqres.in/api/login',
    body: loginData
  }).then((response) => {
    loginResponse = response;
  });
});

Then('I receive a response status code {int}', (statusCode) => {
  expect(loginResponse.status).to.equal(statusCode);
});

Then('the response includes a token', () => {
  expect(loginResponse.status).to.equal(200);
  expect(loginResponse.body).to.have.property('token');
});