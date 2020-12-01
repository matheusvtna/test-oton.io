context('Register', () => {
    beforeEach(() => {
        cy.visit('https://otonio.herokuapp.com/');
        cy.get('.register-button.btn-primary').click();
        cy.wait(200);
    });

    it('create a teacher account', () => {
        cy.get(".form-control[type='email']").type("cypress" + Date.now() + "@cypress.com"); 
        cy.get(".form-control[placeholder='Nome']").type("Professor Cypress"); 
        cy.get('select').select("teacher");

        cy.get(".register-button.btn-primary").click();
        cy.wait(100);

        cy.get(".form-control[type='date']").type("1990-01-01"); 
        cy.get(".form-control[placeholder='Senha']").type("cypress"); 
        cy.get(".form-control[placeholder='Confirmar senha']").type("cypress"); 
    
        cy.get(".register-button.btn-primary").click();
        cy.wait(100);

        cy.wait(2000);
        cy.url().should('not.include', 'register');
    });

    it('create a student account', () => {
        cy.get(".form-control[type='email']").type("cypress" + Date.now() + "@cypress.com"); 
        cy.get(".form-control[placeholder='Nome']").type("Estudante Cypress"); 
        cy.get('select').select("student");

        cy.get(".register-button.btn-primary").click();
        cy.wait(100);

        cy.get(".form-control[type='date']").type("1990-01-01"); 
        cy.get(".form-control[placeholder='Senha']").type("cypress"); 
        cy.get(".form-control[placeholder='Confirmar senha']").type("cypress"); 
    
        cy.get(".register-button.btn-primary").click();
        cy.wait(100);

        cy.wait(2000);
        cy.url().should('not.include', 'register');
    });
});
