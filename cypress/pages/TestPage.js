class TestPage {
    elements = {
       testliv: ()=> cy.get('.navbar-end > [href="#test-liveet"]'),
       first: ()=> cy.get(':nth-child(2) > .input'),
       last: ()=> cy.get(':nth-child(3) > .input'),
       no: ()=> cy.get('.input-phone-test-liveet'),
       cont: ()=> cy.contains('Continue'),
       success: ()=> cy.contains('Failed')
}

testLiveet(){
    this.elements.testliv().click()
}

firstName(){
    this.elements.first().type('Ayotunde')
}

lastName(){
    this.elements.last().type('Babatunde')
}

Number(){
    this.elements.no().type('08073926724')
}

continue(){
    this.elements.cont().click()
}

successful(){
    this.elements.success().should('be.visible')
}

};

export const testPage = new TestPage()