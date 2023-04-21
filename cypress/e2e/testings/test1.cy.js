beforeEach('Visit localhost', () => {
    cy.visit('http://127.0.0.1:8888');
});

describe('first test', () => {
    it('visit localhost', () => {
        cy.focused().should('have.class', 'new-todo')
    });

    it('accesses input', () => {
        cy.get('.new-todo').type('cook').should('have.value', 'cook')
    });

    it('visits /completed page', () => {
        cy.visit('http://127.0.0.1:8888/#/completed')
        cy.url().should('include', '/completed')
    });

    it('link should match', () => {
        cy.url().should('equal', 'http://127.0.0.1:8888/#/')
    });

    it('clicks the All button after a task has been created', ()=> {
        cy.get('.new-todo').type('clean{enter}')
        cy.contains('All').click()
    });
});