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
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        max: 124,
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

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({
        email
    })
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user
        }
        throw Error('incorect Password')
    }
    throw Error('incorect Email')
}


const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;