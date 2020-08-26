/// <reference types="cypress" />

describe('Desafio_QA', () => {
    beforeEach(() => {
        // access the chanllenge URL
        cy.visit('https://codepen.io/choskim/pen/RLYebL')

        // it gets the iframe instance
        cy.getIframeBody().as('iframe')
    });

    it('should change the square size after long press', () => {
        // it gets the square element instance
        cy.get('@iframe')
            .find('.square')
            .first().as('square');

        // First press: it presses the square for 500 ms and then releases it
        cy.get('@square')
            .trigger("pointerdown", { button: 0 })
            .wait(500)
            .get('@square')
            .trigger('pointerleave', { button: 0 });

        // It validates the square size after clicked for the first time
        cy.get('@square')
            .should('have.css', 'height', '225px')
            .should('have.css', 'width', '225px');

        // Second press: it presses the square for 500 ms and then releases it
        cy.get('@square')
            .trigger("pointerdown", { button: 0 })
            .wait(500)
            .get('@square')
            .trigger('pointerleave', { button: 0 });

        // It validates the square size after clicked for the second time
        cy.get('@square').should('have.css', 'height', '90px')
            .get('@square').should('have.css', 'width', '90px');
    });
});