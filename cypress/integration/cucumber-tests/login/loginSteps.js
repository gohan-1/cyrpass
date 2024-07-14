import { Given, When, Then ,And} from 'cypress-cucumber-preprocessor/steps';

Given('I open login page', () => {
  cy.visit('http://localhost:3000/login');
});

When('I fill username with {string}', (username) => {
  cy.get('[name="first_name"]').clear({ force: true }).type(username);

});
When('I fill password with {string}', (password) => {
  cy.get('[name= "password"]').clear({ force: true }).type(password);
});

And('I click the submit button', () => {
  cy.get('#sub_btn').click();
});



Then('I should be redirected to new page', () => {
  cy.url().should('include', '/home');

});
Then('I should see a success message', () => {
  cy.get('#success-message]').should('be.visible')
    .and('contain', 'Successfully!');
});

When('I click the forgot password link', () => {
  cy.get('.right-label').click();
});

Then('I should be redirected to the forgot password page', () => {
  cy.url().should('include', '/forget-password');
});

Then('I should see the forgot password form', () => {
  cy.get('form').within(() => {
    cy.get('input[name="email"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });
});

When('I click the create account link', () => {
  cy.get('a[href="/register"]').click();
});

Then('I should be redirected to the registration page', () => {
  cy.url().should('include', '/register');
});

Then('I should see the registration form', () => {
  cy.get('form').within(() => {
    cy.get('input[name="first_name"]').should('be.visible');
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });
});

