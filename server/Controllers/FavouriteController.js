const Favourites = require('../models/favouritesList');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportConfig = require('../passport');

// const post_favourites = (req, res) => {
//     console.log(req.body);
//     const favourite = new Favourite(req.body);
//     favourite.save(err => {
//         if (err)
//             res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
//         else {
//             req.user.favourites.push(favourite);
//             req.user.save(err => {
//                 if (err)
//                     res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
//                 else {
//                     res.status(200).json({ message: { msgBody: "Successfully created favourite", msgError: false } });
//                 }
//             })
//         }
//     })
// }

const post_favourites = (req, res) => {
    const { movieId, movieTitle, release_date, vote_average, poster_path } = req.body;
    console.log(req.body);
    const tryThis = {
        userId: req.user._id,
        movieId: movieId,
        movieTitle: movieTitle,
        release_date: release_date,
        vote_average: vote_average,
        poster_path, poster_path,
    }
    console.log(req.user._id);
    const obj = { ...req.user._id, ...req.body };
    console.log("try", tryThis);
    const favourite = new Favourites(tryThis);
    favourite.save(err => {
        if (err)
            res.status(500).json({ message: { msgBody: "Error has occured", msgError: true, obj } });
        else {
            res.status(200).json({ message: { msgBody: "Successfully created favourite", msgError: false } });
        }
    })
}

const post_checkFavourite = (req, res) => {
    const { movieId } = req.body;
    // User.findById({ _id: req.user._id })
    //     .populate({ path: 'favourites', match: { movieId: movieId } }).exec((err, document) => {
    //         if (err)
    //             res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
    //         else {
    //             res.status(200).json({ favourites: document.favourites.movieId, authenticated: true });
    //         }
    //     })
    console.log(movieId);
    console.log(req.user._id);
    Favourites.find({ "userId": req.user._id, "movieId": movieId })
        .exec((err, favourites) => {
            if (err)
                res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
            let result = false;
            if (favourites.length !== 0) {
                result = true;
            }
            res.status(200).json({ favourites: favourites.movieId, authenticated: result });
        })
}

const post_removeFavourite = async (req, res) => {
    console.log(req.body);
    const { movieId } = req.body;
    console.log("mo", movieId);
    Favourites.findOneAndDelete({ userId: req.user._id, movieId: movieId })
        .exec((err, doc) => {
            if (err) {
                res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
            }
            else {
                res.status(200).json({ doc, authenticated: true });
            }
        })
}

const post_getFavourite = async (req, res) => {
    console.log(req.user._id);
    Favourites.find({ userId: req.user._id })
        .exec((err, favourites) => {
            if (err) {
                res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
            }
            else {
                res.status(200).json({ favourites, authenticated: true });
            }
        })
}
module.exports = {
    post_favourites, post_checkFavourite, post_removeFavourite, post_getFavourite
}