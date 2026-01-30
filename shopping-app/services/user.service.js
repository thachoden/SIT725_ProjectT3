const User = require('../models/user.model');

async function findUserByEmail(email) {
  try {
    const user = await User.findOne({ email: email.toLowerCase() }).exec();
    return user; // returns null if not found
  } catch (err) {
    throw new Error('Database error: ' + err.message);
  }
}

async function findUserById(id) {
  try {
    const user = await User.findById(id).exec();
    return user; // returns null if not found
  } catch (err) {
    throw new Error('Database error: ' + err.message);
  }
}

module.exports = { findUserByEmail, findUserById };
