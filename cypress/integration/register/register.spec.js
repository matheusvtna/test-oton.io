context('Register', () => {
    beforeEach(() => {
        cy.visit('https://otonio.herokuapp.com/');
        cy.wait(200);
    });

    it('create a teacher account', () => {
        cy.get(".form-control[type='email']").type("professor@teste.com"); 
        cy.get(".form-control[type='name']").type("Vinicius"); 

        cy.get("[type='name']").type("Vinicius");
        cy.get('select').select("student");

        cy.get(".register-button.btn-primary").click();
    
        cy.url().should('include', 'register');
    });
    
});