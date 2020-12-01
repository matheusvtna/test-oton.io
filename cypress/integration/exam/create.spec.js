context('Create Exam', () => {
  beforeEach(() => {
      cy.visit('https://otonio.herokuapp.com/');
      cy.get('.login-button').click();
      cy.wait(200);

      cy.get(".form-control[type='email']").type("danilo@prof.com"); 
      cy.get(".form-control[type='password']").type("123"); 
      cy.get(".login-button[type='submit']").click();
      cy.wait(2000);
  });

  it('create an exam', () => {
      cy.get(".header-teacher .btn-outline-stroke").click();
      cy.wait(2000);

      const name = "prova-" + Date.now();

      cy.dragAndDrop("div[data-rbd-draggable-id='text-question']", ".dropzone");
      
      cy.get(".dropzone .text-question").should("be.visible");

      cy.get(".dropzone .text-question .input-title").type("Título"); 
      cy.get(".dropzone .text-question .input-answer").type("Resposta"); 

      cy.get(".input-name").clear().type(name); 

      cy.get(".exam-properties-sidebar input[type='date']").eq(0).type("2020-12-01"); 
      cy.get(".exam-properties-sidebar input[type='date']").eq(1).type("2020-12-31"); 

      cy.get(".button-save").click();

      cy.wait(1000);

      cy.get(".navbar-brand > a").click();

      cy.wait(200);

      cy.get(".card-teacher .title").eq(0).invoke('text').should('contain', name);
  });

  it('delete an exam', () => {
    cy.get(".card-teacher .dropdown-toggle").eq(0).click();
    cy.get(".card-teacher .show.dropdown .dropdown-item").eq(1).click();
    cy.wait(2000);

    cy.get(".header-teacher button").eq(1).click();
    cy.wait(200);

    cy.get('.card-teacher').should('not.exist');
  });
});