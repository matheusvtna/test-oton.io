context('Login', () => {
    beforeEach(() => {
        cy.visit('https://otonio.herokuapp.com/');
        cy.get('.login-button').click();
        cy.wait(200);
    });

    it('cannot login an account', () => {
        cy.get(".form-control[type='email']").type("professor@teste.com"); 
        cy.get(".form-control[type='password']").type("senha errada"); 
    
        cy.get(".login-button[type='submit']").click();

        cy.wait(2000);
        cy.url().should('include', 'login');
    });

    it('login teacher account', () => {
        cy.get(".form-control[type='email']").type("danilo@prof.com"); 
        cy.get(".form-control[type='password']").type("123"); 
    
        cy.get(".login-button[type='submit']").click();

        cy.wait(2000);
        cy.url().should('not.include', 'login');
    });

    it('login student account', () => {
        cy.get(".form-control[type='email']").type("boi@javali.com"); 
        cy.get(".form-control[type='password']").type("boi"); 
    
        cy.get(".login-button[type='submit']").click();
        
        cy.wait(2000);
        cy.url().should('not.include', 'login');
    });
    
});