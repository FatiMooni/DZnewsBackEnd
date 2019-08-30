const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userID: Schema.Types.ObjectId,
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);