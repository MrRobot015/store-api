const logger = require('console').log;
const http = require('http');
const app = require('./app');
const { sequelize } = require('../models');

const port = process.env.PORT || 3008;

const httpServer = http.createServer(app);

httpServer.listen(port, async () => {
  logger('listening on port ' + port);
  // await sequelize.sync({ force: true });
  await sequelize.authenticate();
  logger('DB connection established');
});
