const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  console.log(token);
  try {
    const decoded = await jwt.verify(token, 'verySecretKey');
    req.userData = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      message: 'unauthenticated',
    });
  }
};
