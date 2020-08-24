/// <reference types="cypress" />

describe('Desafio QA', () => {
    before(() => {
        cy.visit('https://codepen.io/choskim/pen/RLYebL');
        
    });

    it('Desafio', () => {
        cy.get('iframe[id=result]').then(iframe => {
            const body = iframe.contents().find("body");
            cy.wrap(body)
            .click();
        });
    });

    it.only('Desafio 2', () => {
        cy.getIframeBody()
        .wrap('.square') .click();

    });
});