const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "Please enter a username"],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: [6, 'Minimum password length is 6 characters']
    },
    // favourites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'favourites' }]
})



UserSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

// UserSchema.statics.login = async function (username, password) {
//     const user = await this.findOne({ username });
//     if (user) {
//         const auth = await bcrypt.compare(password, user.password);
//         if (auth) {
//             return user;
//         }
//         throw Error('incorrect password');
//     }
//     throw Error('incorrect username');
// }


// UserSchema.statics.comparePasswords = function (password, cb) {
//     bcrypt.compare(password, this.password, (err, isMatch) => {
//         if (err)
//             return cb(err);
//         else {
//             if (!isMatch)
//                 return cb(null, isMatch);
//             return cb(null, this);
//         }
//     })
// }

UserSchema.methods.comparePasswords = function (password, cb) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err)
            return cb(err);
        else {
            if (!isMatch)
                return cb(null, isMatch);
            return cb(null, this);
        }
    });
}
const User = mongoose.model('User', UserSchema);
module.exports = User;