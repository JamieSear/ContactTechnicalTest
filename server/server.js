const http = require('http');

const requestListener = (request, response) => {
    response.statusCode = 200;
    response.end('Hello, client!');
  };

const host = 'localhost'
const port = 8000 

const server = http.createServer(requestListener);
server.listen(port, host, () => console.log(`All cylinders now firing on http://${host}:${port}!`))