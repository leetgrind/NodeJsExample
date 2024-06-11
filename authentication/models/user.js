const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String
    },
    name: {
        type: String
    },
    password: {
        type: String
    }
}, {collection: 'users'});

module.exports = mongoose.model('users', userSchema);