const express = require('express');
const fs = require('fs');
const port = 9800;

const app = express();

// example:1

app.use((req, res, next) => {
  const startTime = new Date().getTime();
  next();
  const endTime = new Date().getTime();
  console.log(endTime - startTime);
});

// example:2

const watchman = (req, res, next) => {
  if (req.url === '/about') {
    next();
  } else {
    res.send('please come late...');
  }
};

app.use(watchman);

app.get('/', (req, res) => {
  console.log('hello i am  from base route..');
  res.send('welcome');
});

app.get('/contact', (req, res) => {
  console.log('hello i am from contact..');
  res.send('contact');
});

app.get('/about', (req, res) => {
  console.log('hello i am  from about..');
  res.send('about');
});

app.get('/blogs', (req, res) => {
  console.log('hello i am  from blogs..');
  const data = fs.readFileSync('./SimpleMiddleware.js', 'utf-8');
  res.send(data);
});

app.listen(port, () => {
  console.log(`port is active ${port}`);
});
