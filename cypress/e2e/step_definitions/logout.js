import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { logoutPage } from "@pages/LogoutPage";

When('the user clicks on logout', ()=>{
    // cy.wait(3000)
    logoutPage.logoutBtn()
})

Then('the user should be successfully logged out And the user clicks on logout', ()=>{

    logoutPage.homePage()
})