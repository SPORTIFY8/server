var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/Sportify', { useNewUrlParser: true });

const Schema = mongoose.Schema;
const userSchema = new Schema({
    "email": String,
    "password": String,
    "oauth": Boolean,
    "salt": String
})

const User = mongoose.model('User', userSchema)

module.exports = User