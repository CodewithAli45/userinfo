const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type : String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    phone: {type: String, unique: true}
});


const User = mongoose.model('users', userSchema);

module.exports = {
    User
}