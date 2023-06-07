var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    dob: {
        type: String,
        require: true
    },
    place: {
        type: String,
        require: true
    },
    mobile: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('userdemo', userSchema)