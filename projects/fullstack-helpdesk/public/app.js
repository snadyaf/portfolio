const ticketList = document.getElementById('tickets');
const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const createButton = document.getElementById('create');

async function loadTickets() {
  const response = await fetch('/tickets');
  const tickets = await response.json();

  ticketList.innerHTML = tickets
    .map(ticket => `
      <div class="ticket">
        <strong>#${ticket.id} ${ticket.title}</strong>
        <p>${ticket.description || 'Sem descrição'}</p>
        <small>Status: ${ticket.status}</small>
      </div>
    `)
    .join('');
}

createButton.addEventListener('click', async () => {
  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();
  if (!title) return;

  await fetch('/tickets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, description }),
  });

  titleInput.value = '';
  descriptionInput.value = '';
  loadTickets();
});

loadTickets();
