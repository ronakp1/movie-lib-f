const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    commentor: {
        type:Schema.Types.ObjectId,
        ref: 'User'
    },
    movieId: {
        type: Number,
        ref:'Favourites'
    },
    respondingTo: {
        type:Schema.Types.ObjectId,
        ref: 'User'
    },
    message: {
        type:String
    }
    
})

const Comments = mongoose.model('Comments', CommentSchema);

module.exports = Comments;