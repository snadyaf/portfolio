# Relatório de projetos

Este relatório descreve três projetos em JavaScript criados para destacar competências em frontend, backend e automação.

## 1. Helpdesk inteligente (Fullstack)

### O que é?
Uma aplicação fullstack que permite criar, listar e atualizar tickets de atendimento. O frontend consome uma API Node.js/Express e salva dados em memória para demonstração.

### Tecnologias usadas
- JavaScript moderno (ES6+)
- Node.js
- Express
- HTML/CSS/JavaScript no frontend
- fetch API para comunicação cliente/servidor

### Por que destaca?
- Mostra entendimento de todo o fluxo: frontend interage com backend e atualiza a interface em tempo real.
- Demonstra uso de rotas REST, manipulação de dados e UX simples.

### Visão do código
- `server.js` define rotas `GET /tickets` e `POST /tickets`.
- `/public/app.js` usa `fetch` para enviar novos tickets e renderizar a lista.
- O projeto prova que você consegue construir aplicações com frontend e backend no mesmo repositório.

## 2. Processador de dados (Backend)

### O que é?
Uma ferramenta backend para analisar logs, extrair métricas e gerar relatórios JSON.

### Tecnologias usadas
- JavaScript no Node.js
- `fs/promises` para ler e escrever arquivos
- Funções puras para filtrar, agrupar e sumarizar dados

### Por que destaca?
- Mostra habilidade com pipelines de dados e arquitetura de backend.
- Útil para vagas que exigem automação, processamento de dados e criação de APIs internas.

### Visão do código
- `processor.js` carrega um arquivo de dados de exemplo (`sample-data.json`).
- Ele calcula totais, médias e identifica padrões de uso.
- O design é modular e fácil de expandir para novas métricas.

## 3. Sincronizador inteligente (Automação)

### O que é?
Uma ferramenta híbrida que automatiza processos, validando workflows e sincronizando dados entre fontes.

### Tecnologias usadas
- Node.js
- Puppeteer para automação de browser
- Axios para chamadas HTTP
- JavaScript assíncrono com `async/await`

### Por que destaca?
- Mostra experiência em automação real, não apenas interface visual.
- Apresenta habilidade para reduzir retrabalho manual e melhorar processos operacionais.

### Visão do código
- `automation.js` abre uma página, preenche um formulário ou extrai dados.
- Ele conecta tarefas de backend com etapas automáticas e gera um relatório de sucesso.
- Esse projeto demonstra versatilidade entre arquitetura de servidor e automação de tarefas.

## Documentação de testes

### Cypress
- O teste `cypress/e2e/portfolio.cy.js` valida a presença dos três cards de projeto.
- Verifica o funcionamento do botão de tema e a alternância entre Light/Dark.
- Garante que o link de download do currículo exista e que o bloco de documentação esteja visível.

### Como executar
1. Rode um servidor local em `http://localhost:8080`.
2. Execute `npm test` ou `npm run cypress:open`.

### O que os testes cobrem
- Carregamento da página principal
- Presença dos projetos fullstack, backend e automação
- Toggle de modo escuro
- Links para relatório e currículo

## Impacto
Estes projetos foram escolhidos para mostrar:
- capacidade técnica em JavaScript
- domínio de frontend e backend
- foco em automação e eficiência
- comunicação clara de projetos

Use este portfólio para conversar com recrutadores sobre como você constrói soluções completas e adaptáveis.
