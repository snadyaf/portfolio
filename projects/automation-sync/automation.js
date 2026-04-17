const puppeteer = require('puppeteer');
const axios = require('axios');

async function fetchData() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
  return response.data;
}

async function runAutomation(records) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://example.com');

  await page.screenshot({ path: 'automation-report.png' });
  await browser.close();

  return {
    synced: records.length,
    screenshot: 'automation-report.png',
  };
}

async function run() {
  const records = await fetchData();
  const result = await runAutomation(records);

  console.log('Sincronização concluída:', result);
}

run().catch(error => {
  console.error('Erro na automação:', error);
});
