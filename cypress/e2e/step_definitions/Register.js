import { Given,When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { registerPage } from "@pages/RegisterPage";

Given("the user is on the landing page", ()=>{
    registerPage.visitRahulApp()
    })

When("the user clicks on register, fills the registeration form and follows the prompt", ()=>{
    registerPage.register()
    registerPage.flagArrow()
    cy.wait(500)
    registerPage.phoneField()
    registerPage.contd()
    cy.wait(1500)
    registerPage.passWord()
    registerPage.continue()
})

Then("the user should be successfully signed in", ()=>{
    registerPage.assert()
})