context('Home Page', () => {
    beforeEach(() => {
        cy.visit('https://otonio.herokuapp.com/');
    });
    
    it('login screen should appears', () => {
        cy.get('.login-button').click();
        cy.wait(2000);
        cy.url().should('include', '/login');
    });

    it('register screen should appears', () => {
        cy.get('.register-button.btn-primary').click();
        cy.wait(2000);
        cy.url().should('include', '/register');
    });
    
    it('should display oton.io title', () => {
        cy.title().should('include', 'oton.io');
    });
    
    it('should display oton.io favicon', () => {
        cy.get('link[rel="icon"]').should('have.attr', 'href').and('include', '/favicon.ico');
    });

    it('should scroll when click on arrow down button', () => {
        cy.window().its('scrollY').should('eq', 0);
        cy.get('.more-button').click();
        cy.wait(200);
        cy.window().its('scrollY').should('be.gt', 0);
    });
});