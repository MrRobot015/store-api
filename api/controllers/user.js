const { User } = require('../../models');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res, next) => {
  const { email, password } = req.body;

  const userCheck = await User.findOne({ where: { email: email } });

  if (userCheck) {
    return res.status(409).json({
      message: 'This email already exists',
    });
  }

  await bcrypt.hash(password, 10, async (err, hash) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      try {
        await User.create({
          email: email,
          password: hash,
        });
      } catch (err) {}
    }
  });
  res.status(200).json({ message: 'user created successfully' });
};

exports.deleteUser = async (req, res, next) => {
  const userId = req.params.id;
  const userCheck = await User.findOne({ where: { userId } });
  if (!userCheck) {
    return res.status(400).json({
      message: 'user does not exist',
    });
  }
  try {
    await User.destroy({ where: { userId } });
    res.status(200).json({ message: 'user deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
