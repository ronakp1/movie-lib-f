const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likesSchema = new Schema({
    likes: {
        type:Boolean,
        required:false
    },
})

const Likes = mongoose.model('Likes', likesSchema);

module.exports = Likes;