import { When, Then } from 'cypress-cucumber-preprocessor/steps';

let response;

When('I make a GET request to the non-existing user', () => {
  cy.request({
    method: 'GET',
    url: 'https://reqres.in/api/users/23',
    failOnStatusCode: false,
  }).then((res) => {
    response = res;
  });
});

Then('I receive a response status code 404', () => {
  expect(response.status).to.equal(404);
});

Then('the response body should be an empty object', () => {
  expect(response.body).to.deep.equal({});
});
//------------------------------------ unsucessful Register--------------------------------
When('I make a POST request to the api register endpoint with email {string}', (email) => {
  cy.request({
    method: 'POST',
    url: 'https://reqres.in/api/register',
    body: { email },
    failOnStatusCode: false,
  }).then((res) => {
    response = res;
  });
});

Then('I receive a response status code 400', () => {
  expect(response.status).to.equal(400);
});

Then('the response body includes an error message {string}', (errorMessage) => {
  expect(response.body).to.have.property('error', errorMessage);
});
//------------------------------------ unsucessful Register--------------------------------
When('I make a POST request to the api login endpoint with email {string}', (email) => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      body: { email },
      failOnStatusCode: false,
    }).then((res) => {
      response = res;
    });
  });
  
  Then('I receive a response status code 400', () => {
    expect(response.status).to.equal(400);
  });
  
  Then('the response body includes an error message {string}', (errorMessage) => {
    expect(response.body).to.have.property('error', errorMessage);
  });