const { Profile } = require('../../models');

module.exports = async (userId) => {
  try {
    await Profile.create({
      userId: userId,
    });
  } catch (err) {
    throw err;
  }
};
