import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('I access api request endpoint to get users', () => {
    cy.request('GET', 'https://reqres.in/api/users').as('userDetails');
  });
  
  Then('Verify below response for the user', (dataTable) => {
    cy.get('@userDetails').then((response) => {
      const userData = response.body.data[0];
  
      dataTable.hashes().forEach((user) => {
        expect(userData.email).to.equal(user.email);
        expect(userData.first_name).to.equal(user.firstname);
        expect(userData.last_name).to.equal(user.lastname);
        expect(userData.avatar).to.equal(user.avatar);
      });
    });
  });