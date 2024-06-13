import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { loginPage } from "@pages/LoginPage"


When("the user clicks on login and follows the prompt", ()=>{
    loginPage.login()
    loginPage.flagArrow()
    cy.wait(1000)
    loginPage.phoneField()
    loginPage.contd()
    cy.wait(3000)
    loginPage.passWord()
    loginPage.continue()
})

Then("the user should be successfully logged in", ()=>{
    loginPage.assert()
})