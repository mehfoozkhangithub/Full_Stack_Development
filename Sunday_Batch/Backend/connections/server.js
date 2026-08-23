const express = require('express');
require('dotenv').config();

const dns = require('node:dns');

dns.setServers(['8.8.8.8']);

const { connection } = require('./config/db');

const { userRoutes } = require('./Routes/User.routes');

const server = express();

server.use(express.json(), express.text());

server.get('/', (req, res) => {
  res.send('home page');
});

server.use('/user', userRoutes);
server.use('/notes', noteRoutes);

server.listen(process.env.Port, async () => {
  try {
    await connection;
    console.log('MongoDB Connected');
  } catch (error) {
    console.log(`🚀 ~ error:`, error);
  } finally {
    console.log(`server is running on ${process.env.Port}`);
  }
});
