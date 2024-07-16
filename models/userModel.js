const mogoose = require('mongoose');
const userSchma = new mogoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: { type: String }
})

module.exports = mogoose.model('User',userSchma);
