const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const { query } = url.parse(req.url, true); // Parse the query string
  const arg1 = query.arg1;


  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Received arguments from client: arg1=${arg1}`);
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Server listening on port 3000');
});