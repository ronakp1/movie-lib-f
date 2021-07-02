const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavouritesSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    movieId: {
        type: Number,
        required: true
    },
    movieTitle: {
        type: String,
        required: true
    },
    release_date: {
        type: Date,
        required: false
    },
    vote_average: {
        type: Number,
        required: false
    },
    poster_path: {
        type:String,
        required:false
    }
    
})

const Favourites = mongoose.model('Favourites', FavouritesSchema);

module.exports = Favourites;