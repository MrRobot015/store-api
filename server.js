const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3008;

const httpServer = http.createServer(app);

httpServer.listen(port);
