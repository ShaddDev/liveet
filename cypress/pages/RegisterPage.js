class RegisterPage {
    elements = {
        openApp: ()=> cy.visit("/"),
        Registr: ()=> cy.get('.ml-2'),
        flag: ()=> cy.get('.iti__arrow'),
        phnField: ()=> cy.get('.input-phone-login'),
        cont: ()=> cy.get('.button'),
        pass: ()=> cy.get('.input'),
        contd: ()=> cy.get('.button-theme-01'),
        assertion: ()=> cy.contains("Welcome Ayotunde Babatunde")
    };

    visitRahulApp(){
        this.elements.openApp();
    };

    register(){
    this.elements.Registr().click()
    }

    flagArrow(){
        this.elements.flag().click()
    }

    phoneField(){
        this.elements.phnField().type("07088088207")
    }

    contd(){
        this.elements.cont().click()

    }

    passWord(){
        this.elements.pass().type("Ayotunde12")
    }

    continue(){
        this.elements.contd().click()
    }

    assert(){
        this.elements.assertion().should("be.visible")
    }

    
};

export const registerPage = new RegisterPage();