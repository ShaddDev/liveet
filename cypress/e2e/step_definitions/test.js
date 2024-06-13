import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { testPage } from "@pages/TestPage";


When('the tester clicks on test and follows the prompt',()=>{
    testPage.testLiveet()
    testPage.firstName()
    testPage.lastName()
    testPage.Number()
    testPage.continue()
    cy.wait(3000)
    testPage.successful()
})