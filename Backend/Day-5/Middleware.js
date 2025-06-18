const express = require('express');
const fs = require('fs');
const cors = require('cors');
const port = 9800;

const { studentRouter } = require('./Routes/Student.Routes');
const { lectureRoute } = require('./Routes/Lecture.Routes');

const app = express();

app.use(express.json()); // this is inbuild middleware
app.use(express.text()); // this is inbuild middleware

app.use('/student', studentRouter); // this is custome middleware

// app.use(cors()) // this is stand for allow all origin access the value on in.

// cors -> Cross Origin Resources Sharing

app.use(
  cors({
    origin: 'example:website',
    // origin:["example:website","etc other website","another web site"]
    // origin:"*" // this is also stand's for allow the access for all website.
    methods: 'GET', // this is where we have to give access only on the method or not give the access for "post request or other."
  })
);

app.use('/lecture', lectureRoute);

app.get('/', (req, res) => {
  console.log('e');
  res.send('welcome');
});

app.post('/addStudents', (req, res) => {
  console.log(req.body);
  res.send('got the data...');
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
