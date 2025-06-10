// Day-3

const http = require('http');

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.write('mehfoozkhan');
    response.write('\nlearning node/backend');
    response.end('\nhello');
  } else if (request.url === '/reports') {
    response.end('reports');
  }
});

server.listen(9000, () => {
  console.log('server is running on 9000...');
});
