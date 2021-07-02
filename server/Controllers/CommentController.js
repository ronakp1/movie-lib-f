const Comment = require('../models/comments');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportConfig = require('../passport');

const post_comment = (req, res) => {
    const data = req.body;
    data.commentor = req.user._id;
    console.log(data);

    const comment = new Comment(data);
    comment.save((err, comment) => {
        if (err)
            res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
        Comment.find({ '_id': comment._id })
            .populate('commentor')
            .exec((err, result) => {
                if (err)
                    res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
                else {
                    res.status(200).json({ result, authenticated: true });
                }
            })

    })
}

const post_getComments = (req, res) => {
     console.log("req", req.body.movieId);
    //  console.log("req", req.body);
    Comment.find({ 'movieId': req.body.movieId })
        .populate('commentor')
        .exec((err, comments) => {
            if (err) res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
            else {
                res.status(200).json({ comments, authenticated: true });
            }
        })
}



module.exports = {
    post_comment, post_getComments
}