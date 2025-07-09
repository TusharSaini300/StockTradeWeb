const mongoose = require('mongoose');
const { UserSchema } = require('../schemas/UserSchema');

const UserModel = mongoose.model('User', UserSchema);

module.exports = { UserModel }; 