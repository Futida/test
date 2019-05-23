const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Items
const users = new Schema({
    name: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    date: {
        type: String,
        default: new Date()
    }
}, {
    collection: 'users'
});

module.exports = mongoose.model('users', users);