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
    
    // it('should display oton.io title', () => {
    //     cy.title().should('include', 'otonio');
    // });
    
    // it('should display oton.io favicon', () => {
    //     cy.get('link[rel="icon"]').should('have.attr', 'href').and('include', 'assets/image/favicon.ico');
    // });

});