const express = require('express');

const { Connection } = require('./config/db');
const { studentRoutes } = require('./routes/students.routes');
const { trainerRoutes } = require('./routes/trainer.routes');

const app = express();

app.get('/', (req, res) => {
  res.send('home');
});

//routes

app.use('/student', studentRoutes);
app.use('/trainer', trainerRoutes);

app.listen(process.env.Port, async () => {
  try {
    await Connection;
    console.log('DB is Connected successfully✅');
  } catch (error) {
    console.log(`🚀 ~ error:`, error);
    console.log('DB is not Connected🚫');
  } finally {
    console.log(`Port is running on ${process.env.Port}`);
  }
});
