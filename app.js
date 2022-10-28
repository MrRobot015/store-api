const express = require('express');
const morgan = require('morgan');
// *** routes ***
const productRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');
const { application } = require('express');
//

const app = express();

//logger
app.use(morgan('dev'));
app.use('/products', productRoutes);
app.use('/orders', ordersRoutes);

// handle error
app.use((req, res, next) => {
  const err = new Error('Route not found');
  err.status(404);
  next(err);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    code: error.status || 500,
    message: error.message,
  });
});

module.exports = app;
