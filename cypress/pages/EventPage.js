class EventPage {
    elements = {
        crea: ()=> cy.get('.navbar-end > .hidden > .button'),
        count: ()=> cy.get('.iti__selected-flag'),
        nig: ()=> cy.get('div[title="Nigeria: +234"]'),
        num: ()=> cy.get('.input-phone-login'),
        ent: ()=> cy.get('.button.button-theme-01'),
        pass:()=> cy.get('.input.input-bordered'),
        enter:()=> cy.get('.button-theme-01')
        
    }

    create(){
        this.elements.crea().click()
    }

    country(){
        this.elements.count().click()
    }

    nigeria(){
        this.elements.nig().click()
    }

    number(){
        this.elements.num().type(Cypress.env('number'))
    }

    enter(){
        this.elements.ent().click()
    }

    password(){
        this.elements.pass().type(Cypress.env('pass'))
    }

    enterPass(){
        this.elements.enter().click()
    }

    form = {
        event: ()=> cy.get(':nth-child(1) > :nth-child(2) > .input'),
        field: ()=> cy.get('input[name="event_date"]'),
        month: ()=> cy.get('.monthselect').eq(0),
        assert: ()=> cy.get('.monthselect').eq(0),
        date: ()=> cy.get('td[data-title=r4c1]').eq(0),
        year: ()=>cy.get('.yearselect').eq(0),
        apply: ()=> cy.contains('Apply'),
        fieldd: ()=> cy.get('input[name=event_time]'),
        hour: ()=> cy.get('.hourselect').eq(0),
        minute: ()=> cy.get('.minuteselect').eq(0),
        ampm: ()=> cy.get('.ampmselect').eq(0),
        appply: ()=> cy.contains('Apply'),
        venue: ()=> cy.get('input[name=event_venue]'),
        descrip: ()=> cy.get('.textarea'),
        priv: ()=> cy.get('input[value="PRIVATE"]'),
        fre: ()=> cy.get('input[value="FREE"]'),
        nex: ()=> cy.contains('Next'),
        anodanex: ()=> cy.contains('Event Controls'),
        unrest: ()=> cy.get('input[value=CAN_INVITE_RESTRICTED]'),
        trans: ()=> cy.get('input[value=CAN_TRANSFER]'),
        face: ()=> cy.get('input[value=USE_FACE_ID]'),
        lasnex: ()=> cy.contains('Next')

        
    }

    eventName(){
        this.form.event().type('Birthday')
    } 

    eventField(){
        this.form.field().click()
    }

    monthField(){
        this.form.month().select('Apr')
    }

    assertMonth(){
        this.form.month().should('have.value', '3')
    }

    dateField(){
        this.form.date().click
    }
    
    yearField(){
        this.form.year().select('1998')
    }

    applyField(){
        this.form.apply().click()
    }

    timeField(){
        this.form.fieldd().click()
    }

    hourField(){
        this.form.hour().select('6')
    }

    minuteField(){
        this.form.minute().select('30')
    }

    ampmField(){
        this.form.ampm().select('PM')
    }
    
    applyTime(){
        this.form.appply().click({force:true})
    }

    venueName(){
        this.form.venue().type('Magodo')
    }

    description(){
        this.form.descrip().type('Wedding Party')
    }

    private(){
        this.form.priv().click()
    }

    free(){
        this.form.fre().click()
    }

    next(){
        this.form.nex().click()
    }

    anodanext(){
        this.form.nex().click()
    }

    unrestricted(){
        this.form.unrest().click()
    }

    transfer(){
        this.form.trans().click()
    }

    faceId(){
        this.form.face().click
    }

    lastnext(){
        this.form.lasnex().click()
    }

}

export const eventPage = new EventPage()