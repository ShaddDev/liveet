class LogoutPage {
    elements = {
        logout: ()=> cy.get('[href="https://staging.liveet.co/logout"]'),
        home: ()=> cy.contains('Get Started'),
    };

    logoutBtn(){
        this.elements.logout().click()
    }

    homePage(){
        this.elements.home().should('be.visible')
    }
};

export const logoutPage = new LogoutPage();