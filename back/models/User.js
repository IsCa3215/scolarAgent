const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, default: 'default-avatar.png' },
  name: { type: String, default: 'Usuario' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);