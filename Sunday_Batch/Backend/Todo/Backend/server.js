const express = require('express');
require('dotenv').config({ path: '.env.production' });

const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

// local file import
const { connection } = require('./config/db');

const { TodoRoutes } = require('./routes/Todo.routes');

const server = express();

server.use(express.json(), express.text());

server.get('/', (req, res) => {
  console.log('data get');
  res.send('done');
});

server.use('/todo', TodoRoutes);

server.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log('DB connected successfully✅');
  } catch (err) {
    console.log('err', err);
  } finally {
    console.log(`port is running on the ${process.env.PORT}`);
  }
});
