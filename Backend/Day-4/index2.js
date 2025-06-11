const express = require('express');
const fs = require('fs');

const Port = 8000;

const app = express();

app.use(express.json()); // we have to use this middile-ware when we are dealing with json file or concept

// crud operation...

app.get('/', (req, res) => {
  res.send('add data...');
});

app.post('/students', (req, res) => {
  fs.writeFileSync('db.json', JSON.stringify(req.body), 'utf-8');
  res.send('accepted data...');
});

app.listen(Port, () => {
  console.log('Port was Listing: ', Port);
});
