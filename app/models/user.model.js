const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userID: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);