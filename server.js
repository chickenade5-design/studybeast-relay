const http = require('http');
const Gun = require('gun');

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end('StudyBeast relay is running');
});

const gun = Gun({ web: server });

server.listen(port, () => {
  console.log('StudyBeast relay running on port ' + port);
});
