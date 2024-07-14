Feature: User login and navigation

  As a valid login
  I want to log in into Application
  As a Invalid login
  I cannot login to Application
  I want to reset my password
  So that I can regain access to my account
  I want to create an account
  So that I can access the application
 

  Scenario: valid user
    Given I open login page
    When I fill username with "username"
    When I fill password with "password"
    And I click the submit button
    Then I should be redirected to new page
  Scenario: Invalid login
    Given I open login page
    When I fill username with "invalid username"
    When I fill password with "invalid password"
     And I click the submit button
    Then I should see error message

  

  Scenario: Navigate to forgot password page
    Given I open login page
    When I click the forgot password link
    Then I should be redirected to the forgot password page
    And I should see the forgot password form

  

  Scenario: Navigate to create account page
    Given I open login page
    When I click the create account link
    Then I should be redirected to the registration page
    And I should see the registration form



    


