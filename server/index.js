const http = require('http');

// event emitters
// streams - USE STREAMS, if you dont use stream you are overloading memory for not good reason
//  readstream instead of readfile
// clusters - optimze node to work with full cpu power


const server = http.createServer();

server.on('request', (req, res) => {
  res.write('Hello Node\n');


  res.end();
});

server.listen(8080)