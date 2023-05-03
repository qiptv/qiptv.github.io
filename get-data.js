const fetch = require('node-fetch');
const { Builder } = require('xml2js');
const fs = require('fs');

async function getData() {
  const response = await fetch(process.env.API_URL);
  const data = await response.json();

  // Преобразование JSON в XML
  const builder = new Builder();
  const xml = builder.buildObject(data);

  // Запись XML в файл
  fs.writeFileSync(process.env.OUTPUT_FILE, xml);

  console.log(`EPG data saved to ${process.env.OUTPUT_FILE}`);
}

getData();
