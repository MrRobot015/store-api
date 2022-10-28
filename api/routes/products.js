const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200);
  res.json({
    message: 'Products /success get request',
  });
});
router.post('/', (req, res, next) => {
  res.status(200);
  res.json({
    message: 'Products /success post request',
  });
});

router.get('/:id', (req, res, next) => {
  res.status(200);
  res.json({
    message: `Products /success get request ${req.params.id}`,
  });
});

router.patch('/:id', (req, res, next) => {
  res.status(200);
  res.json({
    message: `Products /success patch request ${req.params.id}`,
  });
});

router.delete('/:id', (req, res, next) => {
  res.status(200);
  res.json({
    message: `Products /success delete request ${req.params.id}`,
  });
});

module.exports = router;
