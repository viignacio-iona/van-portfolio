describe('Contact Form', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('a[href="#contact"]').click();
  });

  it('should display the contact form', () => {
    cy.get('form').should('be.visible');
    cy.get('input[name="name"]').should('be.visible');
    cy.get('input[name="email"]').should('be.visible');
    cy.get('textarea[name="message"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('should validate required fields', () => {
    cy.get('button[type="submit"]').click();
    cy.get('input[name="name"]').should('have.attr', 'required');
    cy.get('input[name="email"]').should('have.attr', 'required');
    cy.get('textarea[name="message"]').should('have.attr', 'required');
  });

  it('should validate email format', () => {
    cy.get('input[name="email"]').type('invalid-email');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="email"]').should('have.attr', 'type', 'email');
  });

  it('should submit the form with valid data', () => {
    cy.get('input[name="name"]').type('John Doe');
    cy.get('input[name="email"]').type('john@example.com');
    cy.get('textarea[name="message"]').type('This is a test message');
    cy.get('button[type="submit"]').click();
    // Add assertions for successful submission
    // This will depend on how you handle form submission
  });
}); 