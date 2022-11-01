const jwt = require('jsonwebtoken');

const generateNewToken = (user) => {
  return new Promise((resolve, reject) => {
    const token = jwt.sign({ userId: user.userId, role: user.role, id: user.id }, 'verySecretKey', {
      expiresIn: '1d',
    });
    if (token) {
      // return
      resolve(token);
    } else {
      reject(new Error('error creating token'));
    }
  });
};

module.exports = generateNewToken;
