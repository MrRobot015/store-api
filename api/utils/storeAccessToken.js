const { AccessToken } = require('../../models');

module.exports = async (token, userId) => {
  const check = await AccessToken.findOne({ where: { userId } });
  try {
    if (check) {
      check.token = token;
      check.save();
    } else {
      await AccessToken.create({
        userId,
        token,
      });
    }
  } catch (err) {
    throw new Error('error store access token');
  }
};
