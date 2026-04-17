describe('Portfólio Snadyaf', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('carrega a página principal e mostra os três projetos', () => {
    cy.contains('Projetos JavaScript reais');
    cy.get('.project-card').should('have.length', 3);
    cy.contains('Helpdesk inteligente');
    cy.contains('Processador de dados');
    cy.contains('Sincronizador inteligente');
  });

  it('alternância de tema funciona e persiste', () => {
    cy.get('#toggleDark').click();
    cy.get('body').should('have.class', 'dark');
    cy.reload();
    cy.get('body').should('have.class', 'dark');
  });

  it('exibe links de documentação e currículo', () => {
    cy.contains('Download CV').should('have.attr', 'download');
    cy.contains('Relatório completo').should('have.attr', 'href', 'relatorio.md');
    cy.contains('Como rodar os testes').should('have.attr', 'href', 'README.md');
  });
});
