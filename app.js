const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// *** import routes here ***
const productRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');
const userRoutes = require('./api/routes/user');
const { application } = require('express');
//

const app = express();

//middleware
app.use(morgan('dev')); //log middleware
app.use('/uploads', express.static('uploads')); //expose image files middleware
app.use(bodyParser.urlencoded({ extended: false })); // url paramss parser middleware
app.use(bodyParser.json()); // josn parser middleware

//CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type,Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT');
    return res.status(200).json({});
  }
  next();
});

// Routes
app.use('/products', productRoutes);
app.use('/orders', ordersRoutes);
app.use('/auth', userRoutes);

// handle error
app.use((req, res, next) => {
  const err = new Error('Route not found');
  err.status = 404;
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
