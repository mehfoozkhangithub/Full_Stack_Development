const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static('public'));

wss.on('connection', function connection(ws) {
  console.log('A new client connected');
  ws.send('Welcome new client!');

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send(`You said: ${message}`);
  });
});

server.listen(3000, function() {
  console.log('Server is listening on http://localhost:3000');
});
