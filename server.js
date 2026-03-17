const http = require('http');
const Gun = require('gun');

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Credentials': 'true'
  };
  if (req.method === 'OPTIONS') {
    res.writeHead(204, headers);
    res.end();
    return;
  }
  res.writeHead(200, headers);
  res.end('StudyBeast relay is running');
});

const gun = Gun({ web: server, file: 'data' });

server.listen(port, () => {
  console.log('StudyBeast relay running on port ' + port);
});
