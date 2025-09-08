// crud operation

const express = require('express');

const fs = require('fs');

const PORT = 8500;

const app = express();

app.use(express.text());

app.get('/showData', (req, res) => {
  const data = fs.readFileSync('./db.json', { encoding: 'utf-8' });
  res.send(data);
});

// # create file

app.post('/createData', (req, res) => {
  //   console.log(req.body);
  fs.writeFileSync('student.txt', req.body, 'utf-8');
  res.send('Gotchh your data.....');
});

app.listen(PORT, () => {
  console.log(`Port is listing on ${PORT}`);
});
