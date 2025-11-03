const express = require('express');
const port = 9800;

const app = express(); // invoked express

// example:1

// always use on top
// app.use((req, res, next) => {
//   console.log('hello i am  from middleware..');
//   next();
//   console.log('i am next to the middleware function');
// });

// example:2

app.use((req, res, next) => {
  if (3 + 3 == 5) {
    res.send('Bye');
  } else {
    next();
    console.log('else part next function invoked part:1');
  }

  // this the auth example
  let auth = true;
  if (!auth) {
    res.send('your are not authorized!!! please authenticate...');
  } else {
    next();
    console.log('else part next function invoked part:2');
  }
});

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
  res.send('blogs');
});

app.listen(port, () => {
  console.log(`port is active ${port}`);
});
