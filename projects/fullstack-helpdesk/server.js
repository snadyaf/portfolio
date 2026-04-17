const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const tickets = [
  { id: 1, title: 'Falha no login', status: 'aberto' },
  { id: 2, title: 'Erro no relatório', status: 'em progresso' }
];

app.get('/tickets', (req, res) => {
  res.json(tickets);
});

app.post('/tickets', (req, res) => {
  const { title, description } = req.body;
  const nextId = tickets.length + 1;
  const ticket = {
    id: nextId,
    title: title || `Ticket ${nextId}`,
    description: description || '',
    status: 'aberto',
    createdAt: new Date().toISOString()
  };

  tickets.push(ticket);
  res.status(201).json(ticket);
});

app.listen(port, () => {
  console.log(`Helpdesk inteligente rodando em http://localhost:${port}`);
});
