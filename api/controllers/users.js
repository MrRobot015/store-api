const { User, Profile } = require('../../models');
const bcrypt = require('bcrypt');
const generateNewToken = require('../utils/generateAccessToken');
const storeAccessToken = require('../utils/storeAccessToken');
const createProfile = require('../utils/createProfile');

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
        const user = await User.create({
          email: email,
          password: hash,
          role: 'customer',
        });
        await createProfile(user.id);
        res.status(200).json({ message: 'user created successfully' });
      } catch (err) {
        return res.status(500).json({ message: err.message });
      }
    }
  });
};

exports.signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      console.log('user not found');
      return res.status(401).json({
        message: 'auth error',
      });
    }
    bcrypt.compare(password, user.password, async (err, result) => {
      if (err) {
        console.log(err.message);
        return res.status(401).json({
          message: 'auth error',
        });
      }
      if (result) {
        const token = await generateNewToken(user);
        await storeAccessToken(token, user.id);
        return res.status(200).json({
          message: 'signin successfully',
          user,
          token,
        });
      } else {
        console.log('incorrcet password');
        return res.status(401).json({
          message: 'auth error',
        });
      }
    });
  } catch (err) {
    console.log(err.message);
    return res.status(401).json({
      message: 'auth error',
    });
  }
};

exports.updateProfile = async (req, res, next) => {
  const userId = req.userData.id;
  console.log(req.userData);
  const profile = await Profile.findOne({ where: { userId } });
  const { firstName, lastName, bio } = req.body;
  if (profile) {
    try {
      profile.firstName = firstName;
      profile.lastName = lastName;
      profile.bio = bio;
      profile.save();
      res.status(200).json(profile);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  } else {
    res.status(404).json({ message: 'profile not found' });
  }
};

exports.deleteUser = async (req, res, next) => {
  const userRole = req.userData.role;
  if (userRole === 'admin' || userRole === 'supervisor') {
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
  } else {
    res.status(401).json({ message: "you're  unauthorized to do this action" });
  }
};
