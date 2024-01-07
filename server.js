const http = require ('http');
const app = require ('./app');
const { Http2ServerRequest } = require('http2');
const port = 3001;

const server = http.createServer(app);
console.log(`server runing ${port}`)
 
server.listen(port);

