const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200);
  res.json({
    message: `orders/ get`,
  });
});

router.post('/', (req, res, next) => {
  res.status(200);
  res.json({
    message: `orders/ post`,
  });
});

router.get('/:id', (req, res, next) => {
  res.status(200);
  res.json({
    message: `orders/ get ${req.params.id}`,
  });
});

router.delete('/:id', (req, res, next) => {
  res.status(200);
  res.json({
    message: `orders/ delete ${req.params.id}`,
  });
});

module.exports = router;
