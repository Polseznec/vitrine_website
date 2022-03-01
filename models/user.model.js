const mongoose = require('mongoose');
const {
    isEmail
} = require('validator')
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        validate: [isEmail],
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        minlength: 6,
    },

}, {
    timestamps: true,
})

//crypt password before post in db 
userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next()
})

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;