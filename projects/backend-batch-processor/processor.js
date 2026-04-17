const fs = require('fs').promises;
const path = require('path');

async function loadData() {
  const file = path.join(__dirname, 'sample-data.json');
  const content = await fs.readFile(file, 'utf8');
  return JSON.parse(content);
}

function summarize(records) {
  const summary = {
    totalRecords: records.length,
    statusCount: {},
    averageDuration: 0,
  };

  const durationSum = records.reduce((sum, record) => {
    summary.statusCount[record.status] = (summary.statusCount[record.status] || 0) + 1;
    return sum + record.duration;
  }, 0);

  summary.averageDuration = records.length ? durationSum / records.length : 0;
  return summary;
}

async function saveReport(report) {
  const output = path.join(__dirname, 'output-report.json');
  await fs.writeFile(output, JSON.stringify(report, null, 2), 'utf8');
  console.log('Relatório criado em output-report.json');
}

async function run() {
  const records = await loadData();
  const report = summarize(records);
  await saveReport(report);
}

run().catch(error => {
  console.error('Erro ao gerar relatório:', error);
});
