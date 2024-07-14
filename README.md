Cypress-Cucumber Integration for User Authentication
This repository demonstrates the integration of Cypress with the Cucumber-preprocessor for testing user authentication features. It includes tests for login, forgot password, and create account Installation.




## Table of contents
* [Installation](#Installation)
* [Folder Structure](#Folder-Structure)
* [Running Tests](#Running-Tests)
* [Cypress Step Definitions](#Cypress-Step-Definitions)
* [Feature Files](#Feature-Files)
* [Contributing](#contributing)
* 
* [Final Words](#final-words)
* [License](#license)

## Installation

git clone https://github.com/gohan-1/cyrpass.git/
cd cyrass

## Folder Structure
cypress-cucumber-authentication/
├── cypress/
│   ├── integration/
│   │   ├── login/
│   │   │   ├── login.feature
│   │   │   ├── forgotPassword.feature
│   │   │   ├── createAccount.feature
│   │   ├── step_definitions/
│   │   │   ├── login.js
│   │   │   ├── forgotPassword.js
│   │   │   ├── createAccount.js
│   ├── support/
│       ├── index.js
│
├── package.json
└── README.md

* React js
* HTML5
* CSS3

## Running Tests

To view and test the app you can visit this [link](https://logsterapp.netlify.com/).
To run the Cypress tests with Cucumber:

Open Cypress Test Runner:

bash
Copy code
npx cypress open
Run tests headlessly:

bash
Copy code
npx cypress run
Cypress Step Definitions
The step definitions for the tests are located in the cypress/integration/step_definitions folder.

login.js
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('I open login page', () => {
  cy.visit('http://localhost:3000/login');
});

When('I fill username with {string}', (username) => {
  cy.get('[name="first_name"]').clear({ force: true }).type(username);
});

When('I fill password with {string}', (password) => {
  cy.get('[name="password"]').clear({ force: true }).type(password);
});

And('I click the submit button', () => {
  cy.get('#sub_btn').click();
});

Then('I should be redirected to new page', () => {
  cy.url().should('include', '/home');
});

Then('I should see a success message', () => {
  cy.get('#success-message').should('be.visible').and('contain', 'Successfully!');
});
import { When, Then } from 'cypress-cucumber-preprocessor/steps';

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
createAccount.js
javascript
Copy code
import { When, Then } from 'cypress-cucumber-preprocessor/steps';

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

## Feature Files

* [react-router-dom](https://www.npmjs.com/package/react-router-dom)
  The feature files are located in the cypress/integration/login folder.
  login.feature
Feature: User login and navigation

  Scenario: Login with valid credentials
    Given I open login page
    When I fill username with "valid_user"
    And I fill password with "valid_password"
    And I click the submit button
    Then I should be redirected to new page
    And I should see a success message
  forgotPassword.feature
  
Feature: Forgot Password

  Scenario: Navigate to forgot password page
    Given I open login page
    When I click the forgot password link
    Then I should be redirected to the forgot password page
    And I should see the forgot password form
    createAccount.feature

Feature: Create Account

  Scenario: Navigate to create account page
    Given I open login page
    When I click the create account link
    Then I should be redirected to the registration page
    And I should see the registration form

## Contributing

Pull requests are welcome. Please feel free to submit an issue first to discuss what you would like to change.

The process to start is simple, just make sure you have [Node js](https://nodejs.org/en/) installed in your computer. 

First you need to go to project's main directory which contains package.json file

```bash
    git clone [Repository]

    cd [Repository-Directory]

    npm install

    npm start
```
or
```bash
    git clone [Repository]

    cd [Repository-Directory]

    yarn install

    yarn start
```
.. happy Coding..!!



## Support

Reach out to me at one of the following places!

- Website at <a href="https://izemspot.netlify.com" target="_blank">`izemspot.netlify.com`</a>
- Gmail <a href="mailto:zmr.ilyas@gmail.com" target="_blank">`zmr.ilyas@gmail.com`</a>



## Final Words

If you like the app, please give it a star. It will mean a lot for me :)

## License

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2019 © <a href="https://izemspot.netlify.com" target="_blank">IZEMSPOT</a>.
